//Refactored Callback Hell Example ( Using Nested Callbacks)

console.log("Task 1")

setTimeout(()=> {
    console.log("Task2")
    setTimeout(()=> {
    console.log("Task3")
    setTimeout(()=> {
    console.log("Task4")
    setTimeout(()=> {
    console.log("Task5")
    setTimeout(()=> {
    console.log("Task6")
}, 1000)
}, 4000)
}, 3000)
}, 2000)
}, 2500)