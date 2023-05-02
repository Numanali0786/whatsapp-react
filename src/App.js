import "./App.css";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Login from "./Login.js";
import { useSelector } from "react-redux";

function App() {
  // const [user, setUser] = useState(null);
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);
  return (
    <div className="app">
      {!user ? (
        // <Login />
        <h1>home</h1>
      ) : (
        // <div className="app__body">
        //   <BrowserRouter>
        //     <Sidebar />
        //     <Routes>
        //       <Route path="/rooms/:roomId" element={<Chat />}></Route>
        //     </Routes>
        //   </BrowserRouter>
        // </div>
        <h1>hii</h1>
      )}
    </div>
  );
}

export default App;
