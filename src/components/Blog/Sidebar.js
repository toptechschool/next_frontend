import React from "react";
import Title from "./Title";
import * as styles from "./Sidebar.module.css";
import Image from "next/image";

export default function Sidebar({ author }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <Title title="Author" />
        <Image
          src={author.avatar}
          layout="fixed"
          width={100}
          height={100}
          alt={author.name}
          className={styles.img}
        />
        <span />
        <a href={`https://github.com/${author.github}`} target="_blank">
          <p>{author.name}</p>
        </a>
      </div>
    </div>
  );
}
