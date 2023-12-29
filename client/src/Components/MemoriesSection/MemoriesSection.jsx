import Box from "@mui/material/Box";
import "../../styles/MemoriesSection.css";
import SideBar from "./SideBar.jsx";
import ViewSection from "./ViewSection.jsx";
import { useState } from "react";
import "../../styles/MemoriesSection.css";

function MemoriesSection(props) {
    const [currentView, setCurrentView] = useState(<></>);
    const handleClick = (view) => {
        setCurrentView(view);
    };
    return (
        <>
            <Box className="memo_section">
                <SideBar handleClick={handleClick} />
                <ViewSection currentView={currentView} />
            </Box>
        </>
    );
}

export default MemoriesSection;
