This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Next.js TypeScript CBT API

This project is a Next.js application written in TypeScript that provides an API for Computer-Based Testing (CBT). It includes endpoints for fetching and posting data.

## Installation

Clone the repository: using ``` git clone <repo 'URL'> ```


Navigate to the cloned repo: 
 ```git checkout```
 
 ```cd <project dir_name>```

 
Install the dependencies: 
```yarn install``` 
or
```npm install```


## Usage

Start the preview server after building:
```yarn start```
or 
```npm run start```


if no other project running, your project should be running on http://localhost:3000

## API Endpoints

### GET /api/get-quiz

Fetches all questions. Returns a JSON array of questions.

### POST /api/submit-quiz

Accepts a JSON object with 'name' and 'score' fields.

### POST /api/
Accepts a JSON object with 'gmail'

## Testing

You can test the API endpoints using [Postman](https://web.postman.co/) or similar API testing tools. If you're using Jest for testing, you can run the tests with:









