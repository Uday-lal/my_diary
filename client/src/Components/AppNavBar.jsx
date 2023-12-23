import "../styles/NavBar.css";

function AppNavBar(props) {
    return (
        <>
            <header>
                <div className="nav_left">
                    <a href="/" id="app_title">
                        My Diary
                    </a>
                </div>
                <div className="nav_right">
                    {props.userName && (
                        <span id="user_profile">{props.userName[0]}</span>
                    )}
                </div>
            </header>
        </>
    );
}

export default AppNavBar;
