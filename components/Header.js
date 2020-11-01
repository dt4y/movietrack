import Head from "next/head";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Link as MaterialLink } from "@material-ui/core";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Head>
        <meta name="description" content="Keep track of movies" />
        <meta name="og:title" content="MovieTrack" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.toolbarTitle}
              underline="none"
            >
              MovieTrack
            </Typography>
            <nav>
              <Link href="/" passHref>
                <MaterialLink
                  variant="button"
                  color="inherit"
                  className={classes.link}
                  underline="none"
                >
                  Home
                </MaterialLink>
              </Link>
              <Link href="/watchlist" passHref>
                <MaterialLink
                  variant="button"
                  color="inherit"
                  className={classes.link}
                  underline="none"
                >
                  Watchlist
                </MaterialLink>
              </Link>
              <Link href="/watched" passHref>
                <MaterialLink
                  variant="button"
                  color="inherit"
                  className={classes.link}
                  underline="none"
                >
                  Watched
                </MaterialLink>
              </Link>
            </nav>
            <Link href="/add" passHref>
              <Button
                href="#"
                color="inherit"
                variant="outlined"
                className={classes.link}
              >
                Add
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}
