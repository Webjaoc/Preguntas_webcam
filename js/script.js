const video = document.getElementById("video");
const startBtn = document.getElementById("startBtn");
const timerText = document.getElementById("timer");
const questionText = document.getElementById("question");
const progressBar = document.getElementById("progress-bar");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Preguntas (máx 8)
const questions = [
    "#1 ¿Quién eres y a qué te dedicas?",
    "#2 ¿Cuáles son tus principales fortalezas?",
    "#3 ¿Cuál ha sido tu mayor reto profesional?",
    "#4 ¿Cómo manejas el estrés?",
    "#5 ¿Dónde te ves en 5 años?",
    "#6 ¿Qué te motiva a dar lo mejor de ti?",
    "#7 ¿Cómo trabajas en equipo?",
    "#8 ¿Por qué deberíamos contratarte?",
    "#9 ¿Cuál consideras que es tu mayor debilidad?",
    "#10 ¿Cómo manejas los conflictos en el trabajo?",

    "#11 ¿Qué logro profesional te enorgullece más?",
    "#12 ¿Cómo organizas tu tiempo y prioridades?",
    "#13 ¿Cómo reaccionas ante la presión?",
    "#14 ¿Qué haces cuando no estás de acuerdo con una decisión?",
    "#15 ¿Cómo manejas los errores propios?",
    "#16 ¿Qué esperas de un buen líder?",
    "#17 ¿Prefieres trabajar solo o en equipo? ¿Por qué?",
    "#18 ¿Cómo te adaptas a los cambios?",
    "#19 ¿Qué te diferencia de otros candidatos?",
    "#20 ¿Cómo defines el éxito profesional?",

    "#21 ¿Qué haces para mantenerte actualizado en tu área?",
    "#22 ¿Cómo manejas la crítica constructiva?",
    "#23 ¿Qué tipo de ambiente laboral prefieres?",
    "#24 ¿Cómo tomas decisiones importantes?",
    "#25 ¿Qué harías si no estás de acuerdo con tu jefe?",
    "#26 ¿Cómo reaccionas ante un fracaso?",
    "#27 ¿Qué te impulsa a mejorar constantemente?",
    "#28 ¿Cómo manejas múltiples tareas al mismo tiempo?",
    "#29 ¿Qué valoras más en un equipo de trabajo?",
    "#30 ¿Qué experiencia laboral te ha marcado más?",

    "#31 ¿Cómo manejas situaciones de alta presión?",
    "#32 ¿Qué te motiva a levantarte cada día para trabajar?",
    "#33 ¿Cómo defines una buena comunicación?",
    "#34 ¿Qué haces cuando algo no sale como lo planeaste?",
    "#35 ¿Cómo manejas los plazos ajustados?",
    "#36 ¿Qué opinas del trabajo bajo presión?",
    "#37 ¿Cómo gestionas tu energía durante el día?",
    "#38 ¿Qué te inspira profesionalmente?",
    "#39 ¿Cómo manejas el rechazo?",
    "#40 ¿Qué tipo de proyectos disfrutas más?",

    "#41 ¿Cómo defines el trabajo bien hecho?",
    "#42 ¿Qué haces para mejorar tus habilidades?",
    "#43 ¿Cómo manejas la incertidumbre?",
    "#44 ¿Qué harías si no tienes clara una tarea?",
    "#45 ¿Cómo manejas los cambios inesperados?",
    "#46 ¿Qué significa para ti la responsabilidad?",
    "#47 ¿Cómo manejas la frustración?",
    "#48 ¿Qué papel sueles tomar en un equipo?",
    "#49 ¿Cómo defines tu ética profesional?",
    "#50 ¿Qué aprendiste de tu último trabajo?",

    "#51 ¿Cómo te preparas para enfrentar nuevos retos?",
    "#52 ¿Qué harías si cometes un error importante?",
    "#53 ¿Cómo manejas la presión del tiempo?",
    "#54 ¿Qué te motiva más: el reconocimiento o el aprendizaje?",
    "#55 ¿Cómo te adaptas a nuevas tecnologías?",
    "#56 ¿Qué haces cuando no tienes motivación?",
    "#57 ¿Cómo manejas opiniones diferentes a la tuya?",
    "#58 ¿Qué significa para ti el compromiso?",
    "#59 ¿Cómo defines un buen ambiente laboral?",
    "#60 ¿Qué esperas de tu crecimiento profesional?",

    "#61 ¿Cómo manejas tareas repetitivas?",
    "#62 ¿Qué te impulsa a mejorar cada día?",
    "#63 ¿Cómo manejas la toma de decisiones difíciles?",
    "#64 ¿Qué haces cuando te enfrentas a un problema complejo?",
    "#65 ¿Cómo defines la productividad?",
    "#66 ¿Qué te motiva a aprender cosas nuevas?",
    "#67 ¿Cómo reaccionas ante los cambios de planes?",
    "#68 ¿Qué haces para mantener el enfoque?",
    "#69 ¿Cómo manejas el cansancio mental?",
    "#70 ¿Qué tipo de desafíos disfrutas más?",

    "#71 ¿Cómo defines tu estilo de trabajo?",
    "#72 ¿Qué haces cuando no entiendes algo?",
    "#73 ¿Cómo manejas el equilibrio entre trabajo y vida personal?",
    "#74 ¿Qué te ayuda a mantener la motivación?",
    "#75 ¿Cómo reaccionas ante una crítica negativa?",
    "#76 ¿Qué significa para ti el éxito personal?",
    "#77 ¿Cómo manejas situaciones incómodas?",
    "#78 ¿Qué haces para mejorar como profesional?",
    "#79 ¿Cómo defines un buen liderazgo?",
    "#80 ¿Qué valores consideras indispensables en el trabajo?",

    "#81 ¿Cómo te enfrentas a nuevos desafíos?",
    "#82 ¿Qué haces cuando tienes demasiadas responsabilidades?",
    "#83 ¿Cómo manejas el estrés prolongado?",
    "#84 ¿Qué te motiva a superar obstáculos?",
    "#85 ¿Cómo defines la resiliencia?",
    "#86 ¿Qué haces cuando algo no depende de ti?",
    "#87 ¿Cómo manejas la presión externa?",
    "#88 ¿Qué te impulsa a seguir aprendiendo?",
    "#89 ¿Cómo defines el compromiso profesional?",
    "#90 ¿Qué te ayuda a mantener la calma?",

    "#91 ¿Cómo reaccionas ante la incertidumbre laboral?",
    "#92 ¿Qué haces cuando fallas en un objetivo?",
    "#93 ¿Cómo manejas la autocrítica?",
    "#94 ¿Qué te motiva a mejorar tus resultados?",
    "#95 ¿Cómo defines una buena toma de decisiones?",
    "#96 ¿Qué haces para mantener una actitud positiva?",
    "#97 ¿Cómo manejas los errores ajenos?",
    "#98 ¿Qué te inspira a dar lo mejor de ti?",
    "#99 ¿Cómo defines tu propósito profesional?",
    "#100 ¿Por qué consideras que eres la persona adecuada para este reto?"
];



let currentQuestion = 0;
let mediaRecorder;
let recordedChunks = [];
let totalTime = 480; // 8 minutos en segundos
let timeLeft = totalTime;
let interval;

nextBtn.addEventListener("click", () =>{
    contador_increment();
       
});
function contador_increment(){
    let contador = document.querySelector(".contador_preguntas");
    if (contador.innerHTML < 8){
        contador.innerHTML++; 
        console.log(contador);
    }if (contador.innerHTML == 8){
        nextBtn.disabled = true;
        prevBtn.disabled = false;    
    }else{
        nextBtn.disabled = false;    
    }
}
prevBtn.addEventListener("click", ()=>{
    contador_decrement();       
});

function contador_decrement(){
    let contador = document.querySelector(".contador_preguntas");
    if (contador.innerHTML > 1){
        contador.innerHTML--; 
    }if (contador.innerHTML == 1){
        prevBtn.disabled = true;
        nextBtn.disabled = false;    
    }else{
        prevBtn.disabled = false;    
    } 
}

// 📷 Webcam
async function startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    });
    video.srcObject = stream;

    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = e => recordedChunks.push(e.data);
    mediaRecorder.onstop = downloadVideo;
    video.textContent= stream;
}

// ⏺️ Descargar video
function downloadVideo() {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "entrevista.webm";
    a.click();
}

//  Timer + progreso
function startTimer() {
    interval = setInterval(() => {
        timeLeft--;

        let minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        let seconds = String(timeLeft % 60).padStart(2, "0");

        timerText.textContent = `${minutes}:${seconds}`;

        let progress = ((totalTime - timeLeft) / totalTime) * 100;
        progressBar.style.width = `${progress}%`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            mediaRecorder.stop();
            questionText.textContent ="FERTIG!!!";
            nextBtn.disabled = true;
            prevBtn.disabled = true;
            startBtn.style.display = "none";
        }
    }, 1000);

}
let questionHistory = [];   // historial de índices
let historyIndex = 0;     // posición actual en el historial
//  Mostrar pregunta
function updateQuestion() {
    questionText.textContent = questions[questionHistory[historyIndex]];
}


//Función para obtener pregunta aleatoria NO repetida
function getRandomQuestionIndex() {
    if (questionHistory.length === questions.length) 
        return null;

    let index;
    do {
        index = Math.floor(Math.random() * questions.length);
    } while (questionHistory.includes(index));

    return index;
}
function updateQuestion() {
    if (historyIndex < 0 || historyIndex >= questionHistory.length) return;
    questionText.textContent = questions[questionHistory[historyIndex]];
}



//  START
startBtn.addEventListener("click", async () => {
    startBtn.disabled = true;
    
    

    const firstIndex = getRandomQuestionIndex();

    if (firstIndex === null) {
        questionText.textContent ="Keine Fragen verfügbar";
        return;
    }

    questionHistory = [firstIndex];
    historyIndex = 0;
    updateQuestion();

    await startCamera();
    mediaRecorder.start();
    startTimer();
    startBtn.style.display = "none";
    
});


// ➡️ Siguiente
nextBtn.addEventListener("click", () => {

    // Si estamos navegando hacia adelante dentro del historial
    if (historyIndex < questionHistory.length - 1) {
        historyIndex++;
        updateQuestion();
        return;
    }

    // Obtener nueva pregunta aleatoria
    const randomIndex = getRandomQuestionIndex();

    if (randomIndex === null) {
        alert("No hay más preguntas disponibles");
        return;
    }

    questionHistory.push(randomIndex);
    historyIndex++;
    updateQuestion();
});


// ⬅️ Anterior
prevBtn.addEventListener("click", () => {
    if (historyIndex > 0) {
        historyIndex--;
        updateQuestion();
    }
});

