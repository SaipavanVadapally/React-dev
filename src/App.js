import React from "react";
import ReactDOM from "react-dom/client";
 
const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                 src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home </li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    
                </ul>
 
            </div>
        </div>
    );
};
 
const RestauarantCard=({resName,cuisine}) =>{
    return(
        <div className="res-card" style={ {backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ykc6besh38qgtowdwwsl"></img>
            <h3> {resName}</h3>
            <h4> {cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>20 minutes</h4>
        </div>
    );
};
const Body =( )=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestauarantCard
            resName="Bawarchi Restaurant"
            cuisine="Biryani, South Indian,Hyderabadi"/>
            <RestauarantCard
            resName="KFC Restaurant"
            cuisine="Chicken Burger,American,NewYork"/>
                        <RestauarantCard
            resName="KFC Restaurant"
            cuisine="Chicken Burger,American,NewYork"/>
                        <RestauarantCard
            resName="KFC Restaurant"
            cuisine="Chicken Burger,American,NewYork"/>
                        <RestauarantCard
            resName="KFC Restaurant"
            cuisine="Chicken Burger,American,NewYork"/> 
             
            </div>
        </div>
    );
};
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);