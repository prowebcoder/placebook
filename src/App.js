import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./common/Nav";
import Users from "./user/component/Users";
import Places from "./places/component/Places";
import PageNotFound from "./PageNotFound";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/places" element={<Places />} />
        <Route path="/:userID/places" element={<Places />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
