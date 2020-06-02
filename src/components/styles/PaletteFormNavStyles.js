import { DRAWER_WIDTH } from "./constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    [sizes.down("xs")]: {
      marginLeft: 5,
      marginRight: 7,
    },
  },
  hide: {
    display: "none",
  },
  header: {
    [sizes.down("xs")]: { fontSize: "1rem" },
  },
  navBtn: {
    marginRight: "1rem",
    [sizes.down("xs")]: { marginRight: "0" },
  },
  button: {
    margin: "0 .5rem",
    textDecoration: "none",
    [sizes.down("xs")]: {
      margin: "0 .1rem",
      padding: ".2rem",
      fontSize: "12px",
    },
  },
  buttonSecondery: {
    margin: "0 .5rem",
    textDecoration: "none",
    "& button": {
      backgroundColor: "black",
      [sizes.down("xs")]: {
        margin: "0 .1rem",
        padding: ".2rem",
        fontSize: "12px",
      },
    },
  },
});

export default styles;
