
const studentId = document.getElementById("myStudentId");
const customNumber = document.getElementById("customNumber");
const customColorBtn = document.querySelector(".custColor");
const randomColorBtn = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageDisplay = document.getElementById("imageDisplay");

const images = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg"
];

function changeCustomColor() {
    let num = parseInt(customNumber.value);
    
    if (isNaN(num) || num < 0 || num > 100) {
        document.body.style.backgroundColor = "red";
    } else if (num <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (num <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (num <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (num <= 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }

    studentId.textContent = "Student ID: 200594567"; 
}


function changeRandomColor() {
    let randomNum = Math.floor(Math.random() * 101);
    customNumber.value = randomNum;
    changeCustomColor();
}

function addList() {
    if (imageSelect.options.length === 1) { 
        images.forEach((img, index) => {
            let option = document.createElement("option");
            option.value = img;
            option.textContent = `Image ${index + 1}`;
            imageSelect.appendChild(option);
        });
    }
}


function changeImage() {
    imageDisplay.src = imageSelect.value;
}


customColorBtn.addEventListener("click", changeCustomColor);
randomColorBtn.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("focus", addList);
imageSelect.addEventListener("change", changeImage);
