import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import explore from "../assets/explore.svg";
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
                            <img src={explore} alt="explore" />
                            <h1>Start your journey here</h1>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </>
    );
}

export default AuthPage;
