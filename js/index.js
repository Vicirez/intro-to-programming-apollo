// Creates a date for the day program was ran
const today = new Date();
const thisYear = today.getFullYear();

var footer = document.querySelector("#Copyright");
console.log(footer); 
const copyright = document.createElement("p"); // store element p into variable
copyright.innerHTML = "Victor Ramirez | " + thisYear;

footer.appendChild(copyright);
let skills = ["Java", "JavaScript", "HTML", "C"];
var skillsSection = document.querySelector("#Skills");
var skillList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillList.appendChild(skill);
}

var messageForm = document.querySelector('form[name="leave_message"]');
// If statement used to keep error from occuring
console.log(messageForm); // Checks to see if DOM selector is working properly
if (messageForm) {
    // Handles message Form
    messageForm.addEventListener("submit", (event) => {

        //removeButton.innerText("remove");
        // console.log("Form has been submitted");
        // Create 
        event.preventDefault();

        // Declare variables and set equal to attributes from form
        let name, email, message;
        const element = event.target;
        name = element.name;
        email = element.email;
        message = element.message;
        //console.log(name);

        console.log(name.value, email.value, message.value);


        let messageSection = document.getElementById("messages");
        messageList = messageSection.querySelector("ul");
        let newMessage = document.createElement("li");
        newMessage.innerHTML = '<a href="mailto:vicramirez829@gmail.com">name</a> <br> <span></span>'; // fix use span too

        let removeButton =  document.createElement("button");
        removeButton.innerText="remove";
        removeButton.setAttribute("type", "button");
        removeButton.addEventListener("click", (event) => {
            // find buttons parent element using DOM traversal (parentNode property) ann store it in entryy
            let entry = removeButton.parentNode;
            // remove entry element from DOM
            entry.remove();

        });
        // append removeButton to newMessage element
        newMessage.appendChild(removeButton);
        // append newMessage to the messageList element
        messageList.appendChild(newMessage);


        element.reset();
    });
}

fetch("https://api.github.com/users/Vicirez/repos").then(function(response) {
    // Successful response
    return response.json();
})
.then(function(repositories) {
    console.log(repositories)
    
    let projects = repositories;
    var projectsSection = document.querySelector("#projects");
    var projectsList = projectsSection.querySelector("ul");

    for (let i = 0; i < projects.length; i++) {
        let project = document.createElement("li");
        project.textContent = projects[i].name;
        projectsList.appendChild(project);
}
});
