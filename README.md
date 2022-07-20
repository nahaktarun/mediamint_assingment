
# Get Employee Using MERN Stack

The MERN project is based on getting employees data and using RESTful API and converting the data to CSV.

## Run Locally

Clone the project

```bash
  git clone https://github.com/nahaktarun/mediamint_assingment.git
```

Go to the project directory

```bash
  cd assignment
```

Install dependencies for backend

```bash
  cd backend
  npm install
```

Start the server

```bash
  npm run  watch
```
Install dependencies for frontend

```bash
  cd frontend
  npm install
```

Start the server

```bash
  npm start
```


## Documentation

### Micro Services

* Micro Services to fetch the API and get the Data to database [fetchAPI](https://github.com/nahaktarun/mediamint_assingment/blob/main/backend/fetchUsers.js)

* Micro Services to publish the data to frontend. [publishdata](https://github.com/nahaktarun/mediamint_assingment/blob/main/backend/routes/routes.js)

* Micro Services to update the data to from the table [updatedata](https://github.com/nahaktarun/mediamint_assingment/blob/main/backend/routes/routes.js)


* Micro Services to export the data to csv [exportcsv](https://github.com/nahaktarun/mediamint_assingment/blob/main/backend/getusertocsv.js)

### Fronend Development

* Front End Development to view the table. [viewtable](https://github.com/nahaktarun/mediamint_assingment/blob/main/frontend/src/App.js)

* Front End Development to update the data to table. [updatedata](https://github.com/nahaktarun/mediamint_assingment/blob/main/frontend/src/UpdateDetails.js)



### DB Script

* DB schema for creation of database in MongoDb atlas. [dbscript](https://github.com/nahaktarun/mediamint_assingment/blob/main/backend/db.js)



## Screenshots Frontend

Table Screenshot

[Table Screenshot](https://github.com/nahaktarun/mediamint_assingment/blob/main/screenshots/screenshot1.png)


Update User Screenshot

[update user Screenshot](https://github.com/nahaktarun/mediamint_assingment/blob/main/screenshots/screenshot1.png)



## Screenshot API

Get All users

[get all users](https://github.com/nahaktarun/mediamint_assingment/blob/main/screenshots/get%20request.png)

[get user by id](https://github.com/nahaktarun/mediamint_assingment/blob/main/screenshots/getuserbyid.png)

[Post new user](https://github.com/nahaktarun/mediamint_assingment/blob/main/screenshots/post%20request.png)

[update user](https://github.com/nahaktarun/mediamint_assingment/blob/main/screenshots/put%20request.png)



## Post Collection 

[postman collection](https://github.com/nahaktarun/mediamint_assingment/blob/main/mediamint.postman_collection.json)


