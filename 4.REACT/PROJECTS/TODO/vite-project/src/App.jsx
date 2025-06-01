import AppName from "./components/appName";
import AddItems from "./components/AddItems";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import "./App.css";
function App() {
  return (
    <center class="TODO">
      <AppName/>
      <AddItems/>
      <Item1/>
      <Item2/>
    </center>
  );
}

export default App;
