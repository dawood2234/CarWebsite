// Sample car data (like Rossendale's inventory)
const cars = [
    {
        make: "Audi",
        model: "A4",
        year: 2021,
        price: 28900,
        image: "images/audi-a4.jpg",
        mileage: "18,000"
    },
    {
        make: "BMW",
        model: "3 Series",
        year: 2022,
        price: 32500,
        image: "images/bmw-3.jpg",
        mileage: "12,500"
    }
];

// Render cars to the grid
function renderCars() {
    const grid = document.querySelector('.car-grid');
    
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}">
            <div class="car-info">
                <h3>${car.year} ${car.make} ${car.model}</h3>
                <p>$${car.price.toLocaleString()}</p>
                <p>${car.mileage} miles</p>
                <a href="#" class="view-btn">View Details</a>
            </div>
        `;
        grid.appendChild(carCard);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderCars);