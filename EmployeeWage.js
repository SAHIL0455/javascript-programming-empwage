console.log("Welcome to Employee Wage");
const Is_Part_Time = 1;
const Is_Full_Time = 2;
const Full_Time_Hr = 8;
const Half_Time_Hr = 4;
const Employee_Per_Hr_Rate = 20;
let EmployeeWorkHr;
let checkEmp = Math.floor(Math.random()*3);
getTheWorkingHr();
let EmployeeWage = Employee_Per_Hr_Rate*EmployeeWorkHr;
console.log("Employye Wage is "+EmployeeWage);
function getTheWorkingHr() {
switch (checkEmp) {
    case Is_Part_Time:
        EmployeeWorkHr = Half_Time_Hr;
        break;
    case Is_Full_Time:
        EmployeeWorkHr = Full_Time_Hr;
        break;
    default:
        EmployeeWorkHr = 0;
 }
}
