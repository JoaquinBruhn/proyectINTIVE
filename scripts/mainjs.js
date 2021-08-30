//array with all the loaded users displayed
let usersDatabase = [];

//automaticaly runs the function thefirst time and get´s the first 52 users
users52()
//This is used to make the Zoom In effect work
AOS.init();

//button that requests 52 extra users
let mainButton = document.getElementById("findUsers")
    mainButton.addEventListener("click", users52)

//creating the function for that obtains 52 users
function users52(){
    //fetches the data from the site
    fetch("https://randomuser.me/api/?results=52")
        .then(res =>res.json())
        .then(data=>{

            //testing the fetch and setting it up to show the array with the users pulled from the API
            console.log(data.results);
            
            //adds the incoming users to the main array, it also add the new ones to the already existing ones if it´s requested again
            usersDatabase = usersDatabase.concat(data.results)
            //"i" is going to be used to represent the index value on our usersDatabas[] marking wich user is going to be loaded on each loop. It also gives unique ID to each user´s thumbnail button.
            //this equation allows the function to be used again while always generating a new ID and also not reload users from the first search again when loading a second one.
            ix=usersDatabase.length - 52
            for (let i=ix; i<usersDatabase.length; i++){
                createCard(usersDatabase[i],i)
            }
    })
}

//Each loop creates the HTML div of a new user on the array usersDatabase []
function createCard(userData,i){
    //tags that contain the User´s Data
    let mainSlot = document.createElement('div');
    mainSlot.className = 'col-xl-3 col-lg-6';
    mainSlot.dataset.aos = `zoom-in`

    user = document.createElement('div');
    user.className = 'card-body mt-4 bg-light users__cards';


        //user´s individual data that´s going to be grouped up inside the Bootstrap card 
        let userName = document.createElement(`li`);
        userName.className = `list-group-item userName`;
        userName.innerHTML = `<h4>Name: ${userData.name.first} ${userData.name.last}</h4>`;

        let userImgSlot = document.createElement(`li`);
        userImgSlot.className = `list-group-item thumbnailImg`;
            
            //setting the thmbnail IMG as a button and giving each button an event listener with a specific ID
            let userImgBtn = document.createElement(`button`);
            userImgBtn.className = `btn rounded-circle moreInfoBtn`;
            userImgBtn.innerHTML = `<img class="img-fluid rounded-circle" src="${userData.picture.medium}">`;
            userImgBtn.idName = `${i}`;
            userImgBtn.addEventListener(`click`,() => {
                //when the thumbnail is clicked it turns the id from a sring to a number and saves it as userID then it runs the function to open it on a new tab
                userID = parseInt(userImgBtn.idName)
                moreInfo()
            });

            userImgSlot.appendChild(userImgBtn)

        let userCity = document.createElement(`li`);
        userCity.className = `list-group-item userCity`;
        userCity.innerHTML = `<h5>City: ${userData.location.city}</h5>`;

        let userCountry = document.createElement(`li`);
        userCountry.className = `list-group-item userCountry`;
        userCountry.innerHTML = `<h5>Country: ${userData.location.country}</h5>`;


    //grouping up individual data inside a div with a card class
    user.appendChild(userName)
    user.appendChild(userImgSlot)
    user.appendChild(userCity)
    user.appendChild(userCountry)
    
    //gets the card div into a Bootstrap column for easier editing of style
    mainSlot.appendChild(user)
    //Placing the column inside a bootstarp ROW DIV in the HTML file with all the other user´s cards.
    searchedResult.appendChild(mainSlot)
};

function moreInfo(){

    //obtaining and saving the data from the specificly selected user and sending it to the sesion storage.
    //It uses the ID that was saved when the thumbnail is clicked as the index value where that user data is stored in the array.
    sessionStorage.setItem("searchedUser",JSON.stringify(usersDatabase[userID]))
    //opening the new tab with that user´s info
    window.open("pages/moreInfo.html", "_blank");
}
