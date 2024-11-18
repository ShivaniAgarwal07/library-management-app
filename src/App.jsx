import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import BooksData from './pages/BooksData'
import MembersData from './pages/MembersData'
import TransactionsData from './pages/TransactionsData';
import ImportBooksPage from './pages/ImportBooksPage';



const routes = [
  {
    path: '/',
    element: <BooksData />,
  },
  {
    path: '/members',
    element: <MembersData />,
  },
  {
    path: '/transactions',
    element: <TransactionsData />,
  },
  {
    path: '/import-books',
    element: <ImportBooksPage />,
  },
  
];


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {routes.map((route)=>(
            <Route key={route.path} path={route.path} element={route.element}/>

            
          ))}
        </Routes>
      {/* <BooksData/>
      <MembersData/> */}
      </BrowserRouter>
    </>
  )
}

export default App
