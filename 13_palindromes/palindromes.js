const palindromes = function (w) {
    function reverse (a) {
        return a.split("").reverse().join("");
    }
    function punctuation (e) {
        return e.replace(/[!,.\s]/g, "");
    }
    const wor = punctuation(w).toLowerCase();
    const rev = reverse(wor);
    if (rev === wor) {return true;}
    else {return false;}
};

// Do not edit below this line
module.exports = palindromes;
