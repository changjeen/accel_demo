
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CategoryTab from "../components/CategoryTab";



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CategoryTab/>
        </div>
    );
}