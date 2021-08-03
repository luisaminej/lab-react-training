import React from 'react'

export default function DriverCard({ name, rating, img, car }) {
    return (
        <div>
            <div className="driverCar">
                <div className="pic">
                    <img src={img} alt="profile" />
                </div>
                <div className="data">
                    <span className="name">{name}</span>
                    <span className="name">{`${setRating(rating)}`}</span>
                    <span className="car">{car.model} - {car.licensePlate}</span>
                </div>
            </div>

        </div>
    )


    function setRating(rating) {
        switch (Math.round(parseFloat(rating))) {
            case 0:
                return "☆ ☆ ☆ ☆ ☆";
            case 1:
                return "★ ☆ ☆ ☆ ☆";
            case 2:
                return "★ ★ ☆ ☆ ☆";
            case 3:
                return "★ ★ ★ ☆ ☆";
            case 4:
                return "★ ★ ★ ★ ☆";
            case 5:
                return "★ ★ ★ ★ ★";
            default:
                return "Error, invalid rating";
        }

    }
}
