import React from 'react'
import { List, ListSubheader, ListItem, ListItemText, ListItemButton, ListItemAvatar, Avatar, IconButton, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import player2 from '../../public/player2.png';
function PlayerItemAdmin({player, removeItemAction}) {
  const handleRemoveItem = () => {
    removeItemAction(player);
  }
  return (
    <ListItem
    secondaryAction={
      <Box sx={{display: 'flex'}}>
      {/* <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton> */}
      <IconButton onClick={handleRemoveItem} edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
      </Box>
    }
    
    divider={true}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            sx={{ backgroundColor: '#e0e0e0' }}
            src={player2.src}
            alt={`${player.apodo}`}
          />
        </ListItemAvatar>
        <ListItemText primary={player.apodo} secondary={player.nombre} />
      </ListItemButton>
    </ListItem>
  )
}
export default function playerListAdmin({players, removeItemAction}) {
  return (
    <List
      sx={{ width: '100%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader   sx={{ width: '100%', backgroundColor: 'blue', color: 'white' }} component="div" id="nested-list-subheader">
          Miembros
        </ListSubheader>
      }
    >
      {players.map(player => (<PlayerItemAdmin player={player} removeItemAction={removeItemAction} />))}
    </List>
  )
}
