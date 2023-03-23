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
