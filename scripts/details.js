
fillingData()


function fillingData() {
    //getting the user data from the storage
    let searchedUser = JSON.parse(sessionStorage.getItem("searchedUser"))

    //user largest IMG (not that large though)
    let detailedUserImage = `<img src="${searchedUser.picture.large}" alt="User Image">`
    document.getElementById('detailedUserImage').innerHTML = detailedUserImage;

    //template for user´s main info
    let detailedUserData1 = `
        <h1>Name: ${searchedUser.name.first} ${searchedUser.name.last}</h1>
        <h5>Location: ${searchedUser.location.city}, ${searchedUser.location.country}</h5>
        <h5>Street: ${searchedUser.location.street.name} ${searchedUser.location.street.number}</h5>
        <h5>email: ${searchedUser.email}</h5>  
        <h5>Phone number: ${searchedUser.phone}</h5>                                                    
    `
    //template for user´s personal info
    let detailedUserData2 =`
        <h4>Personal info:</h4>
        <h6>Age: ${searchedUser.dob.age}</h6>
        <h6>Gender: ${searchedUser.gender}</h6>
        <h6>ID(type): ${searchedUser.id.name}</h6>
        <h6>ID(value): ${searchedUser.id.value}</h6>
    `
    //template for user´s account info
    let detailedUserData3 =`
    <h4>Account info:</h4>
    <h6>Username: ${searchedUser.login.username}</h6>
    <h6>UUID: ${searchedUser.login.uuid}</h6>
    <h6>Password: ${searchedUser.login.password}</h6>
    <h6>Registered: ${searchedUser.registered.age} years ago</h6>
    `

    //getting the info on it´s respective containers
    document.getElementById("detailedUserData1").innerHTML = detailedUserData1
    document.getElementById("detailedUserData2").innerHTML = detailedUserData2
    document.getElementById("detailedUserData3").innerHTML = detailedUserData3

} 