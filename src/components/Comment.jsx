import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/LuccaMancusi.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucca Mancusi</strong>
              <time
                title="07 de fevereiro às 12:44 "
                dateTime="2023-02-07 12:43"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}></Trash>
            </button>
          </header>
          <p>Muito bom Lucca, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp></ThumbsUp>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
