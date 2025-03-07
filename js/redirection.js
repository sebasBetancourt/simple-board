export const changeContent = (seccion) => {
    let main = document.getElementById("content");

    if (seccion === "Home") {
        main.innerHTML = `
            <div id="students" class="div__container">
                <div>
                    <img src="/storage/img/Student_Dashboard.svg">
                    <span>Students</span>
                </div>
                <strong>243</strong>
            </div>
            <div id="course" class="div__container">
                <div>
                    <img src="/storage/img/Course_Dashboard.svg">
                    <span>Course</span>
                </div>
                <strong>13</strong>
            </div>
            <div id="payment" class="div__container">
                <div>
                    <img src="/storage/img/Payment_DashBoard.svg">
                    <span>Payments</span>
                </div>
                <strong data-format="$">556,000</strong>
            </div>
            <div id="user" class="div__container">
                <div>
                    <img src="/storage/img/Users_Dashboard.svg">
                    <span>Users</span>
                </div>
                <strong>3</strong>
            </div>
        `;
    } else if (seccion === "Course") {
        main.innerHTML = "<h2>Página de Course</h2>";
    } else if (seccion === "Students") {
        main.innerHTML = "<h2>Página de Students</h2>";
    } else if (seccion === "Payment") {
        main.innerHTML = "<h2>Página de Payment</h2>";
    } else if (seccion === "Report_menu_nav") {
        main.innerHTML = "<h2>Página de Report</h2>";
    } else if (seccion === "Settings") {
        main.innerHTML = "<h2>Página de Settings</h2>";
    } else if (seccion === "Logout") {
        main.innerHTML = "<h2>Página de Logout</h2>";
    }
};
