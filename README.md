### Project Name
Node JS Web Application

### Author
 - Name : Eliud Gateri
 - Email: egateri@gmail.com
 - Student: Moringa School
 
### About this project
Node JS Web Application to demonstrate skills learnt in week 4 of the study.  
Here we are developing routes (middlewares) with the help of Express Application and Embended JavaScript (EJS).   
Previously learnt skills - jQuery and Javascript have also been used.


### Live Link
 https://nodejs2-z5ym.onrender.com/
 
### BDD
  As a user, I would like to;  
  1. Efficiently use the website across devices of all sizes and browsers, 
  1. Demonstrate the effects of the jQuery, 
  1. Dockerize the Node Application and deploy and  
  1. Connect the Application to a database - MongoDb or MySQL (Next Step).   
  

### Technologies and Languages used
 1. Node JS - Express, Embedded JavaScript
 1. Docker
 1. HTML and CSS 
 1. Bootstrap
 1. Google Chrome
 1. Visual Studio & Live Server
 
### Dependencies
 1. Node v18.16.0 _https://nodejs.org/en/download_
 1. Bootstrap v5.3.0  _https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css_
 
 

### Setup and Installations Instructions
 1. To use the web application:  
    - Access the **[Live link](https://nodejs-twh0.onrender.com/)** on your favourite browser
    - Scroll down to navigate the entire website
    - Use the Navigation bar to get to **Login** , **Register** , **Users** and  **Contact** links/routes -Input your details and then click the *Submit* button.   
    - To test input validations - Repeat submitting the message by inserting wrong data types or leaving blank entries for negative test cases.
    - Repeat above tests with Mobile and desktop devices (from the smallest to the largest) to observe the web media effects and the website responsiveness.  

     
 2. To develop a similar web application or make improvements: 
    - Ensure you have installed [google chrome](https://www.google.com/chrome/) browser 
    - Ensure you have installed a code editor like Visual Studio and [git](https://git-scm.com/download/win)
    - Create a project folder preferably from command line  
       `mkdir your_project_folder`
    - Navigate to your project folder  
       `cd your_project_folder`  
    - Clone the Node JS App source code into your project folder    
       `git clone https://github.com/egateri/learn-nodejs.git`
    - Use the Visual Studio code editor to open, review and modify the code   
       `code .`    
    - Install all the project dependencies      
       `npm install`   
    - Locally test the web application using the Live Server 
    - Use the Chrome browser _inspect_ and _console_ functionalities to test jQuery functions, code and device responsiveness	
    - Use [Bootstrap](https://getbootstrap.com/) tool to help improve on the look and feel of the web application   
    - Request to be invited as a contributor and create your own branch once the invitation is approved.   
    - Request to merge new improvements into the master branch once testing is compled and all bugs fixed.     
    - You may also identify and suggest bugs that require fixing by raising an issue on Github.  
	 - Finally host your Web Application on domain hoster or cloud provide of your choice!   

	 
3. To deploy using docker:   
    - Build the app     
       `docker build -t node-web-app .`
    - Run the app    
       `docker run -p 80:5500 -d node-web-app`
    - Test the app    
       `curl -i localhost:80`
    - Get the docker container ID     
       `docker ps -a`
    -  Access the container from command line       
       `docker exec -it <container id> /bin/bash `

   Live Link of docker deployed App     
   https://nodejs2-z5ym.onrender.com/   
   
   
### Contact Information
 - Name : Eliud Gateri
 - Email: egateri@gmail.com
 - Student: Moringa School
 - Phone : 0700 XXX 000

###  License and Copyright Information
#### MIT License
Copyright (c) 2023 Eliud Gateri 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
