import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Nav from "./common/Nav";
import Users from "./user/component/Users";
import Places from "./places/component/Places";
import PageNotFound from "./PageNotFound";
const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/places" element={<Places />} />
          <Route path="/:userID/places" element={<Places />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
