import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/Auth.css";

function LoginForm() {
    return (
        <>
            <Box className="form_container">
                <form>
                    <FormControl>
                        <TextField
                            type="email"
                            label="Email"
                            variant="filled"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            type="password"
                            label="Email"
                            variant="filled"
                        />
                    </FormControl>
                    <FormControl>
                        <Button variant="contained">Submit</Button>
                    </FormControl>
                </form>
            </Box>
        </>
    );
}

export default LoginForm;
