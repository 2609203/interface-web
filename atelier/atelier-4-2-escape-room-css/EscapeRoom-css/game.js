// Fonctions utilitaires pour l'escape room

// Panel d'aide
function toggleHints() {
  const hintContent = document.getElementById('hint-content');
  if (hintContent) {
    hintContent.classList.toggle('show');
  }
}

// Détection des modifications DevTools (bonus pour les enseignants)
let devtoolsOpen = false;

// Guide pour l'enseignant dans la console
setInterval(() => {
  const threshold = 160;

  if (
    window.outerHeight - window.innerHeight > threshold ||
    window.outerWidth - window.innerWidth > threshold
  ) {
    if (!devtoolsOpen) {
      devtoolsOpen = true;
      console.log(`
 DEVTOOLS ESCAPE ROOM - Guide pour l'enseignant

SOLUTIONS RAPIDES:
================

Salle 1: Changer display: none → display: block sur .hidden-secret
Salle 2: Lire les commentaires HTML → Changer href="wrong-page.html" en href="room3.html"
Salle 3: Supprimer .invisible-blocker ou changer son z-index
Salle 4: Changer la couleur du texte .invisible-link (actuellement même couleur que le fond)
Salle 5: Supprimer ou modifier transform sur .transformed-link
Salle 6: Modifier position de .off-screen-link (actuellement left: -9999px)
Salle 7: Changer opacity: 0 → opacity: 1 sur .transparent-link
Salle 8: Augmenter height de .collapsed-box (actuellement height: 0)
Salle 9: Modifier z-index de .layer3 pour le rendre visible (actuellement z-index: 1)
Salle 10: Révéler le lien .invisible-final-link dans .challenge-2 (même couleur que le fond)

FICHIERS:
=========
- index.html : Page d'accueil
- room1.html à room10.html : Les 10 salles
- victory.html : Page de victoire
- wrong-page.html : Page d'erreur pour la salle 2
- style.css : Tous les styles
- game.js : Ce fichier avec les utilitaires

CONSEILS PÉDAGOGIQUES:
====================
- Encouragez les étudiants à lire les instructions
- Montrez-leur comment utiliser F12 et l'inspecteur
- Expliquez la différence entre HTML et CSS
- Insistez sur l'importance des commentaires dans le code
- Utilisez cet exercice pour introduire les concepts de z-index, position, opacity, etc.

Bon atelier ! 
            `);
    }
  } else {
    devtoolsOpen = false;
  }
}, 1000);

// Fonction pour créer des effets visuels (utilisée sur la page de victoire)
function createConfetti() {
  const colors = ['#00ff41', '#4ecdc4', '#ff6b35', '#ffbe0b', '#8ac926'];

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 6000);
    }, i * 100);
  }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function () {
  // Ajouter les styles d'animation supplémentaires
  const style = document.createElement('style');
  style.textContent = `
        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-100px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        
        @keyframes slideOutUp {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(-100px);
            }
        }
    `;
  document.head.appendChild(style);

  // Message de bienvenue dans la console pour les étudiants
  console.log(`
 Bienvenue dans l'Escape Room DevTools !

Vous êtes dans la console du navigateur. C'est un outil puissant pour les développeurs !

Quelques conseils :
- Utilisez F12 pour ouvrir/fermer les outils de développement
- L'onglet "Elements" vous montre le HTML de la page
- Vous pouvez modifier le CSS en direct dans le panneau "Styles"
- N'hésitez pas à expérimenter !

Bonne chance ! 
    `);
});
// Fonctions pour les énigmes de mot de passe

// Salle 3 - Code secret dans les commentaires
function checkPassword() {
  const input = document.getElementById('secretCode');
  const result = document.getElementById('passwordResult');
  const code = input.value.trim().toUpperCase();

  if (code === 'DEVTOOLS2025') {
    result.textContent = ' Code correct ! Redirection vers la salle 4...';
    result.className = 'password-result success';
    setTimeout(() => {
      window.location.href = 'room4.html';
    }, 2000);
  } else if (code === 'PASSWORD123') {
    result.textContent = " C'est une fausse piste ! Cherchez mieux...";
    result.className = 'password-result error';
  } else if (code === '') {
    result.textContent = ' Veuillez entrer un code';
    result.className = 'password-result error';
  } else {
    result.textContent =
      ' Code incorrect. Cherchez dans les commentaires HTML !';
    result.className = 'password-result error';
  }
}

// Salle 7 - Mot de passe dans les attributs HTML
function checkHiddenPassword() {
  const input = document.getElementById('hiddenPassword');
  const result = document.getElementById('hiddenPasswordResult');
  const password = input.value.trim().toUpperCase();

  if (password === 'INSPECTOR') {
    result.textContent = ' Accès autorisé ! Redirection vers la salle 8...';
    result.className = 'password-result success';
    setTimeout(() => {
      window.location.href = 'room8.html';
    }, 2000);
  } else if (password === 'WRONGPASS') {
    result.textContent = " C'est un faux attribut ! Regardez mieux...";
    result.className = 'password-result error';
  } else if (password === 'MOTDEPASSE') {
    result.textContent = ' Trop simple ! Cherchez dans les attributs HTML...';
    result.className = 'password-result error';
  } else if (password === '') {
    result.textContent = ' Veuillez entrer un mot de passe';
    result.className = 'password-result error';
  } else {
    result.textContent =
      ' Mot de passe incorrect. Inspectez les attributs HTML !';
    result.className = 'password-result error';
  }
}

// Salle 10 - Code final
function checkFinalCode() {
  const input = document.getElementById('finalCode');
  const result = document.getElementById('finalResult');
  const code = input.value.trim().toUpperCase();

  if (code === 'VICTORY2025') {
    result.textContent =
      ' VICTOIRE ! Redirection vers la page de victoire...';
    result.className = 'password-result success';
    setTimeout(() => {
      window.location.href = 'victory.html';
    }, 2000);
  } else if (code === 'FINAL123') {
    result.textContent =
      ' Fausse piste ! Le vrai code est dans les commentaires...';
    result.className = 'password-result error';
  } else if (code === '') {
    result.textContent = ' Veuillez entrer le code final';
    result.className = 'password-result error';
  } else {
    result.textContent =
      ' Code incorrect. Cherchez "VICTORY" dans les commentaires !';
    result.className = 'password-result error';
  }
}

// Permettre la validation avec la touche Entrée
document.addEventListener('DOMContentLoaded', function () {
  // Salle 3
  const secretCodeInput = document.getElementById('secretCode');
  if (secretCodeInput) {
    secretCodeInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        checkPassword();
      }
    });
  }

  // Salle 7
  const hiddenPasswordInput = document.getElementById('hiddenPassword');
  if (hiddenPasswordInput) {
    hiddenPasswordInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        checkHiddenPassword();
      }
    });
  }

  // Salle 10
  const finalCodeInput = document.getElementById('finalCode');
  if (finalCodeInput) {
    finalCodeInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        checkFinalCode();
      }
    });
  }
});

// Salle 5 - Vérification de la couleur du lien invisible
document.addEventListener('DOMContentLoaded', function () {
  const invisibleLink = document.getElementById('invisibleLink');
  if (invisibleLink) {
    // Fonction pour vérifier si la couleur du lien est différente du fond
    function checkLinkVisibility() {
      const linkStyle = window.getComputedStyle(invisibleLink);
      const linkColor = linkStyle.color;
      const backgroundColor =
        linkStyle.getPropertyValue('--dark-bg') || 'rgb(13, 17, 23)'; // Couleur du fond

      // Si la couleur du lien est différente du fond, le rendre cliquable
      if (linkColor !== backgroundColor && linkColor !== 'rgb(13, 17, 23)') {
        invisibleLink.style.pointerEvents = 'auto';
        invisibleLink.style.cursor = 'pointer';
      } else {
        invisibleLink.style.pointerEvents = 'none';
        invisibleLink.style.cursor = 'default';
      }
    }

    // Vérifier la couleur au chargement
    checkLinkVisibility();

    // Observer les changements de style (quand l'étudiant modifie via DevTools)
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'style'
        ) {
          checkLinkVisibility();
        }
      });
    });

    // Observer les changements d'attributs style
    observer.observe(invisibleLink, {
      attributes: true,
      attributeFilter: ['style'],
    });

    // Vérifier périodiquement les changements CSS (au cas où ils modifient via les DevTools)
    setInterval(checkLinkVisibility, 500);

    // Empêcher le clic si le lien n'est pas visible
    invisibleLink.addEventListener('click', function (e) {
      const linkStyle = window.getComputedStyle(invisibleLink);
      const linkColor = linkStyle.color;
      const backgroundColor = 'rgb(13, 17, 23)';

      if (linkColor === backgroundColor || linkColor === 'rgb(13, 17, 23)') {
        e.preventDefault();
        // Rediriger vers la page d'erreur avec des informations
        window.location.href =
          'error-blind-click.html?from=Salle 5&problem=Couleur invisible';
        return false;
      }
    });
  }
});

// Salle 6 - Vérification de la lisibilité du lien transformé
document.addEventListener('DOMContentLoaded', function () {
  const transformedLink = document.getElementById('transformedLink');
  if (transformedLink) {
    // Fonction pour vérifier si le lien est lisible (pas trop petit ou retourné)
    function checkLinkReadability() {
      const linkStyle = window.getComputedStyle(transformedLink);
      const transform = linkStyle.transform;

      // Vérifier si le lien a des transformations qui le rendent illisible
      const isReadable =
        !transform.includes('scale(0.05)') &&
        !transform.includes('rotate(180deg)') &&
        !transform.includes('translateX(-500px)') &&
        transform !== 'none'
          ? false
          : true;

      // Si le lien est lisible, le rendre cliquable
      if (isReadable || transform === 'none') {
        transformedLink.style.pointerEvents = 'auto';
        transformedLink.style.cursor = 'pointer';
      } else {
        transformedLink.style.pointerEvents = 'none';
        transformedLink.style.cursor = 'default';
      }
    }

    // Vérifier la lisibilité au chargement
    checkLinkReadability();

    // Observer les changements de style
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'style'
        ) {
          checkLinkReadability();
        }
      });
    });

    // Observer les changements d'attributs style
    observer.observe(transformedLink, {
      attributes: true,
      attributeFilter: ['style'],
    });

    // Vérifier périodiquement les changements CSS
    setInterval(checkLinkReadability, 500);

    // Empêcher le clic si le lien n'est pas lisible
    transformedLink.addEventListener('click', function (e) {
      const linkStyle = window.getComputedStyle(transformedLink);
      const transform = linkStyle.transform;

      if (
        transform.includes('scale(0.05)') ||
        transform.includes('rotate(180deg)') ||
        transform.includes('translateX(-500px)')
      ) {
        e.preventDefault();
        // Rediriger vers la page d'erreur avec des informations
        window.location.href =
          'error-blind-click.html?from=Salle 6&problem=Transformation CSS';
        return false;
      }
    });
  }
});

// Salle 9 - Vérification de l'opacité du lien transparent
document.addEventListener('DOMContentLoaded', function () {
  const transparentLink = document.getElementById('transparentLink');
  if (transparentLink) {
    // Fonction pour vérifier si le lien est visible (opacité > 0)
    function checkLinkOpacity() {
      const linkStyle = window.getComputedStyle(transparentLink);
      const opacity = parseFloat(linkStyle.opacity);

      // Si l'opacité est supérieure à 0, le lien devient cliquable
      if (opacity > 0) {
        transparentLink.style.pointerEvents = 'auto';
        transparentLink.style.cursor = 'pointer';
      } else {
        transparentLink.style.pointerEvents = 'none';
        transparentLink.style.cursor = 'default';
      }
    }

    // Vérifier l'opacité au chargement
    checkLinkOpacity();

    // Observer les changements de style
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'style'
        ) {
          checkLinkOpacity();
        }
      });
    });

    // Observer les changements d'attributs style
    observer.observe(transparentLink, {
      attributes: true,
      attributeFilter: ['style'],
    });

    // Vérifier périodiquement les changements CSS
    setInterval(checkLinkOpacity, 500);

    // Empêcher le clic si le lien est transparent
    transparentLink.addEventListener('click', function (e) {
      const linkStyle = window.getComputedStyle(transparentLink);
      const opacity = parseFloat(linkStyle.opacity);

      if (opacity === 0) {
        e.preventDefault();
        // Rediriger vers la page d'erreur avec des informations
        window.location.href =
          'error-blind-click.html?from=Salle 9&problem=Opacité nulle';
        return false;
      }
    });
  }
});
