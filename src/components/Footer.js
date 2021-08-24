import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import useStyles from "./Styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
const Footer = () => {
  const classes = useStyles();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <AppBar className={classes.appBar} position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Grid container justifyContent="center">
              <Grid item xs={3}>
                <LinkedInIcon
                  className={classes.matIcons}
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/in/jason-rouss-7a8129190/"
                    )
                  }
                ></LinkedInIcon>
              </Grid>
              <Grid item xs={3}>
                <GitHubIcon
                  className={classes.matIcons}
                  onClick={() => openInNewTab("https://github.com/jasonrouss")}
                ></GitHubIcon>
              </Grid>
              <Grid item xs={3}>
                <EmailIcon
                  className={classes.matIcons}
                  onClick={() => openInNewTab("mailto:jasonrouss@gmail.com")}
                ></EmailIcon>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
