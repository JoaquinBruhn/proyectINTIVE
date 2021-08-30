# proyectINTIVE

The app is intuitive to run, the page loads and executes the JS file wich automaticaly brings 52 users from the API and loads them into the site. At the same time it stores each of the 52 users on an array (usersDatabase[]) , It also asigns each button(wich contains the thumbnail) and ID wich corresponds with it´s placement on usersDatabase[]´s index wich will help later when clicking on a thumbnail to get more info on a new tab.

If you are wondering about why the number 52 is so that the user´s cards could be placed in columns of 4 wich I thought would look more apealing. I just needed a multiple of 4 that´s bigger than 50 wich was the minimum amount of users that you requested.

When you click on any of the card´s thumbnail the main JS file runs a function that saves that user´s information on the sesion storage. I used to load the entire array with along with the ID but I changed it up to just that user´s data since it was a waste of storage capacity. As it was requested a new tab opens (moreInfo.html) that is linked to the second js file (details.js). This JS automaticaly runs a function that pulls the information back from the sesion storage, and uses it to fill in an HTML template. This card has a bigger picture and more details about that user, I used as many as I thought that would fit without affecting much how it looked.

At the bottom of the site there is a button that allows you to load 52 more users, it can be reused as many times as you want making it infinite. This new users get added into usersdatabase[] and are also asigned an ID this is all done automaticaly and doesn´t break the site´s functionality in any way.

More details about how it works can be seen on the comments of the JS files and a bit on the HTML files

--------------------------------

I apologise for ignoring the part of the challenge that requests doing it in React or Angular I tried to speed learn React this week but I couldn´t master it enough to get something presentable. At the same time I made just in case this vanilla version as a back up wich satisfies all the other conditions. 

On another note the searchbar and filters ended up as placeholders. I put them there at the start when I was making the layout with on index.html as to not make it look that simple but I run out of time and cuoldn´t actualy implement them. They are left there just couse they fit the design.
