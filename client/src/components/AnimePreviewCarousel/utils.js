export const groupIntoChunks = (array, chunkSize) => {
    const output = [];
    let currentChunk = [];

    array.forEach((item, index) => {
        currentChunk.push(item);

        if ((index + 1) % chunkSize === 0 || index === array.length - 1) {
            output.push(currentChunk);
            currentChunk = [];
        }
    });

    return output;
};
