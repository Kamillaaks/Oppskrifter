function drawLoginPage() {
    return /*HTML*/ `
        <h2>Logg inn</h2>
        <h3>E-mail</h3>
        <!-- Forteller at dette er en mailadresse, og hva som skal
        stå inni inputfeltet før man begynner å skrive i det.-->
        <input
        type="email"
        placeholder="Mailadresse"
        oninput="model.input.login.email = this.value"
        value="${model.input.login.email}"
        />
        <h3>Passord</h3>
        <!-- oninput med alt etter oppdaterer modellen når man skriver inn i input-feltet -->
        <!-- value="${model.input.login.email}" fyller inn det som ligger i modellen når visningen tegnes  -->
        <input
        type="password" 
        placeholder="Passord"
        oninput="model.input.login.password = this.value"
        value="${model.input.login.password}"
        />
        <button onclick="login()">Logg inn</button>
    `;
}
