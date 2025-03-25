// Sample car data
const cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        price: 22000,
        image: "images/camry.jpg"
    },
    {
        make: "BMW",
        model: "X5",
        year: 2021,
        price: 45000,
        image: "images/x5.jpg"
    }
];

// Render featured cars
function renderCars() {
    const container = document.getElementById('featured-cars');
    
    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = 'car-card';
        carElement.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}">
            <h3>${car.year} ${car.make} ${car.model}</h3>
            <p>$${car.price.toLocaleString()}</p>
            <button class="details-btn">View Details</button>
        `;
        container.appendChild(carElement);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderCars);