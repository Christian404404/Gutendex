import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchBooksById } from "../utilities/gutenDexAPI";

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const data = await searchBooksById(id);
        setBook(data);
      } catch (err) {
        setError("Failed to load book details");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const addFavorite = () => {
    if (!book) return;

    const alreadyFavorite = favorites.some((fav) => fav.id === book.id);
    if (alreadyFavorite) return;

    const updated = [...favorites, book];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!book) return <p>Book was not found in our database</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      {book.formats["image/jpeg"] && (
        <img src={book.formats["image/jpeg"]} alt={book.title} />
      )}
      <p>Author: {book.authors?.length ? book.authors[0].name : "Unknown"}</p>
      <p>Id in database: {book.id}</p>
      <p>Downloads: {book.download_count}</p>
      <p>Languages: {book.languages.join(", ")}</p>
      <p>Subjects: {book.subjects?.join(", ") || "Not found"}</p>

      {book.formats["text/html"] && (
        <a href={book.formats["text/html"]} target="_blank" rel="noreferrer">
          Read Book
        </a>
      )}
      <br />

      <button onClick={addFavorite}> Add to favorites</button>
    </div>
  );
}
