import redis from 'redis';
require('dotenv').config()

export const client = redis.createClient({
  port  : process.env.redisPort,             
  host  : process.env.redisHost,       
  password  : process.env.redisKey,
}) 
