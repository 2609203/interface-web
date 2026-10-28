/**
 * Question 4 - Manipulation du DOM
 * Navigation, Insertion et Clonage
 */

/**
 * Initialise toutes les fonctionnalités de la page
 */
function initialiser() {
    // TODO: Étape 1 - Navigation entre les nœuds
    // Récupérez #fruits et #out
    // Utilisez firstElementChild, lastElementChild, children[0].nextElementSibling
    // Affichez : "Premier : X | Dernier : Y | Après le 1er : Z"

    // TODO: Étape 2 - Création et insertion d'éléments
    // Au clic sur #addHead, créez un <p> avec "(tête)" et utilisez prepend()
    // Au clic sur #addTail, créez un <p> avec "(fin)" et utilisez append()

    // TODO: Étape 3 - Clonage, remplacement et suppression
    // Au clic sur #cloner, clonez le .card avec cloneNode(true), modifiez son texte et ajoutez-le
    // Au clic sur #remplacer, remplacez la première .card avec replaceWith()
    // Au clic sur #vider, supprimez toutes les .card avec remove()

    // TODO: Étape 4 - Insertion à une position donnée
    // Au clic sur #ins2, créez un <li> "Étape 1.5" et insérez-le avant steps.children[1] avec before()
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
