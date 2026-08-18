const AnsycHandler=(fn)=>{
    return (err,req,res,next)=>{
        return Promise.resolve(fn(req,res,next)).catch((errr)=>{next(err)})
    }
}