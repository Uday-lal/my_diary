import Box from "@mui/material/Box";
import folder from "../../assets/folder-solid.svg";
import clock from "../../assets/clock-solid.svg";
import star from "../../assets/star-solid.svg";
import trash from "../../assets/trash-solid.svg";
import BestMemories from "../BestMemories.jsx";
import MyDiaries from "../MyDiaries.jsx";
import Recent from "../Recent.jsx";
import Trash from "../Trash.jsx";
import "../../styles/MemoriesSection.css";

function SideBar(props) {
    return (
        <>
            <Box className="side_bar">
                <Box
                    onClick={() => props.handleClick(<MyDiaries />)}
                    className="side_bar_link"
                >
                    <img src={folder} alt="folder" />
                    <span>My Diaries</span>
                </Box>
                <Box
                    onClick={() => props.handleClick(<Recent />)}
                    className="side_bar_link"
                >
                    <img src={clock} alt="clock" />
                    <span>Recent</span>
                </Box>
                <Box
                    onClick={() => props.handleClick(<BestMemories />)}
                    className="side_bar_link"
                >
                    <img src={star} alt="star" />
                    <span>Best Memories</span>
                </Box>
                <Box
                    onClick={() => props.handleClick(<Trash />)}
                    className="side_bar_link"
                >
                    <img src={trash} alt="trash" />
                    <span>Trash</span>
                </Box>
            </Box>
        </>
    );
}

export default SideBar;
