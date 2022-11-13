README

# PetDopt API

PetDopt is a very simple, local API where you can access, store and manipulate data of pet adoption registers.

## 1.0 Getting Started

There is a dump.sql file where you can find some sample data. In a terminal at the root folder, just run the command below to get started:

```bash
psql -d <your_database_name> -f dump.sql
```

## 2.0 Usage
All requests must be done to the base URL set to connect and access the bank.

If your database is local, the base URL default format will be something like this:
```javascript
"https://localhost:4000/"
```
Where "4000" can be any port you choose to run your server with.

### 2.1 ```POST```  Create pet register
If you have a new pet to adopt and you want to register it, you can send a ```POST```  request to:
```javascript
"https://localhost:4000/pets"
```
Sending through the body of the request an object with the format:
```javascript
{
   name: "Duke",        //string
   species: "dog",      //only 'cat' or 'dog' allowed
   sex: "male",         //only 'male' or 'female' allowed
   description: "A very lovely dog, approximately 2 yrs, looking for 
      a lovely tutor"   //string up to 500 characters
}
```

### 2.2 ```GET```  Read pet registers
If you want to see all the pets registered within the database, you can send a ```GET```  request to:
```javascript
"https://localhost:4000/pets"
```
No body, parameters or headers needed for this request.

### 2.3 ```GET```  Read only registers of pets available for adoption
If you want to see all the pets available for adoption within the database, you can send a ```GET```  request to:
```javascript
"https://localhost:4000/pets/available"
```
No body, parameters or headers needed for this request.

### 2.4 ```PUT```  Update pet availability
Maybe you finally got your pet adopted (Yay!) and you want to change the availability on its register within the database, without deleting it. If that is the case, you can send a ```PUT```  request to:
```javascript
"https://localhost:4000/pets/:id"
```
Where ``` :id ``` is the pet id within the database. Also, you need to send through the body of the request an object with the format:
```javascript
{
   isAvailable: false   //boolean only
}
```

### 2.5 ```DELETE```  Delete pet register
Now you got your pet adopted (or maybe decided to keep it?) but want to delete its register from the database. If that is the case, you can send a ```DELETE```  request to:
```javascript
"https://localhost:4000/pets/:id"
```
Where ``` :id ``` is the pet id within the database. No body or headers needed for this request.
