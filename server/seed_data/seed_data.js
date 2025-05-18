const mongoose = require('mongoose')

const users = [
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234561'),
        fullName: "Oriel Shmuel",
        nickName: "Oriel s",
        email: "Orielshmuel@gmail.com",
        plainTextPassword: "Oriel123",
        questions: undefined,
        answers: ["60d5ec49f1b2f9a7d1234573"],
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234562'),
        fullName: "John Doe",
        nickName: "John",
        email: "JohnDoe@gmail.com",
        plainTextPassword: "John123",
        questions: ["60d5ec49f1b2f9a7d1234569", "60d5ec49f1b2f9a7d1234571", "60d5ec49f1b2f9a7d1234572"],
        answers: ["60d5ec49f1b2f9a7d1234574"],
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234563'),
        fullName: "Veronika Sacagawea",
        nickName: "Veronika",
        email: "Veronika@gmail.com",
        plainTextPassword: "Veronika123",
        questions: ["60d5ec49f1b2f9a7d1234570"],
        answers: ["60d5ec49f1b2f9a7d1234576"],
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234564'),
        fullName: "Miillaaraq Matvei",
        nickName: "Miillaaraq",
        email: "Miillaaraq@gmail.com",
        plainTextPassword: "Miillaaraq321",
        questions: undefined,
        answers: ["60d5ec49f1b2f9a7d1234575", "60d5ec49f1b2f9a7d1234577"],
    },
];

const questions = [
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234569'),
        title: "Is assembly still relevant",
        body: "When having so many advanced programming languages, do assembly still used?",
        tags: ["Assembly", "Coding"],
        answers: ["60d5ec49f1b2f9a7d1234573"],
        userId: "60d5ec49f1b2f9a7d1234562",
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234570'),
        title: "Why Node over spring?",
        body: "Why some people prefer using NodeJS over using Spring?",
        tags: ["Node", "Spring"],
        answers: ["60d5ec49f1b2f9a7d1234574"],
        userId: "60d5ec49f1b2f9a7d1234563",
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234571'),
        title: "Understanding Node.js Modules",
        body: `How does Node.js handle the organization of code into reusable units?
        What keyword is used to make functionality available outside a module?
        Briefly explain how you would access functionality from another module.`,
        tags: ["Node"],
        answers: ["60d5ec49f1b2f9a7d1234575"],
        userId: "60d5ec49f1b2f9a7d1234562",
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234572'),
        //from reddit - https://www.reddit.com/r/node/comments/1ddirm0/why_not_node/
        title: "Why not Node",
        body: "So, I am a js front-end and now having to move to c# for the back-end. I am not the biggest fan of c#. So my question is, outside of the major tech hubs like San Fran etc. Why isn't Node used more? everywhere I am, mid-west and the south(I go back and forth) it is all Java/C#. I have been doing Js for years. I lost my job and that is why I am having to transition, but it sucks because I love Node. I just don't get why there aren't more job availability for it?",
        tags: ["Node", "Coding"],
        answers: ["60d5ec49f1b2f9a7d1234576", "60d5ec49f1b2f9a7d1234577"],
        userId: "60d5ec49f1b2f9a7d1234562",
    },
];

const answers = [
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234573'),
        body: "While high-level languages dominate, assembly is still used. It offers direct hardware control for performance-critical tasks. Examples include embedded systems, device drivers, and optimizing specific code sections.",
        questionId: "60d5ec49f1b2f9a7d1234569",
        userId: "60d5ec49f1b2f9a7d1234561",
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234574'),
        body: "Some developers favor Node.js for its JavaScript-everywhere paradigm, simplifying full-stack development. Its non-blocking, event-driven architecture excels in I/O-bound applications and real-time systems. The large and active npm ecosystem also contributes to its popularity.",
        questionId: "60d5ec49f1b2f9a7d1234570",
        userId: "60d5ec49f1b2f9a7d1234562",
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234575'),
        body: "Node.js employs the CommonJS module system for code reusability. The module.exports keyword makes functions and variables accessible externally. Other modules import this functionality using the require() function, specifying the module's file path.",
        questionId: "60d5ec49f1b2f9a7d1234571",
        userId: "60d5ec49f1b2f9a7d1234564",
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234576'),
        body: `I work for a service company and we build a ton of Enterprise level services for all sorts of Fortune 500 companies.

                Node is used quite a bit for back end services. Especially if you look at more modern cloud platforms like serverless functions or microservice architecture. When you have a service that's doing something pretty lightweight which is often doing data validation and off validation in front of a database call, node is perfectly fine for that level of work.

                The best thing you can do is build services that are more functional based and do one thing really well and can stand alone. Build them in the language you're most comfortable with and get them live. Proper unit testing and CICD will deliver you Way more quality than the choice of language.

                If a couple years down the line somebody needs to come and change your service, if you've done a good job of documenting your API interface and what the service does then the new person can actually record it and whatever language they're using.

                Now if you're going to go build a monolith, then language choice will have more of an impact. And of course targeted devices also have major effect on your language choice. While you can build a game engine in node, that probably would be a pretty poor choice in the scheme of things if you're looking for performance.

                Other people in your comments have said that the JavaScript ecosystem is fragmented. I think there are lots of choices in the ecosystem because it moves fast. If you're a legacy Java developer used to spring boot I can see how JavaScript could feel overwhelming and chaotic. Although at the same time I see a lot of cool innovation and ideas coming from the greater JavaScript ecosystem. You can do things the..NETway too. Some of these languages that have been used for decades really have good patterns.

                Again I want to highlight on the unit testing part of things. You don't need the unit test everything, but it's worth unit testing the code that you write. I mean if you're using a third party library there's no need to test it. You can, but let's assume that their library works. The code that you write though, put a unit test around it. Test for fail cases. Use something like get up co-pilot to help build out the test faster. There's really no excuse these days not to have proper automated testing around your code.

                And with that in mind, it doesn't matter what you write your code in, if it works. Way better to get an MVP out to market and to get a service live. If you are one of the rare cases where serverless node won't scale for you and you need something like Java or C# or even something even faster like rust, then refactor that service to use a faster language.`,
        questionId: "60d5ec49f1b2f9a7d1234572",
        userId: "60d5ec49f1b2f9a7d1234563",
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234577'),
        body: `A lot of reasons

            1/ Technical.

            JS was not made for server-side, and NodeJs had many limitations. It also had many quirks and weird implementations of stuffs. Not that the other languages dont have, just that JS currently has more. After all, Node is pretty young compared to C#, Java, Ruby or even PHP. It is still maturing.

            2/ Ecosystem.

            JS ecosystem is too fractured. Too many packages, too many dependencies. Too much freedom and no consensus.

            Take Java, for a backend you have Spring dominating, every one uses Spring. If you know Spring you are ready to jump in 70-80% of Java backend out there. You got a new job and the structure, the dependencies look almost identical to every other codebase. You dont have to re-learn what ORM, what framework, what build tool, what Queue system, what Auth package... this codebase is using, most of the time.

            Same story for C#, framework? Asp.net. Orm? Ef core or Dapper. Validation? FluentValidation. Task Scheduling? Quartz.net. Auth? Identity or Duende...

            Same story for PHP. For Ruby. They all have 2-3 dominating frameworks, packages or libraries. Everyone use them and if you know them you basically spend 0 times on onboarding

            Tell me, what ORM you use in Nodejs? There's like 15 of them. Framework? Validation? Auth? Notification?

            Everyone builds their own little ecosystem and when you look into a new codebase you dont even know half of the packages doing. Every time.

            And no i dont think too much freedom is good. Even in JS i have my favorite stack and if i have to build 10 system they probably look 90% identical ( project structure and dependency-wise). It doesnt matter if I have 1 millions or 100 options if I use only 1.

            I dont want 10 option each does 60% of what I need. I want 1-2 that do 95% of what i need.

            3/ Practicality

            Most companies were founded before NodeJs becomes a thing. Why would a company with 60 employee specialized in C# and 14 C# codebase suddenly switch to NodeJs?

            Same story with Java, Ruby, Python, PHP,... If they have work with the technology for 20 years what would compels them to switch to an entirely new thing? For me, I would only make such a switch if the new thing is massively superior to my own.

            Like, think about it, let's just say NodeJs is 3% better than C#. Would I ditch 60 of my employees, and spending time, money and resource to build a new work pipeline, environment, deployment strategy, security audit, everything. Just because of that 3%? I would consider it if it is better by 2.5x or 3x. But in reality, Nodejs is not even superior to the others. Why would they switch?`,
        questionId: "60d5ec49f1b2f9a7d1234572",
        userId: "60d5ec49f1b2f9a7d1234564",
    },
];

module.exports = { users, questions, answers };