import Box from '@mui/material/Box';
import './App.css';
import Content from "./Content";

const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

function App() {
  return (
    <Box sx={containerStyle} id="main-container">
      <Content />
    </Box>
  );
}

export default App;
