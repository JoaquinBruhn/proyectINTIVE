//array wwith all the users displayed
let usersDatabase = [];
//variable that´s goint to turn into the ID of the user that was clicked and used as a reference in the index of usersDatabase[]
let searchedUser

let mainButton = document.getElementById("findUsers")
    mainButton.addEventListener("click", first52)

//creating the function for that obtains 52 users
function first52(){
    //fetches the data from the site, the number can be altered from the link
    fetch("https://randomuser.me/api/?results=52")
        .then(res =>res.json())
        .then(data=>{

            //testing the fetch and setting it up to show the array with it´s users
            let users = data.results;
            console.log(users);

            
            let i = 0
            //forEach loop that creates the HTML list of users along with filling up the array usersDatabase []
            users.forEach(function (lists) {
                
                //deleting the button to prevent users with the same ID (can be changed later to circumvent this problem)
                document.getElementById(`temporalBtn`).innerHTML= ""

                //tags that contain the User Data
                let mainSlot = document.createElement('div');
                mainSlot.className = 'col-lg-3';

                let user = document.createElement('div');
                user.className = 'card mt-4 bg-light';
                user.idName = `${i}`;


                //user individual data that´s going to be grouped up 
                let userName = document.createElement(`li`);
                userName.className = `list-group-item userName`;
                userName.innerHTML = `<h3>Name: ${lists.name.first} ${lists.name.last}</h3>`;

                let userImgSlot = document.createElement(`li`);
                userImgSlot.className = `list-group-item thumbnailImg`;
                    
                    //setting the thmbnail IMG as a button and giving each button an event listener with a specific ID
                    let userImgBtn = document.createElement(`button`);
                    userImgBtn.className = `btn moreInfoBtn`;
                    userImgBtn.innerHTML = `<img src="${lists.picture.medium}">`;
                    userImgBtn.idName = `${i}`;
                    userImgBtn.addEventListener(`click`,() => {
                        searchedUser = parseInt(userImgBtn.idName)
                        moreInfo()
                    
                    });

                    userImgSlot.appendChild(userImgBtn)

                let userCity = document.createElement(`li`);
                userCity.className = `list-group-item userCity`;
                userCity.innerHTML = `<h5>City: ${lists.location.city}</h5>`;

                let userCountry = document.createElement(`li`);
                userCountry.className = `list-group-item userCountry`;
                userCountry.innerHTML = `<h5>Country: ${lists.location.country}</h5>`;

                //pushes each pulled user into an array with the position on the index matching the button ID
                usersDatabase.push(users[i])
                i=i+1

                user.appendChild(userName)
                user.appendChild(userImgSlot)
                user.appendChild(userCity)
                user.appendChild(userCountry)
                
                mainSlot.appendChild(user)
                searchedResult.appendChild(mainSlot)
            });
    })
}

function moreInfo(){

    sessionStorage.setItem("usersDatabase",JSON.stringify(usersDatabase))
    sessionStorage.setItem("searchedUser",JSON.stringify(searchedUser))

    window.open("pages/moreInfo.html", "_blank");
}
