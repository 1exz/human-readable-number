 function toReadable (number) {
    const firstArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondArr = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const thirdArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = number;

    if (result.length === 1) {
        return firstArr[result];

    } else if (result.length === 2) {
        if (result > 10 && result < 20) {
            return secondArr[result[1]];
        } else if (result[1] == 0) {
            return thirdArr[result[0]];
        } else {
            return thirdArr[result[0]] + ' ' + firstArr[result[1]];
        }
        
    } else if (result.length === 3) {
        if (result[1] == 0 && result[2] == 0) {
            return firstArr[result[0]] + ' hundred';
        } else if (result[1] == 0 && result[2] != 0) {
            return firstArr[result[0]] + ' hundred ' + firstArr[result[2]];     
        } else if (result[1] != 0 && result[2] == 0) {
            return firstArr[result[0]] + ' hundred ' + thirdArr[result[1]];        
        } else if (result[1] == 1) {
            return firstArr[result[0]] + ' hundred ' + secondArr[result[2]];
        }  else if (result[1] > 1) {
            return firstArr[result[0]] + ' hundred ' + thirdArr[result[1]] + ' ' + firstArr[result[2]];
        }
    }
}
console.log(toReadable(7))
