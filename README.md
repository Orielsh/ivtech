project prototype for Q&A system.

Support the following functions:
 - Login
 - Post question
 - Post answer to a question


Tech stack:
Client: React javascript + swc
Server: NodeJS, Express.
Database: MongoDB.

DB Scheme explained:
For a prototype i choose simple db scheme planning but it recommended to optimize the structure to support your app requirements.
For example:
Question - Answer bi-directional mapping: might use index on the question id in the Answers document and show only partial answer or maybe other strategies.
another example is in the tag collection, you might want to store string with a name but let say you want statistic later, so i put it in separate collection so you can tie some meta-data to it
after some thoughts i think it also a good idea to store the answers inside the question document since we always load question with the related answers.
if ill have enough time later ill change it.

how to run the server:
in the terminal navigate to server/ folder
run `npm i`
seed the database, `node seed`.
after a successful message you should see the data in the database.

next, run the command nodemnon, it will automatically start the server to listen to requests.

I also choose to make endpoints more similar to rest api conecpt rather then put them all in the root since it seem not well design.