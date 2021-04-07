const array = [1, 2, 3, 4, 5]
array.splice(1, 2)
console.log(array)
const array1= [1, 2, 3, 4, 5, 'a', 'b', 'c']
array1.map(function(i){
    console.log(i)
})
const array2 = ['a', 'b', 'c']
array2.push(1,2,3)
console.log(array2)
const array3 = [1, 2, 3]
array3.reverse()
console.log(array3)
function password(){
    const passw= window.prompt("Write password")
    const login= window.prompt("Write login")

if (passw==="12345"){
    console.log("Welcome admin!!!")
}
else if (passw!=="12345"){
    const passw= window.prompt("Write password")
    if (passw==="12345"){
        console.log("Welcome admin!!!")
    }
   else{const passw= window.prompt("Write password")
}
}
if(login!=="Aidaika")
{
    console.log("Goodbye!")
}
}
password()
