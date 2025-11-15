function question1() {
    const n = Number(next());
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(Number(next()));
    let operations = 0;
    let prefix = 0;
    let maxPrefix = 0;
    for (let i = 0; i < n; i++) {
        prefix += arr[i];
        if (prefix < maxPrefix) {
            operations++;
            prefix = 0;
            maxPrefix = 0;
        } else {
            maxPrefix = Math.max(maxPrefix, prefix);
        }
    }
    console.log(operations);
}

