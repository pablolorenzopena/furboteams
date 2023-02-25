import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';


export default function ButtonAppBar() {
  const { user } = useUser();
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Peña los 23
          </Typography>
          {user ? (
                  <a href="/api/auth/logout" data-testid="logout">
                  Logout
                </a>
                ) : (
                  <a href="/api/auth/login" data-testid="login">
                  Login
                </a>
                )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}




/* 
import React from 'react';

const Header = () => {
  

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/protected-page" legacyBehavior>
              <a>Protected Page</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                
              </li>
            </>
          ) : (
            <>
              <li>
                
              </li>
            </>
          )}
        </ul>
      </nav>

      <style jsx>{`
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        nav {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:nth-child(2) {
          margin-right: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        button {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: none;
          background: none;
        }
      `}</style>
    </header>
  );
};

export default Header; */