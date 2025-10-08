import { useEffect, useState } from "react";
import BookList from "../components/BookList";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <h2>Favorite Books</h2>
      <BookList books={favorites} />
    </div>
  );
}
