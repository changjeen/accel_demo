import {makeStyles} from "@material-ui/core";
import item1 from "../image/item1.jpg";
import item2 from "../image/item2.jpg";
import item3 from "../image/item3.jpg";
import item4 from "../image/item4.jpg";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import React from "react";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));

const imageTileData = [
    {
        img: item1,
        title : 'item1',
    },
    {
        img: item2,
        title : 'item2',
    },
    {
        img: item3,
        title : 'item3',
    },
    {
        img: item4,
        title : 'item4',
    }
];


export default function SingleLineGridList() {
    const classes = useStyles();

    return (
        <GridList className={classes.gridList} cols={2.5}>
            {imageTileData.map(tile => (
                <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title}/>
                </GridListTile>
            ))}
        </GridList>
    )
}