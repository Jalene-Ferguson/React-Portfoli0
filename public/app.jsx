import React from "react";
import  ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "/app.css"
import { Outlet } from "react-router-dom"
import Nav from "/components/Navigation"

function app() {
    return (
        <> 
        <Nav>
            <main className="mx-4">
                <Outlet />
            </main>
     </Nav>
        
        </>
    )
}

export default app;