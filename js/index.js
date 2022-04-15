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