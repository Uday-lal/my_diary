import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles/App.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#6C63FF",
        },
        secondary: {
            main: "#2F2E41",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <div className="page">
                                <AuthPage isLogin={true} />
                            </div>
                        </Route>
                        <Route exact path="/register">
                            <div className="page">
                                <AuthPage isLogin={false} />
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
        </ThemeProvider>
    );
}

export default App;
