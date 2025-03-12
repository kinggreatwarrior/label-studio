import React from "react";
import styles from "./HistoryPanel.module.scss";

const HistoryPanel = ({ history }) => {
  return (
    <div className={styles.historyPanel}>
      <h2>Chat History</h2>
      {history.map((entry, idx) => (
        <div key={idx} className={styles.historyEntry}>
          <p><strong>Model:</strong> {entry.model}</p>
          <p><strong>User:</strong> {entry.message}</p>
          <p><strong>Bot:</strong> {entry.response}</p>
          <small>{entry.timestamp}</small>
        </div>
      ))}
    </div>
  );
};

export default HistoryPanel;