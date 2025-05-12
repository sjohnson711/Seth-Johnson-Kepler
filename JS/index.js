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

const skills = ["Github", "HTML", "CSS", "Python"]; //array of skills
const skillsection = document.getElementById("skills"); //find the element ul created

const skillsList = skillsection.getElementsByTagName("ul")[0]; //using the first ul in the document
for (let i = 0; i < skills.length; i++) {
  //direction wanted bracket not forEach method
  //address each element for it self and adds to list
  let skill = document.createElement("li"); //create li elements
  skill.innerText = skills[i]; // for ever skill there will be a li
  skillsList.appendChild(skill); //make child to the ul created earlier
}

let messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let usersName = event.target.usersName.value;
  let usersEmail = event.target.usersEmail.value;
  let messageField = event.target.usersMessage.value;

  console.log("Name", usersName);
  console.log("Email", usersEmail);
  console.log("Message", messageField);

  let messageSection = document.getElementById("messages");
  let messageList = document.querySelector("ul");
  messageForm.reset();
});
