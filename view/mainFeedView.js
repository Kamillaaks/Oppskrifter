function drawMainPage() {
    return /*html*/ `
    <div>
        ${printCategoryButtons()}
    </div>
    <div>
        <section>
            ${printRecipes()}
        </section>
    </div>
    `;
}

function printRecipes() {
    let html = ``;

    for (let i = 0; i < model.data.recipeList.length; i++) {
        html += /*html*/ `
        <div>
            <img src=${model.data.recipeList[i].image} class="recipeImage">
            <div>
                <h2>${model.data.recipeList[i].title}</h2>
            </div>
            <div>
                <h4>${model.data.recipeList[i].categoryId}</h4>•
                <h4>${model.data.recipeList[i].difficultyId}</h4>•
                <h4>${model.data.recipeList[i].timeUsedId}</h4>
            </div>
        </div>
        `;
    }
    return html;
}

function printCategoryButtons() {
    let html = ``;

    for (let i = 0; i < model.data.category.length; i++) {
        html += /*html*/ `
            <button>${model.data.category[i].name}</button>
        `;
    }
    return html;
}