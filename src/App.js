import "./App.css";
import Auth from "./components/Auth";
import BubbleMaker from "./components/BubbleMaker";

function App() {
  return (
    <div className="app-wrapper">
      <BubbleMaker />
      <Auth />
    </div>
  );
}

export default App;
