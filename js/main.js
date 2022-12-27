let factorialEl = document.querySelector('#f-input');
let outputEl = document.querySelector('#output');
let btnEl = document.querySelector('#btn');


btnEl.addEventListener('click', (e)=>{
    e.preventDefault();
    outputEl.innerHTML = ` Factorial of ${factorialEl.value}! = ${factorial(factorialEl.value)}`;
    
    clearAnddisable()
   
    /* console.log("Factorial of n is: "+ factorial(2)); */

})

// factorial function
function factorial(n){
    if (n-1 === 0) {
        return 1
    }else{
        return factorial(n-1)*n
    }
}


function btnd(){
    // by default , submit button disabled
    document.querySelector("#btn").disabled = true;
    document.querySelector("#btn").style.backgroundColor = "#A3EBB1";
    document.querySelector("#btn").style.color = "#fff";
    
    
        // If value of input charecter  greaterthan zero make btn disabled
        if (document.querySelector("#f-input").value > 0) {
            document.querySelector("#btn").disabled = false;
            document.querySelector("#btn").style.backgroundColor = "#18A558";
            document.querySelector("#btn").style.color = "#fff";
            
        }
        // If value of input charecter  greaterthan zero make btn enabled or active
        else{
            document.querySelector("#btn").disabled = true;
            document.querySelector("#btn").style.backgroundColor = "#A3EBB1";
            document.querySelector("#btn").style.color = "#fff";

        }


        
        
    


     
}

// 
function clearAnddisable() {
    // clear input input after submitting
    document.querySelector("#f-input").value = "";

    // make diabled btn when submiting form
    document.querySelector("#btn").disabled = true;
    document.querySelector("#btn").style.backgroundColor = "#A3EBB1";
    document.querySelector("#btn").style.color = "#fff";
}





