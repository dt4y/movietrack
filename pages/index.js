import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import ResultCard from "../components/ResultCard";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    flexGrow: 1,
  },
}));

export default function Home() {
  const [results, setResults] = useState([]);

  // some random movie query for the homepage
  const query = "potter";

  const classes = useStyles();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
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
    </div>
  );
}
