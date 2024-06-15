<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Code Challange PT Kaleb Makmur Adhigana

## Installation

**Prerequisites**

Before installing the application package, make sure you have installed Node.js version 20.14.0 and npm version 10.7.0. You can download Node.js from https://nodejs.org/en/download/package-manager.

**Installation**

```bash
$ npm install
```

## Import Database

You can import the database in two ways:

#### 1. Using phpMyAdmin:

- Upload the ```./.deployment/db/kaleb.sql``` file to phpMyAdmin.
- Select the database you want to import the data into.
- Click on the "Import" tab.
- Select the ```./.deployment/db/kaleb.sql``` file and click on the "Go" button.

#### 2. Using the command line:

- Open a terminal window.
- Navigate to the directory containing the ```./.deployment/db/kaleb.sql``` file.
- Run the following command, replacing username, database_name, and file.sql with your own values:

```bash
$ mysql -u username -p database_name < file.sql
```

#### Example

```bash
$ mysql -u root -p my_database < ./.deployment/db/kaleb.sql
```

#### Note

- Make sure you have MySQL installed and configured before importing the database.
- If you are using the command line, you will be prompted to enter your MySQL password.

## Import Postman (Optional)

Here's how to import data into Postman, focusing on the first method (importing a Postman Collection or Data Dump):

- Locate your Postman collection or data dump file. This file should be in either JSON or a proprietary Postman format. For JSON files, you can typically find them in the ```./.deployment/postman/file.json``` directory.
- Open Postman.
- Click on "Import" in the sidebar on the left-hand side of the Postman window.
- You have three options to import your data:
  - Drag and Drop: Drag and drop the collection or data dump file directly into the import window that appears.
  - Select File: Click on "Select File" and choose the collection or data dump file from your computer using the file browser.
  - Paste Raw Data (JSON only): If your data is a JSON file, you can copy and paste the raw contents of the file directly into the import window.

Postman will automatically recognize and import your data.expand_more This includes collections, environments, globals (environment variables), and other data associated with the collection or data dump.

## Update Environment

To add environment files, you can rename the ```.env.example``` file to ```.env```. Then, fill in the variables in the ```.env``` file according to the configuration on your computer.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
