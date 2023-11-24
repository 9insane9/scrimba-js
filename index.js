let countEl = document.querySelector("#count");
let incrementBtn = document.querySelector("#increment-btn");

let count = 0;

incrementBtn.addEventListener("click", () => {   
    count++,
    countEl.innerText = count;
});


let saveBtn = document.querySelector("#save-btn");
let entriesEl = document.querySelector("#entries");

saveBtn.addEventListener("click", () => {

    entriesEl.textContent += `${count}, `; //concatenate count
    
    //let formatted = entriesEl.textContent.slice(0, -2);
    //console.log(formatted);
    //console.log(typeof formatted);

    count = 0;
    countEl.textContent = 0;
    
    //entriesEl.textContent = "";
    //entriesEl.textContent = formatted;

    //entriesEl.innerText = formatted;


});

