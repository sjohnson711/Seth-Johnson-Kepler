const newDate = new Date();
const thisYear = newDate.getFullYear();

//access the footer by class
const footer = document.querySelector(".footer");

//create a new paragraph for the copyright
const copyright = document.createElement("p");
copyright.setAttribute("id", "copyright");
copyright.innerText = "\u00A9 Seth Johnson " + thisYear;

//append the copyright item to the footer
footer.appendChild(copyright);

copyright.style.fontFamily = "Times New Roman";
