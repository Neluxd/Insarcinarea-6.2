document.addEventListener('DOMContentLoaded', () =>{
    let salaries = {
    };

    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }

    alert(sum); // 390

})