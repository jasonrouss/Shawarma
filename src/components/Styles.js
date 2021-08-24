import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  //Heading Appbar
  app: {
    background: "#de5246",
    height: 120,
  },
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#de5246",
  },
  title: {
    color: " #F9D56E",
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  welcome: {
    color: "#1aa260",
    marginTop: theme.spacing(4),
  },
  //Main media

  card: {
    maxWidth: 425,

    margin: theme.spacing(6),
    marginLeft: theme.spacing(8),
    color: "#ffff",
    background: "#272C34",
  },

  cards: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(10),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  cardButton: {
    justifyContent: "center",
  },
  media: {
    height: 240,
  },
  //Footer
  socialLinks: {
    justifyContent: "center",
    marginBottom: 48,
  },
  matIcons: {
    color: " #F9D56E",
    fontSize: 37,
    cursor: "pointer",
  },
  //Second Main
  contSec: {
    padding: theme.spacing(6),
    background: "#272C34",
    color: "white",
    textAlign: "left",
  },
  img: {
    display: "block",
    marginTop: "35px",
    marginBottom: "35px",
  },

  emoji: {
    fontSize: "28px",
    display: "block",
    marginTop: "30px",
    marginBottom: "10px",
    marginLeft: "auto",
    marginLight: "auto",
    width: "59%",
  },
  //Retun btn
  returnBtn: {
    marginTop: "20px",
    color: "white",
    fontSize: "17px",
  },
}));

export default useStyles;
