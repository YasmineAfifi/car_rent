// function get the data form route AllCars
function getAllCars() {
        fetch("/AllCars")
            .then((res) => {
                return res.json();
            }).then((data) => {
                for (let index = 0; index < data.length; index++) {
                    let element = data[index];
                    // create the card container
                    const allCardsContainer = document.getElementById("allCardsContainer");
                    const cardsContainer = document.getElementById("cardsContainer");
                    const cardContent = document.createElement("div");
                    cardContent.className = "col mt-3 mb-3";
                    cardsContainer.appendChild(cardContent);
                    // create each card
                    const card = document.createElement("div");
                    card.className = "card h-100";
                    cardContent.appendChild(card);
                    // create image
                    const imgContainerDiv = document.createElement("div");
                    const image = document.createElement("img");
                    imgContainerDiv.className = "imgContainerCard";
                    image.className="card-img-top cardImg";
                    image.src = `../static/images/${element.image}`;
                    imgContainerDiv.appendChild(image);
    
                    // create card body 
                    const cardbody = document.createElement("div");
                    cardbody.className="card-body";
                    card.appendChild(cardbody);
                    cardbody.appendChild(imgContainerDiv);
                    // create text for car brand
                    const titleAnchorDetails = document.createElement("a");
                    titleAnchorDetails.className="titleCardDetails";
                    titleAnchorDetails.href =`/carDetails/${element.id}`;
                    const carBrand = document.createElement("h5");
                    titleAnchorDetails.appendChild(carBrand);
                    carBrand.className="card-title py-3";
                    carBrand.innerText=element.brand;
                    const btnCardContainer = document.createElement("div");
                    // create the card buttons
                   btnCardContainer.className="btnCardContainer pb-3";
                   
                    const DetailsBtn = document.createElement("button");
                    DetailsBtn.onclick = function redirctToUrl() {
                        window.location.href = `/carDetails/${element.id}`;
                    };
                    cardbody.appendChild(titleAnchorDetails);
                    cardbody.appendChild(DetailsBtn);
             
                    DetailsBtn.className="btn btn-primary detailsBtn";
                    DetailsBtn.innerHTML = "Details";
                  
                    btnCardContainer.appendChild(DetailsBtn);
    
                    cardbody.appendChild(btnCardContainer);
                    allCardsContainer.appendChild(cardsContainer);
    
                }
            })
    }



// call the function that get all cars from route in python
getAllCars();













