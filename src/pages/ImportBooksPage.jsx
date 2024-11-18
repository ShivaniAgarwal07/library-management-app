import { useState } from "react";
import axios from "axios";

const ImportBooksPage = () => {
  const [numBooks, setNumBooks] = useState(20);
  const [titleFilter, setTitleFilter] = useState("");
  const [importedBooks, setImportedBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    setLoading(true);
    setError("");
    try {
      const fetchedBooks = [];
      const pages = Math.ceil(numBooks / 20); 
      for (let page = 1; page <= pages; page++) {
        const response = await axios.get("https://frappe.io/api/method/frappe-library", {
          params: { page, title: titleFilter },
        });
        const books = response.data.message;
        fetchedBooks.push(...books);
        if (fetchedBooks.length >= numBooks) break;
      }
      setImportedBooks(fetchedBooks.slice(0, numBooks)); 
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Import Books</h2>
      <div>
        <label>
          Number of Books:
          <input
            type="number"
            value={numBooks}
            onChange={(e) => setNumBooks(parseInt(e.target.value) || 0)}
          />
        </label>
        <label>
          Title Filter:
          <input
            type="text"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </label>
        <button onClick={fetchBooks} disabled={loading}>
          {loading ? "Importing..." : "Import Books"}
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {importedBooks.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Publisher</th>
              <th>ISBN</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            {importedBooks.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.authors}</td>
                <td>{book.publisher}</td>
                <td>{book.isbn}</td>
                <td>{book.num_pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ImportBooksPage;
