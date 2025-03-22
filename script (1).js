let historyArray = [];

function predict() {
    const choices = ["Pied", "Feuille", "Ciseaux"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const prediction = choices[randomIndex];

    // Met à jour le texte de prédiction
    const predictionText = document.getElementById("prediction-text");
    predictionText.innerText = "La prédiction est : " + prediction + " !";

    // Ajouter la prédiction à l'historique
    historyArray.push(prediction);
    updateHistory();
}

function updateHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = ""; // Réinitialise l'historique affiché

    // Affiche chaque prédiction dans l'historique
    historyArray.forEach(function(item) {
        const p = document.createElement("p");
        p.innerText = item;
        historyDiv.appendChild(p);
    });
}
