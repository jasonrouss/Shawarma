import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.app} position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            Shawarma Showcase
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
