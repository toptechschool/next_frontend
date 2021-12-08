import React from "react";
import Link from "next/link";
import Badge from "../Common/Others/Badge";

export default function Categories({ categories }) {
  return (
    <div>
      {categories.slice(0, 5).map((category, idx) => (
        <Link
          href={`/blog/category/${category.toLowerCase()}`}
          key={idx}
          passHref
        >
          <Badge name={category} />
        </Link>
      ))}
    </div>
  );
}
