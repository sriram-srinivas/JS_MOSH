'use strict';
const Person = {
    Name:"Logan",
    Year:1994,
    calcAge:function(year){
        console.log("func",this);
        return year - this.Year
    },
    calcAge1: year => {
        console.log("arrow",this);
        year - this.Year
    }
}

function calcAge (year){
    console.log("func def",this);
}
const calcAge1 =  year => {
    console.log("arrow",this);
}

const calcAge2 = function (year) {
    console.log("func dec",this);
}


console.log(calcAge(2021),calcAge1(2021),calcAge2(2021),Person.calcAge(2021),Person.calcAge1(2021));