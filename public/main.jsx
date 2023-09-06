import React, { Children } from "react"
import { ReactDOM } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import app from "./app"
import error from "./public/error"
import home from "./home"
import aboutme from "./aboutme"
import portfolio from "./portfolio"
import contact from "./contact"
import resume from "./resume"


const router = createBrowserRouter([
    {
        path: "/",
        element: <app />,
        errorElement: <error />,
        children: [
            {
                index: true,
                element: <home />,
            },
            {
                path: "./aboutme",
                element: <aboutme />,
            },
            {
                path: "./portfolio",
                element: <portfolio />,
            },
            {
                path: "./contact",
                element: <contact />,
            },
            {
                path: "./resume",
                element: <resume />,
            },
        ]
    }
])






