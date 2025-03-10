import { changeContent } from "../redirection.js";
import { save, edit, transformInputFormulary, loadStudent, showRowsTable } from "./formStudent.js";



window.changeContent = (seccion) => {
    changeContent(seccion);
    setTimeout(() => {
        if (seccion === "Students") {
            const DB = loadStudent();
            showRowsTable(DB);
        }
    }, 100);
};

    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            changeContent("Home");
        }, 500);

    document.querySelectorAll(".menu_nav").forEach(button => {
        button.addEventListener("click", (e) => {
            const seccion = e.target.dataset.section || e.target.closest(".menu_nav")?.dataset.section;
            if (seccion) {
                changeContent(seccion);
            } else {
                console.error("Error: No se encontró data-section.");
            }
        });
    });
});



// add__student.addEventListener("click", ()=>{
//     dialog__add_student.showModal();
// })

// dialog__close.addEventListener("click", ()=> dialog__add_student.close());
// dialog__close_edit.addEventListener("click", ()=> dialog__student_edit.close());

// form__student.addEventListener("submit", (e)=>{
    // e.preventDefault();
    // const data = transformInputFormulary(e)
    // const response = save(data);
    // console.log(response);
    // form__student.reset();
// })
// form__student_edit.addEventListener("submit", (e)=>{
    // e.preventDefault();
    // const data = transformInputFormulary(e)
    // const response = edit(data);
    // console.log(response);
    // form__student_edit.reset();
    
// })



document.addEventListener("click", (event) => {
    
    if (event.target && event.target.id === "add__student") {
        let dialogAddStudent = document.getElementById("dialog__add_student");
        if (dialogAddStudent) {
            dialogAddStudent.showModal();
        }
    }

    
    if (event.target && event.target.id === "dialog__close") {
        let dialogAddStudent = document.getElementById("dialog__add_student");
        if (dialogAddStudent) {
            dialogAddStudent.close();
        }
    }

    
    if (event.target && event.target.id === "dialog__close_edit") {
        let dialogEditStudent = document.getElementById("dialog__student_edit");
        if (dialogEditStudent) {
            dialogEditStudent.close();
        }
    }
});




document.addEventListener("submit", (e) => {
    if (e.target.id === "form__student" || e.target.id === "form__student_edit") {
        e.preventDefault();

        const data = transformInputFormulary(e);
        let response;
        
        if (e.target.id === "form__student") {
            response = save(data);
            e.target.reset();
        } else if (e.target.id === "form__student_edit") {
            response = edit(data);
            e.target.reset();
        }

        console.log(response);
    }
});