import React from "react";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Nav from "./Component/Main/Nav/Nav";
import Dialogs from "./Component/Main/Dialogs/Dialogs";
import Section from "./Component/Main/Section/Section";
import Footer from "./Component/Footer/Footer";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Feed from "./Component/Main/Feed/Feed";
import Friends from "./Component/Main/Friends/Friends";

function App(props) {
  return (
      // <BrowserRouter>
              <div className="wrapper">
                  <Header/>
                  <Main>
                      <Nav/>
                      <Routes>
                          <Route path='/' element={<Section profilePage={props.state.profilePage} store={props.store} dispatch={props.dispatch} />}/>
                          <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                          <Route path='/feed' element={<Feed/>}/>
                          <Route path='/friends' element={<Friends/>}/>
                      </Routes>
                  </Main>
                  <Footer/>
              </div>
      // </BrowserRouter>
  );
}

export default App;
