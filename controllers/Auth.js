// SECTION: Modles and other requirements

//SECTION: Methods
const signUpUser = (req, res) => {
    console.log("HELLO WORLD")
    return res.send('SIGN UP USER!');
}

//SECTION: Exports
module.exports = {
    signUpUser
}