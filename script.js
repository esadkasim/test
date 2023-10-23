const quizData = [
    {
        question: "dünyanın en akıllı en olgun kadını kim?",
        a: "ben",
        b: "Elif",
        c: "elif andiç",
        d: "Esadın",
        correct: "d",
    },
    {
        question: "dünyanın en anlayışlı kadını kim peki ?",
        a: "ben",
        b: "Elif",
        c: "elif andiç",
        d: "Esadın",
        correct: "d",
    },
    {
        question: "en mükkemel ?",
        a: "ben",
        b: "Elif",
        c: "elif andiç",
        d: "Esadın",
        correct: "d",
    },
    {
        question: "prensesim kim?",
        a: "ben",
        b: "Elif",
        c: "elif andiç",
        d: "Esadın",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const soruNum=document.getElementById('soruNum')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    soruNum.innerHTML=currentQuiz+1
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           <div id= "pdfdiv"><a id="pdf" download="sertifika" href="./Sertifika.pdf">sertifikanı indir</a></div>
           `
       }
    }
})


var scnd=119;

var countdiv=document.getElementById('countdown');
var bar=document.getElementById('bar')
countdown=setInterval(function(){
    
    passscn()
},1000);
function passscn(){
    var min=Math.floor(scnd/60)
var sec = scnd%60
countdiv.innerHTML=min+":"+sec
if(scnd<10){
    sec= "0"+ scnd%60
}
if(scnd>0){
    scnd=scnd-1
}
else{
    clearInterval
    countdiv.innerHTML="zamanınız bitti"
    bar.style.backgroundColor="red"
}

}