// Procedural
let baseSalary = 3000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate)
}

// Encapsulation
let employee = {
    baseSalary = 3000,
    overtime = 10,
    rate = 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate)
    }
}