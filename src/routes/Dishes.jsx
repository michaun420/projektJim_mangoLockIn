import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";


function Dishes(){

    const [dishes, setDishes] = useState([])
    const [randomDish, setRandomDish] = useState()
    const get_api = (e) =>{
        e.preventDefault();
        axios.get('https://foodish-api.com/api/')
            .then(function (response) {
                setDishes(response.data.image)
                console.log(dishes);
        })
            .catch(function (error) {
                console.log(error);
    })};


    return <div className="main">
        <h1>Wygeneruj losowy posiłek</h1>
        <form className="form" onSubmit={get_api}>
            <button type="submit">KLIKNIJ</button>
        </form><br/><br/><br/><br/><br/>
        <img src={dishes} alt="" width="700px" height="500px"></img><br/><br/>
        <h1>Oto twój posiłek na dzisiaj ;D</h1>
    </div>
}
export default Dishes