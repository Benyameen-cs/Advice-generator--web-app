

let adviceId = document.querySelector("#adviceId");
let adviceQuotes = document.querySelector("#adviceQuotes");
let adviceGenerateBtn = document.querySelector("#advice-generate-btn");

adviceGenerateBtn.addEventListener("click", () => {
    generateAdvice();
})

const generateAdvice = async () => {
    try {
    let response = await fetch("https://api.adviceslip.com/advice");    
    if (!response.ok) {
        throw new Error(`HTTP error ! status : ${response.status} `);
    }
    
    console.log(response)
    let data = await response.json();
        adviceId.innerText = `ADVICE # " ${data.slip.id } " `;
        adviceQuotes.innerText = ` "${data.slip.advice}" `;

    } catch (error) {
        console.log("Error" , error)
    }

}