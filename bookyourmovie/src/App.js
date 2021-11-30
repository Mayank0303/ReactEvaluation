import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Newshow } from "./components/Newshow";
import { BookEvent } from "./components/BookEvent";
import { Error } from "./components/Error";
import { MovieList } from "./components/MovieList";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login"; 
import { MovieDetail } from './components/MovieDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/newshow">
          <Newshow />
        </Route>
        <Route path="/bookevent">
          <BookEvent />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
