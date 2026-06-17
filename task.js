// operator opertion
let x= 8;
let y= 5;
console.log("x+y =", x+y);
console.log("x-y =", x-y);
console.log("x*y =", x*y);
console.log("x/y =", x/y);

//



//array
const salaries= [45000,56999,30999,21000,60008];
let total=0;

for (let i = 0; i < salaries.length; i++){
    total+= salaries[i];
}

let avgsalary = total/ salaries.length;
console.log("Average salary:", avgsalary);

if (avgsalary > 60000){
    console.log("Excellent");
}else if(avgsalary > 40000){
    console.log("Good");

}else{
    console.log("Average");
}

//function
const salary= [45000,56999,30999,21000,60008];

function checkSalary(salary){
    let total=0;

    for (let i=0; i < salary.length; i++){
        total+= salary[i];
    }

    let avg = total/ salary.length;
    console.log("Average salary:", avg);

    if (avg > 60000){
        console.log("Excellent");
    }else if (avg > 40000){
        console.log("Good");
    }else{
        console.log("Average");
    }
}
checkSalary(salary);

//operator opertion using function

function number(a,b){
    console.log("a+b=", a+b);
    console.log("a-b=", a-b);
    console.log("a*b=", a*b);
    console.log("a/b=", a/b);
}
return number(8,5);


//
const salarys=[50000, 60000, -1000, 45000, 60000, 0, 75000, 50000, "abc", "sajilo", "0..11.11.122"];

function filtersalarys(arr){
    let valid=[];
    let invalid=[];

    for(let i=0; i<arr.length; i++){
        if (typeof arr[i] !=="number" || arr[i]<= 0){
            invalid.push(arr[i]);
        }else{
            valid.push(arr[i]);
        }
    }
    return{valid,invalid};
}

function calculateStatus(valid){
    let total=0;
    let highest= valid[0];
    let lowest= valid[0];

    for (i=0; i < valid.length; i++){
        total+= valid[i];

        if(valid[i]>highest) highest =valid[i];
        if(valid[i]<lowest) lowest =valid[i];
    }
    let avg= total/valid.length;
    return {avg, highest, lowest}
}

function duplicate(valid){
    let visit=[];
    let duplicates=[];

    for(i=0; i< valid.length; i++){
        if(visit.includes(valid[i]))  continue;
        let count= 1;
        for(let j= i+1;j< valid.length;j++){
            if(valid[i]== valid[j]){
                count++;
            }
        }
        if(count>1){
            duplicates.push({salarys: valid[i],count:count});
        }
        visit.push(valid[i]);

    }
    return duplicates;
}

function compareSalarys(valid){
    console.log("Salary comparisons:");

    for(let i=0; i<valid.length; i++){
        for(j=i+1; j<valid.length; j++){
            if(valid[i]> valid[j]){
                console.log(`${valid[i]}>${valid[j]}`);

            }else if(valid[i]< valid[j]){
                console.log(`${valid[i]}<${valid[j]}`);

            }
        }
    }
}

function processSalarys(arr){
    const{valid,invalid}= filtersalarys(arr);

    console.log("Valid Salaries:", valid);
    console.log("Invalid salaries:",invalid);

    const {avg, highest, lowest}=calculateStatus(valid);
    console.log("Average Salary:", avg);
    console.log("Highest Salary:", highest);
    console.log("Lowest Salary:", lowest);

    const duplicates= duplicate(valid);
    console.log("Duplicate salaries found:");
    for (let i = 0; i < duplicates.length; i++) {
        console.log(`- ${duplicates[i].salary} appears ${duplicates[i].count} times`);
    }

    compareSalarys(valid);
    console.log("Summary Report:");
    console.log("Total Valid Employees:", valid.length);
    console.log("Total Invalid Entries:", invalid.length);
    console.log("Salary Range:", highest - lowest);


}
processSalarys(salarys);