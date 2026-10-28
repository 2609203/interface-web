/**
 * Question 2 - Fonctions anonymes et fléchées
 * Créer des fonctions fléchées pour addition et multiplication
 */

// TODO: Créer une fonction fléchée add(a, b) qui retourne a + b
const add = undefined;

// TODO: Créer une fonction fléchée mul(a, b) qui retourne a * b
const mul = undefined;

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#a, #m, #res)

    // TODO: Au clic sur #a, calculer add(3, 4) et afficher dans #res

    // TODO: Au clic sur #m, calculer mul(3, 4) et afficher dans #res
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { add, mul, initialiser };
