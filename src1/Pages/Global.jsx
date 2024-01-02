import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, Home, Products, About, Contact, PageNotFound } from "./index"
export default function Global() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <NavBar>
                                <Route index element={<Home />} />
                                <Route path="products" element={<Products />} />
                                <Route path="about" element={<About />} />
                                <Route path="contact" element={<Contact />} />
                                <Route path="*" element={<PageNotFound />} />
                            </NavBar>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}