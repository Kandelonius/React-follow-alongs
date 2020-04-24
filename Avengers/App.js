import React from "react";
import { Route } from "react-router-dom";
import AvengersList from "./Components/AvengersList";
import Home from "./Components/Home";
import "./avengers.css";

const App = () => {
    const [savedList, setSavedList] = useState([]);

    const addToSavedList = movie => {
        setSavedList([...savedList, movie]);
    };

    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/avengers" component={AvengerList} />
            </Switch>
        </div>
    );
};

export default App;