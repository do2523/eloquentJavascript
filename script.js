document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    function countChar(str, c){
        for (let i = 0; i < str.length; i++){
            if (str[i] == c){
                counter += 1;
            }
            console.log(countChar("Javascript", "a"));
        }
        return counter;
    }

})