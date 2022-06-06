## Photos & Tags
 A project that presents images and tags to the user and gives the user the option to associate images with tags and all tags are defined by the user


## How to install
When developing across all the projects in this repository, 
first install git and npm.
Then, perform the following steps to get set up for development:
  git clone.............
npm install
npm i react
npm start


## Technologies i have used:
* "@mui/material" : MUI components work in isolation. They are self-supporting, and will only inject the styles they need to display.
* "@rehooks": basic implementation of the redux functionality. It takes advantage of the new features of React hooks to create a global state.
* react:A JavaScript library for building user interfaces
* fetch:The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline


## Assumptions
Suppose the user can log in to the site then he enters his details and enters the personal area and sees all the updates he made and floods what he wants and at the end makes a logout

## Tests I would perform
* If I implemented the login page for the site I would check the details that the user enters ie if the user exists and entered correct data
* I would check the tag inserted by the user if it already exists then a message will appear telling him that it exists and he can use the existing tag
* Checks if the user has performed an operation for the last quarter of an hour and if not then the system disconnects him

## Instruction Manual
A user signs into the personal area, appears to them on the left a list of tags and the option to add more tags through entering the tag name and clicks +
To associate an image with several tags, they click on the icon of the tag that appears next to the image and select from the list that opens which tags they want and at the end they click on save and then the image will appear below the appropriate tag.







