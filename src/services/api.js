/**
 * Fetches a list of books from the Open Library API based on the given parameters.
 */
export const fetchBooks = async (
  query,
  page = 1,
  language = "",
  sort = "random"
) => {
  try {
    // Construct the API URL with query parameters
    const url = `https://openlibrary.org/search.json?title=${query}&page=${page}&language=${language}&limit=10&sort=${sort}`;

    // Fetch the data from the API
    const response = await fetch(url);

    // Check if the response is not successful
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    // Parse the JSON response and return it
    return await response.json();
  } catch (error) {
    // Log the error to the console and rethrow it
    console.error(error);
    throw error;
  }
};
