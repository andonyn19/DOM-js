const d = document

function responsiveSlider() {
  const $previousBtn = d.querySelector(".previous"),
    $nextBtn = d.querySelector(".next"),
    $slides = d.querySelectorAll(".slide")

  let i = 0;

  d.addEventListener("click", (e) => {

    switch (e.target) {
      
      case ($previousBtn):
        e.preventDefault();
        $slides[i].classList.remove("active");
        i--;
        if (i < 0) {
          i = $slides.length - 1;
        }
        $slides[i].classList.add("active");
        break;

      case ($nextBtn):
        e.preventDefault()
        $slides[i].classList.remove("active");
        i++;
        if (i > $slides.length - 1) {
          i = 0;
        }
        $slides[i].classList.add("active");
        break;

    }

  })
}

export default responsiveSlider;