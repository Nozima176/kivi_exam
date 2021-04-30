import React, { Component } from "react";
import "./Chatbody.css";
import ChatList from '../Chatlist/Chatlist';
import ChatContent from '../ChatContent/ChatContent'
import UserProfile from '../UserProfile/UserProfile'
// import ChatContent from "../chatContent/ChatContent";
// import UserProfile from "../userProfile/UserProfile";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
         <ChatList />
        <ChatContent />
        <UserProfile /> 
      </div>
    );
  }
}
