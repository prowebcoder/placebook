import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./common/Nav";
import Users from "./user/component/Users";
import Place from "./places/component/Place";
import PageNotFound from "./PageNotFound";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/user" element={<Users />} />
        <Route path="/place" element={<Place />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
