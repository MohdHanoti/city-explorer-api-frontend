import React from "react";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./App.css";





class App extends React.Component{
    
render(){
    return(
        <div>
            <Header/>
              <Main/> 
            <Footer/> 
        </div>
    )
}
}
export default App;