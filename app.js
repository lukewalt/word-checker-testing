



// There should be a function defined with the name checkWordCount.
function checkWordCount() {
    // That function should return false if a string sent to it has more than 100 words in it.
    $("#userInput").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;

        if (words > 100) {
            // Split the string on first 100 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 100).join(" ");
            // Add a space at the end to make sure more typing creates new words
            $(this).val(trimmed + " ");
        } else {
            $('#word_left').text(100-words);
        }

    });


};
checkWordCount();

// There should be a function defined with the name duplicateCheck.
function duplicateCheck() {
    // That function should return false if a string has duplicate words in it.
    var arr = [1, 1, 4, 5, 5, 7];
    var sorted = arr.slice().sort();

    for (var i = 0; i < arr.length; i++) {
        if (sorted[i + 1] == sorted[i]) {
            return false;
            // result.push(sorted[i]);
        }
    }

};

// There should be a function defined with the name verifyAlphaNumeric.
function verifyAlphaNumeric(input){
    // That function should return false if there are any non-alphanumeric characters in a string.
    var nonAlphanumeric = input.match(/[^a-zA-Z\d\s\.]/g)
    if (nonAlphanumeric) {
        return false;
    } else {
        return true;
    }
};



// Now that the test suite exists, write a simple application to implement the functionality.
