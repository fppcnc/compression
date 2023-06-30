function compressString(stringToCompress: string): string {
    //start from empty string
    let compressedString: string = '';
    //every found letter starts with a count of 1, of course
    let count: number = 1;
    //iter values in given strings like it is an array
    for (let i:number = 0; i < stringToCompress.length; i++) {
        //check if stringToCompress[i] is the same as the next one
        if (stringToCompress[i] === stringToCompress[i + 1]) {
            //and add count
            count++;
        } else {
            //save the character and its count to the compressed string
            compressedString += stringToCompress[i] + count;
            //reset count ready for next position
            count = 1;
        }
    }

    return compressedString;
}


export { compressString }
