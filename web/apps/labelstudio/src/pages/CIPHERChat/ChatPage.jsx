import React, { useState, useEffect } from "react";
import ChatWindow from "../../components/CIPH3RChat/ChatWindow";
import ModelSelector from "../../components/CIPH3RChat/ModelSelector";
import HistoryPanel from "../../components/CIPH3RChat/HistoryPanel";
import styles from "./ChatPage.module.scss";
import { Block, Elem } from "../../utils/bem";

export const ChatPage = () => {
  const [selectedModel, setSelectedModel] = useState("grok-xai");
  const [messages, setMessages] = useState([]);
  const [userId] = useState("user123"); // Hardcoded for simplicity
  const [history, setHistory] = useState([]);

  const models = ["grok-xai", "llama-3.1"]; // From cheahjs/free-llm-api-resources

  const sendMessage = async (message) => {
    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: selectedModel, message, user_id: userId }),
    });
    const data = await res.json();
    setMessages([...messages, { user: message, bot: data.response, timestamp: data.timestamp }]);
  };

  const fetchHistory = async () => {
    const res = await fetch(`http://localhost:8000/history/${userId}`);
    const data = await res.json();
    setHistory(data);
  };

  useEffect(() => {
    fetchHistory();
  }, [messages]);

  return (
    <Block name="chat">
      <Elem className={styles.chatPage}>
        <h1 className={styles.title}>AI Chatbot</h1>
        <ModelSelector models={models} selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
        <Elem >
          <ChatWindow messages={messages} sendMessage={sendMessage} />
          <HistoryPanel history={history} />
        </Elem>
      </Elem>
    </Block>
  );
};

ChatPage.title = "CIPH3R Chat";
ChatPage.path = "/chat"
