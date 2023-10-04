const graphicElem = document.querySelector(".graphic-element");
const secTwoAnimation = document.getElementById("secTwoPanAnimation");

const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const sec4 = document.querySelector(".sec4");
const sec5 = document.querySelector(".sec5");
const sec6 = document.querySelector(".sec6");
const sec7 = document.querySelector(".sec7");

const headline = document.getElementById("g-item-headline");
const intro = document.getElementById("g-item-intro");
const text1 = document.getElementById("g-item-one");
const text2 = document.getElementById("g-item-two");
const text3 = document.getElementById("g-item-three");
const text4 = document.getElementById("g-item-four");
const text5 = document.getElementById("g-item-five");
const text6 = document.getElementById("g-item-six");
const text7 = document.getElementById("g-item-seven");
const outro = document.getElementById("g-item-outro");


function isInView(element, min, max) {
  const position = element.getBoundingClientRect().top;
  //console.log('position: ', position)
  return position <= min && position >= max;
}

function watchScroll() {
  //initial transition
  if (isInView(intro, 0, -100)) {
    sec1.classList.add("transition");
    sec2.classList.add("transition");
    sec3.classList.add("transition");
    sec4.classList.add("transition");
    sec5.classList.add("transition");
    sec6.classList.add("transition");
    sec7.classList.add("transition");
  }

  //remove initial transition
  if (isInView(headline, 0, -100)) {
    sec1.classList.remove("transition");
    sec2.classList.remove("transition");
    sec3.classList.remove("transition");
    sec4.classList.remove("transition");
    sec5.classList.remove("transition");
    sec6.classList.remove("transition");
    sec7.classList.remove("transition");
  }

  // initial zoom and end zoom out
  if (isInView(text1, 50, -5550)) {
    graphicElem.classList.add("zoom");
  } else {
    graphicElem.classList.remove("zoom");
  }

  // section 1 highlight, sections 2–7 transition
  if (isInView(text1, 50, -40)) {
    sec1.classList.remove("transition");
    sec2.classList.add("transition");
    sec3.classList.add("transition");
    sec4.classList.add("transition");
    sec5.classList.add("transition");
    sec6.classList.add("transition");
    sec7.classList.add("transition");

  }
  // section 2 highlight, sections 1,3–7 transition
    if (isInView(text2, -40, -800)) {
      console.log("Text2 is in view. Starting SVG animation.");
      sec1.classList.add("transition");
      sec2.classList.remove("transition");
      sec3.classList.add("transition");
      sec4.classList.add("transition");
      sec5.classList.add("transition");
      sec6.classList.add("transition");
      sec7.classList.add("transition");
      secTwoAnimation.beginElement();
    } else {
      console.log("Text2 is out of view. Pausing SVG animation.");
      secTwoAnimation.endElement();
    }

     if (isInView(text3, -130, -140 )) {
       sec1.classList.add("transition");
       sec2.classList.add("transition");
       sec3.classList.remove("transition");
       sec4.classList.add("transition");
       sec5.classList.add("transition");
       sec6.classList.add("transition");
       sec7.classList.add("transition");

     }

     if (isInView(text4, -140, -310 )) {
      sec1.classList.add("transition");
      sec2.classList.add("transition");
      sec3.classList.add("transition");
      sec4.classList.remove("transition");
      sec5.classList.add("transition");
      sec6.classList.add("transition");
      sec7.classList.add("transition");

    }

}

window.addEventListener("scroll", watchScroll);

// Section 1: 377 x 160
// Section 2: 247 x 129
// Section 3: 223 x 267
// Section 4: 302 x 406
// Section 5: 433 x 267
// Section 6: 461 x 149
// Section 7: full width (375 x 239??)

// TO GET COORDINATES ON CLICK IN CONSOLE:
function printMousePos(event) {
  console.log(    "clientX: " + event.clientX +
  " - clientY: " + event.clientY)
}
document.addEventListener("click", printMousePos);

// for (let i = 0; i < zooms.length; i++) {
//   const windowHeight = window.innerHeight;
//   const elementTop = zooms[i].getBoundingClientRect().top;
//   const elementVisible = 800;
// }
