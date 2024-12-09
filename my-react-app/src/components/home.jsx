import React from 'react'
import {Link} from 'react-router-dom'
const Home = () =>{    
    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><link to="/counter">Counter App</link></li>
                <li><link to="/stopwatch">Stop Watch</link></li>
            </ul>

        </div>
    )
    }
    export default Home
