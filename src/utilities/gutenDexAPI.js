import axios from "axios";

const gutenDexAPI = axios.create({
  baseURL: "https://gutendex.com/books",
});

export const searchBooks = async (query, page = 1) => {
  const response = await gutenDexAPI.get(`?search=${query}&page=${page}`);
  return response.data;
};

export const searchBooksByCategory = async (getBooksByCategory, page = 1) => {
  const response = await gutenDexAPI.get(`?topic=`);
  return response.data;
};

export const searchBooksById = async (id) => {
  const response = await gutenDexAPI.get(`?ids=${id}`);
  return response.data.results[0];
};
