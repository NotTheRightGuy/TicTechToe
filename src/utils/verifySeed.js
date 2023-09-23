//Write a function to check weather the incoming string has a minimum of 6 words and each word has a minimum of 3 characters
// Return true if the string is valid, otherwise return false

const verifySeed = (seed) => {
    const regex = /\S+\s+\S+\s+\S+\s+\S+\s+\S+\s+\S+/;
    return regex.test(seed);
};

export default verifySeed;
