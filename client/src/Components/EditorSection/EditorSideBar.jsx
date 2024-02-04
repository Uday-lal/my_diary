import fontIcon from "../../assets/font-solid.svg";
import imageIcon from "../../assets/image-solid.svg";
import paletteIcon from "../../assets/palette-solid.svg";
import "../../styles/EditorSideBar.css";

function EditorSideBar(props) {
    return (
        <>
            <div className="editor_sidebar">
                <button
                    onClick={() => props.handleControllerLayoutChange("font")}
                >
                    <img src={fontIcon} alt="font-icon" />
                </button>
                <button
                    onClick={() => props.handleControllerLayoutChange("images")}
                >
                    <img src={imageIcon} alt="img-icon" />
                </button>
                <button
                    onClick={() => props.handleControllerLayoutChange("draw")}
                >
                    <img src={paletteIcon} alt="palette-icon" />
                </button>
            </div>
        </>
    );
}

export default EditorSideBar;
