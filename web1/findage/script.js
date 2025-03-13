function age(){
    const result =document.getElementById("result");
    const dob=document.getElementById("DoB").value;
    const date=new Date();
    const Dob=new Date(dob);    
    if(!dob || !date){
        alert("Please enter  your date for birth to check your age.");
    }
    let age1=date.getFullYear() - Dob.getFullYear();
    const monthdiff=date.getMonth()-Dob.getMonth();
    if(monthdiff<0 || (monthdiff===0&& date.getDate()<Dob.getDate())){
        age--;
    }
    result.textContent=`you are ${age1} years old`;
}

