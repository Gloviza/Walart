import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import WalartPediatric from "./Components/WalartPediatric/WalartPediatric";
import WalartGYN from "./Components/WalartGYN/WalrtGYN";
import WalartPHY from "./Components/WalartPHY/WalartPHY";
import WalartSUR from "./Components/WalartSUR/WalartSUR";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <>
    <div className="background">
      <Navbar/> 
      <Switch>
        {/* <Route exact path="/" component={WalartPediatric} /> */}
        <Route exact path="/Pediatric" component={WalartPediatric} />
        <Route exact path="/GYN" component={WalartGYN} />
        <Route exact path="/PHY" component={WalartPHY} />
        <Route exact path="/SUR" component={WalartSUR} />
        <Redirect to="/Pediatric" />
      </Switch>
      </div>
    </>
  );
}

export default App;
