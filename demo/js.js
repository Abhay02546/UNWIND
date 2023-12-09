let originalText = "Original Text";

function changeText(onHover) {
  const textContainer = document.getElementById("text-container");

  if (onHover) {
    textContainer.innerHTML = "Hovered Text"; // Change to the desired text when hovered
  } else {
    textContainer.innerHTML = originalText; // Revert to the original text when not hovered
  }
}
