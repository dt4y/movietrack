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

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  const classes = useStyles();

  return (
    <div>
      <Header />
      {watchlist.length > 0 ? (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {watchlist.map((movie) => (
                <Grid key={movie.id} item zeroMinWidth>
                  <MovieCard movie={movie} type="watchlist" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container justify="center">
          <h2>There are no movies in this list. Click Add to add some.</h2>
        </Grid>
      )}
    </div>
  );
}
