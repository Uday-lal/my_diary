import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import explore from "../assets/explore.svg";
import LoginForm from "../Components/loginForm.jsx";
import RegisterForm from "../Components/registerForm.jsx";
import "../styles/Auth.css";

function AuthPage(props) {
    return (
        <>
            <Grid
                container
                style={{
                    height: "100vh",
                }}
            >
                <Grid
                    item
                    style={{
                        borderRight: "1px solid grey",
                        height: "100%",
                    }}
                    xs={8}
                >
                    <Box className="welcome_container">
                        <div className="welcome_content">
                            <img
                                src={explore}
                                style={{ width: "100%" }}
                                alt="explore"
                            />
                            <h1>Start your journey here</h1>
                        </div>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={4}
                    style={{
                        padding: "60px",
                    }}
                >
                    {props.isLogin ? <LoginForm /> : <RegisterForm />}
                </Grid>
            </Grid>
        </>
    );
}

export default AuthPage;
