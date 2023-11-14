import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
