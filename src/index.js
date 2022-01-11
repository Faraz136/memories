import React from "react";
import ReactDOM from "react-dom";
import myStore from "./store/store";
import { Provider } from "react-redux";
import './index.css';
import App from "./App";

ReactDOM.render(

<Provider store={myStore}> 
    
<App />
    
     </Provider>
    
    
    
    , document.getElementById('root'));