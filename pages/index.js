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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export async function getStaticProps() {
  return {
    props: {
      players,
    },
  };
}

export  function PlayerListStack({players}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={2}>
        {players.map(player=>{
          return (<RecipeReviewCard player={player}>{player.apodo}</RecipeReviewCard>)
        })}
      </Stack>
    </Box>
  );
}

export function ResponsiveGrid({players, setMatch}) {
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


async function GenerateMatch(){
  const match = await fetch('/api/match')
  console.log(match);
  const matchJson = await match.json();
  console.log(matchJson);
  return matchJson;
}



export default function Home({players}) {
  console.log(players);
  const  [match, setMatch] = React.useState(null);
  const generateTeams = async () => {
    const {match} = await GenerateMatch();
    setMatch(match)
    console.log("---------------------------");
    console.log(match);
  }
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <ResponsiveGrid players={players} setMatch={setMatch}/>
        <Button variant="contained" onClick={generateTeams}>Generar Equipos</Button>
      </Box>
      <Box>
        {match && <Match match={match}/>}
      </Box>
    </Container>
  )
}