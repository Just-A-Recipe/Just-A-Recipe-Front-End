import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';


export default class Chatbot extends Component {
  render() {
    return (
      <div>
        <div id="chatBotCommandDescription">
        </div>
        <input id="humanInput" type="text" />
        <div id="chatBot">
          <div id="chatBotThinkingIndicator"></div>
          <div id="chatBotHistory"></div>
        </div>
      </div>
    );
  }
  let config = {
    inputs: '#humanInput',
    inputCapabilityListing: true,
    engines: [ChatBot.Engines.spoonacular()],
    addChatEntryCallback: function(entryDiv, text, origin) {
      entryDiv.slideDown();
    }
  };
  ChatBot.init(config);
}
