import Head from 'next/head'
import styles from '../styles/Home.module.css';
import players from '../utils/datasets/players';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import RecipeReviewCard from '../components/custom-card';
import Match from '../components/match';
import { secureFetch } from '../utils/fetcher';
import Image from 'next/image'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import {Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider} from '@mui/material/styles'
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <Box sx={{ width: '100%', height: '200px', backgroundImage: 'url("header.png")', backgroundPosition: 'bottom', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Elije fecha"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField  sx={{color: 'white'}} {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





/* export async function getStaticProps() {
  return {
    props: {
      players,
    },
  };
} 
 */


export function PlayerListStack({ players }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={2}>
        {players.map(player => {
          return (<RecipeReviewCard player={player}>{player.apodo}</RecipeReviewCard>)
        })}
      </Stack>
    </Box>
  );
}

export function ResponsiveGrid({ players, setMatch }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {players.map((player, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <RecipeReviewCard player={player}>{player.apodo}</RecipeReviewCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


async function GenerateMatch() {
  const match = await fetch('/api/match')
  console.log(match);
  const matchJson = await match.json();
  console.log(matchJson);
  return matchJson;
}


/* 
export default function Home({ }) {
  const [players, setPlayers] = React.useState([]);
  const [match, setMatch] = React.useState(null);
  React.useEffect(() => {

    const fetchData = async () => {
      const response = await secureFetch(`/api`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      });
      const processedResponse = await response.json();
      setPlayers(processedResponse.players);
    }
    fetchData()
      .catch(console.error);
  }, []);

  const generateTeams = async () => {
    const { match } = await GenerateMatch();
    setMatch(match)
    console.log("---------------------------");
    console.log(match);
  }
  return (
    <React.Fragment>
      <Box sx={{ width: '100%', height: '100vh', pa: 0, display: 'flex' }}>
        <Container sx={{ display: 'flex', flexFlow: 'column', padding: 0 }}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Box sx={{ display: 'flex', flexFlow: 'column', width: '100%', flexShrink: 1, height: '200px', backgroundImage: 'url("header.png")', backgroundPosition: 'bottom'}}  >
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} > 
            <Box sx={{ display: 'flex', flexFlow: 'column' }} > 
              <BasicDatePicker></BasicDatePicker>
              <Typography variant="h5">Jugadores</Typography>
              <CheckboxListSecondary players={players}/>
              <Box>
                <Typography variant="h5">Invitados</Typography>
              </Box>
              <Button variant="contained" onClick={generateTeams}>Generar Equipos</Button>
            </Box>
          </Box>
          <Box>
            {match && <Match match={match} />}
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  )
}
 */
export  function AppContent({ }) {
  const [players, setPlayers] = React.useState([]);
  const [match, setMatch] = React.useState(null);
  React.useEffect(() => {

    const fetchData = async () => {
      const response = await secureFetch(`/api`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      });
      const processedResponse = await response.json();
      setPlayers(processedResponse.players);
    }
    fetchData()
      .catch(console.error);
  }, []);

  const generateTeams = async () => {
    const { match } = await GenerateMatch();
    setMatch(match)
    console.log("---------------------------");
    console.log(match);
  }

  const addPlayers = async () => {
    const selectedPlayers = players.filter(player => {
      if (player.isChecked) {
        return player;
      }
    })
    console.log(selectedPlayers);
  }

  return (
    <React.Fragment>
      <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
      <Container sx={{flex: '1 1 auto', overflowY: 'auto', minHeight: '100px', display: 'flex', p:0, flexGrow: 1}}>
        <Box sx={{ display: 'flex', flexFlow: 'column', padding: 0, flexGrow: 1 }}>
          <Box>
            <ThemeProvider theme={theme}>
              <BasicDatePicker></BasicDatePicker>
            </ThemeProvider>
          </Box>
          <Box sx={{ display: 'flex', flexShrink: 1, flexFlow: 'column' , flex: '1 1 auto', overflowY: 'auto', minHeight: '100px' }} > 
             
              <Typography variant="h5">Jugadores</Typography>
              <CheckboxListSecondary players={players}/>
              
              
              {/* <Button variant="contained" onClick={generateTeams}>Generar Equipos</Button> */}
              {/* <Box>
                <Typography variant="h5">Invitados</Typography>
              </Box> */}
          </Box>
          <Box sx={{display: 'flex'}}>
                <Button sx={{width:'100%'}} variant="contained" onClick={addPlayers}>Añadir Jugadores</Button>
            </Box>
          {/* <Box>
            {match && <Match match={match} />}
          </Box> */}
        </Box>
      </Container>
    </React.Fragment>
  )
}



import { useUser } from '@auth0/nextjs-auth0/client';

import Layout from '../components/layout';

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <Layout>
      {isLoading && <p>Loading login info...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <AppContent/>
        </>
      )}

      {!isLoading && !error && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in <i>Protected Page</i> and <i>Logout</i>
          </p>
        </>
      )}
    </Layout>
  );
}

function PlayerItem({player}) {
  const [checked, setChecked] = React.useState(player.isChecked? player.isChecked : false);
  const labelId = `checkbox-list-secondary-label-${player.id}`;
  const handleToggle = (value) => () => { 
    console.log(value);
    console.log(checked);
    player.isChecked = !checked;
    setChecked(!checked);
    console.log(player);
  };
  return (
    <ListItem
            key={player.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(player)}
                checked={checked}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`${player.apodo}`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={player.apodo} />
              <ToggleButtons player={player}/>
            </ListItemButton>
          </ListItem>
  )
}


export function CheckboxListSecondary({players}) {
 
  return (
    <List dense sx={{ width: '100%', maxWidth: 660, flexGrow: 1, overflow: 'auto', bgcolor: 'background.paper', color: 'black', flex: '1 1 auto', overflowY: 'auto', minHeight: '100px'}}>
      {players.map((value) => {
        
        return (
          <PlayerItem player={value}/>
        );
      })}
    </List>
  );
}




export function ToggleButtons({player}) {
  const [alignment, setAlignment] = React.useState(JSON.parse(player.posiciones)[0]);
  const posiciones = ['POR', 'DEF', 'MID', 'DEL', 'ARB'];
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
        {posiciones.map(posicion => {
          return (
            <ToggleButton sx={{padding: 0}} value={posicion}>
              {posicion}
            </ToggleButton>
          )
        })}
    </ToggleButtonGroup>
  );
}


