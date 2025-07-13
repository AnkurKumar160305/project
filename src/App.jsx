import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Simple visible element */}
      <div style={{ border: '2px solid blue', padding: '20px', marginTop: '50px' }}>
        <h2>Test Content</h2>
      </div>
    </Router>
  );
}

export default App;
