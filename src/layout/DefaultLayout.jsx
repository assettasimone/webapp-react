import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoaderContext from "../Contexts/LoaderContext";
import { useContext } from "react";
import Loader from "../components/Loader";


export default function DefaultLayout() {

    const { loading } = useContext(LoaderContext)

    return (
        <>

            <Header />
            {loading && <Loader />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )

}