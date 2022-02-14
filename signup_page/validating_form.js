function clearError(){
    errors=document.getElementsByClassName('err');
    for(let itms of errors){
        itms.innerHTML="";
    }
}
function validate(){
    clearError();
    var returnvlaue=true;
    var name=document.forms['form_validate']["name"].value;
    if (name.length<3){
        document.getElementsByClassName('err1')[0].innerHTML="**Length of username is very short!**";
        returnvlaue=false;
    }
    var mobile=document.forms['form_validate']["phn"].value;
    if (mobile.length!=10){
        document.getElementsByClassName('err2')[0].innerHTML="**Enter 10 digits mobile no.!**";
        returnvlaue=false;
    }
    var pass=document.forms['form_validate']["pass"].value;
    if (pass.length<8){
        document.getElementsByClassName('err4')[0].innerHTML="**Password length should be of 8 characters or more!**";
        returnvlaue=false;
    }
    var confirm=document.forms['form_validate']["confirm"].value;
    if (confirm!=pass){
        document.getElementsByClassName('err5')[0].innerHTML="**Confirm password is not same as the password!**";
        returnvlaue=false;
    }




    return returnvlaue

}