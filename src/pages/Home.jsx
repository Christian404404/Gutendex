import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchBooks } from "../utilities/gutenDexAPI";
import BookList from "../components/BookList";

export default function Home() {
  const [params] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = params.get("search") || "";

  useEffect(() => {
    if (!search) return;

    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await searchBooks(search);
        setBooks(data.results);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [search]);

  return (
    <div>
      <h2>{search ? `Search results for "${search}"` : "Search for a book"}</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <BookList books={books} />}
    </div>
  );
}
