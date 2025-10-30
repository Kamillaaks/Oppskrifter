function drawRecipePage() {
    let selectedRecipe = model.app.selectedRecipe;
    return /*html*/ `
        <div>
            <img src="${selectedRecipe.image}">
            <h4>${selectedRecipe.category}</h4>
            <h1>${selectedRecipe.title}</h1>
        </div>
    `;
}