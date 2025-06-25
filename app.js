// let total = 0;

// function addExpense() {
//     const name = document.getElementById('expense-name').value;
//     const amount = parseFloat(document.getElementById('expense-amount').value);

//     if (name !== '' && amount > 0) {
//         // Add the expense to the list
//         const expenseList = document.getElementById('expenses');
//         const li = document.createElement('li');
//         li.innerHTML = `${name} - $${amount.toFixed(2)}`;
//         expenseList.appendChild(li);

//         // Update the total
//         total += amount;
//         document.getElementById('total').textContent = total.toFixed(2);

//         // Clear the input fields
//         document.getElementById('expense-name').value = '';
//         document.getElementById('expense-amount').value = '';
//     } else {
//         alert('Please enter a valid expense name and amount.');
//     }
// }


let button = document.querySelector("button")
let inp_1 = document.querySelector("#inp-1")
let inp_2 = document.querySelector("#inp-2")
let expense_list = document.querySelector(".expense-list")
let total = document.querySelector("#total")

function add_expense() {
     if (inp_1.value == "" ){
        alert("Please Enter any expense name")
    }else if (inp_2.value == "" ){
        alert("Please Enter any expense amount")

    }else{
        let a = document.createElement("li")
        a.innerText = inp_1.value + " - " + "Rs " + inp_2.value
        expense_list.appendChild(a)
        total.innerText = parseFloat(total.innerText)+parseFloat(inp_2.value);
        console.log(total)
        inp_1.value = ""
        inp_2.value = ""
    }
}

button.addEventListener("click", () => {
    add_expense()
})



let arr = [1,2,3,4,5]



let output = arr.reduce((PrevEle,CurrEle)=>{
    return(PrevEle + CurrEle);

    
})
console.log(output);