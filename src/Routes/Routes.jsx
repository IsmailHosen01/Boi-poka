import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('booksData.json'),
        hydrateFallbackElement: <p>loading.....</p>,
        path: '/',
        Component: Home,
      },
      {
        path: 'bookDetails/:id',
        loader: () => fetch('booksData.json'),
        hydrateFallbackElement: <p>loading.....</p>,
        Component: BookDetails
      },
      {
        path: 'read-list',
        loader: () => fetch('booksData.json'),
        hydrateFallbackElement: <p>loading.....</p>,
        Component: ReadList
      }
    ]
  },
]);