import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { GlobalContext } from "../src/context/GlobalState";
import { useContext } from "react";
import Modal from "../components/Modal";

const useStyles = makeStyles({
  root: {
    width: "200",
    height: "320",
  },
});

export default function ResultCard({ movie }) {
  const classes = useStyles();

  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
    toggleModal,
    modalContent,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={() => toggleModal(movie)}>
          <CardMedia
            component="img"
            height="400"
            width="200"
            alt={`${movie.title} Poster`}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            title={`${movie.title}`}
          />
          <CardContent>
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "11rem",
              }}
            >
              <Typography noWrap gutterBottom variant="h5" component="h2">
                {movie.title}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </Button>
          <Button
            size="small"
            color="primary"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </Button>
        </CardActions>
      </Card>
      {modalContent.hasOwnProperty("id") ? <Modal /> : false}
    </>
  );
}
