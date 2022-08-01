console.log("Welcome to Employee Wage");
const Is_Part_Time = 1;
const Is_Full_Time = 2;
const Full_Time_Hr = 8;
const Half_Time_Hr = 4;
const Employee_Per_Hr_Rate = 20;
let TotalEmpHr = 0;
const Day_Of_Month = 20;
for (let i = 1; i < Day_Of_Month; i++){
let checkEmp = Math.floor(Math.random()*3);
TotalEmpHr += getTheWorkingHr(checkEmp);
}
let EmployeeWage = Employee_Per_Hr_Rate*TotalEmpHr;
console.log("Total EmpHr is = "+TotalEmpHr+"  Employye Wage is "+EmployeeWage);
function getTheWorkingHr(checkEmp) {
switch (checkEmp) {
    case Is_Part_Time:
        return Half_Time_Hr;
    case Is_Full_Time:
        return Full_Time_Hr;
    default:
        return 0;
 }
}
