import React from "react";
import Topbar from "./comps/Topbar";
import Sidebar from "./comps/Sidebar";
import NoticeBoard from "./comps/NoticeBoard";
import Notice from "./comps/Notice";
import Landing from "./comps/Landing";
import Faq from "./comps/Faq";
import Details from "./comps/Details";
import Home from "./pages/Home";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./comps/firebaseConfig";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  const [name, setName] = useState(null);
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState(null);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setName(result.user.displayName);
      setProfile(result.user.photoURL);
      setEmail(result.user.email);
     
    });
  };
  return (
    <>
   
       {name ? (
          <div >
          <Topbar name={name} profile={profile}/>
          <div className="containers">
           
            <Sidebar id="sidebar" />
<Routes>
        <Route
            path="/"
            exact element={<Home  />}
          />
       
          <Route
            path="/details"
            exact element={<Details email={email}  profile={profile} />}
          />
          <Route
            path="/board"
            exact element={<NoticeBoard />}
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
            path="/query"
            exact element={<Notice name={name} profile={profile} />}
          />
         
          
</Routes>
          </div>
           
          </div>
        ) : (
         <div style={{margin:"50vh auto",width:"200px"}}>
            <button
            onClick={signInWithGoogle}
            className="btn btn-outline-primary"
          >
            Sign In With Google
          </button>
         </div>
        )}

    
    </>
  );
}
