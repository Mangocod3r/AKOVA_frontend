import './home.css';
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Stuviewmore} from "./pages/Stuviewmore";
import {Stumain} from "./pages/Stumain";
import {Stuknowmore} from "./pages/Stuknowmore";
import {Stuideas} from "./pages/Stuideas";
import {Stuviewidea} from "./pages/Stuviewidea";
import {Entmain} from "./pages/Entmain";
import {Entupload} from "./pages/Entupload";
import {Entresp} from "./pages/Entresp";
//import {Fetch} from "./pages/Fetch";
import {DynamicData} from "../src/pages/Dynamicdata";
// import {AboutUs} from "./pages/AboutUs";


function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/fetch" element={<Fetch />} /> */}
        <Route path="/data" element={<DynamicData />} />
        <Route path="/stu_main" element={<Stumain />} /> 
        <Route path="/stu_viewmore" element={<Stuviewmore />} />
        <Route path="/stu_sub_idea" element={<Stuknowmore />} />
        <Route path="/stu_ideas" element={<Stuideas />} />
        <Route path="/stu_view_idea" element={<Stuviewidea />} />
        <Route path="/entmain" element={<Entmain />} />
        <Route path="/entupload" element={<Entupload />} />
        <Route path="/entresp" element={<Entresp />} />
      </Routes>
  );
}

export default App

// import React from "react";
 
// // We use Route in order to define the different routes of our application
// import { Route, Routes } from "react-router-dom";
 
// // We import all the components we need in our app
// //import Navbar from "./components/navbar";
// import {RecordList} from "./components/recordList";
// import {Edit} from "./components/edit";
// import {Create} from "../src/components/create";
 
// const App = () => {
//  return (
//    <div>
//     <p>hello</p>
//      {/* <Navbar /> */}
//      <Routes>
//        <Route exact path="/" element={<RecordList />} />
//        <Route path="/edit/:id" element={<Edit />} />
//        <Route path="/create" element={<Create />} />
//      </Routes>
//    </div>
//  );
// };
 
// export default App;
