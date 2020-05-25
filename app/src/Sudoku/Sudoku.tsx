import React from "react";
import Grid from "@material-ui/core/Grid";

const Sudoku: React.FC = () => {
    return (
        <Grid container>
            <Grid item sm={12} md={6}>
                Grid Goes Here
            </Grid>
            <Grid item sm={12} md={6}>
                Input Goes here
            </Grid>
        </Grid>
    );
};

export default Sudoku;
