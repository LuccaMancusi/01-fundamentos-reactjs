import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";

function App() {
  return (
    <>
      <Header></Header>
      <Post author="Lucca" content="Um post sobre qualquer coisa"></Post>
    </>
  );
}

export default App;
