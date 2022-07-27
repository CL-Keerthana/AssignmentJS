function submit2() {
    console.log("submit")
    // console.log(document.forms["myform1"])
    let name = document.forms["myform1"]["Name"].value;
    let email = document.forms["myform1"]["Email"].value;
    let phone = document.forms["myform1"]["Phone"].value;
    let checkin = document.forms["myform1"]["Checkin"].value;
    let checkout = document.forms["myform1"]["Checkout"].value;
    let adult = document.forms["myform1"]["Adult"].value;
    let children = document.forms["myform1"]["Children"].value;



    while (true) {
        console.log(name)
        if (name.length == 0) {
            alert("Please enter valid name ")
            document.forms["myform1"].elements["Name"].focus();

            break;
        }


        if (!ValidateEmail(email)) break;



        if (!phonenumber(phone)) break;




        if (checkin.length == 0) {
            alert("Please enter date");
            break;
        }
        if (checkout.length == 0) {
            alert("Please enter date");
            break;
        }
        if (adult.length == 0) {
            alert("Please enter number of adult");
            break;
        }
        if (children.length == 0) {
            alert("Please enter number of children");
            break;
        }

        confirm("Are you sure you want to submit?")

        // var sel=[...document.getElementsByClassName("selected")][0];

        document.forms["myform1"]["Name"].value = null;
        document.forms["myform1"]["Email"].value = null;
        document.forms["myform1"]["Phone"].value = null;
        document.forms["myform1"]["Checkin"].value = null;
        document.forms["myform1"]["Checkout"].value = null;
        document.forms["myform1"]["Adult"].value = null;
        document.forms["myform1"]["Children"].value = null;

        break;

    }
}


function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {

        return true;

    } else {

        alert("Invalid email address!");

        document.forms["myform1"].elements["Email"].focus();

        return false;

    }

}


function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if ((inputtxt.match(phoneno))) {

        return true;
    }
    else {
        alert("Please enter valid phone number");
        document.forms["myform1"].elements["Phone"].focus();
        return false;
    }
}

function Aadharnumber(inputtxt) {
    var phoneno = /^\d{12}$/;
    if ((inputtxt.match(phoneno))) {

        return true;
    }
    else {
        alert("Please enter correct Aadhar number");
        document.forms["myform1"].elements["Aadhar"].focus();
        return false;
    }
}

function submitfeedback(){
        console.log("submit")
        // console.log(document.forms["myform1"])
        let name = document.forms["myform2"]["Name"].value;
        let email = document.forms["myform2"]["Email"].value;
        let phone = document.forms["myform2"]["Phone"].value;
        // let message = document.forms["myform2"]["Message"].value;
      
        while (true) {
            console.log(name)
            if (name.length == 0) {
                alert("Please enter valid name ")
                document.forms["myform2"].elements["Name"].focus();
      
                break;
            }
      
      
            if (!ValidateEmail(email)) break;
      
      
      
            if (!phonenumber(phone)) break;
      
      
      
      
            
      
            confirm("Are you sure you want to submit?")
      
            // var sel=[...document.getElementsByClassName("selected")][0];
      
            document.forms["myform2"]["Name"].value = null;
            document.forms["myform2"]["Email"].value = null;
            document.forms["myform2"]["Phone"].value = null;
            document.forms["myform2"]["Message"].value = null;
           
      
            break;
      
        }
      }
      
      
      function ValidateEmail(input) {
      
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (input.match(validRegex)) {
      
            return true;
      
        } else {
      
            alert("Invalid email address!");
      
            document.forms["myform2"].elements["Email"].focus();
      
            return false;
      
        }
      
      }
      
      
      function phonenumber(inputtxt) {
        var phoneno = /^\d{10}$/;
        if ((inputtxt.match(phoneno))) {
      
            return true;
        }
        else {
            alert("Please enter valid phone number");
            document.forms["myform2"].elements["Phone"].focus();
            return false;
        }
      }
      
    
      



