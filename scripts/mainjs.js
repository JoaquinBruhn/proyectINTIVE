//array with all the loaded users displayed
let usersDatabase = [];
//variable that´s goint to turn into the ID of the user that was clicked and used as a reference in the index of usersDatabase[]
let userID
//count the amount of times the function users52 has been used and allows it to be reused multiple times so that the list of users is practicaly infinite
let t = 0
//used to asign an ID to the loaded users
let i = 0

let mainButton = document.getElementById("findUsers")
    mainButton.addEventListener("click", users52)

//creating the function for that obtains 52 users
function users52(){
    //fetches the data from the site, the number can be altered from the link
    fetch("https://randomuser.me/api/?results=52")
        .then(res =>res.json())
        .then(data=>{

            //testing the fetch and setting it up to show the array with it´s users
            let users = data.results;
            console.log(users);
            
            

            //forEach loop that creates the HTML list of users along with filling up the array usersDatabase []
            users.forEach(function (lists) {

                //tags that contain the User Data
                let mainSlot = document.createElement('div');
                mainSlot.className = 'col-md-3';

                let user = document.createElement('div');
                user.className = 'card mt-4 bg-light';
                user.idName = `${i}`;


                //user individual data that´s going to be grouped up 
                let userName = document.createElement(`li`);
                userName.className = `list-group-item userName`;
                userName.innerHTML = `<h4>Name: ${lists.name.first} ${lists.name.last}</h4>`;

                let userImgSlot = document.createElement(`li`);
                userImgSlot.className = `list-group-item thumbnailImg`;
                    
                    //setting the thmbnail IMG as a button and giving each button an event listener with a specific ID
                    let userImgBtn = document.createElement(`button`);
                    userImgBtn.className = `btn moreInfoBtn`;
                    userImgBtn.innerHTML = `<img src="${lists.picture.medium}">`;
                    userImgBtn.idName = `${i}`;
                    userImgBtn.addEventListener(`click`,() => {
                        userID = parseInt(userImgBtn.idName)
                        moreInfo()
                    });

                    userImgSlot.appendChild(userImgBtn)

                let userCity = document.createElement(`li`);
                userCity.className = `list-group-item userCity`;
                userCity.innerHTML = `<h5>City: ${lists.location.city}</h5>`;

                let userCountry = document.createElement(`li`);
                userCountry.className = `list-group-item userCountry`;
                userCountry.innerHTML = `<h5>Country: ${lists.location.country}</h5>`;

                //pushes each pulled user from the API into an array with the position on the index matching the button ID
                usersDatabase.push(users[i - 52*t])
                //Adds 1 to ibefore the next loop to give the next user a different ID the use of "t" represents the amount of times the function users52 has been used
                i=i+1

                //groups ul individual data inside a div with a card class
                user.appendChild(userName)
                user.appendChild(userImgSlot)
                user.appendChild(userCity)
                user.appendChild(userCountry)
                
                //gets the user into a Bootstrap column for easier editing of style
                mainSlot.appendChild(user)
                //All columns of searched users get into a bootstarp ROW DIV 
                searchedResult.appendChild(mainSlot)
            });
            //Count the amount of times the function users52 has been used
            t = t + 1
    })
}

function moreInfo(){

    //obtaining and saving the data from the pecific selected user in the array to save storage space
    sessionStorage.setItem("searchedUser",JSON.stringify(usersDatabase[userID]))

    window.open("pages/moreInfo.html", "_blank");
}
