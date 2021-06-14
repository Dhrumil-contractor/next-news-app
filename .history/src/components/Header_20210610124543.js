import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AnnouncementIcon from "@material-ui/icons/Announcement";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "rgb(255, 255, 255)",
    borderBottom: "1px solid rgba(4, 4, 5, 0.1)",
    boxShadow: "none",
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
    // marginLeft: "20px",
    cursor: "pointer",
    color: "black",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <AnnouncementIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <p className={classes.itemName} color="inherit">
            Home
          </p>
          <p className={classes.itemName} color="inherit">
            Feed
          </p>
          <p className={classes.itemName} color="inherit">
            EOM
          </p>
        </Toolbar>
      </AppBar>
    </div>
  );
}
