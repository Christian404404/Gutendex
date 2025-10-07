import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div>
      <Link to={`/book/${book.id}`}>
        <img src={book.formats["image/jpeg"]} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.authors?.[0]?.name}</p>
      </Link>
    </div>
  );
}
