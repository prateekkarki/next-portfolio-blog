# Introduction

AI is a hot topic these days. From Elon musk's planned Mars colony, AlphaGo beating the best human at GO to now an AI randomly generating blog ideas for me. I am going to use this post to play with some AI tools (Copy.ai), TensorFlow, word2vec and see what it comes up with.

There was a paper published by Google recently that describes how one can use the Word2vec algorithm to turn a corpus of text into the embeddings of words and then use those embeddings as inputs to an LSTM(Long short-term memory) neural network, and that output from the LSTM acts like a generator for generating new text. By setting aside some time, I played with TensorFlow and some popular NLP algorithms (namely word2vec).

![gpt3 data flow](https://res.cloudinary.com/pratiek/image/upload/v1622558047/Blog/UsingAI/gpt3_yykm8x.png)

I'm not going to get into the nitty-gritty of how it works right now. Others have done a lot better job of it than I can, but in summary: It has read and saved a large amount of text and related data from the internet. And if you give it some text, It will make an attempt to continue the text in the same manner.

But it's not just repeating what it's already seen; it's also inventing entirely new sentences. It's brilliant in a few, very specific ways. And being able to "come up with new blog ideas in this manner" is exactly what it's supposed to be good at. So I made a list of some of the ideas and phrases for it to go through and I requested it to come up with several ideas and it did.

## Generating Blog Ideas

- Top 10 Programming Languages for Startups: A blog about the top coding languages and what startups use.
- Top 5 Ways to Make Fast Money: A blog about ways to make fast money.
- Visualize Your Credit: A blog around the importance of credit management for success.
- How To Be An Idea Machine: a blog about the process of coming up with ideas and turning them into reality.
- Top 10 New Sewing Machines of 2016: A blog post reviewing the top 10 sewing machines for 2016.

As you can see these ideas are impressive but still pretty wacky. I wonder how it came up with the ideas like the one with the startups and the one with sewing machines.

So I tried to follow up on the one first idea to see how verbose the algorithm goes with it. So fed the first point to the app to generate some paragraphs from it now :

- Startups are great. They're the engine of the economy and an exciting way to make your own way. I run my own company and know all about how hard it can be. Before we discuss the best coding languages for startups, just what is a startup in the first place? A startup is a business that's still creating itself. It means your business idea could take any number of directions, depending on what your customers want or what your competitors do. There's no way to tell which ideas will work for you.
- One of the most important factors for a startup to succeed is attracting customers and revenue. But this is a very difficult task when there are thousands of programming languages available. If you want to create a successful app, it's important to know which programming language will be the best fit for your business. To help you choose, we have put together a list of 10 programming languages that software developers typically use. These are the ones that have been proven to be powerful, accessible and flexible. You can use them for everything from small apps to large web applications and enterprise software.- With these languages, you'll be able to get your product into the market.
- Programming is changing quickly. More and more companies are hiring for programming talent. And more and more people are getting into coding. Whether you're interested in technology, business, or anything else, there's no shortage of opportunities for you to learn and grow as a programmer. The best thing about coding is that it doesn't require a college degree or class time -- if you have the will to learn, there's no limit to what you can achieve. Start learning today with these 10 languages. You won't regret it!

![Machine thinking dialog from The imitation game](https://res.cloudinary.com/pratiek/image/upload/v1622906329/Blog/UsingAI/benedict-AI.gif)

These actually look quite good paragraphs, maybe not the type of blogs I usually write about but definitely seen around. I am quite surprised by where we are at already. But it's not all perfect, just to come up with some points is where it is good at. As it gets more verbose, it starts adding information that is either meaningless or false or does not exist. This is good and quite amazing as of now.

But if we can take that and add the constraint that what it generates must be accurate and that it must cross-reference with history books, industry standards, and Wikipedia, it will take the algorithm to the next level. And I'm sure in a few years we'll get there as well.
