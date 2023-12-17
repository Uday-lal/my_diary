import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className="page">
                            <h1>Home</h1>
                        </div>
                    </Route>
                    <Route path="/test">
                        <div className="page">
                            <h1>Test</h1>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
