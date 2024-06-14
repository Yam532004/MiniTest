import Header from "./components/Header";
import { HTML_RESULTS } from "./data.js";
import { JAVA_RESULTS } from "./data.js";
import { PYTHON_RESULTS } from "./data.js";
import { ENGLISH_RESULTS } from "./data.js";
import Scores from "./components/Scores.jsx";
function App() {
  return (
    <>
      <header id="header">
        <Header />
      </header>
      <div className="scores-container">
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS}></Scores>
        <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores>
        <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS}></Scores>
        <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS}></Scores>
      </div>
    </>
  );
}

export default App;
