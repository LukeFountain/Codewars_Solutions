// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// Smash Words
function smash (words) {
    let splitStr = words.toString().split(' ')
    let regex = /,/g
    
    return splitStr.toString().replace(regex,' ')
    };