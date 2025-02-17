const hashfunc = (str) => {
    let hashValue = 0;
    const p = 31;
    const m = 1000000007;
    let pPow = 1;

    for (let i = 0; i < str.length; i++) {
        hashValue = (hashValue + (str.charCodeAt(i) * pPow) % m) % m;
        pPow = (pPow * p) % m;
    }
    return hashValue;
}

function solution(participant, completion) {
    const hashTable = new Map();

    for (let winner of completion) {
        const hash = hashfunc(winner);
        hashTable.set(hash, (hashTable.get(hash) || 0) + 1);
    }

    for (let parts of participant) {
        const hash = hashfunc(parts);
        const count = hashTable.get(hash) || 0;

        if (count > 0) {
            hashTable.set(hash, count - 1);
        } else {
            return parts;
        }
    }
}
