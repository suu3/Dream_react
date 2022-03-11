import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";
import Preview from "../preview/preview";
import Editor from "../editor/editor";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      title: "Sftware Engineer",
      email: "ellie@gmail.com",
      message: "아무말",
      fileName: "ellie",
      fileURL: "",
    },
    {
      id: "2",
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      title: "Sftware Engineer",
      email: "ellie@gmail.com",
      message: "아무말",
      fileName: "ellie",
      fileURL: "",
    },
    {
      id: "3",
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      title: "Sftware Engineer",
      email: "ellie@gmail.com",
      message: "아무말",
      fileName: "ellie",
      fileURL: "",
    },
  ]);
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
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
