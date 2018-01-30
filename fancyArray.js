
function slots(quarters) {
    var win = Math.random() * 101;
    if (win === 1) {
        var coins = Math.floor(Math.random()* 50) + 51; 
    } else {
        coins = 0;
    }
    return coins;
}

slots(10);

function that takes in num of quarters () { 

}

-------------------

printKeys(obj)

for (k in obj) {
    console.log(obj[k]);
}

printVal(obj)

for (val in obj) {
    console.log(obj[val]);
} 