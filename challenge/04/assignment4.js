// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const text = document.querySelector("body h2");
text.addEventListener("mouseover", superEventHandler);
text.addEventListener("mouseout", superEventHandler);
window.addEventListener("contextmenu", superEventHandler);
window.addEventListener("resize", superEventHandler);

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

function superEventHandler(event) {
  switch (event.type) {
    case "mouseover":
      text.innerText = "Event: mouseover";
      text.style.color = colors[1];
      break;
    case "mouseout":
      text.innerText = "Event: mouesout";
      text.style.color = colors[2];
      break;
    case "contextmenu":
      text.innerText = "Event: contextmenu";
      text.style.color = colors[3];
      break;
    case "resize":
      text.innerText = "Event: resize window";
      text.style.color = colors[4];
      break;
    default:
      text.style.color = colors[0];
  }
}
