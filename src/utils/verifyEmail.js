// Write a function to check if the email is valid or not
// Return true if the email is valid, otherwise return false

const verifyEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

export default verifyEmail;
