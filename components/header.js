function header() {
    return /*html*/`
        <h1>Recipedia</h1>
        <div>
            <input
            type="text"
            placeholder="Søk">
        </div>
        <div>
            ${addRecipeButton()}
            <button onclick="changePage('mainPage')">Hjem</button>
        </div>
    `;
}

function addRecipeButton() {
    return /*html*/ `
        <button>Legg til oppskrift</button>
    `;
}
