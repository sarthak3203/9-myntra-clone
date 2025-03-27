import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner"



function App() {


    const fetchStatus = useSelector(store => store.fetchStatus);


    return (
        <>
            <Header></Header>

            <FetchItems></FetchItems> {/*this doesnot show any UI but fetches the items from the server*/}
            {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
            {/* <Outlet/> it means we have used router and this component that is App is our shared component which will be there always and in place of outlet we will have our bag component or Home component depending on the path given*/}

            <Footer></Footer>
        </>
    );
}

export default App;
