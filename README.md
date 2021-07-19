# Adventure Quest

* Full Demo is on [full-demo](https://github.com/alchemy-june-demos/adventure-quest-class-demo/tree/full-demo) branch -- this is also what has been deployed to Github pages
* Class code is on main branch and may be slightly different


## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

# Home (/)
## HTML Elements
* h3 with description
* Form
    * Input field -- user name
    * Radio buttons -- character
    * Submit Button -- start the game
## Events
* Form Submit (aka button click)
    * create our user
    * store our user in localStorage

## User Data Model
```javascript
{
    name: // <initialize from user input>,
    race: // <initialize from radio buttons>,
    hp: // <initalize to 35>,
    gold: // <initialize to 0>,
    // completed: ['dragons']
    completed: {
        'dragons': true
    }
}
```

# List (/map)
* Links for each quest
    * /quest/?id=<quest_id>

# Quest Detail (/quest)
## HTML Elements
* h3 with name of the quest
* image showing the quest image
* paragraph or span with the description
* 3 radio buttons with the choices
* submit button


