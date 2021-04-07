//calculator
const button = document.querySelector(".button"); 
    button.addEventListener("click", () =>{
        const f_n = +document.querySelector(".f_n").value; 
        const sign = document.querySelector(".sign").value; 
        const s_n = +document.querySelector(".s_n").value; 
        if(sign == "+"){
         console.log(f_n+s_n);
        }
        else if (sign == "-"){
            console.log(f_n-s_n);
        }
        else if (sign == "/"){
            console.log(f_n/s_n);
        }
        else if (sign == "*"){
            console.log(f_n*s_n);
        }
    });
//admin
const send = document.querySelector(".send");
send.addEventListener("click",() =>{
    const login = document.querySelector(".login").value;
    const password = document.querySelector(".password").value;
    if(login == "aidaika_m" && password == "itfrontend" ){
        console.log("Welcome!!!");
    }
    else if(login == "aidaika_m" && password != "itfrontend" ){
        console.log("Password uncorrect");
    }
    else if(login != "aidaika_m" && password == "itfrontend"){
        console.log("Login uncorrect");
    }
    else if(login != "aidaika_m" && password != "itfrontend"){
        console.log("uncorrect");
    }
});
