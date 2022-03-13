import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";
import Preview from "../preview/preview";
import Editor from "../editor/editor";

const Maker = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Sftware Engineer",
      email: "ellie@gmail.com",
      message: "아무말",
      fileName: "ellie",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      title: "Sftware Engineer",
      email: "ellie@gmail.com",
      message: "아무말",
      fileName: "ellie",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Ellie",
      company: "Samsung",
      theme: "colorful",
      title: "Sftware Engineer",
      email: "ellie@gmail.com",
      message: "아무말",
      fileName: "ellie",
      fileURL: null,
    },
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/"); // 홈으로
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
