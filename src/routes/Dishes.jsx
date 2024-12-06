import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";


function Dishes(){

    const [dishes, setDishes] = useState([])
    const [randomDish, setRandomDish] = useState()

    function getDish(){
        try{
            const response = axios.get('https://foodish-api.com/')
            setDishes(response.data.img)
        } catch(error){
            console.error()
        }
    }


    return <div className="main">
        <h1>Wygeneruj losowy posiłek</h1>
    </div>
}
export default Dishes