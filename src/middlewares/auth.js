const AdminMw=(_,res,next)=>{

    const token="xyz";

    if(token!="xyz"){
        res.status(401).send("Unable to get token");
    }
    else{
        console.log("Admin middleware");
        next();
    }
}

const UserMw=(_,res,next)=>{

    const token="xyz";

    if(token!="xyz"){
        res.status(401).send("Unable to get token");
    }
    else{
        console.log("user middleware");
        next();
    }
}

    module.exports = {
    AdminMw,
    UserMw,
    // other middleware functions...
}