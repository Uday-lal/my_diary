import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import EditorPage from "./pages/EditiorPage.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";

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
    const currentUri = window.location.pathname;
    const [user, setUser] = useState({});
    useEffect(() => {
        if (currentUri !== "/login" && currentUri !== "/register") {
            fetch("/api/user", {
                method: "GET",
            })
                .then((responce) => {
                    if (responce.status === 401) {
                        window.location.replace("/login");
                    } else if (responce.ok) {
                        return responce.json();
                    }
                })
                .then((data) => {
                    setUser(data);
                });
        }
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <div className="page">
                                <HomePage user={user} />
                            </div>
                        </Route>
                        <Route exact path="/editor">
                            <div className="page">
                                <EditorPage user={user} />
                            </div>
                        </Route>
                        <Route exact path="/login">
                            <div className="page">
                                <AuthPage isLogin={true} />
                            </div>
                        </Route>
                        <Route exact path="/register">
                            <div className="page">
                                <AuthPage isLogin={false} />
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
