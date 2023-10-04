const graphicElem = document.querySelector(".graphic-element");

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

// Define the scroll positions for each step
const introScrollPos = intro.offsetTop;
const step1ScrollPos = text1.offsetTop;
const step2ScrollPos = text2.offsetTop;
const step3ScrollPos = text3.offsetTop;
const step4ScrollPos = text4.offsetTop;
const step5ScrollPos = text5.offsetTop;
const step6ScrollPos = text6.offsetTop;
const step7ScrollPos = text7.offsetTop;

// Define the resetSVGPosition function
function resetSVGPosition() {
  // Reset the SVG's position and scale to their initial values
  graphicElem.style.transformOrigin = '0px -160px 0px';
  graphicElem.style.transform = 'scale(1)';
}

const sectionCenters = {};

// Function to calculate and store the center of a section
function calculateSectionCenter(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const rect = section.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    sectionCenters[sectionId] = { x: centerX, y: centerY };
  }
}

// Call the function for each section
calculateSectionCenter('sec1');
calculateSectionCenter('sec2');
calculateSectionCenter('sec3');
calculateSectionCenter('sec4');
calculateSectionCenter('sec5');
calculateSectionCenter('sec6');
calculateSectionCenter('sec7');
// Call for other sections as needed

// Function to center the SVG on a specific point within the SVG
function centerOnPoint(section) {
  const center = sectionCenters[section];
  if (center) {
    const x = -center.x + window.innerWidth / 2; // Adjust for horizontal centering
    const y = -center.y + window.innerHeight / 2; // Adjust for vertical centering
    graphicElem.style.transform = `translate(${x}px, ${y}px)`;
  }
}

// Function to handle the scroll event
function handleScroll() {
  const scrollPos = window.scrollY;

  // Step 1: Intro
  if (scrollPos < step1ScrollPos) {
    // Implement intro animation
    graphicElem.style.opacity = "0.4";
    resetSVGPosition();
  }

  // Step 2: g-item-one
  else if (scrollPos < step2ScrollPos) {
    // Implement step 2 animation
    graphicElem.style.opacity = "1";
    centerOnPoint('sec1');
  }

  // Step 3: g-item-two
  else if (scrollPos < step3ScrollPos) {
    // Implement step 3 animation
    sec1.style.opacity = "0.4";
    sec2.style.opacity = "1";
    centerOnPoint('sec2');
  }

  // Step 4: g-item-three
  else if (scrollPos < step4ScrollPos) {
    // Implement step 4 animation
    sec2.style.opacity = "0.4";
    sec3.style.opacity = "1";
    centerOnPoint('sec3');
  }

  // Step 5: g-item-four
  else if (scrollPos < step5ScrollPos) {
    // Implement step 4 animation
    sec3.style.opacity = "0.4";
    sec4.style.opacity = "1";
    centerOnPoint('sec4');
  }

  // Step 6: g-item-five
  else if (scrollPos < step6ScrollPos) {
    // Implement step 6 animation
    sec4.style.opacity = "0.4";
    sec5.style.opacity = "1";
    centerOnPoint('sec5');
  }

  // Step 7: g-item-six
  else if (scrollPos < step7ScrollPos) {
    // Implement step 7 animation
    sec5.style.opacity = "0.4";
    sec6.style.opacity = "1";
    centerOnPoint('sec6');
  }

  // Step 8: g-item-seven
  else {
    // Implement step 8 animation
    sec6.style.opacity = "0.4";
    sec7.style.opacity = "1";
    resetSVGPosition();
  }
}

// Add a scroll event listener to trigger animations on scroll
window.addEventListener("scroll", handleScroll);
