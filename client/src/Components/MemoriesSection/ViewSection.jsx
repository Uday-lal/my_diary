import Box from "@mui/material/Box";

function ViewSection(props) {
    return (
        <>
            <Box>{props.currentView}</Box>
        </>
    );
}

export default ViewSection;
