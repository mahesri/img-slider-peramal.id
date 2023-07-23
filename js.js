const carousel = document.querySelector(".carousel"),
firstImg =  carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");


let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcon = () => {
    // Menampilkan dan menyembunyikan icon next/prev yang setara dengan nilai kiri carousel 
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //Membuat batas maksimal lebar scroll 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; //getting first img width & adding 14 margin value
        //If clicked icon is left, reduce width value from the carousel scroll left else add to it
       
        // carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
       
        //Untuk mengatur fuction click sebenarnya bisa dengan operasi logika seperti dibawah ini.
        //Tapi karena untuk membuat program lebih ringkas bisa dengan tenary.
       
       if(icon.id === "left") {
       carousel.scrollLeft -= firstImgWidth;
       }else if(icon.id === "right"){
        carousel.scrollLeft += firstImgWidth;
       }

       setTimeout(() => showHideIcon(), 60); //Memanggil showHideIcon setelah 60ms

    });
});

const autoslide = () => {
    positionDiff = Math.abs(positionDiff); //Membuat positionDiff bernilai positif
    let firstImgWidth = firstImg.clientWidth + 14;
    // Membuat perbedaan antara nilai yang dibutuhkan untuk menambahkan atau mengurangi ketika gambar digeser kekiri dan gambar akan ditengah
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft ) {

       return console.log("User sedang ngescroll ke kiri");
    }
}

const DragStart = (e) => {
    // Updatating global variable value on mouse dwon event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // Scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    autoslide();
}

carousel.addEventListener("mousedown", DragStart);
carousel.addEventListener("touchstart", DragStart);


carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);


carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);