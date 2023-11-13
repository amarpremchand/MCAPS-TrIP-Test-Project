import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
