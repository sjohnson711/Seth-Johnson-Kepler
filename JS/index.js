const newDate = new Date();
const thisYear = newDate.getFullYear(); //get current year

//access the footer by class
const footer = document.querySelector(".footer");

//create a new paragraph for the copyright
const copyright = document.createElement("p"); //Seth Johnson
copyright.setAttribute("id", "copyright"); //setting <p id="copyright"></p>
copyright.innerText = "\u00A9 Seth Johnson " + thisYear; //<p id="copyright">Seth Johnson 2025</p>

//append the copyright item to the footer
footer.appendChild(copyright);

copyright.style.fontFamily = "Times New Roman"; //copyright text font

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
  let usersName = event.target.usersName.value; // this links to the Name section of the form
  let usersEmail = event.target.usersEmail.value; //this links to the email section of the form
  let messageField = event.target.usersMessage.value; //in text area element

  //LOGS INFORMATION TO THE CONSOLE
  console.log("Name", usersName);
  console.log("Email", usersEmail);
  console.log("Message", messageField);

  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${messageField}</span>`;

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", () => {
    let entry = removeButton.parentNode;

    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  // messageSection.style.display = "block";
  messageForm.reset();
});

//creating fetch repos from my GitHub

  const GITHUB_USERNAME = 'sjohnson711';
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos`
let repositories; //created variable repositories on the global scope to be used else where after the .then response
 fetch(url)
    .then(response => response.json())
    .then(data =>{   
     repositories = data;  //creating varible to store my data
    console.log(repositories);

  let projectSection = document.getElementById('projects');  //getting access to the projects element in HTML
  let projectList = projectSection.getElementsByTagName('ul')[0]; //under projects access the FIRST 'ul'


  for(let i = 0; i < repositories.length; i++){ //looping through the repositories
  let project = document.createElement('li'); //creating 'li' to be appended to the 'ul'
  project.setAttribute('id', 'CTD-PORTFOLIO') //creating id to use in CSS
  
  project.innerText = repositories[i].name; //WHAT INFORMATION FOR THE API I WANT TO DISPLAY ON THE WEBPAGE IF THEY ARE PUBLIC REPOSITORIES
  projectList.appendChild(project); //under the 'ul' ====> appending the list of repositories.
  }

    })
    .catch(error=>console.error(error)) //catch any errors in the browser console

//challenged at the time






