import Box from '@mui/material/Box';
import './App.css';
import Content from "./Content";
import React from 'react';

const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

function App() {
  return (
    <React.Fragment>
    <Box sx={containerStyle} id="main-container">
      <Content />
      </Box>
      </React.Fragment>
  );
}

export default App;
