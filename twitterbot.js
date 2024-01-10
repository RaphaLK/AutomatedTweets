const Twit = require('twit');
require('dotenv').config()

const config = {
  consumer_key: process.env.c_key,
  consumer_secret: process.env.cs_key,
  access_token: process.env.a_token,
  access_token_secret: process.env.as_token,
}

const T = new Twit(config);

const postTweet = () => {
  let Tweet = 'Twitter API config works!'

  T.post('statuses/updates', { status: Tweet }, (error, data, res) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Success');
    }
  })
}
postTweet();
setInterval(postTweet, 3600000)