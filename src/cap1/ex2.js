function _createHash(s){
    let hashTable = {}
    for(let i=0; i<s.length; i++){
        if(hashTable[s[i]])
            hashTable[s[i]]++
        else
            hashTable[s[i]] = 1
    }
    return hashTable;
}

// checkPermutation is O(n)
function checkPermutation(s1, s2){
    if(s1.length !== s2.length) return false; 

    let hashTable1 = _createHash(s1)
    let hashTable2 = _createHash(s2)
    for(let key in hashTable1) {
        if(!(hashTable2[key] && (hashTable1[key] == hashTable2[key])))
            return false;
    }
    return true;
}

//checkPermutationWithoutAux is O(nlogn) because sort from js is O(nlogn)
function checkPermutationWithoutAux(s1, s2){
    if(s1.length !== s2.length) return false;
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    if(s1===s2)
        return true;
    return false;
}

function main() {
    const myFunc = checkPermutation;

    console.log(myFunc("cfgoy", "chgau"));
    console.log(myFunc('aba', 'aab'));
    console.log(myFunc('aba', 'aaba'));
    console.log(myFunc('aba', 'aa'));
}
main()
