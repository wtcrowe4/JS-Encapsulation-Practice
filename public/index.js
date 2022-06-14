
async function main() {
    // Fetches an array of ingredients, and an array of sandwiches in the users
    //  cart, at the same time
    let [fetchedIngredients, fetchedCartItems] = await getAll(`http://localhost:3001/ingredients`, `http://localhost:3001/cart`)

    // Save what we fetched to global variables;
    ingredientList.ingredients = fetchedIngredients
    cart.items = fetchedCartItems

    // Select the first sandwich on page load
    cart.selectSandwich(cart.items[0])

    // Display the ingredients we fetched
    ingredientList.render();

    // Display the sandwiches we fetched
    cart.render();

    // Attach event listener to the 'Add Sandwich' button
    let addButton = document.querySelector('.add-button');
    addButton.addEventListener('click', () => {
        cart.addSandwich()
    })

    // Attach event listener to the 'Name' input
    let nameInput = document.querySelector('.name-input');
    nameInput.addEventListener('input', (e) => {
        cart.changeSelectedSandwichName(e.target.value)
    })

    // Attach event listeners to the radio inputs for selecting a type of bread
    let breadRadios = document.querySelectorAll('.bread-radio')
    breadRadios.forEach(radioInput => {
        radioInput.addEventListener('click', () => {
            cart.changeSelectedSandwichBread(radioInput.value)
        })
    })
}

main()