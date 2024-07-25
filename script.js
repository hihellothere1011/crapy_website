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