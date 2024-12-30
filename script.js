let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event)=>{

        if(event.target.innerHTML === "="){
            string = eval(string);
            document.querySelector(".screen").value = string;
        }
        else if(event.target.innerHTML === "AC"){
            string = "";
            document.querySelector(".screen").value = string;
        }
        else {
            string = string + event.target.innerHTML;
            document.querySelector(".screen").value = string;
        }
    })
});