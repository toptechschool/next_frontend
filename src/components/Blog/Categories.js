import React from "react";
import Link from "next/link";
import { Badge } from "react-bootstrap";

export default function Categories({ categories }) {
  return (
    <div>
      {categories.slice(0, 5).map((category, idx) => (
        <Link href={`/blog/category/${category.toLowerCase()}`} key={idx}>
          <Badge className="me-1" pill>
            {category}
          </Badge>
        </Link>
      ))}
    </div>
  );
}
