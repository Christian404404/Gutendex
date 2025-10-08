import BookCard from "./BookCard.jsx";

export default function BookList({ books }) {
  if (!books?.length) return <p>No books found.</p>;
  return (
    <div>
      {books.map((bks) => (
        <BookCard key={bks.id} book={bks} />
      ))}
    </div>
  );
}
