import React from "react";



function colorGenerator() {
    const color ='#'+ Math.floor(Math.random() * 16777216).toString(16);
    return color;
}

export default colorGenerator;