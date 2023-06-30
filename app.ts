import {compressString} from "./compression";

let stringToCompress: string = 'aaabbbccc';
let compressedString: string = compressString(stringToCompress);
console.log('Simple compression of ' + stringToCompress + ' is ' + compressedString);


import {bubbleSortAndCompress} from "./bubbleAndCompression";

let stringToBubbleSortAndCompress: string = 'aabbccaaeeddaaffccqqssaa';
let bubbledAndCompressedString: string = bubbleSortAndCompress(stringToBubbleSortAndCompress);
console.log('Bubble sort and compression of ' + stringToBubbleSortAndCompress + ' is ' + bubbledAndCompressedString);
