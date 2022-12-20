# Welcome to Flights Search

## Project Setup

- Clone the Project on your local 
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=5000`
- Inside the `src/config` folder created a new file `config.json` and then add the following piece of JSON

```
    {
        "development": {
            "username": "root",
            "password": "Siddhesh@02",
            "database": "Flights_Search_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }

```