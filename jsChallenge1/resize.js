const text = document.querySelector("h2")

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
    formResize: function () {
      text.innerText = "you just resized!";
      text.style.color = colors[0];
    },
    clickText: function () {
      text.innerText = "that was a right click!";
      text.style.color = colors[1];
    },
    textin: function () {
      text.innerText = "the mouse is here!";
      text.style.color = colors[2];
    },
    textout: function () {
      text.innerText = "The mouse is gone!";
      text.style.color = colors[3];
    }
  };

  text.addEventListener("contextmenu", superEventHandler.clickText);
  text.addEventListener("mouseleave", superEventHandler.textout);
  text.addEventListener("mouseenter", superEventHandler.textin);
  window.addEventListener("resize", superEventHandler.formResize);