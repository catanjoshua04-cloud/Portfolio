const roles = [ "Individual", "Student", "Programmer", "Web Developer", "Game Developer"];
let index = 0;

const roleElement = document.querySelector(".role");

setInterval(() => {
    index = (index + 1) % roles.length;
    roleElement.textContent = roles[index];
}, 2000);