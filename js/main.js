





function changeContent(seccion) {
    let main = document.getElementById("content");

    if (seccion === "Home") {
        main.innerHTML = "<h2>Página de Home</h2>";
    } else if (seccion === "Course") {
        main.innerHTML = "<h2>Página de Course</h2>";
    } else if (seccion === "Students") {
        main.innerHTML = "<h2>Página de Students</h2>";
    }else if (seccion === "Payment") {
        main.innerHTML = "<h2>Página de Payment</h2>";
    }else if (seccion === "Report_Menu") {
        main.innerHTML = "<h2>Página de Report_Menu</h2>";
    }else if (seccion === "Settings") {
        main.innerHTML = "<h2>Página de Settings</h2>";
    }else if (seccion === "Logout") {
        main.innerHTML = "<h2>Página de Logout</h2>";
    }
}