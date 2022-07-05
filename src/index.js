module.exports = function toReadable (number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20)
        return arr1[number];

    let x = number % 10;

    if (number < 100)
        return arr2[Math.floor(number / 10) - 2] + (x ? " " + arr1[x] : "");
    else if (number < 1000)
        return arr1[Math.floor(number / 100)] + " hundred" + (number % 100 == 0 ? "" : " " + toReadable(number % 100));
}
