import React from "react";
import StoreProvider from "./context/StoreProvider";

import App from "./App";

import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render( 
    <StoreProvider>
        <App />
    </ StoreProvider>);


