const carouselElements = document.querySelectorAll(".wrapper, .carousel, .kategori, .artikel-slide");

        const draggingStates = {};

    carouselElements.forEach(element => {
    let isDragging = false, startX, startScrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        startX = e.pageX || e.touches[0].pageX;
        startScrollLeft = element.scrollLeft;
        draggingStates[element] = true;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        if (!draggingStates[element]) return;

        const pageX = e.pageX || e.touches[0].pageX;
        const scrollDiff = startScrollLeft - (pageX - startX);

        element.scrollLeft = scrollDiff;
    };

    const dragStop = () => {
        isDragging = false;
        draggingStates[element] = false;
    };

    element.addEventListener("mousedown", dragStart);
    element.addEventListener("touchstart", dragStart);

    element.addEventListener("mousemove", dragging);
    element.addEventListener("touchmove", dragging);

    element.addEventListener("mouseup", dragStop);
    element.addEventListener("touchend", dragStop);
});