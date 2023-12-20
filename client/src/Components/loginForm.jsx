import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import smile from "../assets/smile.png";
import Grid from "@mui/material/Grid";
import "../styles/Auth.css";

function LoginForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("/api/user/login", {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <>
            <Box className="form_container">
                <Box className="form_header">
                    <img src={smile} alt="smile" />
                    <h2>Welcome User</h2>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormControl style={{ width: "100%" }}>
                                <TextField
                                    type="email"
                                    label="Email"
                                    name="email"
                                    variant="filled"
                                    className="form-field"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl style={{ width: "100%" }}>
                                <TextField
                                    type="password"
                                    label="Password"
                                    name="password"
                                    variant="filled"
                                    className="form-field"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl style={{ width: "100%" }}>
                                <Button
                                    className="form-field"
                                    variant="contained"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
                <Box className="divider_container">
                    <span className="line"></span>
                    <span className="divider_text">or</span>
                    <span className="line"></span>
                </Box>
                <Box
                    style={{
                        width: "100%",
                    }}
                >
                    <Button
                        className="form-field"
                        variant="contained"
                        LinkComponent="a"
                        style={{
                            borderRadius: "100px",
                        }}
                        href="/register"
                        color="secondary"
                    >
                        Create Account
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default LoginForm;
