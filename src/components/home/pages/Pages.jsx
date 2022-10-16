import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Header } from "../../common/Header";
import { Footer } from "../../common/Footer";

import { Home } from "../Home";
import { Details } from "../details/Details"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cart/:id",
    element: <Details />
  },
]);

export const Pages = () => {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    )
}