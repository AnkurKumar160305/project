import React, { useState } from "react";
import NameEntryPage from "./components/NameEntryPage";
import Quiz from "./components/Quiz";  
import PrivacyPolicy from "./components/PrivacyPolicy"; 

function App() {
  const [username, setUsername] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = (name) => {
    setUsername(name);
    setShowQuiz(true);
  };

  return (
  <>
    {showQuiz ? (
      <Quiz username={username} />
    ) : (
      <NameEntryPage onStart={startQuiz} />
    )}
  </>
);

}

export default App;
