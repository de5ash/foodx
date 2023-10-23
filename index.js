import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src="https://i.pinimg.com/1200x/f4/64/e3/f464e33bc6c171d4f8974204bd7c5b37.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
};
const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img src={props.imgLink} />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.eta}</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">


                <RestaurantCard
                    resName="Taste of India"
                    cuisine="Indian, Chinese"
                    rating="4.3"
                    eta="25 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/533143aaff604d567f8b4571.jpg"
                />

                <RestaurantCard
                    resName="Pizza Palace"
                    cuisine="Italian, Fast Food"
                    rating="4.8"
                    eta="30 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314247ff604d44808b4569.jpg"
                />

                <RestaurantCard
                    resName="Sushi Delight"
                    cuisine="Japanese, Sushi"
                    rating="4.5"
                    eta="35 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314276ff604d28828b456b.jpg"
                />

                <RestaurantCard
                    resName="Burger Haven"
                    cuisine="American, Fast Food"
                    rating="4.2"
                    eta="20 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/533143bfff604d44808b456a.jpg"
                />

                <RestaurantCard
                    resName="Mediterranean Flavors"
                    cuisine="Mediterranean"
                    rating="4.7"
                    eta="40 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/5331430fff604d557f8b456d.jpg"
                />

                <RestaurantCard
                    resName="Spice Garden"
                    cuisine="Indian, Thai"
                    rating="4.4"
                    eta="28 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314328ff604d4d808b456b.jpg"
                />

                <RestaurantCard
                    resName="Taco Town"
                    cuisine="Mexican, Fast Food"
                    rating="4.1"
                    eta="22 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314343ff604d28828b456c.jpg"
                />

                <RestaurantCard
                    resName="Sizzling Steaks"
                    cuisine="Steakhouse, American"
                    rating="4.6"
                    eta="38 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314398ff604d6c7a8b456a.jpg"
                />

                <RestaurantCard
                    resName="Noodle House"
                    cuisine="Chinese, Thai"
                    rating="4.3"
                    eta="32 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/5252b20c301bbf46038b477e.jpg"
                />

                <RestaurantCard
                    resName="Café de Paris"
                    cuisine="French, Coffee"
                    rating="4.5"
                    eta="29 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314343ff604d28828b456c.jpg"
                />

                <RestaurantCard
                    resName="Sushi Harbor"
                    cuisine="Japanese, Sushi"
                    rating="4.7"
                    eta="34 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314398ff604d6c7a8b456a.jpg"
                />

                <RestaurantCard
                    resName="The BBQ Shack"
                    cuisine="Barbecue, American"
                    rating="4.4"
                    eta="45 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/5252b20c301bbf46038b477e.jpg"
                />

                <RestaurantCard
                    resName="Pasta Paradise"
                    cuisine="Italian, Pasta"
                    rating="4.6"
                    eta="31 minutes"
                    imgLink="https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/54511c31ff604dee7b8b4571.jpg"
                />

                <RestaurantCard
                    resName="Hunan Palace"
                    cuisine="Chinese, Asian"
                    rating="4.3"
                    eta="26 minutes"
                    imgLink="https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg"
                />
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)