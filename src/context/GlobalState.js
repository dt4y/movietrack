import AppReducer from "./AppReducer";
import { createContext, useReducer, useEffect } from "react";

// initial state
let initialWatchlist = [];
let initialWatched = [];

if (process.browser) {
  if (localStorage.getItem("watchlist")) {
    initialWatchlist = JSON.parse(localStorage.getItem("watchlist"));
  }
  if (localStorage.getItem("watched")) {
    initialWatched = JSON.parse(localStorage.getItem("watched"));
  }
}

const initialState = {
  watchlist: initialWatchlist,
  watched: initialWatched,
  modalContent: {},
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  const toggleModal = (movie) => {
    dispatch({ type: "TOGGLE_MODAL", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
        toggleModal,
        modalContent: state.modalContent,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
