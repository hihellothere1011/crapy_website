const button = document.getElementById("PLAYbutton");

const color = [
    {name: "red", value: '#FF6B6B'},
    {name: "blue", value: '#4abbf8'},
    {name: "yellow", value: '#ffe100'},
    {name: "green", value: '#4fbd2d'},
    {name: "purple", value: '#942dbd'}
];

function changeColor() {
    const random = color[Math.floor(Math.random()*5)];
    document.body.style.backgroundColor = random.value;
};

button.addEventListener("click", changeColor);

const question = document.getElementById('question');
const answer = document.getElementById('answer');
const toggle = document.getElementById('toggle');
const faq = document.getElementById("faq")

faq.addEventListener('click', function() {
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        toggle.textContent = '(⁎⁍̴̛ᴗ⁍̴̛⁎)';
    } else {
        answer.style.display = 'none';
        toggle.textContent = '$$$';
    }
});

const page_change = document.getElementById("toPage2")
const Page1 = document.getElementById("Page1")
const Page2 = document.getElementById("Page2")
const buttontext  = document.getElementById("text")

Page2.style.display = "none"
function ChangePage() {
    if (Page2.style.display === "none" ||  Page2.style.display === "") {
        Page2.style.display = "block"
        Page1.style.display = "none"
        buttontext.textContent = "Go back to main page"
    } else {
        Page2.style.display = "none"
        Page1.style.display = "block"
        buttontext.textContent = "Page2 => Click here!"
    }
}

page_change.addEventListener("click", ChangePage)



const anime1 = document.getElementById("anime1")
const anime2 = document.getElementById("anime2")
const lever = document.getElementById("lever")

anime1.style.display = "none"

function animation() {
    if (anime1.style.display === "none") {
        anime1.style.display = "block"
        anime2.style.display = "none"
        lever.textContent === "Repeat! Keep clicking!"
        console.log("testestestestest")
    } else {
        anime1.style.display = "none"
        anime2.style.display = "block"
    }
}

lever.addEventListener("click", animation)