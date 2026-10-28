/**
 * Question 5 - Données numériques et gestion du temps
 * Compteur avec setInterval et clearInterval
 */

// TODO: Déclarez les variables nécessaires (éléments DOM, id de l'interval, valeur du compteur)

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#n, #start, #stop, #double)

    // TODO: Au clic sur Start
    // - Vérifier qu'un interval n'est pas déjà en cours
    // - Lancer setInterval qui incrémente la valeur chaque seconde
    // - Afficher la nouvelle valeur dans #n

    // TODO: Au clic sur Stop
    // - Utiliser clearInterval pour arrêter l'interval
    // - Réinitialiser l'id de l'interval

    // TODO: Bonus - Au clic sur ×2
    // - Multiplier la valeur actuelle par 2
    // - Afficher la nouvelle valeur
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
