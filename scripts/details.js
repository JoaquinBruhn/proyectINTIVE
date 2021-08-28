
fillingData()


function fillingData() {
    
    let usersDatabase = JSON.parse(sessionStorage.getItem("usersDatabase"))
    let searchedUser = JSON.parse(sessionStorage.getItem("searchedUser"))

    let detailedUserImage = `<img src="${usersDatabase[searchedUser].picture.large}" alt="User Image">`
    document.getElementById('detailedUserImage').innerHTML = detailedUserImage;

    let detailedUserData1 = `
        <h1>Name: ${usersDatabase[searchedUser].name.first} ${usersDatabase[searchedUser].name.last}</h1>
        <h5>Location: ${usersDatabase[searchedUser].location.city}, ${usersDatabase[searchedUser].location.country}</h5>
        <h5>Street: ${usersDatabase[searchedUser].location.street.name} ${usersDatabase[searchedUser].location.street.number}</h5>
        <h5>email: ${usersDatabase[searchedUser].email}</h5>  
        <h5>Phone number: ${usersDatabase[searchedUser].phone}</h5>                                                    
    `

    let detailedUserData2 =`
        <h4>Personal info:</h4>
        <h6>Age: ${usersDatabase[searchedUser].dob.age}</h6>
        <h6>Gender: ${usersDatabase[searchedUser].gender}</h6>
        <h6>ID(type): ${usersDatabase[searchedUser].id.name}</h6>
        <h6>ID(value): ${usersDatabase[searchedUser].id.value}</h6>
    `

    let detailedUserData3 =`
    <h4>Account info:</h4>
    <h6>Username: ${usersDatabase[searchedUser].login.username}</h6>
    <h6>UUID: ${usersDatabase[searchedUser].login.uuid}</h6>
    <h6>Password: ${usersDatabase[searchedUser].login.password}</h6>
    <h6>Registered: ${usersDatabase[searchedUser].registered.age} years ago</h6>
    `

    document.getElementById("detailedUserData1").innerHTML = detailedUserData1
    document.getElementById("detailedUserData2").innerHTML = detailedUserData2
    document.getElementById("detailedUserData3").innerHTML = detailedUserData3

} 