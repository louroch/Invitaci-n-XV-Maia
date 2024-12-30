document.addEventListener('DOMContentLoaded', () => {
    // Música de fondo
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
  if (isMusicPlaying) {
    backgroundMusic.pause();
    musicToggle.classList.remove('animate-pulse');
  } else {
    backgroundMusic.play();
    musicToggle.classList.add('animate-pulse');
  }
  isMusicPlaying = !isMusicPlaying;
});

// Asegurarse de que la música se reproduce solo después de la interacción del usuario
document.body.addEventListener('click', () => {
  if (!isMusicPlaying) {
    backgroundMusic.play();
    musicToggle.classList.add('animate-pulse');
    isMusicPlaying = true;
  }
}, { once: true });
    const DateTime = luxon.DateTime;

    // Configuración del evento
    const eventDate = DateTime.local(2025, 1, 18, 21, 30); // Fecha actualizada
    const eventDateElement = document.getElementById('event-date');
    const eventTimeElement = document.getElementById('event-time');
    eventDateElement.textContent = eventDate.toLocaleString(DateTime.DATE_FULL);
    eventTimeElement.textContent = eventDate.toLocaleString(DateTime.TIME_SIMPLE);

    // Cuenta regresiva
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateCountdown() {
        const now = DateTime.local();
        const diff = eventDate.diff(now, ['days', 'hours', 'minutes', 'seconds']);

        // Actualizar los valores individuales
        daysElement.textContent = Math.floor(diff.days);
        hoursElement.textContent = Math.floor(diff.hours);
        minutesElement.textContent = Math.floor(diff.minutes);
        secondsElement.textContent = Math.floor(diff.seconds);
    }

    setInterval(updateCountdown, 1000);


    if (calendarButton) {
        calendarButton.addEventListener('click', () => {
            const eventDetails = {
                text: 'MIS XV MAIA',
                dates: '20250118T213000/20250119T023000', // Fecha actualizada
                details: 'Celebración de los 15 años de MAIA',
                location: 'Salon La Justina. San Martin 50, Alderetes, Tucumán.',
                reminders: [
                    ['2', 'days']
                ]
            };

            const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.text)}&dates=${eventDetails.dates}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}&sf=true&output=xml&reminders=${eventDetails.reminders[0][0]}%2C${eventDetails.reminders[0][1]}`;

            window.open(calendarUrl, '_blank');
        });
    }
});
