
exports.register = (req,res) =>{

    if(req.body.email == "ensar@gmail.com"){
        res.send({
            status:true,
            message : "bu kullanıcı mevcut"
        })
    }else{
        res.send({
        status : false,
        message : 'bir problem var!'
        })
    }

}