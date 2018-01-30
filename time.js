/* arr = [1, "apple", -3, "orange", 0.5];

function numbersOnly(arr) {
    newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}

numbersOnly(arr);

---------

var dojo = {};
    dojo = {
        name: "Coding Dojo",
        num_stu: 25,
        instructors: ["Andrew", "Michael", "Jay"],
        location: {
            city: "San Jose",
            state: "CA",
            zip: 98032
        }
    }

console.log(dojo.instructors[1]);

---------
*/ 



var arr1 = [1, 2, 3, 4];
var arr2 = ["a", "b", "c", "d"]; 

function zip(arr1, arr2) {


    obj = {};

    for (var i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i];
    }
    
    return obj;

}

zip(arr1, arr2);