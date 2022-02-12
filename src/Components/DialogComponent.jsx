import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ListContext } from "../Context/ListContext";
import { useContext } from "react";
import { CircularProgress, Stack } from "@mui/material";

export default function AlertDialogSlide() {
  const { listitempokemon } = useContext(ListContext);
  const { handlerDialog } = useContext(ListContext);
  const { dialog } = useContext(ListContext);

  return (
    <div>
      <Dialog
        open={dialog}
        onClose={handlerDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
          <h2>{listitempokemon.name}</h2>
        </DialogTitle>
        <DialogContent style={{ display: "flex", justifyContent: "center" }}>
          {listitempokemon.name !== undefined ? (
            <img
              src={listitempokemon.sprites.other.home.front_default}
              alt={listitempokemon.name}
              loading="lazy"
              style={{
                width: 400,
                height: 400,
              }}
            />
          ) : (
            <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
              <CircularProgress color="inherit" />
            </Stack>
          )}
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
