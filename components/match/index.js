import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function Match({match}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Equipos
        </ListSubheader>
      }
    >
    </List>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader sx={{backgroundColor: 'blue', color: 'white'}} component="div" id="nested-list-subheader">
          Equipo Azul
        </ListSubheader>
      }
    >
      {match.teams.blue.filter(player => {
        if (player.posiciones.indexOf('POR') !== -1) {
          return player
        }
        
      }).map((player)=> <ListItem><ListItemText primary={player.apodo} /></ListItem>)}
      <Divider />
      {match.teams.blue.filter(player => {
        if (player.posiciones.indexOf('DEF') !== -1) {
          return player
        }
        
      }).map((player)=> <ListItem><ListItemText primary={player.apodo} /></ListItem>)}
      <Divider />
      {match.teams.blue.filter(player => {
        if (player.posiciones.indexOf('MID') !== -1) {
          return player
        }
        
      }).map((player)=> <ListItem><ListItemText primary={player.apodo} /></ListItem>)}
      <Divider />
      {match.teams.blue.filter(player => {
        if (player.posiciones.indexOf('DEL') !== -1) {
          return player
        }
        
      }).map((player)=> <ListItem><ListItemText primary={player.apodo} /></ListItem>)}
      </List>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader sx={{backgroundColor: 'red', color: 'white'}} component="div" id="nested-list-subheader">
          Equipo Rojo
        </ListSubheader>
      }
    >
      {match.teams.red.filter(player => {
        if (player.posiciones.indexOf('POR') !== -1) {
          return player
        }
        
      }).map((player)=> <ListItem><ListItemText primary={player.apodo} /></ListItem>)}
      <Divider />
      {match.teams.red.filter(player => {
        if (player.posiciones.indexOf('DEF') !== -1) {
          return player
        }
        
      }).map((player)=> <ListItem><ListItemText primary={player.apodo} /></ListItem>)}
      <Divider />
      {match.teams.red.filter(player => {
        if (player.posiciones.indexOf('MID') !== -1) {
          return player
        }
        
      }).map((player)=> <ListItem><ListItemText primary={player.apodo} /></ListItem>)}
      <Divider />
      {match.teams.red.filter(player => {
        if (player.posiciones.indexOf('DEL') !== -1) {
          return player
        }
        
      }).map((player)=> <ListItem><ListItemText primary={player.apodo} /></ListItem>)}
      </List>
    </React.Fragment>
  );
}