// input

const bill_amount= document.querySelector("#bill-amount");
const cash_given= document.querySelector("#cash-given");
const check_btn= document.querySelector("#check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const available_notes= [2000,500,100,20,10,5,1];

// processing

check.addEventListener("click", function processing(){
    
    let billamountvalue= Number(bill_amount.value);
    let cashgivenvalue= Number(cash_given.value);

    message.style.display = "none";
    // console.log(bill_amount.value);

    if (billamountvalue>0)
    {


        if(billamountvalue<= cashgivenvalue)
        {
           const cash_return= cashgivenvalue - billamountvalue;
            calculatechange(cash_return);
        }
        
       else {
    //    message.innerText="pay more amount of cash " ;
                 showMessage("Pay more amount of cash");
            }
    }
    else{

        showMessage("Invalid Bill Amount");
    }




})

function calculatechange(cash_return){
    
        
        for(let i=0;i<available_notes.length; i++)
        {
            const numberofnotes= Math.trunc(cash_return/available_notes[i]);
            cash_return = cash_return%available_notes[i];
            noOfNotes[i].innerText = numberofnotes;
            
        }
    
  
}

function showMessage(msg) {
   message.style.display = "block";
    message.innerText = msg;
  }