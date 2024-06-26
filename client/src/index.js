import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme } from '@mui/material';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Auth from './pages/Auth';
import AnimeDetails from './pages/AnimeDetails';
import AnimeList from './pages/AnimeList';
import ProtectedRoute from './components/ProtectedRoute';
import { Provider } from 'react-redux'
import { store } from './store';
import Profile from './pages/Profile';

const theme = createTheme();
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/oauth",
    element: <Auth />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/anime/:id",
        element: <AnimeDetails />,
      },
      {
        path: "/anime",
        element: <AnimeList />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
