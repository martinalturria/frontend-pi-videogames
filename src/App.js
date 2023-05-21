import { Route } from "react-router-dom";
import {
    LandingPage,
    HomePage,
    DetailPage,
    FormPage,
    ErrorPage,
} from "./views";
import NavBar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css"
import { setErrors } from "./redux/actions";

const  App = () => {
    const dispatch = useDispatch()
    const { pathname } = useLocation();
    const error = useSelector(state => state.errors)

    let backgroundRoute = ""

    if(pathname === "/") backgroundRoute = "landing"

    if (
        pathname !== "/home" &&
            pathname !== "/" &&
            pathname !== "/create" &&
        !pathname.includes("/detail/")
    ) {
        dispatch(setErrors("Page Not Found"))
        return <ErrorPage />
    }

    return (
        <div className={`App ${backgroundRoute}`}>
            {!error && (pathname === "/home" ||
                pathname === "/create" ||
                pathname.includes("/detail/")) && <NavBar />}
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" render={() => <HomePage />} />
            <Route path="/create" render={() => <FormPage />} />
            <Route path="/detail/:id" render={() => <DetailPage />} />
        </div>
    );
}

export default App;
