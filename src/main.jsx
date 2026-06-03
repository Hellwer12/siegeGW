console.log("MAIN.JSX LOADED");

import React from 'react'
import ReactDOM from 'react-dom/client'

const root = document.getElementById('root')

console.log("ROOT:", root)

root.innerHTML = "<h1 style='color:red'>RAW HTML WORKS</h1>"
