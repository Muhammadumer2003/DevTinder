const validateUser = (req) => {
    const { firstName, lastName, password } = req.body;
    if(!firstName || !lastName || ! password){
        throw new Error("please enter first name and last name");
    }
}

// const validateFields=(req)=>{
//     const NotallowedFields =["password"];
//     const isNOTEditAllowed=Object.keys(req.body).every((field)=>{
//         !NotallowedFields.includes(field)
//     });
   

//     return isNOTEditAllowed;
// }

const validateFields = (req) => {
    const NotallowedFields = ["password"];
    const isEditAllowed = Object.keys(req.body).includes(NotallowedFields[0]);
    return isEditAllowed; // True if all fields are allowed
};

module.exports = {
    validateUser,
    validateFields,
 
};