function longestConsecutive(testArray, k) {
    let longestString = '';

    // console.log(testArray);
    // console.log(k);  //3
    // console.log(testArray.length);  //9

    testArray.forEach((word, index) => {
        let tempWord = testArray.slice(index, index + k).join('');
        // console.log(`tempWord: ${tempWord}`)

        if (tempWord.length > longestString.length) {
            // console.log(`${tempWord} is longer than ${longestString}`)
            longestString = tempWord;
        }
    })

    console.log('')
    return longestString;
}

console.log();
console.log(longestConsecutive(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3)); // -> 'marblesmittensbye'
console.log();
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)); // --> "abigailtheta"
