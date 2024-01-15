require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');
const { generateTweet } = require('./generateTweet');

const client = new TwitterApi({
    appKey: process.env.apikey,
    appSecret: process.env.apikey_secret,
    accessToken: process.env.a_token,
    accessSecret: process.env.as_token,
});

const bearer = new TwitterApi(process.env.bearer);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;


// Function to post a tweet using library functions
const tweet = async (tweetContent) => {
  try {
    await twitterClient.v2.tweet(tweetContent);
  } catch (e) {
    console.log(e)
  }
}

const content = generateTweet();
tweet(content);
