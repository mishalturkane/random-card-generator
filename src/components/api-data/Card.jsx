import React, { useState, useEffect } from "react";

const Card = () => {
    const [userData, setUserData] = useState(null); // State to hold fetched data

    // Function to fetch user data
    const fetchUserData = () => {
        fetch("https://randomuser.me/api/")
            .then((response) => response.json()) // Parse response as JSON
            .then((data) => {
                setUserData(data.results[0]); // Update state with the fetched data
            })
            .catch((error) => console.error("Error fetching data:", error)); // Handle errors
    };

    useEffect(() => {
        // Fetch data initially when the component mounts
        fetchUserData();

        return () => {
            console.log("Card Unmounted");
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <h1>ID Card</h1>
            {userData && (
                <div>
                    <img src={userData.picture.medium} alt={`${userData.name.first} ${userData.name.last}`} />
                    <p>Name: {userData.name.first} {userData.name.last}</p>
                    <p>Email: {userData.email}</p>
                    <p>Location: {userData.location.city}, {userData.location.country}</p>
                    <button onClick={fetchUserData}>Generate new User</button>
                </div>
            )}
        </div>
    );
};

export default Card;
