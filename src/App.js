// import React , {useState} from "react";
import React from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";
// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import ControlPanel from "./ControlPanel/ControlPanel";
// import SideBar from "./Sidebar/Sidebar";
// import SearchPhone from "./SearchPhone/SearchPhone";
// import AccordianSkills from "./SkillsAccordian/AccordianSkills";
import Footer from "./Footer/Footer";
import "./App.css";
// import FileUpload from "./File";


function App() {

  // const [right , setRight ] = useState(-100);
  // const [SearchPhones , setSearchPhones ] = useState("none");

  // function openSearchPhone () {
  //   setSearchPhones("flex");
  //   console.log("Hello")
  //   console.log(SearchPhones)
  // }
  // function CloseSearchPhone () {
  //   setSearchPhones("none");

  // }
  // function openSidebar () {
  //     setRight(0)

  // }
  // function closeSidebar () {
  //     setRight(-100)
  // }

  return (
    <div className="App">
      <Header 
      // openSide ={openSidebar}
      />
      {/* <SideBar 
      closeSidebar ={closeSidebar}
      rightValue = {right}
      /> */}

      <Home />
      {/* <About />
      <AccordianSkills />
      <Contact /> */}
      <Footer />
      {/* <FileUpload /> */}
    </div>
  );
}

export default App;
