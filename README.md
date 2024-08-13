# Trivialert
### Overview
Trivialert is a simple Python script that posts to a specific Slack channel using Slack Bolt. The bot uses Reddit's PRAW API to listen for a specific Reddit user's most recent post, and then formats and sends the message to the appropriate Slack channel. I have been using this to post updates on a local pub's trivia, so that users of the Slack channel can know specific details about the trivia being hosted.

### Use
This site was hosted using AWS at [johnludeke.com](https://johnludeke.com).

To run the project on your own device, first clone the repository. Then run:
```
npm i
npm start
```


### Future
I don't have any more plans for this, besides to maybe clean it up and/or host the script somewhere. As of now, it just runs locally.


