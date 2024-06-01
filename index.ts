// Switch Statement's
// syntax

// switch () {
//     case :

//         break;

//     default:
//         break;
// }

// switch with month example

let month: string = "January";
switch (month) {
  case "January": case "February": case "March":
  console.log("Finally! Its Fabiha Birthday Month");
  break;
//   case "February":
//     console.log("Finally! Its My Birthday Month");
//     break;
//   case "March":
//     console.log("Finally! Its My Birthday Month");
//     break;
  case "April":
    console.log("This is month of April");
    break;
  case "May":
    console.log("This is month of May");
    break;
  case "June":
    console.log("Finally Its Javeriya Birthday Month");
    break;
  case "July":
    console.log("This is month of July");
    break;
  case "August":
    console.log("This is month of August");
    break;
  case "September":
    console.log("Finally Its Javeriya Nigar Birthday Month");
    break;
  case "October":
    console.log("Finally Its Rubab Birthday Month");
    break;
  case "November":
    console.log("Finally Its My Aniversary Month");
    break;
  case "December":
    console.log("This is month of December");
    break;

  default:
    console.log("Enter the valid month");
    break;
}
