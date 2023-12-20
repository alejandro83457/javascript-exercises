const getTheTitles = function (books) {
    return books.reduce((obj, book) => {
        obj.push(book.title);
        return obj;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
