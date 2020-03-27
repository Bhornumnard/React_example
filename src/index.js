import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MyWeb from './MyWeb';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>

        <MyWeb/>

    </BrowserRouter>
    , document.getElementById('root'));


