// TASK ONE
//  Declare two variables - username and age 
// Ask user to enter their name, then their age, store this information in the appropriate variable then 
// Write an alert message with a sentence reading “Welcome, <insert the name variable>, You are <insert the age variable> years old.
// For example, if the user entered John and 13, Alert should read - Welcome John, you are 13 years old.


const printUserInfo = () =>{
  let userName, age, output;

  let enterName = prompt('please enter your name');
  let enterAge = prompt('please enter your age');

  if(enterName === ''){
    enterName = prompt('please enter a valid name')
  }
  
  if(enterAge === '' ){
   enterAge = prompt('please enter a valid age');
  }
  
  output = `Welcome ${enterName}, You are ${enterAge} year(s) old.`
  

  alert(`${output}`);
}

printUserInfo()