import React from "react";
import Title from "./Title";
import * as styles from "./Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import Badge from "../Common/Others/Badge";

export default function Sidebar({ author, categories }) {
  return (
    <div className={styles.wrapper}>
      {author.avatar && author.name ? (
        <div className="text-center">
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
      ) : null}
      <div>
        <Title title="categories" />
        {categories.map((category, idx) => (
          <Link href={`/blog/category/${category}`}>
            <Badge name={category} />
          </Link>
        ))}
      </div>
    </div>
  );
}
