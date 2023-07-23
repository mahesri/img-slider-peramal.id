const carousel = document.querySelector(".carousel"),
firstImg =  carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");


let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientwidth + 14; //getting first img width & adding 14 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        console.log(icon);
    });
});

const DragStart = (e) => {
    // Updatating global variable value on mouse dwon event
    isDragStart = true;
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // Scrolling images/carousel to left according to mouse pointer
    if(isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", DragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);