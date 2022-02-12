import ListComponent from "./Components/ListComponent";
import { ListContextProvider } from "./Context/ListContext";
import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DialogComponent from "./Components/DialogComponent";
import { Typography } from "@mui/material";

function App() {
  return (
    <ListContextProvider>
      <Container maxWidth="xs">
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <Typography
            variant="h2"
            component="span"
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "left",
              marginBottom: "0.5em",
            }}
          >
            <b>Pokedex</b>
          </Typography>
          <DialogComponent />
          <ListComponent />
        </Box>
      </Container>
    </ListContextProvider>
  );
}

export default App;
