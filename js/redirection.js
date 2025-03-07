export const changeContent = (seccion) => {
    let main = document.getElementById("content");

    if (seccion === "Home") {
        main.innerHTML = "<h2>Home<h2/>";
    } else if (seccion === "Course") {
        main.innerHTML = "<h2>Página de Course</h2>";
    } else if (seccion === "Students") {
        main.innerHTML = `<div class="div__container">
            <div class="div__header">
                <h2>Students List</h2>
                <button id="add__student" class="button__add">ADD NEW STUDENT</button>
            </div>
            <dialog id="dialog__add_student">
                <div class="dialog__header">
                    <span id="dialog__close">x</span>
                </div>
                <div class="dialog__main">
                    <form id="form__student" action="?" method="post">
                        <div>
                            <label>Name</label>
                            <input type="text" value="Miguel Angel" pattern="[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+" name="name">
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" value="ma@gmail.com" name="email">
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type="text" value="123456789" pattern="[0-9]+" max="10" name="phone">
                        </div>
                        <div>
                            <label>Enroll Number</label>
                            <input type="number" value="34567890" name="enroll_number">
                        </div>
                    </form>
                </div>
                <div class="dialog__footer">
                    <input type="submit" form="form__student" value="Guardar">
                </div>
            </dialog>
            <dialog id="dialog__student_edit">
                <div class="dialog__header">
                    <span id="dialog__close_edit">x</span>
                </div>
                <div class="dialog__main">
                    <form id="form__student_edit" action="?" method="post">
                        <div hidden>
                            <label>Id</label>
                            <input type="number" pattern="[0-9]+" name="id" >
                        </div>
                        <div>
                            <label>Name</label>
                            <input type="text" pattern="[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+" name="name">
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email">
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type="text" pattern="[0-9]+" max="10" name="phone">
                        </div>
                        <div>
                            <label>Enroll Number</label>
                            <input type="number" name="enroll_number">
                        </div>
                        <!-- <div>
                            <label>Date of Admission</label>
                            <input type="date" name="date_of_admission">
                        </div> -->
                    </form>
                </div>
                <div class="dialog__footer">
                    <input type="submit" form="form__student_edit" value="Actualizar">
                </div>
            </dialog>
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Enroll Number</th>
                        <th>Date of Admission</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="table__student">
                    
                </tbody>
            </table>
        </div>
    </main>`;
    } else if (seccion === "Payment") {
        main.innerHTML = "<h2>Página de Payment</h2>";
    } else if (seccion === "Report_menu_nav") {
        main.innerHTML = "<h2>Página de Report</h2>";
    } else if (seccion === "Settings") {
        main.innerHTML = "<h2>Página de Settings</h2>";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu_nav");

    const activeSection = localStorage.getItem("activeSection");
    if (activeSection) {
        document.querySelector(`.menu_nav[data-section="${activeSection}"]`)?.classList.add("active");
    }

    menuItems.forEach(menu => {
        const button = menu.querySelector("button");
        if (button) {
            menu.setAttribute("data-section", button.getAttribute("data-section"));

            button.addEventListener("click", function () {
                menuItems.forEach(item => item.classList.remove("active"));

                menu.classList.add("active");

                if (menu.getAttribute("data-section") !== "Logout") {
                    localStorage.setItem("activeSection", menu.getAttribute("data-section"));
                }
            });
        }
    });
});
