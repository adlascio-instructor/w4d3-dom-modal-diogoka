const btn = document.querySelector('button');
const modalDiv = document.querySelector("#modal");
btn.addEventListener("click", () =>{modalDiv.classList.remove("invisible")});
addEventListener("keyup", (event) =>{
    if(event.key === "Escape"){
        modalDiv.classList.add("invisible");
    }
})
