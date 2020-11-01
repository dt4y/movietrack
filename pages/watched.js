import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Grid from "@material-ui/core/Grid";
import { GlobalContext } from "../src/context/GlobalState";
import MovieCard from "../components/MovieCard";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    flexGrow: 1,
  },
}));

export default function Watched() {
  const { watched } = useContext(GlobalContext);
  const classes = useStyles();

  return (
    <div>
      <Header />
      {watched.length > 0 ? (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {watched.map((movie) => (
                <Grid key={movie.id} item zeroMinWidth>
                  <MovieCard movie={movie} type="watched" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container justify="center">
          <h2>There are no movies in this list</h2>
        </Grid>
      )}
    </div>
  );
}
