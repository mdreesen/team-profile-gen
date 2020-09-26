const generateManager = manager => {
    return `
    <div class="card text-white bg-primary mb-3 mt-3 col-sm-6 mx-auto" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${manager.managerName}</h5>
        <li class="list-group-item text-dark">Manager's ID: ${manager.managerId}</li>
        <li class="list-group-item text-dark">Manager's Office Number: ${manager.mOfficeNumber}</li>
    </div>
    `;
};

const generateEngineer = engineer => {
    return `
    <div class="card text-white bg-dark mb-3 mt-3 mx-auto" style="width: 18rem;">
                <i class="fas fa-glasses"></i>
                <div class="card-body">
                    <h5 class="card-title">${engineer.engineerName}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-dark">Engineer ID: ${engineer.engineerId}</li>
                </ul>
                <div class="card-body">
                    <a href="mailto: ${engineer.engineerEmail}" class="card-link">Email</a>
                    <a href="#" class="card-link">Engineer Github: https://github.com/${engineer.engineerGithub}</a>
                </div>
                `;
};

module.exports = templateData => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Team Profile</title>
</head>

<body>
    <!-- This is for the nav-bar -->
    <header>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
            <h2>Team Profile</h2>
        </nav>

    </header>

    <div class="container">
        <div class="row mx-md-n">
            <!-- This code is for the Manager -->
            ${generateManager(templateData)}
            </div>
        </div>


        <!-- This code is going to be for the Engineer's -->
        <div class="row">
            ${generateEngineer(templateData)}
            <!-- This is where another Engineer will be added -->
        </div>
    </div>
</body>

</html>
`;
};