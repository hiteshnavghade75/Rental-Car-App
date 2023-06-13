// const jwt = require("jsonwebtoken")


// module.exports = (req, res, next) => {
//     console.log("Auth middleware reached")
//     try{
//         const token = req.headers.authorization;
//         console.log(token)
//         const verifiedToken = jwt.verify(token, "10X_ACADEMY", (err,payload) => {
//             if(err) {
//                 res.json({message : "You must log in"})
//             }
//             req._id = payload.id
//         })
//         console.log(verifiedToken)
//         req.userId = verifiedToken.id;
//         next();
//     }
//     catch{
//         res.json({
//             message : "Authorization failed"
//         })
//     }
// }

const jwt = require("jsonwebtoken")


module.exports = (req, res, next) => {
    console.log("Auth middleware reached")
    try{
        const token = req.headers.authorization;
        // console.log(token)
        const verifiedToken = jwt.verify(token, "10X_ACADEMY")
        console.log(verifiedToken)
        req.userId = verifiedToken.id;
        next();
    }
    catch{
        res.json({
            message : "Authorization failed"
        })
    }
}