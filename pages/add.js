import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Header from "../components/Header";
import ResultCard from "../components/ResultCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    flexGrow: 1,
  },
}));

export default function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const classes = useStyles();

  function onChange(e) {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }

  return (
    <div>
      <Header />
      <form noValidate autoComplete="off">
        <Grid container justify="center">
          <TextField
            id="outlined-basic"
            label="Search Movie"
            variant="outlined"
            value={query}
            onChange={onChange}
            margin="normal"
          />
        </Grid>
      </form>

      {results.length > 0 && (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {results.map((movie) => (
                <Grid key={movie.id} item zeroMinWidth>
                  <ResultCard movie={movie} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
