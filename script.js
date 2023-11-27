
function Trans() {
    let proccess;
    proccess = prompt("Welcome to Maryam USSD Banking!!\n PLEASE SELECT ANY OF THE FOLLOWING OPTIONS TO PROCEED\n1. Airtime\n2.Data\n3.Transfer\n4.Pay Bills\n5. Check Balance\n6. Others");  
    if (proccess == 1) {
        Airtime();
    } else if (proccess == 2) {
        Data();
    } else if (proccess == 3) {
        Transfer();
    } else if(proccess == 4) {
        Pay();
    } else if(proccess == 5){
        check();
    } else {
        more();
    }
}

Trans();

function Airtime() {
    let self;
    self = prompt("1. Self\n2. Others");
    if (self == 1) {
        self1();
    } else {
        self2();
    }
   
}
function self1() {
    
    self3();
}
var self4;
function self3() {
   
   self4 = prompt("Enter your mobile number.");
     if (self4.length == 11) {
        self5();
       
    } else if (self4.length < 11) {
        alert("Incomplete Number")
    } else {
        alert("The Number is more than 11")
    }

}
function self5() {
    let self6;
    self6 = prompt("You are about to send airtime to " + self4 + " Continue? \n 1. Yes \n 2.No");
    if (self6 == 1) {
        self7();
    } else {
        alert("Unfinished Transaction")
    }
}
function self7() {
  let self8;
  self8 = prompt("Enter Amount to be transferred");
  if (self8 <= 10000) {
    let self9;
    self9 = prompt("Enter your four digit pin");
    if (self9 == 1223) {
      alert("Your request is processing");
      alert(
        "The amount " +
          self8 +
          " is been transferred to " +
          self4 +
          " Successfully!!"
      );
    } else {
      alert("Invalid Pin");
    }
  } else {
    alert("Insufficient Fund");
  }
}

function self2() {
   self9();
}
 var self10;
function self9() {
   
   self10 = prompt("Enter Third Party Number.");
     if (self10.length == 11) {
        self5();
       
    } else if (self10.length < 11) {
        alert("Incomplete Number")
    } else {
        alert("The Number is more than 11")
    }

}
function self11() {
    let self11;
    self11 = prompt("You are about to send airtime to  Continue? \n 1. Yes \n 2.No");
    if (self11 == 1) {
        self12();
    } else {
        alert("Unfinished Transaction")
    }
}
function self12() {
    let self13;
    self13 = prompt("Enter Amount to be transferred");
    if (self13 <= 10000) {
        let self14;
        self14 = prompt("Enter your four digit pin");
        if (self14 == 1223) {
            alert("Your request is processing");
            alert(
                "The amount " +
                self13 +
                " is been transferred to " +
                self4 +
                " Successfully!!"
            );
        } else {
            alert("Invalid Pin");
        }
    } else {
        alert("Insufficient Fund");
    }
}
function Data() {
let others;
others = prompt("1. Self\n2. Others");
if (others == 1) {
  others1();
} else {
  others2();
}   
}
function others1() {
  others3();
}
var others4;
function others3() {
  others4 = prompt("Enter your mobile number.");
  if (others4.length == 11) {
    others5();
  } else if (others4.length < 11) {
    alert("Incomplete Number");
  } else {
    alert("The Number is more than 11");
  }
}
function others5() {
  let others6;
  others6 = prompt(
    "You are about to send airtime to " + others4 + " Continue? \n 1. Yes \n 2.No"
  );
  if (others6 == 1) {
    others7();
  } else {
    alert("Unfinished Transaction");
  }
}
function others7() {
  let others8;
  others8 = prompt("Enter Amount to be transferred");
  if (others8 <= 10000) {
    let others9;
    others9 = prompt("Enter your four digit pin");
    if (others9 == 1223) {
      alert("Your request is processing");
      alert(
        "The amount " +
          others8 +
          " is been transferred to " +
          others4 +
          " Successfully!!"
      );
    } else {
      alert("Invalid Pin");
    }
  } else {
    alert("Insufficient Fund");
  }
}

function others2() {
  others9();
}
var others10;
function others9() {
  others10 = prompt("Enter Third Party Number.");
  if (others10.length == 11) {
    others5();
  } else if (others10.length < 11) {
    alert("Incomplete Number");
  } else {
    alert("The Number is more than 11");
  }
}
function others11() {
  let others11;
  others11 = prompt(
    "You are about to send airtime to " +others10 + " Continue? \n 1. Yes \n 2.No"
  );
  if (others11 == 1) {
    others12();
  } else {
    alert("Unfinished Transaction");
  }
}
function others12() {
  let others13;
  others13 = prompt("Enter Amount to be transferred");
  if (others13 <= 10000) {
    let others14;
    others14 = prompt("Enter your four digit pin");
    if (others14 == 1223) {
      alert("Your request is processing");
      alert(
        "The amount " +
          others13 +
          " is been transferred to " +
          others4 +
          " Successfully!!"
      );
    } else {
      alert("Invalid Pin");
    }
  } else {
    alert("Insufficient Fund");
  }
}

  
function Transfer() {
  var Bank;
    
   
    Bank = prompt("Enter Bank Name:\n 1. Zenith Bank\n 2. Jaiz Bank\n 3. UBA\n 4.Acess Bank \n 5.Others");
     
    if (Bank == 1 ) {
        Bank2();
    } else if (Bank == 2) {
        Bank2();
    } else if (Bank == 3) {
        Bank2();
    } else if (Bank == 4) {
        Bank2();
    } else {
        prompt("Enter Bank Name:\n 1. Palmpay \n 2. Opay ");
    }
        
}
    var Bank3;
function Bank2() {
   
    Bank3 = prompt("Enter Account Number");
    if (Bank3.length == 10) {
        Bank4();
       
    } else if (Bank3.length < 10) {
        alert("Incomplete Number")
    } else {
        alert("The Number is more than 10")
    }

  }
function Bank4() {
    let Bank5;
    Bank5 = prompt("You want to transfer Yusuf Maryam? \n 1. Yes \n 2.No");
    if (Bank5 == 1) {
        Bank6();
    } else {
        alert("Unfinished Transaction")
    }
        
    
}
function Bank6() {
    let Bank7;
    Bank7 = prompt("Enter Amount to be transferred");
    if (Bank7 <= 10000) {
           let Bank8;
           Bank8 = prompt("Enter your four digit pin");
           if (Bank8 == 1223) {
             alert("Your request is processing");
             alert("The amount " + Bank7 + " is been transferred to " + Bank3 + " Successfully!!" );
           } else {
             alert("Invalid Pin");
           }
    } else  {
     alert("Insufficient Fund")
    } 
}
// function Bank8() {

// }
function Pay() {
    prompt("1. Nepa Bill\n 2. Water Bill \n 3. Food Bill \n4. Yen Biils \n 5. Others" )
}
function check() {
    let Bank9;
    Bank9 = alert("Your request is being proceesed");
    alert("Your account balance is 10000");
}
function more() {
    prompt("Out of clues ahahahahahahhahahah")
}
 
