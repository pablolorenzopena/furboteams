import React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './header';

const Layout = ({ children, mode, setMode }) => { 
  return (
  <>
    <Head>
      <title>Next.js with Auth0</title>
    </Head>
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding:0, display: 'flex', flexFlow: 'column'}} maxWidth="sm">
        <Header  mode={mode} setMode={setMode} />
        {children}
      </Container>
    </React.Fragment>
  </>

)}

export default Layout;