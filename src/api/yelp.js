import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer sHYK2t3Qx8NBj0JK3K_ISM87z7gQs9M3GTR2i3NAEWy_ueDrgbUYnuvOvoZgqflwedGNA9drulhl2V2GlCLcraVdv6HdS_KzzkmSmciyxOUGJy2F3PsiiJPuEQ3JX3Yx',
    }
});