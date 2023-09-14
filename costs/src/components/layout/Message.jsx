import { useState, useEffect } from "react";
import styles from "./Message.module.css";

function Message({ type, msg }) {
  const [viseble, setViseble] = useState(false);

  useEffect(() => {
    if (!msg) {
      setViseble(false);
      return;
    }

    setViseble(true);

    const timer = setTimeout(() => {
      setViseble(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {viseble && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}

export default Message;
