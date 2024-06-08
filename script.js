counter = 0
function countChar(str, c){
    for (let i = 0; i < str.length; i++){
        if (str[i] == c){
            counter += 1
        }
    }
    return counter;

}

console.log(countChar("Javascript", "a"))