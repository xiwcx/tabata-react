import "./App.css";
import { FormSettings } from "./components/FormSettings";

function App() {
  return (
    <>
      <header>
        <h1>Tabata</h1>
      </header>

      <aside>
        <h2>Settings</h2>

        <FormSettings />
      </aside>
    </>
  );
}

export default App;
