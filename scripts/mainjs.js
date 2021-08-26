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
                //this if adds the opening div for the container and row every 4 loops
                let user = document.createElement('div');
                user.className = 'col-lg-3';
                user.idName = `${i}`;

                let userName = document.createElement(`h3`);
                userName.className = `userName`;
                userName.textContent = `Name: ${lists.name.first} ${lists.name.last}`

                let userImg = document.createElement(`img`)
                userImg.className =`img`
                userImg.src = `${lists.picture.medium}`

                user.appendChild(userName)
                user.appendChild(userImg)
                i=i+1
                searchedResult.appendChild(user)
            });
    })
}
let boton = document.getElementById("moreUsers")
    boton.addEventListener("click", first52)
