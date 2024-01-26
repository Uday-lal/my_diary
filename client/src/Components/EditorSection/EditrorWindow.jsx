import Page from "./Page.jsx";
import "../../styles/EditorWindow.css";

function EditorWindow(props) {
    return (
        <>
            <div className="editor_window">
                <div className="window_page_container">
                    <Page />
                </div>
            </div>
        </>
    );
}

export default EditorWindow;
