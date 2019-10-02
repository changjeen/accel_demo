
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {createMuiTheme} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: 'white',
            },
        },
    },
});

export default function MainAppBar() {

    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Designer's Market
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}