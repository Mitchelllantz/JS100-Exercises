let calculateBMI = (heightInCM, weightInKilograms) => {
let bmi = weightInKilograms / ((heightInCM / 100)**2);
bmi = bmi.toFixed(2);
console.log(bmi);
}

calculateBMI(180, 80); // "24.69"