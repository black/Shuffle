# Shuffle

A local image server built with Node.js, similar to Lorem Picsum. It allows users to generate placeholder images of customizable sizes directly from their local environment, making it ideal for development and testing without relying on external APIs.

### Just add your images into pictures folder and run the server 

## Instructions

1. Install the required packages
````
npm install
````  
2. Run the server -

````
node app.js**
````

## Usage
 
Add the following code in your HTML to display an image
````
<img src="http://localhost:9090/default" alt="anything" />
```` 

http://localhost:9090/{ **default** / **random** }
