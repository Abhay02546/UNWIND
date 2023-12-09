document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector("#cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.display = "block"; 
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    document.addEventListener("mouseleave", () => {
        cursor.style.display = "none"; 
    });
});





document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

// Add this event listener for the cursor to grow on hover over "a" elements
const links = document.querySelectorAll("a");

links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const cursor = document.getElementById("cursor");
        cursor.style.width = "50px";
        cursor.style.height = "50px";
    });

    link.addEventListener("mouseleave", () => {
        const cursor = document.getElementById("cursor");
        cursor.style.width = "10px";
        cursor.style.height = "10px";
    });
});

document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

// Add this event listener for the cursor to grow on hover over "a" elements
const h1 = document.querySelectorAll("p");

h1.forEach((h1) => {
    h1.addEventListener("mouseenter", () => {
        const cursor = document.getElementById("cursor");
        cursor.style.width = "150px";
        cursor.style.height = "150px";
    });

    h1.addEventListener("mouseleave", () => {
        const cursor = document.getElementById("cursor");
        cursor.style.width = "10px";
        cursor.style.height = "10px";
    });
});



// Add event listeners for the cursor to grow on hover over #Journeytext
const journeyText = document.getElementById("Journeytext");
const cursor = document.getElementById("cursor");

journeyText.addEventListener("mouseenter", () => {
    cursor.style.width = "200px";
    cursor.style.height = "200px";
});

journeyText.addEventListener("mouseleave", () => {
    cursor.style.width = "10px";
    cursor.style.height = "10px";
});


const image = document.getElementById("img");
const mouse = document.getElementById("cursor");

image.addEventListener("mouseenter", () => {
    mouse.style.width = "150px";
    mouse.style.height = "150px";
});

image.addEventListener("mouseleave", () => {
    mouse.style.width = "10px";
    mouse.style.height = "10px";
});


//ASTRO EFFECT//
document.addEventListener("DOMContentLoaded", function () {
    const pElement = document.getElementById("p");
    const p1Element = document.getElementById("p1");
    const p2Element = document.getElementById("p2");
  
    const astroElement = document.getElementById("astro");
    const astro1Element = document.getElementById("astro1");
    const astro2Element = document.getElementById("astro2");
  
    pElement.addEventListener("mouseover", () => {
      astroElement.style.display = "block";
    });
  
    pElement.addEventListener("mouseout", () => {
      astroElement.style.display = "none";
    });
  
    p1Element.addEventListener("mouseover", () => {
      astro1Element.style.display = "block";
    });
  
    p1Element.addEventListener("mouseout", () => {
      astro1Element.style.display = "none";
    });
  
    p2Element.addEventListener("mouseover", () => {
      astro2Element.style.display = "block";
    });
  
    p2Element.addEventListener("mouseout", () => {
      astro2Element.style.display = "none";
    });
  });


  







