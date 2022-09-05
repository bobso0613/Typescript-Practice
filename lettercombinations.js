const letterCombination = (numberInput) => {
    let result = [];
    let numberMapping = [" ", " ", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wyxz"];
    // DISCLAIMER: On example there are no more than 2 digits
    // so i'm not quite sure what the output would be for those
    if (numberInput.length > 1) {
        let numberInputArray = numberInput.split("");
        for (let letter of numberMapping[Number(numberInputArray[0])]) {
            letter = letter.trim();
            let letterToPush = letter;
            for (let ctr = 1; ctr < numberInputArray.length; ctr++) {
                for (let innerLetter of numberMapping[Number(numberInputArray[ctr])]) {
                    innerLetter = innerLetter.trim();
                    result.push(letterToPush + innerLetter);
                }
            }
        }
    }
    else {
        for (let letter of numberMapping[Number(numberInput)]) {
            result.push(letter);
        }
    }
    return result;
};
console.log("no value: " + letterCombination(""));
console.log("1 or 0 value: " + letterCombination("1"));
console.log("Single digit: " + letterCombination("4"));
console.log("Double Digit with 1/0 preceeding: " + letterCombination("13"));
console.log("Double Digit with 1/0 succeeding: " + letterCombination("60"));
console.log("Double Digit: " + letterCombination("23"));
console.log("Double Digit (same digit): " + letterCombination("55"));
console.log("x Digits: " + letterCombination("234"));
