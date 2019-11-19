import React from 'react';
import NavBar from "../pages/navbar";
import Footer from "../pages/footer";

export default function Layout({children}){
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}