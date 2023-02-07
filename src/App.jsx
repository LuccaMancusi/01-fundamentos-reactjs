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
          <Post author="Lucca" content="Um post sobre qualquer coisa"></Post>
          <Post author="Olívia" content="Faço aniversário na quarta!"></Post>
        </main>
      </div>
    </>
  );
}

export default App;
