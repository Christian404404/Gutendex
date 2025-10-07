import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Fantasy",
  "Morality",
  "Society",
  "Power",
  "Justice",
  "Adventure",
  "Tragedy",
  "War",
  "Philosophy",
];

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?search=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        {categories.map((catgrs) => (
          <Link
            key={catgrs}
            to={`/category/${encodeURIComponent(catgrs.toLowerCase())}`}
          >
            {catgrs}
          </Link>
        ))}
      </nav>
    </header>
  );
}
