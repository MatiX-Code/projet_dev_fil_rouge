// --------- Menu Burger ------------------------

let burger = document.querySelector("#burger");
let nav = document.querySelector("#nav-links");

burger.addEventListener("click",() =>{
    nav.classList.toggle("open");
})

//--------- Agenda----------------------------
document.addEventListener('DOMContentLoaded', function() {
    // -------------------------------------------------------------
    // AJOUT 1 : Récupération des éléments HTML de la modale dans le DOM
    // -------------------------------------------------------------

    const modal = document.getElementById('eventModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalHour = document.getElementById('modalHour');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close-btn');
    
    //Récupération de l'élément Calendrier dans le HTML avec création d'une nouvelle class
    const calendarEl = document.getElementById('calendrier');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'fr',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: ''
        },
        buttons: {
            today: {
                text: "Aujourd'hui" // Force le texte affiché en français
            }
        },
        //  Injection d'une classe personnalisée sur le jour d'aujourd'hui
        dayCellClass: function(state) {
            if (state.isToday) {
                return 'mon-jour-actuel'; // Le nom de classe que nous allons styliser en CSS
            }
            return '';
        },
        events: [
            {
                title: 'Tout Conte Fée',
                start: '2026-09-15',
                color: '#64DFDF',
                textColor: '#111111'
            }
        ],
        // -------------------------------------------------------------
        // AJOUT 2 : Détection du clic sur un événement
        // -------------------------------------------------------------
        eventClick: function(info) {
            // Empêche la redirection si l'événement contient un lien URL
            info.jsEvent.preventDefault();

            // Remplissage des textes dans la modale avec les infos de l'événement cliqué
            modalTitle.textContent = info.event.title;
            
            // Formatage de la date en français (ex: 15/09/2026)
            if (info.event.start) {
                modalDate.textContent = 'Date : ' + info.event.start.toLocaleDateString('fr-FR');
            }
            modalHour.textContent = "A partir de 14H00";
            
            // Récupération de la description (rangée dans extendedProps)
            modalDescription.textContent = info.event.extendedProps.description || "Fanny, trentenaire, est toujours célibataire.\nPetite, on lui contaite de belles histoires de princesses, de châteaux enchantés et de beaux chevaliers...Et si le prince charmant n'existait pas ... Si Walt Disney était un gros mytho ? Lui aurait-on menti durant toutes ces années ?\nQuestion existentielle d'une génération à cheval entre deux époques, l'une convetionnelle et l'autre anti conformiste : \" Est-il indispensable de fonder une famille pour réussir sa vie ? \".\nC'est dans la peau d'une multitutde de personnages hauts en couleur, au travers de sketches désopilants, et parfois même en chanson, que Fanny essaiera de trouver les réponses aux nombreuses questions qu'elle se pose.";

            // Affichage de la modale
            modal.style.display = 'flex';
        }
    });
        // -------------------------------------------------------------
        // AJOUT 3 : Gestion de la fermeture de la modale ❌
        // -------------------------------------------------------------
        
        // 1. On écoute le clic sur TOUTE la page
        document.addEventListener('click', function(event) {
            
            // Clic sur la croix ❌ (on vérifie si l'élément cliqué a la classe close-btn)
            if (event.target.classList.contains('close-btn')) {
                modal.style.display = 'none';
            }

            // Clic sur le fond sombre en dehors de la boîte 🌓
            if (event.target === modal) {
                modal.style.display = 'none';
            }
    });
    calendar.render();
});

