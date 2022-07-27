function validate(){
    var user=document.f1.username.value;
    var pass=document.f1.pwd.value;
   
    sp=0;
    for(i=0;i<user.length;i++)
    {
         ch=user.charAt(i);
         if(ch=='')
         sp=1;
    }
    alphadigit=0;
    alpha=/[a-zA-Z]/;
     digit=/[0-9]/;
    if(sp==1)
    {
        alert("please input a username without space");
        return false;
    }

    else if(user==""||user.length>5) 
    {  
        alert("pls enter the five letter username");
        return false;
    }
    else if(pass==""||pass.length<9)  
    {
        alert("pls input valid password");
        return false;
    
    }
    else if(pass.match(alpha)&&pass.match(digit))
    alphadigit=1;
   
    else if(alphadigit==0)
    {
        alert("pls enter atleast one alpahbet and one digit");
        return false;
    
    }

    else alert("bangude")
    

}