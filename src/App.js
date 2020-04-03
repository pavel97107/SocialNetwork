import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {

  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs state={props.state.messagesPage}
                                                        changeValue={props.changeValue}
                                                        addMessage={props.addMessage}/> }/>
          <Route path="/profile" render={() => <Profile changeNewPostText={props.changeNewPostText}
                                                        addPost={props.addPost}
                                                        profilePage={props.state.profilePage}/> }/>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
  );
};

export default App;
