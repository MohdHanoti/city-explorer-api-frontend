import React from "react";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Header from "./component/Header";





class App extends React.Component{
    // constructor(props){
    //   super(props);
    // }

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