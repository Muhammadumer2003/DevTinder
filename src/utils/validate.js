const validateUser = (req) => {
    const { firstName, lastName, password } = req.body;
    if(!firstName || !lastName || ! password){
        throw new Error("please enter first name and last name");
    }
}
module.exports = {
    validateUser
};