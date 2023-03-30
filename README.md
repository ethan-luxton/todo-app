# Todo-App - Lab - Class 34

### Authors: Ethan Luxton

## Project:  Integrating with a live API.

### Problem Domain

In Phase 4, we will finalize the functionality of the application by connecting to live servers for login, authorization, and data access.

1. Alter the Add, Toggle Complete, and Delete functions within your to do application to use your API instead of in memory state.
    * Fetch the current list of items from the database on application start.
    * Whenever you add/update/delete an item, refresh the state so the user can instantly see the change.

2. Alter the Login Context to use the server to login users instead of our mock users list.
    * Be sure to store the token in state as well as in a cookie so you can reference it later.

#### Features

-   Feature One: CRUD methods for tasks via API
-   Feature Two: Login and logout functions via API
-   Feature Three: Testing
-   Feature Four: Deploy to Dev
-   Feature Five: Deploy to main
-   Deployed to Netlify.com

## UML

![uml](https://i.imgur.com/ms2LzJk.png)

--------------------------------------------------------------------

# Todo-App - Lab - Class 33

### Authors: Ethan Luxton

## Project:  ```<Login />``` and ```<Auth />```

### Problem Domain

In Phase 3, we’d like to extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type. The user stories from Phases 1, and 2 remain unchanged. For this phase, we are now adding the following new user stories.

* As a user, I want to provide a way for other users to create new accounts.
* As a user, I want to provide a way for all users to login to their account.
* As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
* As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items.
* As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete.
* As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items.

#### Features

-   Feature One: Authentication
-   Feature Two: Login and logout functions
-   Feature Three: Testing
-   Feature Four: Deploy to Dev
-   Feature Five: Deploy to main
-   Deployed to Render.com

## UML

![uml](https://i.imgur.com/DSALXnb.png)


---------------------------------------------------------------------------------

# Todo-App - Lab - Class 32

### Authors: Ethan Luxton

## Project:  Context API - Behaviors

### Problem Domain

In Phase 2, we’re going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we’ll let them make changes to 2 settings.

* Implement the Context API to make some basic application settings available to components.
    * How many To Do Items to show at once.
    * Whether or not to show completed items.

* Provide the users with a form where they can change the values for those settings.
    * This should be given in the form of a new component, perhaps linked to from the main navigation.
    * Once settings are updated, render the updated settings to the right of the “form”. 

* Save the users choices in Local Storage.      
* Retrieve their preferences from Local Storage and apply them to the application on startup.

#### Features

-   Feature One: Context API Settings, these settings are in a separate tab and can be changed by the user at any time. They are rendered to the user.
-   Feature Two: Settings are saved and retrieved from local storage
-   Feature Three: Testing
-   Feature Four: Deploy to Dev
-   Feature Five: Deploy to main
-   Deployed to Render.com

## UML

![uml](https://i.imgur.com/OeD9nSi.png)


---------------------------------------------------------------------------------

# Todo-App - Lab - Class 31

### Authors: Ethan Luxton

## Project: Context API

### Problem Domain

In Phase 1, we’re going to perform some refactoring of a Todo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

* Create a Detailed UML.
* Properly modularize the application into separate components, note the proposed file structure below.
* Implement the Context API to make some basic application settings available to components.
    * Show three items by default.
    * Hide completed items by default.
    * Add the sort word ‘difficulty’ by default.
* Style the application using the Mantine Component API{target:_blank}.

#### Features

-   Feature One: Add items to a list with properties, name and status. Ability to delete said items
-   Feature Two: Testing
-   Feature Four: Deploy to Dev
-   Feature Five: Deploy to main
-   Deployed to Render.com

## UML

![uml](https://i.imgur.com/qux0bJE.png)
