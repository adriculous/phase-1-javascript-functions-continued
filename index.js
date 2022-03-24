// code your solution here

// Creating a function with Function Declaration
function saturdayFun(activity) {
  if (activity) {
    return `This Saturday, I want to ${activity}!`;
  } else {
    return `This Saturday, I want to roller-skate!`;
  }
}

// Create a function using Function Expression (use anonymous function as a value, declared variable will become a function)
const mondayWork = function (mondayToDo) {
  if (mondayToDo) {
    return `This Monday, I will ${mondayToDo}.`;
  } else {
    return `This Monday, I will go to the office.`;
  }
};

// Create a function using IIFE, function-level scope, scope chain, closure

function wrapAdjective(showExpression = "*") {
  const description = function (describeWord = "special") {
    return `You are ${showExpression}${describeWord}${showExpression}!`;
  };
  return description;
}
