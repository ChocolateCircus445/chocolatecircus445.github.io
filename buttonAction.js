for (let i of document.getElementsByTagName("button")) {
  i.onmousedown = function() {
    if (!i.className.includes("disabled")) {
      i.style.borderStyle = "inset";
    }
  }
  i.onmouseup = function() {
    i.style.borderStyle = "outset";
  }
  i.onmouseout = i.onmouseup;
}

var slide_number = 0;
// I have a habit of naming things with underscores because of Python
function advanceSlide() {
  c_slide = document.querySelector("[data-slide='" + slide_number + "']");
  try {
    n_slide = document.querySelector("[data-slide='" + (slide_number + 1) + "']");
    if (!n_slide) {
      return;
    }
  } catch (e) {
    return;
  }
  try {
    nn_slide = document.querySelector("[data-slide='" + (slide_number + 2) + "']");
    if (!nn_slide) {
      document.getElementById("next").className = "w98 right disabled";
    }
  } catch(e) {
    document.getElementById("next").className = "w98 right disabled";
  }


  c_slide.className = "slide i";
  n_slide.className = "slide";
  slide_number++;

  slide_class = n_slide.getAttribute("data-sclass");
  document.getElementsByClassName("step current")[0].className = "step";
  ci = document.querySelector("[data-cname='" + slide_class + "']")
  ci.className = "step current";

  nn_slide = document.querySelector("[data-slide='" + (slide_number - 1) + "']");
  if (!nn_slide) {
    document.getElementById("back").className = "w98 right disabled";
  } else {
    document.getElementById("back").className = "w98 right";
  }
}

function retractSlide() {
  c_slide = document.querySelector("[data-slide='" + slide_number + "']");
  try {
    n_slide = document.querySelector("[data-slide='" + (slide_number - 1) + "']");
    if (!n_slide) {
      return;
    }
  } catch (e) {
    return;
  }
  try {
    nn_slide = document.querySelector("[data-slide='" + (slide_number - 2) + "']");
    if (!nn_slide) {
      document.getElementById("back").className = "w98 right disabled";
    }
  } catch(e) {
    document.getElementById("back").className = "w98 right disabled";
  }


  c_slide.className = "slide i";
  n_slide.className = "slide";
  slide_number--;

  slide_class = n_slide.getAttribute("data-sclass");
  document.getElementsByClassName("step current")[0].className = "step";
  ci = document.querySelector("[data-cname='" + slide_class + "']")
  ci.className = "step current";

  nn_slide = document.querySelector("[data-slide='" + (slide_number + 1) + "']");
  if (!nn_slide) {
    document.getElementById("next").className = "w98 right disabled";
  } else {
    document.getElementById("next").className = "w98 right";
  }
}

function jump(slide) {
  c_slide = document.querySelector("[data-slide='" + slide_number + "']");
  c_slide.className = "slide i";
  if (slide == 0) {
    slide_number = 1
    retractSlide()
  } else {
    slide_number = slide - 1
    advanceSlide()
  }
}
