export class AppError extends Error{
    constructor(message,statuscode,isOperational=true){
        super(message)
        this.statuscode=statuscode
        this.isOperational=isOperational,
        this.status=statuscode>=500?"error":"fail"
           Error.captureStackTrace(this, this.constructor);
    }
}
