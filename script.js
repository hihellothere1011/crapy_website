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

question.addEventListener('click', function() {
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        toggle.textContent = '(⁎⁍̴̛ᴗ⁍̴̛⁎)';
    } else {
        answer.style.display = 'none';
        toggle.textContent = '$$$';
    }
});