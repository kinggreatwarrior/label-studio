import React from "react";
import styles from "./ModelSelector.module.scss";

const ModelSelector = ({ models, selectedModel, setSelectedModel }) => {
  return (
    <div className={styles.modelSelector}>
      <label>Select Model: </label>
      <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
        {models.map((model) => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>
  );
};

export default ModelSelector;