'use strict';
const Person = {
    Name:"Logan",
    Year:1994,
    calcAge:function(year){
        console.log("func",this);
        const test =  () => {
            console.log("inner func",this);
        }
        test()
        return year - this.Year
    }
}

Person.calcAge(2004)