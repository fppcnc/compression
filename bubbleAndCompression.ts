function bubbleSortAndCompress(stringToOrganize: string): string {
    //the split() method divides a string into an ordered list of substrings,
    //puts these substrings into an array, and returns the array
    let arrayedString = stringToOrganize.split('');

    //bubble up the single arrayed characters from string
    for (let i = 0; i < arrayedString.length - 1; i++) {
        for (let j = 0; j < arrayedString.length - i - 1; j++) {
            if (arrayedString[j] > arrayedString[j + 1]) {
                const temp = arrayedString[j];
                arrayedString[j] = arrayedString[j + 1];
                arrayedString[j + 1] = temp;
            }
        }
    }
    //now we run the compression

    //start from empty string
    let compressedString = '';
    //every found letter starts with a count of 1, of course
    let count = 1;
    //iter values in given string like it is an array
    for (let i = 0; i < arrayedString.length; i++) {
        //check if arrayedString[i] is the same as the next one
        if (arrayedString[i] === arrayedString[i + 1]) {
            //and add count
            count++;
        } else {
            //save the character and its count to the compressed string
            compressedString += arrayedString[i] + count;
            //reset count ready for next position
            count = 1;
        }
    }
    return compressedString;
}

export { bubbleSortAndCompress }