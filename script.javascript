// Récupérer les éléments du DOM
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

/* Fonction pour mettre à jour l'heure et la date
   Cette fonction s'exécute toutes les secondes */
function updateTime() {
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
  dateElement.textContent = now.toLocaleDateString();
}

// Mettre à jour initialement
updateTime();

// Mettre à jour chaque seconde
setInterval(updateTime, 1000);