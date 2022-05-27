import React,{useState} from "react";
import Sidebar from "./comps/Sidebar";
import Topbar from "./comps/Topbar";
import Home from "./pages/Home";
import AddEmp from './comps/AddEmp'
import Query from './comps/Query'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ShowAllEmp from "./comps/ShowAllEmp";
import UpdateEmp from "./comps/UpdateEmp";
import Notice from "./comps/Notice";
import Faq from "./comps/Faq";
import Login from "./Login";
import Landing from "./comps/Landing";
import NoticeBoard from "./comps/NoticeBoard";
import Search from "./comps/Search";
export default function App() {
  const [Show, setShow] = useState(false)
   
  
  return (
    <>
   <Login Show={Show} setShow={setShow} />
    {Show && <div>
      <Topbar />
      <div className="containers">
      <Sidebar id="sidebar" />
<Routes>
        <Route
            path="/"
            exact element={<Home  />}
          />
          <Route
            path="/add"
            exact element={<AddEmp />}
          />
          <Route
            path="/update"
            exact element={<UpdateEmp  />}
          />
          <Route
            path="/show"
            exact element={<ShowAllEmp  />}
          />
          <Route
            path="/notice"
            exact element={<Notice />}
          />
          <Route
            path="/faq"
            exact element={<Faq />}
          />
          <Route
            path="/info"
            exact element={<Landing />}
          />
          <Route
            path="/board"
            exact element={<NoticeBoard />}
          />
          <Route
            path="/search"
            exact element={<Search />}
          />
          <Route
            path="/query"
            exact element={<Query />}
          />
          
</Routes>
        
      </div></div>} 
    </>
  );
}
