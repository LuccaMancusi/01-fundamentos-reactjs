import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;
