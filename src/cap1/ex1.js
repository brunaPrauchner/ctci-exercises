// isUniqueWithoutAux is O(n^2) because it will run through each elem of s searching for each elem in s
function isUniqueWithoutAux(s){
    console.log("isUnique receives a String - version without aux data structure", s)
    for(let i=0; i<s.length; i++){
        for(let j=i+1; j<s.length; j++)
            if(s[i] === s[j])
            return false
    }
    return true
}

// isUniqueWithHash is O(n). Adding and getting an element on a hash is O(1), and we only need to do that for each element of the string O(n)
function isUniqueWithHash(s){
    console.log("isUnique receives a String - version with Hash", s)
    let hashTable = {}
    for(let i=0 ; i<s.length; i++) {
        if(!hashTable[s[i]])
            hashTable[s[i]] = 1
        else {
            return false
        }
    }
    return true
}

// isUnique is O(n^2) because it will run through each elem of s searching for each elem in aux
function isUnique(s){
    console.log("isUnique receives a String - version with aux array data structure", s)
    let aux = [];
    for(let i=0; i<s.length; i++){
        aux.push(s[i]);
        for(let j=0; j<aux.length-1; j++){
            if(s[i] === aux[j])
                return false
        }
    }
    return true;
}

function main() {
    const myFunc = isUniqueWithHash;
    console.log(myFunc("meunome"));
    console.log(myFunc("abc"));
    console.log(myFunc("meuno"));
    console.log(myFunc(""));
    console.log(myFunc("a"));
    console.log(myFunc(" "));
    console.log(myFunc("  "));
    console.log(myFunc("ab"));
}

main()