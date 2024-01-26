import fontIcon from "../../assets/font-solid.svg";
import imageIcon from "../../assets/image-solid.svg";
import paletteIcon from "../../assets/palette-solid.svg";
import "../../styles/EditorSideBar.css";

function EditorSideBar(props) {
    return (
        <>
            <div className="editor_sidebar">
                <button>
                    <img src={fontIcon} alt="font-icon" />
                </button>
                <button>
                    <img src={imageIcon} alt="img-icon" />
                </button>
                <button>
                    <img src={paletteIcon} alt="palette-icon" />
                </button>
            </div>
        </>
    );
}

export default EditorSideBar;
