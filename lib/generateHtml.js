
module.exports = function generateHTML(managerArr, engineerArr, interArr) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cyborg/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery.js"></script>
    <title>Team Site</title>
</head>

<body>
    <div class="container">
        <div class="jumbotron">
            <h1>Team Organization Chart</h1>
            <h3>Teamwork makes the Dream work...</h3>
            <hr>
        </div>
        <div class="row">

        <!-- Manager Card -->
        ${managerArr.map(manager =>
        `<div class="card col-4 m-1">
            <div class="card-header">
            <h3><strong> ${manager.name}</strong></h3>
            <h3><strong> <i class="fa fa-coffee"></i> Manager</strong></h3>
            </div>
            <div class="card-body">
            <div id="stats">
            <h4><strong>ID:</strong> <span> Employee ID ${manager.id}  </span></h4>
            <h4><strong>Email:</strong> <span> Email: ${manager.email} </span></h4>
            <h4><strong>Office Number:</strong> <span> Office Number: ${manager.officeNumber} </span></h4>
            </div>
            </div>
            </div>
            `
    )}
            <!-- End Manager Card -->

        <!-- Engineer Cards -->
        ${engineerArr.map(engineer =>
        `<div class="card col-4 m-1">
            <div class="card-header">
                <h3><strong> ${engineer.name} </strong></h3>
                <h3><strong> <i class="fa fa-user"></i> Engineer</strong></h3>
            </div>
            <div class="card-body">
                <div id="stats">
                    <h4><strong>ID:</strong> <span>Employee ID ${engineer.id} </span></h4>
                    <h4><strong>Email:</strong> <span>Email: ${engineer.email} </span></h4>
                    <h4><strong>GitHub username:</strong> <span> GitHub username: ${engineer.github} </span></h4>
                </div>
            </div>
        </div>`
    )}    
        <!-- End Engineer Cards -->
            
        <!-- Intern Cards -->
        ${interArr.map(intern =>
        `<div class="card col-4 m-1">
            <div class="card-header">
                <h3><strong> ${intern.name} </strong></h3>
                <h3><strong> <i class="fa fa-graduation-cap"></i> Intern</strong></h3>
            </div>
            <div class="card-body">
                <div id="stats">
                    <h4><strong>ID:</strong> <span>Employee ID: ${intern.id} </span></h4>
                    <h4><strong>Email:</strong> <span>Email: ${intern.email} </span></h4>
                    <h4><strong>School:</strong> <span>School: ${intern.school} </span></h4>
                </div>
            </div>
        </div>`
    )}
        <!-- End Intern Cards -->

            
        </div>
    </div>

</body>

</html>`
}