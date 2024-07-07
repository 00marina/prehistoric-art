document.addEventListener("DOMContentLoaded", () => {
  let carouselItems = document.querySelectorAll(".carousel-item");
  let numberOfItems = carouselItems.length;
  console.log(numberOfItems);

  function startCarousel() {
    let itemIndex = 0;

    function runCarousel() {
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                console.log(itemIndex);
                if (itemIndex == 0) {
                    if (carouselItems[3].classList.contains('active')) {
                        carouselItems[3].classList.remove('active');
                    }
                    carouselItems[0].classList.add('active');
                    itemIndex = 1;
                } else if (itemIndex == 1) {
                    carouselItems[0].classList.remove('active');
                    carouselItems[1].classList.add('active');
                    itemIndex = 2;
                } else if (itemIndex == 2) {
                    carouselItems[1].classList.remove('active');
                    carouselItems[2].classList.add('active');
                    itemIndex = 3;
                } else if (itemIndex == 3) {
                    carouselItems[2].classList.remove('active');
                    carouselItems[3].classList.add('active');
                    itemIndex = 0;
                    setTimeout(() => {
                        runCarousel();
                    }, 5000);
                  
                } else {
                    console.log("indexing problem");
                }
            
            }, i * 5000);
        }
    }
    runCarousel();
}

startCarousel();

});
