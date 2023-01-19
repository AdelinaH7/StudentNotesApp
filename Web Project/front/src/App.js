import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Main from "./Main";
import Note from "./Note";
import Manager from "./Manager";
import StudyFiles from "./StudyFiles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/main" exact component={Main} />
          <Route path="/note" exact component={Note} />
          <Route path="/manage" exact component={Manager} />
          <Route path="/group" exact component={StudyFiles} />
          <Route
            path="/"
            render={() => <div>Error 404: this page does not exist</div>}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
