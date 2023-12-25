import AppNavBar from "../Components/AppNavBar.jsx";
import MemoriesSection from "../Components/MemoriesSection/MemoriesSection.jsx";

function HomePage(props) {
    return (
        <>
            <AppNavBar userName={props.user.name} />
            <MemoriesSection />
        </>
    );
}

export default HomePage;
