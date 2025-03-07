import {enableFromStudent} from "./handler.js";

export const loadStudent = () => {
    const sampleData = [
        {"name":"Miguel Angel","email":"m@gmail.com","phone":150,"enroll_number":34567890,"date_of_admission":"2025-03-07T13:28:53.890Z"},
        {"name":"Migu","email":"ma@gmail.com","phone":123456789,"enroll_number":34567890,"date_of_admission":"2025-03-07T13:15:06.497Z"},
        {"name":"Miguel Angel","email":"ma@gmail.com","phone":123456789,"enroll_number":34567890,"date_of_admission":"2025-03-07T13:11:11.872Z"},
        {"name":"Miguel Angel","email":"ma@gmail.com","phone":123456789,"enroll_number":34567890,"date_of_admission":"2025-03-07T13:14:58.506Z"},
        {"name":"sevs","email":"ma@gmail.com","phone":9798789,"enroll_number":34567890,"date_of_admission":"2025-03-07T13:28:43.609Z"}
    ];

    // si no existe la clave students, inicializa con los datos de muestra
    if (!localStorage.getItem("students")) {
        localStorage.setItem("students", JSON.stringify(sampleData));
    }

    // retorna lo que hay en el localstorage (ya sea el sample o lo que se haya agregado)
    return JSON.parse(localStorage.getItem("students"));
}
export const save = (data)=>{
    const DB = loadStudent();
    DB.push(data);
    showRowsTable([data]);
    localStorage.setItem("students", JSON.stringify(DB));
    return {status: 200, message: `El estudiante ${data.name} fue registrado exitosamente.`}
}
export const edit = (data)=>{
    const DB = loadStudent(); // [{name: "Miguel"},{name "Juan"}]
    const {id} = data;  // {id: 1, name:"JUAN"} - const id = 1
    delete data.id; // {name:"JUAN"}
    DB[id] = data; // {name "Juan"} = {name:"JUAN"}
    localStorage.setItem("students", JSON.stringify(DB));
    const row = table__student.querySelectorAll("tr")[id];
    row.children[1].textContent = data.name;
    row.children[2].textContent = data.email;
    row.children[3].textContent = data.phone;
    row.children[4].textContent = data.enroll_number;
}

export const transformInputFormulary =  (e)=>{
    const data = Object.fromEntries(new FormData(e.target));
    data.phone = Number(data.phone)
    data.enroll_number = Number(data.enroll_number)
    data.date_of_admission = new Date().toISOString();
    return data;
}
export const showRowsTable = (DB)=>{
    for (let i = 0; i < DB.length; i++) {
        const tr = document.createElement("tr")
        const tdImage = document.createElement("td");
        const imgStudent = document. createElement("img");
        imgStudent.src = "#"
        imgStudent.alt = "student";
        tdImage.append(imgStudent);
        const tdName = document.createElement("td");
        tdName.textContent = DB[i].name;
        const tdEmail = document.createElement("td");
        tdEmail.textContent = DB[i].email;
        const tdPhone = document.createElement("td");
        tdPhone.textContent = DB[i].phone;
        const tdEnrollNumber = document.createElement("td");
        tdEnrollNumber.textContent = DB[i].enroll_number;
        const tdDate_of_admission = document.createElement("td");
        tdDate_of_admission.textContent = DB[i].date_of_admission;
        const tdActions = document.createElement("td");
        const spanEdit = document.createElement("span");
        spanEdit.classList.add("span__edit");
        spanEdit.textContent = "✏️";
        spanEdit.dataset.id_student = i;
        spanEdit.addEventListener("click", enableFromStudent)

        const spanDelete = document.createElement("span");
        spanDelete.classList.add("span__delete");
        spanDelete.textContent = "🗑️";

        tdActions.append(spanEdit, spanDelete);
        tr.append(tdImage, tdName, tdEmail, tdPhone, tdEnrollNumber, tdDate_of_admission, tdActions);
        table__student.append(tr);
    }

    //         <tr>
    //             <td><img src="#" alt="student"></td>
    //             <td>Karthi</td>
    //             <td>karthi@gmmail.com</td>
    //             <td>7305477760</td>
    //             <td>1234567305477760</td>
    //             <td>08-Dec, 2021</td>
    //             <td class="td__actions">
    //                 <span class="span__edit">✏️</span>
    //                 <span class="span__delete">🗑️</span>
    //             </td>
    //         </tr>

}