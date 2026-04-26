# Banking Auth API

A simple banking backend API that allows users to create accounts, perform transactions, and manage balances securely.



## Features

* User registration
* User login with JWT authentication
* Create bank accounts
* Deposit money
* Withdraw money
* Transfer money between accounts
* Transaction history
* Protected routes using authentication middleware

## Tech Stack

* Node.js
* Express.js
* MongoDB
* JWT Authentication

## Project Structure

```
controllers/
models/
routes/
middlewares/
config/
index.js
package.json
```

## API Endpoints

### Authentication

POST /users/register
Register a new user

POST /users/login
Login and receive JWT token

### Accounts

GET /accounts
Get all user accounts

POST /accounts
Create a new bank account

### Transactions

POST /transactions
Create a transaction

Transaction types:

* deposit
* withdraw
* transfer

GET /transactions
Get transaction history

## Example Request

Deposit money:

```
POST /transactions
{
  "accountId": "ACCOUNT_ID",
  "type": "deposit",
  "amount": 100
}
```

Transfer money:

```
POST /transactions
{
  "type": "transfer",
  "fromAccountId": "ACCOUNT_ID_1",
  "toAccountId": "ACCOUNT_ID_2",
  "amount": 50
}
```

```

Install dependencies

```
npm install
```

Create a .env file

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server

```
npm run dev
```

## Author

NAME: kester

ROLL: 24BCY70249

Backend project built with Node.js and Express.js.
