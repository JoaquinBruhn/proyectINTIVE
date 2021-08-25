//creating the function for the first 50 users
function first50(){
    fetch("https://randomuser.me/api/?results=50")
        .then(res =>res.json())
        .then(data=>{
            //testing the fetch
            let users = data.results;
            console.log(users);
        })
}
first50()