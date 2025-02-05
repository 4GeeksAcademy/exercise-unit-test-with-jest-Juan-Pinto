// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };


// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }

// We declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 146.23;
    // return the dollar value
    return valueInYen;
}

module.exports = { sum, fromDollarToYen }

// We declare the function with the exact name "fromEuroToDollar"
const fromYenToPound = function(valueInPound) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInPound * 0.00556 GBP;
    // return the dollar value
    return valueInPound;
}

module.exports = { sum, fromYenToPound }

