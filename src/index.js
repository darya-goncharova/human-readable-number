module.exports = function toReadable(number) {
    const nums = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    let res = '';

    if (number === 0) {
        return 'zero';
    }

    if (number > 99) {
        let hundreds = Math.floor(number / 100);
        res += nums[hundreds] + ' hundred';
        number = number % 100;
        if (number) {
            res += ' ';
        } else {
            return res;
        }
    }

    if (number < 20) {
        return res + nums[number];
    }

    let tens = Math.floor(number / 10);
    res += nums[tens + '0'];
    number = number % 10;
    if (number) {
        return res + ' ' + nums[number];
    } else {
        return res;
    }
}
