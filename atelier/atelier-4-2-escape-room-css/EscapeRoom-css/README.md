#  DevTools Escape Room - Guide des Solutions

##  Vue d'ensemble

Cet escape room HTML/CSS/JS est conçu pour enseigner l'utilisation des outils de développement (DevTools) aux étudiants. Chaque salle présente un défi unique qui nécessite d'inspecter et modifier le code HTML/CSS.

##  Objectifs pédagogiques

- Maîtriser l'inspecteur d'éléments (F12)
- Comprendre la structure HTML et CSS
- Apprendre à modifier le CSS en direct
- Découvrir les commentaires HTML et attributs
- Résoudre des problèmes de positionnement et d'affichage

##  Page d'accueil (index.html)

**Objectif :** Introduction et explication des règles
**Action :** Cliquer sur "Commencer l'aventure"

---

##  Salle 1 - L'Élément Fantôme

**Défi :** Un lien vers la suite est caché avec `display: none`

### Solution :

1. Clic droit → "Inspecter l'élément"
2. Chercher l'élément avec la classe `.hidden-secret`
3. Dans les styles CSS, trouver `display: none`
4. Double-cliquer sur `none` et le changer en `block` ou `flex`
5. Le lien vers la salle 2 apparaît

**Propriété CSS à modifier :**

```css
.hidden-secret {
  display: none; /* Changer cette valeur */
}
```

**Changer `none` en :** `block`, `flex`, ou `inline-block`

---

##  Salle 2 - Les Commentaires Secrets

**Défi :** Le lien pointe vers une mauvaise page, le bon nom est dans les commentaires

### Solution :

1. Inspecter le HTML de la section
2. Lire les commentaires HTML `<!-- -->`
3. Trouver le commentaire : `<!-- ATTENTION: Le vrai lien est vers room3.html -->`
4. Modifier l'attribut `href` du lien de `wrong-page.html` vers `room3.html`

**Code à modifier :**

```html
<a href="wrong-page.html" class="broken-link"> Salle suivante</a>
```

**Changer en :**

```html
<a href="room3.html" class="broken-link"> Salle suivante</a>
```

**Commentaires importants :**

- `<!-- SECRET: Le nom de fichier correct est "room3.html" -->`
- `<!-- ATTENTION: Le vrai lien est vers room3.html -->`
- `<!-- FAUSSE PISTE: Ne pas utiliser "wrong-page.html" -->`

---

##  Salle 3 - Le Code Secret

**Défi :** Trouver un code secret dans les commentaires HTML

### Solution :

1. Inspecter le HTML de la page
2. Chercher dans les commentaires HTML
3. Trouver : `<!-- SECRET_CODE: DEVTOOLS2025 -->`
4. Entrer `DEVTOOLS2025` dans le champ de texte
5. Cliquer sur "Valider" ou appuyer sur Entrée

**Code secret :** `DEVTOOLS2025`

**Fausses pistes :**

- `<!-- FAUSSE_PISTE: Ne pas utiliser "PASSWORD123" -->`
- Commentaire avec `PASSWORD123`

---

##  Salle 4 - Le Lien Bloqué

**Défi :** Un élément invisible bloque le clic sur un lien

### Solution :

1. Inspecter le lien qui ne fonctionne pas
2. Trouver l'élément `.invisible-blocker`
3. Dans les styles CSS, trouver `z-index: 999`
4. Changer la valeur en `z-index: -1` ou `z-index: 0`
5. Le lien devient cliquable

**Propriété CSS à modifier :**

```css
.invisible-blocker {
  z-index: 999; /* Changer cette valeur */
}
```

---

##  Salle 5 - Le Texte Fantôme

**Défi :** Un lien est invisible car sa couleur est identique au fond

### Solution :

1. Inspecter la zone suspecte
2. Trouver l'élément `.invisible-link`
3. Dans les styles CSS, voir que `color` est identique au fond
4. Double-cliquer sur la valeur de `color` et la changer (ex: `#00ff41`, `white`, `red`)
5. Le lien devient automatiquement cliquable une fois la couleur changée

**Propriété CSS à modifier :**

```css
.invisible-link {
  color: var(--dark-bg); /* Changer cette valeur */
}
```

**Changer la valeur en :** `#00ff41`, `white`, `red`, `yellow`, etc.

---

##  Salle 6 - La Transformation CSS

**Défi :** Un lien est déformé par des transformations CSS

### Solution :

1. Inspecter l'élément déformé `.transformed-link`
2. Dans les styles CSS, trouver `transform: scale(0.05) rotate(180deg) translateX(-500px)`
3. Modifier les valeurs pour rendre le lien lisible :
   - Changer `scale(0.05)` en `scale(1)`
   - Changer `rotate(180deg)` en `rotate(0deg)`
   - Changer `translateX(-500px)` en `translateX(0px)`

**Propriété CSS à modifier :**

```css
.transformed-link {
  transform: scale(0.05) rotate(180deg) translateX(-500px);
}
```

**Modifier les valeurs :** `scale(1) rotate(0deg) translateX(0px)` ou `none`

---

##  Salle 7 - Le Mot de Passe Caché

**Défi :** Trouver un mot de passe dans les attributs HTML

### Solution :

1. Inspecter l'élément `.password-container`
2. Regarder ses attributs HTML (pas seulement les classes)
3. Trouver l'attribut `data-password="INSPECTOR"`
4. Entrer `INSPECTOR` dans le champ de mot de passe
5. Cliquer sur "Déverrouiller"

**Attribut à trouver :**

```html
<div
  class="password-container"
  data-password="INSPECTOR"
  data-fake="wrongpass"
></div>
```

**Mot de passe :** `INSPECTOR`

---

##  Salle 8 - L'Élément Égaré

**Défi :** Un lien est positionné hors de l'écran

### Solution :

1. Inspecter les éléments de la section
2. Trouver l'élément `.off-screen-link`
3. Dans les styles CSS, voir `left: -2000px` et `top: -2000px`
4. Changer les valeurs pour ramener l'élément visible :
   - Changer `left: -2000px` en `left: 0px` ou `left: 50px`
   - Changer `top: -2000px` en `top: 0px` ou `top: 50px`

**Propriétés CSS à modifier :**

```css
.off-screen-link {
  left: -2000px; /* Changer cette valeur */
  top: -2000px; /* Changer cette valeur */
}
```

---

##  Salle 9 - Le Fantôme Transparent

**Défi :** Un lien est complètement transparent (opacité = 0)

### Solution :

1. Inspecter la zone suspecte
2. Trouver l'élément `.transparent-link`
3. Dans les styles CSS, voir `opacity: 0`
4. Double-cliquer sur `0` et le changer en `1` ou `0.8`

**Propriété CSS à modifier :**

```css
.transparent-link {
  opacity: 0; /* Changer cette valeur */
}
```

**Changer `0` en :** `1`, `0.8`, `0.5`, etc. (toute valeur > 0)

---

##  Salle 10 - Le Boss Final

**Défi :** Trouver le code final dans les commentaires HTML

### Solution :

1. Inspecter le HTML de la page
2. Chercher dans les commentaires HTML
3. Trouver : `<!-- CODE_FINAL: VICTORY2025 -->`
4. Entrer `VICTORY2025` dans le champ de texte
5. Cliquer sur "VICTOIRE"

**Code final :** `VICTORY2025`

---

##  Page de Victoire

**Contenu :** Félicitations avec effet de confettis et récapitulatif des compétences acquises.

---

##  Conseils pour l'enseignant

### Raccourcis utiles à enseigner :

- **F12** : Ouvrir/fermer les DevTools
- **Ctrl+Shift+C** : Mode sélection d'élément
- **Double-clic** sur une valeur CSS pour la modifier
- **Clic droit** sur un élément → "Edit as HTML"

### Compétences développées :

1.  Inspection d'éléments HTML
2.  Modification de CSS en direct
3.  Découverte d'éléments cachés
4.  Lecture de commentaires HTML
5.  Correction de liens cassés
6.  Debug de positionnements CSS
7.  Manipulation des couches (z-index)
8.  Révélation d'éléments invisibles
9.  Gestion des transformations CSS
10.  Résolution de problèmes d'opacité

### Guide dans la console :

Un guide complet avec toutes les solutions s'affiche automatiquement dans la console du navigateur quand les DevTools sont ouverts.

### Structure des fichiers :

```
├── index.html          # Page d'accueil
├── room1.html          # Salle 1 - display: none
├── room2.html          # Salle 2 - lien cassé
├── room3.html          # Salle 3 - code secret
├── room4.html          # Salle 4 - élément bloquant
├── room5.html          # Salle 5 - texte invisible
├── room6.html          # Salle 6 - transformation CSS
├── room7.html          # Salle 7 - mot de passe attribut
├── room8.html          # Salle 8 - position hors écran
├── room9.html          # Salle 9 - opacité zéro
├── room10.html         # Salle 10 - boss final
├── victory.html        # Page de victoire
├── wrong-page.html     # Page d'erreur (salle 2)
├── error-blind-click.html # Page d'erreur pour clics à l'aveugle
├── style.css           # Styles globaux
├── game.js             # Logique JavaScript
└── README.md           # Ce guide
```

---

##  Utilisation en classe

1. **Préparation :** Montrer comment ouvrir les DevTools (F12)
2. **Démonstration :** Faire la salle 1 ensemble
3. **Pratique guidée :** Laisser les étudiants faire les salles 2-3
4. **Travail autonome :** Salles 4-10 en autonomie
5. **Débriefing :** Discuter des techniques apprises

**Durée estimée :** 1h30 à 2h selon le niveau des étudiants.

**Bon atelier ! **
