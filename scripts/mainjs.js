// import {createCard} from "./utils/cards";
//array with all the loaded users displayed
let usersDatabase = [];


users52()

//button that requests 52 users
let mainButton = document.getElementById("findUsers")
    mainButton.addEventListener("click", users52)

//creating the function for that obtains 52 users
function users52(){
    //fetches the data from the site, the number can be altered from the link
    fetch("https://randomuser.me/api/?results=52")
        .then(res =>res.json())
        .then(data=>{
        
            console.log("hola")
            //testing the fetch and setting it up to show the array with it´s users
            let users = data.results;
            console.log(users);
            
            usersDatabase = usersDatabase.concat(data.results)
            ix=usersDatabase.length - 52
            for (let i=ix; i<usersDatabase.length; i++){
                createCard(usersDatabase[i],i)
            }
    })
}

function moreInfo(){

    //obtaining and saving the data from the pecific selected user in the array to save storage space
    sessionStorage.setItem("searchedUser",JSON.stringify(usersDatabase[userID]))

    window.open("pages/moreInfo.html", "_blank");
}


//forEach loop that creates the HTML list of users along with filling up the array usersDatabase []
function createCard(userData,i){
    //tags that contain the User Data
    let mainSlot = document.createElement('div');
    mainSlot.className = 'col-md-3';

    user = document.createElement('div');
    user.className = 'card mt-4 bg-light';


    //user individual data that´s going to be grouped up 
    let userName = document.createElement(`li`);
    userName.className = `list-group-item userName`;
    userName.innerHTML = `<h4>Name: ${userData.name.first} ${userData.name.last}</h4>`;

    let userImgSlot = document.createElement(`li`);
    userImgSlot.className = `list-group-item thumbnailImg`;
        
        //setting the thmbnail IMG as a button and giving each button an event listener with a specific ID
        let userImgBtn = document.createElement(`button`);
        userImgBtn.className = `btn moreInfoBtn`;
        userImgBtn.innerHTML = `<img src="${userData.picture.medium}">`;
        userImgBtn.idName = `${i}`;
        userImgBtn.addEventListener(`click`,() => {
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


    //groups ul individual data inside a div with a card class
    user.appendChild(userName)
    user.appendChild(userImgSlot)
    user.appendChild(userCity)
    user.appendChild(userCountry)
    
    //gets the user into a Bootstrap column for easier editing of style
    mainSlot.appendChild(user)
    //All columns of searched users get into a bootstarp ROW DIV 
    searchedResult.appendChild(mainSlot)
};