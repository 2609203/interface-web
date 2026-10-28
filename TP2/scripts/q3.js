/**
 * Question 3 - Objets et tableaux
 * Manipuler des tableaux d'objets et afficher des listes filtrées
 */

// TODO: Déclarez le tableau d'objets jeux
const jeux = undefined;

/**
 * Méthode générique pour afficher une liste de jeux dans un élément ul
 * @param {Array} listeJeux - La liste des jeux à afficher
 * @param {HTMLElement} elementUl - L'élément <ul> dans lequel ajouter les items
 */
function afficherJeux(listeJeux, elementUl) {
    // TODO: Implémenter la logique pour afficher chaque jeu dans l'élément ul
    // Format: <li>nom (duree min)</li>
}

/**
 * Initialise les listes de jeux
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#liste-court, #liste-long)

    // TODO: Filtrer les jeux courts (moins de 60 minutes)

    // TODO: Filtrer les jeux longs (60 minutes ou plus)

    // TODO: Appeler afficherJeux pour chaque liste
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { jeux, afficherJeux, initialiser };
