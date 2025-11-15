const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function minCollapses(arr) {
    let count = 1;
    let prefixSum = 0;

    for (let num of arr) {
        prefixSum += num;
        if (prefixSum < 0) {
            count++;
            prefixSum = 0;
        }
    }

    return count;
}



readline.question('', (n) => {
    readline.question("", (input) => {
        let arr = input.split(" ").map(Number);
        console.log(minCollapses(arr));

        readline.close();
    });
});
