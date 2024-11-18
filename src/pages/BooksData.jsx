import { useState } from "react";

const BooksData = () => {
  const dummyBooks = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", stock: 5 },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", stock: 3 },
    { id: 3, title: "1984", author: "George Orwell", stock: 4 },
    { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", stock: 2 },
  ];

  const [books, setBooks] = useState(dummyBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const addBook= ()=> {
    const newBook = {
        id: books.length +1,
        title: "a new book",
        author: "khushi",
        stock: 1
    }
    setBooks([...books, newBook])
  }
  const updateBook= (id)=> {
    const updatedBooks= books.map((book)=>
        book.id===id? {...book, title: `${book.title} (Updated)`}: book
    )
      setBooks(updatedBooks);

  }
  const deleteBook= (id)=> {
    const updatedBooks= books.filter((book)=>book.id!==id);
    setBooks(updatedBooks);
  }

  const filteredBooks= books.filter((book)=>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
)
  

  return (
    <div style={{ padding: "20px" }}>
      <h1>Books Management</h1>

      <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>

      <button onClick={addBook}>Add Book</button>
      <table border="1" style={{ width: "100%", textAlign: "left", marginTop: "10px" }}>
        <thead className="table-head">
          <tr>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Book Stock</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.stock}</td>
              <td>
                <button onClick={() => updateBook(book.id)}>Update Book</button>
                <button onClick={() => deleteBook(book.id)}>Delete Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BooksData;
