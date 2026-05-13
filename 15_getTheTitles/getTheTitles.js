const getTheTitles = function(b) {
    const books = b;
    const titles = books.map(
        function(title)
        {return title["title"];})
    return titles;
}

// Do not edit below this line
module.exports = getTheTitles;
