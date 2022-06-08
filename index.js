// Your code here

function saturdayFun(Activities = 'roller-skate') {
    return `This Saturday, I want to ${Activities}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(x = "*") {
    return function innerfunction(y = "hard") {
        return `You are ${x}${y}${x}!`
    }
}

let Calculator = {
    add: function (a, object) {
        return a + object
    },
    subtract: function (a, object) {
        return a - object
    },
    multiply: function (a, object) {
        return a * object
    },
    divide: function (a, object) {
        return a / object
    }
}
l
function actionApplyer(x) {
    if (x === 0) {
        return x
    } else {
        return ((x * 2) + 1000) % 7
    }
}