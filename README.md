### Next.js TypeScript CBT API

This project is a Next.js application written in TypeScript that provides an API for Computer-Based Testing (CBT). It includes endpoints for fetching and posting data.

### Installation

Clone the repository: using ``` git clone <repo 'URL'> ```


Navigate to the cloned repo: 
 ```git checkout```
 
 ```cd <project dir_name>```

 
Install the dependencies: 
```npm install```


## Usage

Start the preview server after building:
```npm run dev```


if no other project running, your project should be running on http://localhost:3000

## API Endpoints

### GET http:localhost:3000/api/get-quiz

Fetches all questions. Returns a JSON array of questions.

### POST http:localhost:3000/api/submit-quiz

Accepts a JSON object with 'name' and 'score' fields.

### POST http:localhost:3000/api/accept-mail
Accepts a JSON object with 'gmail'

## Testing

You can test the API endpoints using [Postman](https://web.postman.co/) or similar API testing tools. 









