const PI = 3.140000001;
const twoPwr = (num) => {
    return num ** 2
}
// in order to access const in different file
module.exports.PII = PI;
module.exports.twoPwrr = twoPwr;

//we can export directly but the condition is it should be arrow function
module.exports.extractObjFromStr = (inpStr) => {
    //extrcting object from string
    const obj = JSON.parse(inpStr);
    return obj;
}



