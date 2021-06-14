import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useRouter } from "next/router";

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
  activeItem: {
    marginLeft: "20px",
    cursor: "pointer",
    color: "black",
    fontWeight: "bold",
  },
}));

export default function Header() {
  const router = useRouter();
  const classes = useStyles();

  console.log("router====", router);
  const currentTab = (classes, path) => {
    console.log("path====", path);
    if (router.pathname.includes(path)) {
      return classes.activeItem;
    } else {
      return classes.itemName;
    }
  };

  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <p
            className={currentTab(classes, "/")}
            onClick={() => router.push("/")}
          >
            HOME
          </p>
          <p className={classes.itemName}>FEED</p>
          <p
            className={currentTab(classes, "/eom")}
            onClick={() => router.push("/eom")}
          >
            EOM
          </p>
          <p className={classes.itemName}>TWITTER</p>
        </Toolbar>
      </AppBar>
    </div>
  );
}
