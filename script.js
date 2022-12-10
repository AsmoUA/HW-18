let fSalary = prompt('Enter you salary for first month', '1');
let sSalary = prompt('Enter you salary for second month', '2');
const sum = Number(fSalary) + Number(sSalary);
alert(`Your salary for two month: ${sum}$`);
const bonus = 1;
const total = sum + bonus
alert(`Your have extra bonus! Your total salary was: ${sum}$ it's increase for ${bonus}$ 
and now it is: ${total}$`);
// alert(`Will you work next? ${total >= 2000}`);
alert(!(total >= 2000) && 'I\'m out' || total >= 2000 && 'I\'m redy to work');

