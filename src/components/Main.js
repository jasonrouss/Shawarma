import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import useStyles from "./Styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  const classes = useStyles();
  return (
    <>
      <Container className={classes.cards}>
        {/* First Card */}
        <Grid container>
          <Grid item md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://live.staticflickr.com/65535/51395578995_9178e6c932_m.jpg"
                />
                <CardContent align="left">
                  <Typography gutterBottom variant="h4">
                    Meat Shawarma
                  </Typography>
                  <Typography variant="body2" component="p">
                    Ingredients: Lamb meat,Pita bread,Tomato,Basil,Tarator,Fries
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardButton}>
                <Button
                  onClick={() => history.push("/Meat")}
                  size="large"
                  variant="contained"
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Second Card */}
          <Grid item md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://live.staticflickr.com/65535/51395579460_7481d86f01_m.jpg"
                />
                <CardContent align="left">
                  <Typography gutterBottom variant="h4">
                    Chicken Shawarma
                  </Typography>
                  <Typography variant="body2" component="p">
                    Ingredients: Chicken breast,Pita Bread ,Garlic,Lettuce,Fries
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardButton}>
                <Button
                  onClick={() => history.push("/Chicken")}
                  size="large"
                  variant="contained"
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
