import { useState } from "react";
import AppNavBar from "../Components/AppNavBar.jsx";
import EditorSideBar from "../Components/EditorSection/EditorSideBar.jsx";
import EditorController from "../Components/EditorSection/EditorController.jsx";
import EditorWindow from "../Components/EditorSection/EditrorWindow.jsx";
import "../styles/EditorPage.css";

function EditorPage(props) {
    return (
        <>
            <AppNavBar userName={props.user.name} />
            <div className="editor">
                <EditorSideBar />
                <EditorController />
                <EditorWindow />
            </div>
        </>
    );
}

export default EditorPage;
