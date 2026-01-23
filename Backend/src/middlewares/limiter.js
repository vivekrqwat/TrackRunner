import ratelimit from 'express-rate-limit';

const limiter = ratelimit({
    windowMs:10*60*1000,
    max:100,
    message:{
        success: false,
        message:"too many request, please try later."
    }
});

export default limiter;