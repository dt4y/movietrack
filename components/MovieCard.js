import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import { GlobalContext } from "../src/context/GlobalState";

const useStyles = makeStyles({
  root: {
    width: "200",
    height: "320",
  },
});

export default function MovieCard({ movie, type }) {
  const classes = useStyles();

  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
      {type === "watchlist" && (
        <>
          {" "}
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => addMovieToWatched(movie)}
            >
              Add to Watched
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              Delete Movie
            </Button>
          </CardActions>{" "}
        </>
      )}

      {type === "watched" && (
        <>
          {" "}
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => moveToWatchlist(movie)}
            >
              Move To Watchlist
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => removeFromWatched(movie.id)}
            >
              Delete Movie
            </Button>
          </CardActions>{" "}
        </>
      )}
    </Card>
  );
}
