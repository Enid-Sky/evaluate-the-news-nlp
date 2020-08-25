# Evaluate-a-News-Article-with_NLP

Evaluate a News Article with Natural Language Processing

# About AYLIEN API:

The [AYLIEN](https://docs.aylien.com/textapi/endpoints/#sentiment-analysis) Text Analysis API is a package of Natural Language Processing and Machine Learning-powered APIs for analyzing and extracting various kinds of information from textual content. 

## How the app works:

Allows users to run Natural Language Processing (NLP) on articles or blogs by simpling entering the URL. The Sentiment Analysis API from AYLIEN will analyse the text and return pertinent information about the article, like whether the content is subjective (opinion-based) or objective (fact-based) and whether it is positive, neutral, or negative in tone. 

## Express and Webpack:

Node and express will be the webserver and routing of choice, and webpack will be the build tool of choice. Using webpack, you have the option of building both development and production environments, each with their own set of tools and commands with package.json scripts.

## Installation Instructions

- Clone project repository:
`$ git clone https://github.com/Enid-Sky/evaluate-the-news-nlp.git`

- npm install: for installing all devDependencies and dependencies of the package.json

- Get an API Key and ID from [Aylien](https://docs.aylien.com/textapi/#getting-started) and save it to the file called .env:

`API Key = <You Key>`
`API ID = <Your ID>`

## Run in development mode:

`npm run build-dev`

## Run in production mode:

`npm run build-prod`
`npm run start`

## Run JEST tests

`npm jest-test`

## Stop application

`CTRL + C`
  


