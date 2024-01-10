require('dotenv').config()
const https = require('https');
const queryString = require('querystring');

const Tweet = querystring.stringify({
  'text': 'Twitter bot works!'
});

const config = {
  consumer_key: process.env.c_key,
  consumer_secret: process.env.cs_key,
  access_token: process.env.a_token,
  access_token_secret: process.env.as_token,

  hostname: 'https://api.twitter.com',
  port: 443,
  path: '/2/tweets/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `OAuth oauth_consumer_key="${process.env.c_key}",oauth_token="${process.env.a_token}",oauth_signature_method="HMAC-SHA1",oauth_nonce="${Date.now()}",oauth_version="1.0",oauth_signature="${YOUR_GENERATED_SIGNATURE}"`
  }
}


const postTweet = async (Text) => {

  T.post('https://api.twitter.com/2/tweets', { status: `${Text}` }, (err, data, response) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
    }
  })

}
postTweet('Twitter bot works!');
