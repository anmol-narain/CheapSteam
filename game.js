console.log("Welcome To CheapSteam ");

//constructor...............................................
function Game(gameName, type) {
    this.gameName = gameName;
    this.type = type;
}


//Display Constructor........................................
function displayCart() {

}

// To add 2 methods to display prototype.....
displayCart.prototype.add = function (game) {
    tableContent = document.getElementById('tableContent');
    let uiItems = `<tr>
                        <td>${game.gameName}</td>
                        <td>${game.type}</td>                        
                    </tr>`;
    tableContent.innerHTML += uiItems ;
}


// clear function....
displayCart.prototype.clear = function () {
    let gameForm = document.getElementById('gameForm');
    // reseting and clearing fields for next i/p ..
    gameForm.reset();
}

// check function......
displayCart.prototype.check = function (gamename) {
    if (gamename.length<2){
        return false;
    }
    else{
        return true;
    }
}
// show function....
displayCart.prototype.show = function (type, showalert) {
    let alert = document.getElementById('popup');
    alert.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong> Alert</strong>${showalert}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>
                        </div>`
    setTimeout(function() {
        alert.innerHTML = ``
    }, 2000);

}



// Submit button event listener to gameForm--->when submit then "submitGameForm" function run..........................
let gameForm = document.getElementById('gameForm');
gameForm.addEventListener('submit', submitGameForm);

function submitGameForm(e) {    
    // preventing default behaviour of the form..no reload
    e.preventDefault();
    let gamename = document.getElementById('gameName').value;

    let type;
    let pC = document.getElementById('pC');
    let xBox = document.getElementById('xBox');
    let playStation = document.getElementById('playStation');

    if (pC.checked) {
        type = pC.value;
    }

    else if (xBox.checked) {
        type = xBox.value;
    }

    else if (playStation.checked) {
        type = playStation.value;
    }




    // object...
    let game = new Game(gamename, type);

    let displaycart = new displayCart();

    // I think we only have one parameter as "gamename" so "game" argument does not fit here for check...
    if(displaycart.check(gamename)){
        displaycart.add(game);
        displaycart.clear();
        displaycart.show('success', ' Game has been added to Cart');
    }
    else{
        // show error
        displaycart.show('danger', ' Please Try Again, Game not added');
    }


    console.log(game);
    console.log('Response submited');
}