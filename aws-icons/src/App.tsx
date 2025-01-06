import React from "react";
import * as Icons from "icons-aws";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="icon-grid">
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name} className="icon-item">
          <Icon width={48} height={48} />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
