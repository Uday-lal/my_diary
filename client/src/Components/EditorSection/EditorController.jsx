import NothingToShowHere from "../EditorControllerLayouts/NothingToShowHere.jsx";
import FontLayout from "../EditorControllerLayouts/FontLayout.jsx";
import ImageLayout from "../EditorControllerLayouts/ImagesLayout.jsx";
import DrawLayout from "../EditorControllerLayouts/DrawLayout.jsx";
import "../../styles/EditorController.css";

function EditorController(props) {
    return (
        <>
            <div className="editor_controller">
                {!props.currentRenderedLayout && <NothingToShowHere />}
                {props.currentRenderedLayout === "font" && <FontLayout />}
                {props.currentRenderedLayout === "images" && <ImageLayout />}
                {props.currentRenderedLayout === "draw" && <DrawLayout />}
            </div>
        </>
    );
}

export default EditorController;
