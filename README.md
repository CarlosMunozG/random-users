

## Alfred Smart Systems

This is the project directory for the technical test for Alfred Smart Systems. Here you will find all the steps:

### `npm start`

Runs this app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Description`

- This apps gives you three random contacts from an API Rest. As a user, you can view different information from every contact, such as:

  - **Name:** First name and last name.
  - **Email:** Email.
  - **Calendar:** Date of birthday.
  - **Pointer:** City where the user lives.
  - **Phone:** Cell phone.
  - **Lock:** Username or nickname.

- As a user I can delete one contact from my list of contacts. I can delete all the contacts I want. If I delete all the contacts, It will appear a message telling me there is no contacts. If I delete all my contacts except one, the sort button will be not rendered. 

- As a user I want to add one random user from an external API everytime I press the bottom "+". This new contact will be added as the last contact of the list I already have.

- As a user I want to sort all the contacts by the first name in an ascendent way. If I have only one contact o no one, the sort button will be not rendered as this button only works at least with two contacts.

### `Technical tasks`

- **React:** All this app has been made with React. It is also prepared to be scalable and easy maintanable with every archive in its place:

  - Components: 
    - ButtonIcon: Button with an SVG icon inside use in so many different places withits own props.
    - SVGIcon: A list of the different SVG icons you will need in this app and their props to manipulate them.
    - User Info: When you press an icon from one contact, it displays some kind of info depending on which button you have pressed. This info is control from this component.
  
  - Services:
    - userServices: file which control the methods to get the info from the external API [https://randomuser.me/]

  - Stylesheets: this apps uses SASS to compile every stylesheet it has. 
    - style.css: General css for every app.
    - Connections: SCSS related with the message when internet connection is lost.
    - Variables: 
      - Colors: 
      - Variables: 
    - Views:
      - example: The css related with this app. All the styles to create this beautiful app.

- **Redux:** To control the different states and their changes, this has been controled with Redux. It has been refactored with a folder "redux" where you can find the actions and the reducers, prepared to be scalable.




## Bonus

- Connection state: When internet connection is lost, the user is informed by a warning message on the screen. This is due to "react-detect-offline" package. To show the message disconnect internet from your computer.

- SASS: All the stylesheets have been created with a compiler and variables. They have been separate in different files to be more scalable.

## Backlog

- Testing: During my bootcamp, we learned a litle bit from testing, but not with React, Redux, Axios, mocks and snapshots. 

