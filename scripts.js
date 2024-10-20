function showExercises(type) {
    const exercisesSection = document.getElementById('exercises-section');
    let exercisesHTML = '';

    switch (type) {
        case 'fisico':
            exercisesHTML = `
                <h2>Ejercicios de Físico</h2>
                <p>1. Carrera continua: Corre a un ritmo constante durante 30 minutos.</p>
                <p>2. Series de sprints: Corre 10 sprints de 50 metros con descanso de 1 minuto.</p>
                <p>3. Ejercicios de fuerza: Flexiones, sentadillas y planchas.</p>
                <p>4. Saltos pliométricos: Salta a máxima altura durante 30 segundos.</p>
                <p>5. Correr en cuestas: Corre por una pendiente pronunciada durante 5 series.</p>
            `;
            break;
        case 'tecnica':
            exercisesHTML = `
                <h2>Ejercicios de Técnica</h2>
                <p>1. Control y pase con ambos pies.</p>
                <p>2. Conducción de balón en zigzag.</p>
                <p>3. Regates contra conos o defensores.</p>
                <p>4. Toques de balón con el empeine y parte interna.</p>
                <p>5. Pase de precisión a diferentes distancias.</p>
            `;
            break;
        case 'definicion':
            exercisesHTML = `
                <h2>Ejercicios de Definición</h2>
                <p>1. Finalización uno contra uno con el portero.</p>
                <p>2. Tiros de larga distancia.</p>
                <p>3. Remates de cabeza a portería.</p>
                <p>4. Finalización desde el punto de penalti.</p>
                <p>5. Tiros con ambas piernas a corta distancia.</p>
            `;
            break;
        case 'resistencia':
            exercisesHTML = `
                <h2>Ejercicios de Resistencia</h2>
                <p>1. Carrera continua durante 45 minutos.</p>
                <p>2. Interválico 4x4: Corre 4 minutos a alta intensidad, descansa 4 minutos.</p>
                <p>3. Series de fartlek: Alterna entre ritmos rápido y lento durante 30 minutos.</p>
                <p>4. Carrera en el campo a distintas velocidades.</p>
                <p>5. Ejercicios con cambios de ritmo cada 100 metros.</p>
            `;
            break;
        default:
            exercisesHTML = '';
    }
    exercisesSection.innerHTML = exercisesHTML;
}
function playAudio(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}

// Función para abrir/cerrar el cajón de la descripción al hacer clic en la imagen
function toggleDescription(id) {
    var descriptionBox = document.getElementById(id);
    
    // Comprueba si está visible
    if (descriptionBox.style.display === "block") {
        descriptionBox.style.display = "none"; // Si está abierto, lo cierra
    } else {
        descriptionBox.style.display = "block"; // Si está cerrado, lo abre
    }
}

