import Container from "@material-ui/core/Container";
import useStyles from "./Styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

const MainSecond = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Container className={classes.contSec}>
        {/* Description */}
        <Grid className={classes.desc}>
          <Grid item>
            <Typography gutterBottom variant="h4">
              Description
            </Typography>
            <Typography gutterBottom>{props.desc}</Typography>
          </Grid>
          <Grid item className={classes.img}>
            <img src={props.imgURL} alt="BigCo Inc. logo" />
          </Grid>
        </Grid>
        <hr
          style={{
            fill: "white",
            width: "70%",
            marginBottom: "55px",
            marginTop: "55px",
          }}
        />
        {/* Review */}
        <Grid className={classes.review}>
          <Typography gutterBottom variant="h3">
            Review
          </Typography>
          <Grid>
            <Typography gutterBottom>{props.review}</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.emoji}>{props.emoji}</Typography>
          </Grid>
        </Grid>

        {/* Return btn */}
        <Button
          onClick={() => history.push("/")}
          className={classes.returnBtn}
          variant="outlined"
        >
          <KeyboardBackspaceIcon style={{ fill: "white" }} /> Return
        </Button>
      </Container>
    </div>
  );
};

export default MainSecond;
