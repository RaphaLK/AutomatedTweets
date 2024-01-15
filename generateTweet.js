require('dotenv').config();

const { OpenAI } = require('openai')

const openai = new OpenAI({apiKey: process.env.gpt_key});

const generateTweet = async() => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Make a " }],
    model: "gpt-3.5-turbo",
  });

  return(completion.choices[0].message.content);
}

module.exports.generateTweet = generateTweet;
