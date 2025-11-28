// Récupérer les éléments du DOM
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

/* Met à jour l'affichage de l'heure (sans les secondes) et de la date.
   - Affiche l'heure au format HH:MM (avec zéro devant si nécessaire)
   - Met à jour la date avec la locale par défaut
*/
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}`;
  dateElement.textContent = now.toLocaleDateString('fr-FR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
}

// Mise à jour initiale
updateTime();

// Calculer le délai jusqu'à la prochaine minute pleine, puis lancer
// un intervalle toutes les 60000 ms (1 minute) pour économiser les ressources.
const now = new Date();
const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
setTimeout(() => {
  updateTime();
  setInterval(updateTime, 60000);
}, msUntilNextMinute);