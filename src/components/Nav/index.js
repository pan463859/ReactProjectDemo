import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
export default () => {
    return (
        <div>
            <ul className={style.navigator}>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page">Page</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/dnd">DnD</Link></li>
            </ul>
        </div>
    )
}
