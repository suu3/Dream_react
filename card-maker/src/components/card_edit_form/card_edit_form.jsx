import React from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName } = card;
  const onSubmit = () => {
    deleteCard(card);
  };
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.defaultValue,
    });
  };
  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
    console.log(file.url);
  };
  return (
    <form className={styles.form}>
      <input
        onChange={onChange}
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
      />
      <select
        onChange={onChange}
        className={styles.select}
        name="theme"
        defaultValue={theme}
      >
        <option defaultValue="light">light</option>
        <option defaultValue="dark">dark</option>
        <option defaultValue="colorful">colorful</option>
      </select>
      <input
        onChange={onChange}
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
      />
      <input
        onChange={onChange}
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
      />
      <textarea
        onChange={onChange}
        className={styles.textarea}
        name="message"
        defaultValue={message}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
