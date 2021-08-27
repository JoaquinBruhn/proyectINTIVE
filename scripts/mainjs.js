let userInfo = [];
//creating the function for the first 50 users
first52()
function first52(){
    fetch("https://randomuser.me/api/?results=52")
        .then(res =>res.json())
        .then(data=>{
            //testing the fetch and seting it up to show the array with it´s users
            // let users = data.results;
            // console.log(users);

            let users = data.results;
            console.log(users);

            
            let i = 0
            //framework for the "forEach loop"
            users.forEach(function (lists) {
                

                //tags that contain the User Data
                let mainSlot = document.createElement('div');
                mainSlot.className = 'col-lg-3';

                let user = document.createElement('div');
                user.className = 'card mt-4 bg-light';
                user.idName = `${i}`;

                let dataSlot = document.createElement(`ul`)
                dataSlot.className = `dataSlot`

                let userName = document.createElement(`li`);
                userName.className = `list-group-item userName`;
                userName.innerHTML = `<h3>Name: ${lists.name.first} ${lists.name.last}</h3>`;

                let userImgSlot = document.createElement(`li`);
                userImgSlot.className = `list-group-item thumbnailImg`;

                    let userImgBtn =document.createElement(`button`)
                    userImgBtn.className = `btn`
                    userImgBtn.innerHTML = `<img src="${lists.picture.large}">`;
                    userImgBtn.idName = `${i}`;

                    userImgSlot.appendChild(userImgBtn)

                let userCity = document.createElement(`li`);
                userCity.className = `list-group-item userCity`;
                userCity.innerHTML = `<h5>City: ${lists.location.city}</h5>`;

                let userCountry = document.createElement(`li`);
                userCountry.className = `list-group-item userCountry`;
                userCountry.innerHTML = `<h5>Country: ${lists.location.country}</h5>`;

                //pushes each pulled user into an array with the position on the index matching the button ID
                userInfo.push(users[i])

                dataSlot.appendChild(userName)
                dataSlot.appendChild(userImgSlot)
                dataSlot.appendChild(userCity)
                dataSlot.appendChild(userCountry)
                i=i+1
                user.appendChild(dataSlot)
                mainSlot.appendChild(user)
                searchedResult.appendChild(mainSlot)
            });
    })
}
let boton = document.getElementById("moreUsers")
    boton.addEventListener("click", first52)
