function drawAddRecipePage() {
    return /*html*/ `
        <div>
            <div>
                <label for="imageUpload">Legg til bilde</label>
                <input type="file" id="imageUpload" accept="image/*">
            </div>
            <div>
                <select name="categories" id="categories">
                    <option value="">Legg til kategori</option>
                    <option value="middag">Middag</option>
                    <option value="lunsj">Lunsj</option>
                    <option value="frokost">Frokost</option>
                    <option value="dessert">Dessert</option>
                    <option value="rask">Rask</option>
                    <option value="kos">Kos</option>
                </select>
                <select name="timeUsed" id="timeUsed">
                    <option value="">Legg til tidsbruk</option>
                    <option value="under20min">Under 20 min</option>
                    <option value="20min">20 min</option>
                    <option value="20to30min">20-30 min</option>
                    <option value="30min">30 min</option>
                    <option value="30to40min">30-40 min</option>
                    <option value="40 min">40 min</option>
                    <option value="40to50min">40-50 min</option>
                    <option value="50min">50 min</option>
                    <option value="50to60min">50-60 min</option>
                    <option value="60min">60 min</option>
                    <option value="moreThan60min">Over 60 min</option>
                </select>
                <select name="difficulty" id="difficulty">
                    <option value="">Legg til vanskelighetsgrad</option>
                    <option value="easy">Enkel</option>
                    <option value="medium">Middels</option>
                    <option value="hard">Vanskelig</option>
                </select>
            </div>
            <div>
                <input
                type="text"
                placeholder="Legg til tittel"
                oninput="model.input.addRecipe.addTitle = this.value"
                value="${model.input.addRecipe.addTitle}"
                />
                <div>
                    Legg til ingredienser
                    <input
                    type="text"
                    oninput="model.input.addRecipe.addIngredients = this.value"
                    value="${model.input.addRecipe.addIngredients}"
                    />
                </div>
                <div>
                    Legg til framgangsmåte
                    <input
                    type="text"
                    oninput="model.input.addRecipe.addMethod = this.value"
                    value="${model.input.addRecipe.addMethod}"
                    />
                </div>
            </div>
            <div>
                <button>Legg til oppskrift</button>
            </div>
        </div>
    `;
}
