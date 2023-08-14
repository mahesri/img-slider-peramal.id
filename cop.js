const carousel = document.querySelector(".wrapper");

let isDragging = false, startX, startScrollLeft;

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX) ;
};

carousel.addEventListener("mousemove", dragging);