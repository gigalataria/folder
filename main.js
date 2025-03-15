const div = document.querySelector(".div")
div.addEventListener("click", () => {
    console.log("hello")
    div.style.width = "400px"
    div.style.height = "500px"
})


const numberbtn = document.querySelector(".btn")
console.log(numberbtn)
numberbtn.addEventListener("click", () => {
   num2 = num2 + 1
   numberbtn.textContent = num2

})

let num= 5
console.log(num)
num = num + 1
console.log(num)


let num2 = 5