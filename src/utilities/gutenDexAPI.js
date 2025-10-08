import axios from "axios";

const gutenDexAPI = axios.create({
  baseURL: "https://gutendex.com/books",
});

export const searchBooks = async (search, page = 1) => {
  const response = await gutenDexAPI.get(
    `?search=${encodeURIComponent(search)}&page=${page}`
  );
  return response.data;
};

export const searchBooksByCategory = async (topic, page = 1) => {
  const response = await gutenDexAPI.get(
    `?topic=${encodeURIComponent(topic)}&page=${page}`
  );
  return response.data;
};

export const searchBooksById = async (bookId) => {
  const response = await gutenDexAPI.get(`?ids=${encodeURIComponent(bookId)}`);
  return response.data.results[0];
};
