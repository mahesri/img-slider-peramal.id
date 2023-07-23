const carousel = document.querySelector(".carousel"),
arrowIcons = document.querySelector(".carousel");


let isDragStart = false, prevPageX, prevScrollLeft;

arrowIcons.forEacah(icon => {
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