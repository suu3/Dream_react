import React, { useEffect, useState, useCallback } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";
import Preview from "../preview/preview";
import Editor from "../editor/editor";

const Maker = ({ cardRepository, authService, FileInput }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();
  const onLogout = useCallback(() => {
    authService.logout();
  });

  useEffect(() => {
    //사용자가 바뀌면
    if (!userId) {
      // 로그인 X
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      //함수를 인자로 전달
      setCards(cards);
    });
    return () => stopSync(); //불필요한 네트워크 사용 멈춤
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        //사용자가 없다면
        history.push("/"); // 홈으로
      }
    });
  }, [userId, history, authService]);

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
