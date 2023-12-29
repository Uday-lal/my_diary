import Box from "@mui/material/Box";

function ViewSection(props) {
    return (
        <>
            <Box className="view_section">{props.currentView}</Box>
        </>
    );
}

export default ViewSection;
