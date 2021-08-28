
fillingData()


function fillingData() {

    let usersDatabase = JSON.parse(sessionStorage.getItem("usersDatabase"))
    let searchedUser = JSON.parse(sessionStorage.getItem("searchedUser"))

    let detailedUserImage = `<img src="${usersDatabase[searchedUser].picture.large}" alt="User Image">`
    document.getElementById('detailedUserImage').innerHTML = detailedUserImage;

    let detailedUserData1 = `
        <h1>Name: ${usersDatabase[searchedUser].name.first} ${usersDatabase[searchedUser].name.last}</h1>
        <h5>Country: ${usersDatabase[searchedUser].location.country}</h5>
        <h5>City: ${usersDatabase[searchedUser].location.city}</h5>
        <h5>Street: ${usersDatabase[searchedUser].location.street.name} ${usersDatabase[searchedUser].location.street.number}</h5>
        <h5>email: ${usersDatabase[searchedUser].email}</h5>                                                     
    `
    document.getElementById("detailedUserData1").innerHTML = detailedUserData1





} 