let countEl = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment-btn");

let count = 0;

incrementBtn.addEventListener("click", () => {   
    count++,
    countEl.innerText = count;
});


let saveBtn = document.querySelector("#save-btn");
let entriesEl = document.querySelector("#entries");

saveBtn.addEventListener("click", () => {
    entriesEl.textContent += `${count}, `;
    //let formatted = entriesEl.textContent.slice(0, -1);

    //entriesEl.textContent = formatted;

});