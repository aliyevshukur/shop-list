const regName = /^[a-zA-Z]+$/;
let isAgeValid = false;
let isNameValid = false;
let saveName = '';
let saveAge = '';

while (!isAgeValid) {
    let ageInput = prompt("Enter your age:", `${saveAge}`);
    while (ageInput === null) {
        ageInput = prompt("Enter your age:", `${saveAge}`);
    }
    saveAge = ageInput.toString();
    const age = parseInt(ageInput);

    if (age > 0 && age < 130) {
        isAgeValid = true;
        if (age < 18) {
            alert("You are not allowed to visit this website.");
            location.href = "https://www.google.com/";
        } else if (age >= 18 && age <= 22) {
            if (confirm("Are you sure you want to continue?")) {
                checkAndPrintName();
            }
        } else {
            checkAndPrintName();
        }
    } else {
        alert("Enter valid age");
    }
}

function checkAndPrintName() {
    while (!isNameValid) {
        let name = prompt("Enter your name:", `${saveName}`);
        while (name === null) {
            name = prompt("Enter your name:", `${saveName}`);
        }
        saveName = name;
        if (regName.test(name)) {
            alert(`Welcome ${name}!`);
            isNameValid = true;
        } else {
            alert("Please enter valid name(A-Z, a-z)");
        }
    }
}