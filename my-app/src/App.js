import css from "./App.module.css";
import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import Content from "./components/Content";
import ContentHook from "./components/ContentHook";
import ContentAPI from "./components/ContentAPI";
import ContentAPIHooks from "./components/ContentAPIHooks";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}

      {/* <NavBarSimple />
      <Sidebar /> */}
      {/* <ContentHook /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />

    </div>
  );
}

export default App;