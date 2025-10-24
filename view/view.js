const app = document.getElementById("app");

updateView();
function updateView() {
    let content = "";

    if (model.app.currentPage === "loginPage") {
        content = drawLoginPage()
    } else if (model.app.currentPage === "mainPage") {
        content = drawMainPage()
    } else if (model.app.currentPage === "recipePage") {
        content = drawRecipePage()
    } else if (model.app.currentPage === "addRecipePage") {
        content = drawAddRecipePage()
    } else {
        content = "Noe gikk galt" 
    }

    app.innerHTML = /*html*/ `
        <header>${header()}</header>
        <main>${content}</main>
    `;
}
