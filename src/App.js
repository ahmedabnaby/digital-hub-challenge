import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import {Create} from "./components/Create";
import {Edit} from "./components/Edit";
import {Home} from "./components/Home";
import {Login} from "./components/Login";

const App = () => {
  return (
    <div>
      <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>
            </Router>
    </div>

  );
}

export default App;
