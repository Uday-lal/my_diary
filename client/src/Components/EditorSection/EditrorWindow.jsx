import Page from "./Page.jsx";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import "../../styles/EditorWindow.css";

function EditorWindow(props) {
    return (
        <>
            <div className="editor_window">
                <div className="window_page_container">
                    <Page />
                    <button className="add_page_button">
                        <AddRoundedIcon style={{ marginRight: "5px" }} />
                        Add Button
                    </button>
                </div>
                <div className="window_bottom">
                    <div className="bottom_bar"></div>
                </div>
            </div>
        </>
    );
}

export default EditorWindow;
