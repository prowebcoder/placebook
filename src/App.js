import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import Nav from "./common/Nav";
import Users from "./user/component/Users";
import Places from "./places/component/Places";
import PageNotFound from "./PageNotFound";
import UserPlaces from "./places/component/UserPlaces";
const App = () => {
  return (
    <Fragment>
      <Nav />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/places" element={<Places />} />
          <Route path="/:userID/:name/places" exact element={<UserPlaces />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default App;
