import { useState } from "react";
import AppNavBar from "../Components/AppNavBar.jsx";
import EditorSideBar from "../Components/EditorSection/EditorSideBar.jsx";
import EditorController from "../Components/EditorSection/EditorController.jsx";
import EditorWindow from "../Components/EditorSection/EditrorWindow.jsx";
import "../styles/EditorPage.css";

function EditorPage(props) {
    const [currentRenderedLayout, setCurrentRenderedLayout] = useState(null);

    const handleControllerLayoutChange = (currentLayout) => {
        setCurrentRenderedLayout(currentLayout);
    };

    return (
        <>
            <AppNavBar userName={props.user.name} />
            <div className="editor">
                <EditorSideBar
                    handleControllerLayoutChange={handleControllerLayoutChange}
                />
                <EditorController
                    currentRenderedLayout={currentRenderedLayout}
                />
                <EditorWindow />
            </div>
        </>
    );
}

export default EditorPage;
