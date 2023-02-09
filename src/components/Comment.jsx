import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Comment({ content, date }) {
  const dateFormated = format(date, "dd 'de' MMMM 'às' HH:mm'h' ", {
    locale: ptBR,
  });

  const dateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/LuccaMancusi.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucca Mancusi</strong>
              <time title={dateFormated} dateTime={date}>
                {dateRelativeToNow}
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}></Trash>
            </button>
          </header>
          <p>{content}</p>
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
