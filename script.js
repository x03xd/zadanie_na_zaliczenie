const dishes = {
    pizza: [
        { name: "Chomik Margherita", image: "images/pizza1.jpg", description: "Classic pizza topped with tomato sauce, mozzarella, and basil. Enhanced with hamster-friendly toppings.", price: 9.99 },
        { name: "Chomik Pepperoni", image: "images/pizza2.jpg", description: "Pizza with spicy pepperoni slices and melted cheese, now made with hamster-safe ingredients.", price: 10.99 },
        { name: "Chomik Hamster Supreme", image: "images/pizza3.jpg", description: "Loaded with hamster-approved toppings including seeds, nuts, and veggies.", price: 12.99 },
        { name: "Chomik NOT Veggie Delight", image: "images/pizza4.jpg", description: "A vegetarian pizza with a hamster twist, featuring fresh veggies and a cheese blend.", price: 11.49 },
        { name: "Chomik Hawaiian", image: "images/pizza5.jpg", description: "A tropical pizza topped with hamster-friendly ham, pineapple, and cheese.", price: 11.99 },
        { name: "Chomik BBQ Chicken", image: "images/pizza6.jpg", description: "Savory BBQ chicken paired with hamster-safe veggies and cheese.", price: 12.49 },
        { name: "Chomik Meat Lover's", image: "images/pizza7.jpg", description: "For the hamster with a carnivorous appetite! Piled high with hamster-friendly meats.", price: 13.99 },
        { name: "Chomik Mushroom Madness", image: "images/pizza8.jpg", description: "A pizza bursting with hamster-friendly mushrooms, cheese, and herbs.", price: 11.99 },
        { name: "Chomik Spinach and Feta", image: "images/pizza9.jpg", description: "Fresh spinach, creamy feta, and hamster-safe cheese make this pizza a delight.", price: 11.49 },
        { name: "Chomik Four Cheese", image: "images/pizza10.jpg", description: "Indulge in a blend of hamster-approved cheeses on this cheesy masterpiece.", price: 10.99 }
    ],
    burger: [
        { name: "Chomik Classic Burger", image: "images/burger1.avif", description: "Juicy hamster patty with lettuce, tomato, onion, and cheese in a sesame seed bun.", price: 8.99 },
        { name: "Chomik Cheeseburger", image: "images/burger2.avif", description: "Hamster-safe beef patty topped with cheese, lettuce, tomato, and pickles.", price: 9.49 },
        { name: "Chomik Bacon Burger", image: "images/burger3.avif", description: "Irresistible hamster burger with crispy bacon, lettuce, and tomato.", price: 10.49 },
        { name: "Chomik Mushroom Swiss", image: "images/burger4.avif", description: "A savory hamster burger topped with mushrooms and Swiss cheese.", price: 10.99 },
        { name: "Chomik BBQ Bacon", image: "images/burger5.avif", description: "Tangy BBQ sauce, crispy bacon, and hamster-safe beef make this burger a hit.", price: 11.49 },
        { name: "Chomik Jalapeno Burger", image: "images/burger6.avif", description: "Spice things up with this hamster burger featuring jalapenos and melted cheese.", price: 10.99 },
        { name: "Chomik Double Cheeseburger", image: "images/burger7.avif", description: "Double the cheese, double the flavor! A hamster-sized delight.", price: 11.99 }
    ],
    drink: [
        { name: "Chomik Cola", description: "Refreshing cola drink served chilled with ice, specially formulated for hamsters.", price: 2.99 },
        { name: "Chomik Orange Juice", description: "Freshly squeezed orange juice, packed with vitamins, suitable for hamsters.", price: 3.49 },
        { name: "Chomik Lemonade", description: "Tangy and sweet lemonade, perfect for hamsters on a hot day.", price: 3.99 },
        { name: "Chomik Iced Tea", description: "Cool and refreshing iced tea, a favorite drink for hamsters.", price: 2.99 }
    ]
};

function displayDishes(category) {
    const dishesContainer = document.querySelector('.content');
    dishesContainer.innerHTML = ''; 

    dishes[category].forEach(dish => {
        const box = document.createElement('div');
        box.classList.add('box'); 

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details'); 

        const heading = document.createElement('h3');
        heading.textContent = dish.name;

        const description = document.createElement('p');
        description.textContent = dish.description;
        detailsContainer.appendChild(heading);
        detailsContainer.appendChild(description);

        const price = document.createElement('p');
        price.textContent = "Price: " + dish.price + "$";

        detailsContainer.appendChild(price);

        box.appendChild(detailsContainer);

        if (dish.image) {
            const image = document.createElement('img');
            image.src = dish.image;
            image.alt = dish.name;
            image.classList.add('main-image');
            image.loading = 'lazy';  
            box.appendChild(image);
        
            const overlayImage = document.createElement('img');
            overlayImage.src = 'images/hamster.svg';
            overlayImage.alt = 'Hamster Overlay';
            overlayImage.style.width = '50px';
            overlayImage.style.height = '50px';
            overlayImage.loading = 'lazy';  
        
            if (category === "pizza") {
                overlayImage.style.left = '67%';
            } else {
                overlayImage.style.left = '76%';
            }
        
            overlayImage.classList.add('overlay-image');
            box.appendChild(overlayImage);
        }

        dishesContainer.appendChild(box);
    });
}

document.getElementById('pizza').addEventListener('click', function() {
    displayDishes('pizza');
});

document.getElementById('burgers').addEventListener('click', function() {
    displayDishes('burger');
});

document.getElementById('drinks').addEventListener('click', function() {
    displayDishes('drink');
});

displayDishes('pizza');