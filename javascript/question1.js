function minc(stability) {
    let sum = 0;
    let count = 0;
    let neg = [];

    for (let value of stability) {
        sum += value;

        if (value < 0) neg.push(value);

        while (sum < 0) {
           
            let index = 0;

            for (let i = 1; i < neg.length; i++) {
                if (neg[i] > neg[index]) {
                    index = i;
                }
            }

            const remove = neg[index];
            neg.splice(index, 1);

            sum -= remove;  
            count++;
        }
    }

    return count;
}

console.log(minc([2, -5, 3, -2, 4, -1, 6])); 
