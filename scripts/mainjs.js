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

            let i = 0
            //framework for the "forEach loop"
            users.forEach(function (lists) {
                //this if adds the opening div for the container and row every 4 loops
                if (i % 4 == 0){
                    searchedResult += `
                    <div class="container-fluid">
                        <div class="row">
                    `
                };
                //this string variable contains most of the HTML that´s going to be added along with the paramers
                searchedResult += `
                <div class="col-lg-3">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first} ${lists.name.last}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                        </ul>
                    </div>
                </div>
                `
                i=i+1;
                //this if adds the closing div for the container and row every 4 loops
                if (i % 4 == 0){
                    searchedResult += `
                        </div>
                    </div>
                    `
                };
            });

            document.getElementById('searchedResult').innerHTML = searchedResult;
        })
}
first52()