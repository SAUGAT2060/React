const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

export async function Loader({ params }) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${params.query}&key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch book data');
  }

  const data = await response.json();

  // Check if items exist
  if (!data.items || data.items.length === 0) {
    throw new Error('No books found for this query');
  }

  // Return the first item
  return data.items[0];
}
