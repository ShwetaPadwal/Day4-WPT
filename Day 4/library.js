'use strict'

class authentication{
    constructor() {
        this.details = [
          {
            email: "user1@example.com",
            password: "Password@1",
          },
          {
            email: "user2@example.com",
            password: "Password@2",
          },
          {
            email: "user3@example.com",
            password: "Password@3",
          }
        ];
    }

    checkemail(emailid) { 
      console.log(emailid);
      var exp =
        /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
      var result = exp.test(emailid);
      return result;
  }
  
  checkpassword(password) { 
      console.log(password);
    var exp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$]).{4,12}$/;
    var result = exp.test(password);
    return result;
    }
    checkemailpass() {
        
    }

}
 export default authentication;