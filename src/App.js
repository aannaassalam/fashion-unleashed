import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Homepage from "./layout/pages/homepage/homepage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
