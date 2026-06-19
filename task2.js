const salaries=[50000, 60000, -1000, 45000, 60000, 0, 75000, 50000, "abc", "sajilo", "0..11.11.122"];
//const multiply = (a, b) => a * b;
const validsalaries = salaries.filter(
    salaries => typeof salaries === "number" && salaries > 0
);
console.log("Valid salaries:",validsalaries);

const invalidsalaries = salaries.filter(
    salaries => typeof salaries !== "number" || salaries  <= 0
    
);
console.log("Invalid salaries:",invalidsalaries);

const total = validsalaries.reduce((sum, salaries) => sum + salaries);
console.log("Total Salaries:",total);
const aveg = total / validsalaries.length;
console.log("Average salaries:", aveg);

const highest= Math.max(...validsalaries);
const lowest= Math.min(...validsalaries);
console.log("Highest salaries:", highest);
console.log("Lowest salaries:", lowest);

const duplicates = validsalaries.filter()
  


console.log("Duplicate Salaries:", duplicates);
console.log("Summary Report:");
console.log("Total valid Employees:", validsalaries.length);
console.log("Total invalid entries:", invalidsalaries.length);
console.log("salary Range:", highest - lowest);








