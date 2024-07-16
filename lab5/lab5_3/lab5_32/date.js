const d1 = new Date("2024-01-01");
const d2 = new Date();

const A = (d1,d2) =>{
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const timeDifference = date2.getTime() - date1.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    return Math.round(dayDifference);
}

const result = A(d1,d2);
console.log(result);

const day = new Date("2004-12-31");
const B = (day) =>{
    const birthDate = new Date(day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

const age = B(day);
console.log(age);