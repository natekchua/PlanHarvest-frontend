import React from "react";

export default function GetDate() {
    const tempDate = new Date();
    const date = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
    return (
        <p>{date}</p>
    );
}