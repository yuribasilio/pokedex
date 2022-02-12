import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [listpokemon, setListpokemon] = useState([]);
  const [itempokemon, setItempokemon] = useState([]);
  const [listitempokemon, setListitempokemon] = useState([]);

  const handlerPokemon = (e) => {
    setItempokemon(e.target.outerText);
    handlerDialog();
  };

  const baseUrl = "https://pokeapi.co/api/v2/";
  const lRequest = "pokemon?limit=20&offset=0";
  const iRequest = "pokemon/";
  const lUrl = baseUrl + lRequest;
  const iUrl = baseUrl + iRequest + itempokemon;

  useEffect(() => {
    axios.get(lUrl).then((response) => {
      const sorted = response.data.results.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setListpokemon(sorted);
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios.get(iUrl).then((response) => {
        setListitempokemon(response.data);
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itempokemon,iUrl]);

  const [dialog, setDialog] = useState(false)

  const handlerDialog = () => {
    setListitempokemon([])
    setDialog(!dialog);

  };

  return (
    <ListContext.Provider
      value={{ listpokemon, listitempokemon, handlerPokemon, dialog, handlerDialog }}
    >
      {children}
    </ListContext.Provider>
  );
};
