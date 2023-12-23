import AppNavBar from "../Components/AppNavBar.jsx";

function HomePage(props) {
    return (
        <>
            <AppNavBar userName={props.user.name} />
            <h1>Home Pages</h1>
        </>
    );
}

export default HomePage;
