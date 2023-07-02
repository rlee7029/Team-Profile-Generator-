function generateCards(data) {
    let cardsInfo = "";

    for(let i = 0; i < data.length; i++) {
        cardsInfo += `<div class='card'>
                        <h2>
                            ${data[i].getName()}
                            <br>
                            ${data[i].getRole() === 'Manager' ? '<i class="fa-solid fa-mug-hot"></i>'+data[i].getRole() : ''}
                            </br>

                            <br>
                            ${data[i].getRole() === 'Engineer' ? '<i class="fa-solid fa-glasses"></i>'+data[i].getRole() : ''}
                            </br>
                        
                            <br>
                            ${data[i].getRole() === 'Intern' ? '<i class="fa-solid fa-user-graduate"></i>'+data[i].getRole() : ''}
                            </br>
                        </h2>
                            <div class='card-content'>
                                <p>
                                    ID: ${data[i].getId()}
                                </p>
                                <p>
                                    Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a>
                                </p>
                                
                                <br>
                                ${data[i].getRole() === 'Manager' ? '<p>Office number: '+data[i].getOfficeNumber()+'</p>' : ''}
                                </br>

                                <br>
                                ${data[i].getRole() === 'Engineer' ? '<p>Github: <a href="https://github.com/'+data[i].getGithub()+'">'+ data[i].getGithub() +'</a>'+'</p>' : ''}
                                </br>

                                <br>
                                ${data[i].getRole() === 'Intern' ? '<p>School: '+data[i].getSchool()+'</p>' : ''}
                                </br>
                            </div>
                        </div>`;
    }
    return cardsInfo;
}

function createHTML(data){

    return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="styles.css" /> 
            <title>Document</title>
        </head>
        <header>My Team</header>
        <body>
            <div class='container'>
                ${generateCards(data)}
            </div>
        </body>
        </html>
    `;
}

module.exports = createHTML;

