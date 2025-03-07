import { changeContent } from "../redirection.js"; 

window.changeContent = changeContent;
document.addEventListener("DOMContentLoaded", () => {
    changeContent("Home");
});
