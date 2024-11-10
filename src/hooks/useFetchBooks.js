import { useState, useEffect } from "react";
import { fetchBooks } from "../services/api";

/**
 * useFetchBooks hook that fetches the books from the API and stores the result in the state.
 * The hook takes four parameters: query, page, language and sort.
 * When any of these parameters change, the hook fetches the books from the API and updates the state.
 */
const useFetchBooks = (query, page, language, sort) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    // Set the default search query to "lord of rings" if no query is provided
    let searchQuery = query ? query : "lord of rings";
    searchQuery = searchQuery.split(" ").join("+");

    
     // Function to fetch the books from the API
    
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBooks(searchQuery, page, language, sort);
        setBooks(data.docs);
        setTotalResults(data.numFound);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page, language, sort]);

  return { books, loading, error, totalResults };
};

export default useFetchBooks;

