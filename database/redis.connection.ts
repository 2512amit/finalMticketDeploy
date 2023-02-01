import * as redis from 'redis'
export let redisClient= redis.createClient()
export const connectToRedis=async()=>{
try {
     
     redisClient.on(
        "error",
        (error)=>console.error(`Error : ${error}`)
     )
     await redisClient.connect()
     console.log(`Connected to redis`)
    return true
} catch (error) {
    console.log(error)
    throw "COULD NOT CONNECT TO  redis DB"; 
}
}