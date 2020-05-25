import React from "react";
import Sudoku from "./Sudoku/Sudoku";
import Container from "@material-ui/core/Container";

import "./App.css";

const App: React.FC = () => {
    return (
        <Container maxWidth='xl' className='App'>
            <h1>Sudoku</h1>
            <Sudoku />
        </Container>
    );
};

export default App;
