//creating the function for the first 50 users
function first52(){
    fetch("https://randomuser.me/api/?results=52")
        .then(res =>res.json())
        .then(data=>{
            //testing the fetch and seting it up to show the array with it´s users
            // let users = data.results;
            // console.log(users);

            let users = data.results;

            let searchedResult = "<h1>Users in the platform</h1>" 

            let i =0
            //framework for the "forEach loop"
            users.forEach(function (lists) {
                if (i % 4 == 0){
                    searchedResult += `
                    <div class="container-fluid">
                        <div class="row">
                    `
                };
                searchedResult += `

                `
                i+1;
                if (i % 4 == 0){
                    searchedResult += `
                    <div class="container-fluid">
                        <div class="row">
                    `
                };
            });

            document.getElementById('searchedResult').innerHTML = searchedResult;
        })
}
first52()