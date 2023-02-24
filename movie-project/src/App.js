
import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route exact path="/movies">
          <MovieList />
        </Route>
        {movies.map((movie) => (
          <Route key={movie.id} path={`/movies/${movie.id}`}>
            <MovieDetail movie={movie} />
          </Route>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

