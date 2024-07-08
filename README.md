# Module 3 Week 1 Day 1 Homework

In this homework, you will have two different tasks using a Node.js web server:

1. Output modules
2. Output external files

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- Git

### Repository Setup

1. **Create a new GitHub repository named `m3-w1-d1-homework` and clone it into the `WESTCLIFF` folder:**

   ```bash
   git clone https://github.com/your-username/m3-w1-d1-homework.git WESTCLIFF/m3-w1-d1-homework
   cd WESTCLIFF/m3-w1-d1-homework
   ```

2. **Launch VS Code and browse to this clone folder:**

   ```bash
   code .
   ```

## Task 1: Output Modules

### Step 1: Create `server_task1.js`

1. **Create a new JavaScript file named `server_task1.js` with the following code:**

   ```javascript
   var http = require('http');

   var port = 5000;

   var server = http.createServer(function(req, res) {
       console.log(`Request for ${req.url} by method ${req.method}`);

       res.setHeader('Content-Type', 'text/html');

       if (req.url === '/') {
           res.statusCode = 200;
           res.end('<html><body><h1>Welcome to the Home Page!</h1></body></html>');
       } else if (req.url === '/about') {
           res.statusCode = 200;
           res.end('<html><body><h1>About Us</h1></body></html>');
       } else if (req.url === '/contact') {
           res.statusCode = 200;
           res.end('<html><body><h1>Contact Us</h1></body></html>');
       } else {
           res.statusCode = 404;
           res.end('<html><body><h1>Invalid Request!</h1></body></html>');
       }
   });

   server.listen(port, () => {
       console.log(`The NodeJS server on port ${port} is now running...`);
   });
   ```

### Step 2: Run the Server

1. **Open your terminal, navigate to the project directory, and run the server:**

   ```bash
   node server_task1.js
   ```

2. **Open a browser and test the following URLs:**
   - `http://localhost:5000/`
   - `http://localhost:5000/about`
   - `http://localhost:5000/contact`
   - `http://localhost:5000/someotherpage` (to test the invalid request)

## Task 2: Output External Files

### Step 1: Create HTML Files

1. **Create a `public` directory and three HTML files (`home.html`, `about.html`, `contact.html`) with basic content and styles:**

   **home.html:**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Home</title>
       <style>
           body { font-family: Arial, sans-serif; }
           h1 { color: blue; }
       </style>
   </head>
   <body>
       <h1>Welcome to the Home Page!</h1>
       <p>This is the home page of our Node.js server.</p>
   </body>
   </html>
   ```

   **about.html:**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>About</title>
       <style>
           body { font-family: Arial, sans-serif; }
           h1 { color: green; }
       </style>
   </head>
   <body>
       <h1>About Us</h1>
       <p>Learn more about our Node.js server.</p>
   </body>
   </html>
   ```

   **contact.html:**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Contact</title>
       <style>
           body { font-family: Arial, sans-serif; }
           h1 { color: red; }
       </style>
   </head>
   <body>
       <h1>Contact Us</h1>
       <p>Get in touch with our Node.js server team.</p>
   </body>
   </html>
   ```

2. **Move the HTML files to the `public` directory:**

   ```bash
   mkdir public
   mv home.html public/
   mv about.html public/
   mv contact.html public/
   ```

### Step 2: Create `server_task2.js`

1. **Create a new JavaScript file named `server_task2.js` with the following code:**

   ```javascript
   var http = require('http');
   var path = require('path');
   var fs = require('fs');

   var port = 5000;

   var server = http.createServer(function(req, res) {
       console.log(`Request for ${req.url} by method ${req.method}`);

       if (req.method === 'GET') {
           let fileUrl = req.url;
           if (fileUrl === '/') {
               fileUrl = '/home.html';
           }
           const filePath = path.resolve('./public' + fileUrl);
           const fileExt = path.extname(filePath);

           if (fileExt === '.html') {
               fs.access(filePath, function(err) {
                   if (err) {
                       res.statusCode = 404;
                       res.setHeader('Content-Type', 'text/html');
                       res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
                       return;
                   }
                   res.statusCode = 200;
                   res.setHeader('Content-Type', 'text/html');
                   fs.createReadStream(filePath).pipe(res);
               });
           } else {
               res.statusCode = 404;
               res.setHeader('Content-Type', 'text/html');
               res.end(`<html><body><h1>Error 404: ${fileUrl} is not an HTML file</h1></body></html>`);
           }
       } else {
           res.statusCode = 404;
           res.setHeader('Content-Type', 'text/html');
           res.end(`<html><body><h1>Error 404: ${req.method} not supported</h1></body></html>`);
       }
   });

   server.listen(port, () => {
       console.log(`The NodeJS server on port ${port} is now running...`);
   });
   ```

### Step 3: Run the Server

1. **Open your terminal, navigate to the project directory, and run the server:**

   ```bash
   node server_task2.js
   ```

2. **Open a browser and test the following URLs:**
   - `http://localhost:5000/`
   - `http://localhost:5000/about.html`
   - `http://localhost:5000/contact.html`

## Final Steps

- **Push the changes to the GitHub repository:**

   ```bash
   git add .
   git commit -m "Add Node.js server tasks"
   git push origin main
   ```

- **Submit the GitHub URL link in the dropbox at GAP Week 1 Day 1 Homework.**

## Verification Checklist

- [ ] Clone the repository and create the required files.
- [ ] Ensure the `server_task1.js` handles requests correctly.
- [ ] Create and test HTML files for `server_task2.js`.
- [ ] Ensure the server serves files from the `public` directory correctly.
- [ ] Verify the GitHub repository is up to date and contains all necessary files.

This README provides a comprehensive guide to completing the homework tasks. If you encounter any issues, feel free to reach out for assistance.

---

You can copy and paste this content into a `README.md` file in your repository. Let me know if you need any further assistance!