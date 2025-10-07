import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchBooksByCategory } from "../utilities/gutenDexAPI";
import BookList from "../components/BookList";

export default function Category() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { topic } = useParams();

  useEffect(() => {
    if (!topic) return;

    const fetchBooksByCategory = async () => {
      try {
        setLoading(true);
        const data = await searchBooksByCategory(topic);
        setBooks(data.results);
      } catch (err) {
        setError("Something went wrong while fetching category books.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooksByCategory();
  }, [topic]);

  return (
    <div>
      <h2>Category: {topic}</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <BookList books={books} />}
    </div>
  );
}
