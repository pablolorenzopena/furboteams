import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function RemovePlayerDialog({open, setOpen, player, refresh, setRefresh}) {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log(player);
  const handleClose = () => {
    setOpen(false);
  };
  const handleRemovePlayer = async () => {
    const remove = await fetch(`/api/${player.id}`, { method: 'DELETE' });
    const response = await remove.json();
    console.log(response);
    setRefresh(!refresh);
    setOpen(false);
  };
  if (!player) {
    return null;
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Eliminar Jugador
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Quieres eliminar al Jugador {player.nombre}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleRemovePlayer} autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}