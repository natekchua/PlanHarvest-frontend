import React from 'react';
import NavBar from "./home/navbar";
import Footer from "./home/footer";

export default function Layout({children}){
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}