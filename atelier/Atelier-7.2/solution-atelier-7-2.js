// Atelier 7.2 - Événements JavaScript
// Renommer ce fichier app.js et le placer près de atelier-7-2.html.

// Exercice 1 - Clic, lecture des champs et validation
{
  const nom = document.querySelector('#nom');
  const age = document.querySelector('#age');
  const sortie = document.querySelector('#out1');
  document.querySelector('#btn1').addEventListener('click', () => {
    const valeurNom = nom.value.trim();
    const texteAge = age.value.trim();
    const valeurAge = Number(texteAge);
    if (valeurNom === '') {
      sortie.textContent = 'Erreur : le nom est requis.';
    } else if (texteAge === '' || !Number.isFinite(valeurAge) || valeurAge < 0) {
      sortie.textContent = 'Erreur : l’âge doit être un nombre ≥ 0.';
    } else {
      sortie.textContent = 'Bonjour, ' + valeurNom + ' (' + valeurAge + ')';
    }
  });
}

// Exercice 2 - Clic et classes CSS
{
  const carte = document.querySelector('#carte2');
  document.querySelector('#btn2').addEventListener('click', () => {
    carte.classList.remove('cache');
    carte.classList.toggle('ouvert');
    const etat = carte.classList.contains('ouvert') ? 'ouvert' : 'fermé';
    document.querySelector('#out2').textContent = 'État de la carte : ' + etat;
  });
}

// Exercice 3 - Deux écouteurs et une liste dynamique
{
  const champ = document.querySelector('#item3');
  const liste = document.querySelector('#liste3');
  const debut = document.createElement('p');
  debut.textContent = 'Début de la liste';
  liste.before(debut);
  const fin = document.createElement('p');
  fin.textContent = 'Fin de la liste';
  liste.after(fin);

  function creerItem() {
    const texte = champ.value.trim();
    if (texte === '') return null;
    const item = document.createElement('li');
    item.textContent = texte;
    champ.value = '';
    champ.focus();
    return item;
  }

  document.querySelector('#addHead3').addEventListener('click', () => {
    const item = creerItem();
    if (item) liste.prepend(item);
  });
  document.querySelector('#addTail3').addEventListener('click', () => {
    const item = creerItem();
    if (item) liste.append(item);
  });
}

// Exercice 4 - Clics, submit et preventDefault
{
  document.querySelector('#del4').addEventListener('click', () => {
    const alerte = document.querySelector('#alerte4');
    if (alerte) alerte.remove();
  });

  document.querySelector('#rep4').addEventListener('click', () => {
    const alerte = document.querySelector('#alerte4');
    if (!alerte) return;
    const succes = document.createElement('div');
    succes.classList.add('card', 'ok');
    succes.setAttribute('role', 'status');
    succes.textContent = 'Succès : profil complété.';
    alerte.replaceWith(succes);
  });

  document.querySelector('#form4').addEventListener('submit', (event) => {
    event.preventDefault();
    const courriel = document.querySelector('#email4').value.trim();
    // Validation pédagogique fournie dans l'énoncé.
    const courrielValide = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(courriel);
    const sortie = document.querySelector('#out4');
    sortie.textContent = courrielValide
      ? 'Courriel valide'
      : 'Courriel invalide. Exemple attendu : nom@domaine.com';
    sortie.classList.toggle('ok', courrielValide);
    sortie.classList.toggle('warn', !courrielValide);
  });
}