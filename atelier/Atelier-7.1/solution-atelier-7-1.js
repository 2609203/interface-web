// Atelier 7.1 - DOM, sélecteurs et manipulation
// Renommer ce fichier app.js et le placer près de atelier-7-1.html.
// Les opérations s'exécutent au chargement, sans événements.

// Exercice 1 - Sélecteurs
{
  const premier = document.querySelector('#ex1 .zone p');
  premier.style.color = 'green';
  document.querySelectorAll('#ex1 .fruit').forEach((fruit) => {
    fruit.classList.add('actif');
  });
}

// Exercice 2 - Parents, enfants et voisins
{
  const liste = document.querySelector('#fruits2');
  document.querySelector('#out2').textContent =
    'Premier : ' + liste.firstElementChild.textContent +
    ' | Dernier : ' + liste.lastElementChild.textContent +
    ' | Voisin du premier : ' + liste.children[0].nextElementSibling.textContent;
}

// Exercice 3 - Texte et HTML
{
  const bloc = document.querySelector('#bloc3');
  document.querySelector('#log3').textContent =
    'textContent : ' + bloc.textContent.trim() +
    ' | innerHTML : ' + bloc.innerHTML.trim();
  bloc.textContent = 'Du texte brut : <strong>ceci reste du texte</strong>.';
  // Le second remplacement devient le résultat final visible.
  bloc.innerHTML = 'Du HTML connu : <strong>ceci est en gras</strong>.';
  // Ne pas utiliser innerHTML pour insérer une saisie utilisateur.
}

// Exercice 4 - Styles
{
  const boite = document.querySelector('#box4');
  boite.style.padding = '12px';
  document.querySelector('#out4').textContent =
    'Padding calculé : ' + getComputedStyle(boite).padding;
}

// Exercice 5 - Attributs
{
  const image = document.querySelector('#img5');
  if (!image.hasAttribute('alt') || image.getAttribute('alt').trim() === '') {
    image.setAttribute('alt', 'Image de démonstration');
  }
  image.setAttribute('src', 'https://picsum.photos/seed/dom2/200/130');
  document.querySelector('#out5').textContent =
    'src="' + image.getAttribute('src') + '", alt="' + image.getAttribute('alt') + '"';
}

// Exercice 6 - Création et insertion
{
  const liste = document.querySelector('#liste6');
  const fruits = ['Pomme', 'Banane', 'Orange'];
  fruits.forEach((fruit) => {
    const item = document.createElement('li');
    item.textContent = fruit;
    liste.append(item);
  });
  const kiwi = document.createElement('li');
  kiwi.textContent = 'Kiwi';
  liste.prepend(kiwi);
  const debut = document.createElement('p');
  debut.textContent = 'Début de la liste';
  liste.before(debut);
  const fin = document.createElement('p');
  fin.textContent = 'Fin de la liste';
  liste.after(fin);
}

// Exercice 7 - Suppression et remplacement
{
  document.querySelector('#obsolete7').remove();
  const succes = document.createElement('div');
  succes.textContent = 'Profil complété';
  succes.classList.add('card', 'ok');
  succes.setAttribute('role', 'status');
  document.querySelector('#alerte7').replaceWith(succes);
}