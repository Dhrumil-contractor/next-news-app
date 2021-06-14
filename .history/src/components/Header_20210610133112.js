import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {useRouter} from 

const useStyles = makeStyles((theme) => ({
  header: {
    background: "rgb(255, 255, 255)",
    borderBottom: "1px solid rgba(4, 4, 5, 0.1)",
    boxShadow: "none",
    display: "flex",
    alignItems: "center",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  itemName: {
    marginLeft: "20px",
    cursor: "pointer",
    color: "rgba(4, 4, 5, 0.5)",
    fontWeight: "bold",
    "&:hover": {
      color: "black",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <p className={classes.itemName}>HOME</p>
          <p className={classes.itemName}>FEED</p>
          <p className={classes.itemName}>EOM</p>
          <p className={classes.itemName}>TWITTER</p>
        </Toolbar>
      </AppBar>
    </div>
  );
}
