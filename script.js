(function () {
    "use strict";
    let detailsForm = document.querySelector("#destination_details_form");
    detailsForm.addEventListener("submit", handleFormSubmit);
    function handleFormSubmit(event) {
        event.preventDefault();
        // 1. Storing the values of user input
        var destName = event.target.elements["name"].value;
        var destLocation = event.target.elements["location"].value;
        var destPhoto = event.target.elements["photo"].value;
        var destDesc = event.target.elements["description"].value;

        // 2. Clearing out the form fields after we have stored them
        for (var i = 0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        // 3. Create a function that creates a new card
        var vacationContainer = document.querySelector("#destinations_container");
        if (vacationContainer.children.length === 0) {
            var sideHeading = document.getElementById("title");
            sideHeading.innerText = "My Wish List";
        }
        // Below function "createCard" returns HTML
        var destCard = createCard(destName, destLocation, destPhoto, destDesc);

        // So we append destCard to our main div in html file with id = destinations_container
        document.getElementById('destinations_container').appendChild(destCard);
    }

    function createCard(name, loc, photoUrl, desc) {
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.setAttribute('alt', name);
        const constantPhoto = `images/signpost.jpg`;
        if (photoUrl.length === 0) {
            img.setAttribute('src', constantPhoto);
        }
        else {
            img.setAttribute('src', photoUrl);
        }

        card.appendChild(img);

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        var cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        var cardSubTitle = document.createElement('h4');
        cardSubTitle.innerText = loc;
        cardBody.appendChild(cardSubTitle);

        if (desc.length !== 0) {
            var cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = desc;
            cardBody.appendChild(cardText);
        }

        var cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerText = 'Remove';

        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);
        return card;
    }

    function removeDestination(event) {
        var card = event.target.parentElement.parentElement;
        card.remove();
    }

})();



