import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { ListContext } from "../Context/ListContext";
import { useContext } from "react";

export default function ListComponent() {
  const { listpokemon } = useContext(ListContext);
  const { handlerPokemon } = useContext(ListContext);

  return (
      
    <>
      {listpokemon.map((pokemon, index) => (
        <ListItem key={index} component="div" disablePadding>
          <ListItemButton onClick={handlerPokemon}>
            <ListItemText primary={pokemon.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}
