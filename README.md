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

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npm sequelize db:create`
and then execute

`npx sequelize db:migrate`

```

## DB Design
- Airplane Table
- Flight Table
- Airport Table
- City Table

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

```