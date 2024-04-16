quete 9 events / Les interactions utilisateur

Prepare the package for the quest

So, since you already know how to build an app, create routes and, on top of that, the cherry on top, create forms, we'll be able to have a little fun!

We are going to create a fairly simple application, with:

     A root app component
     An app-create-kitten component
     An app-list-kitten component
     An app-user-kitten component

Display level, we will just have:

     A list of kittens, with the image displayed (listKitten)
     A form to add a kitten (createKitten)
     A bar on the side, which references my kittens, 
     just me (userKitten), with the image only

Challenge
give me kittens

The pitch is simple, on kitten-story, users can:

     Create kittens, via the form, with a name, a breed, a date of birth, a link to an image for the photo (kittens are added to the overall collection, when they are created); the 4 pieces of information are mandatory.
     Adopt a kitten, via an adopt button. When a kitten is adopted, it is added to the right panel and removed from the list.

Since this app is a POC, there is no need to do data retention. So, even if when you refresh it disappears, it doesn't matter.

There are still several elements to take into account:

     The submit action of the form that adds the kitten to the collection
     The adopt action that removes the kitten from the global collection and places it in the user's collection
     The form button that should change color to show that the form is valid
     When I hover over a kitten, its information should be displayed elegantly

We do not provide a design, because we assume that creativity must be expressed at this level of the game ;)
Validation criteria

     When I add a kitten, it is displayed in the list of available kittens.
     When I hover my mouse over a kitten, the information is displayed.
     When I click on the adoption of a kitten, I adopt it, it is in my list, it is no longer in the list of available kittens.
     The form tells me if I have completed everything correctly and I cannot add a kitten if the form is invalid.

Even better

     The design is cool
     The code is commented
     The code is clean, respects the StyleGuide



