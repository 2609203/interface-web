/**
 * Question 1 - Convertisseur de température
 * Convertir des degrés Celsius en Fahrenheit
 */

// TODO: Déclarez des variables (nombre, string)

/**
 * Convertit une température de Celsius en Fahrenheit
 * @param {number} celsius - La température en degrés Celsius
 * @returns {number} La température en degrés Fahrenheit
 */
function convertirCelsiusVersfahrenheit(celsius) {
    // TODO: Retourner le résultat de la conversion en utilisant l'expression c*9/5+32
    return undefined;
}

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#c, #go, #out)

    // TODO: Au clic sur #go, convertir la valeur de #c et afficher dans #out
    
    // TODO: Gérer le cas où l'input est vide (afficher "Veuillez entrer une valeur")
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { convertirCelsiusVersfahrenheit, initialiser };
