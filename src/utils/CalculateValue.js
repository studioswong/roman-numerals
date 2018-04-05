const CalculateValue = (input) => {
    var result = 0;
    const pairedValues = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],["C",100], ["XC",90],["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV",4], ["I", 1]];
    pairedValues.map((paired) =>{
        while (input.indexOf(paired[0]) === 0){
            result += paired[1];
            input = input.replace(paired[0],'');
        }
    })
    return result;
}

export default CalculateValue;