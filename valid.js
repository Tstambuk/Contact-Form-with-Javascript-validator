
function Validation1()
{
  var frmvalidator = new Validator(“myform”);
if(frmvalidator.addValidation)
{
  frmvalidator.addValidation("ime","req","Molimo unesite Ime");
 frmvalidator.addValidation("ime","maxlen=20");
 
 frmvalidator.addValidation("prezime","req","Molimo unesite Prezime");
 frmvalidator.addValidation("prezime","maxlen=20");
 
 frmvalidator.addValidation("email","maxlen=50");
 frmvalidator.addValidation("email","req");
 frmvalidator.addValidation("email","email");
 
 frmvalidator.addValidation("telefon","maxlen=50");
 frmvalidator.addValidation("telefon","numeric");
 

}

}



