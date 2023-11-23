let numberOfPeopleAdded = 0; 

async function createPersonalInfoBlock(data) {
    const personalInfoBlock = document.createElement("div");
    personalInfoBlock.className = "person-info"; 

    let pictureDocument = document.createElement("img");
    pictureDocument.src = data.results[0].picture.large;
    pictureDocument.className = "person-picture"; 
    personalInfoBlock.appendChild(pictureDocument);

    let nameDocument = document.createElement("p");
    nameDocument.className = "person-info-item"; 
    nameDocument.appendChild(document.createTextNode("Name: " + data.results[0].name.first + " " + data.results[0].name.last));
    personalInfoBlock.appendChild(nameDocument);

    let cityDocument = document.createElement("p");
    cityDocument.className = "person-info-item"; 
    cityDocument.appendChild(document.createTextNode("City: " + data.results[0].location.city));
    personalInfoBlock.appendChild(cityDocument);

    let postCodeDocument = document.createElement("p");
    postCodeDocument.className = "person-info-item"; 
    postCodeDocument.appendChild(document.createTextNode("Postcode: " + data.results[0].location.postcode));
    personalInfoBlock.appendChild(postCodeDocument);

    let phoneNumberDocument = document.createElement("p");
    phoneNumberDocument.className = "person-info-item"; 
    phoneNumberDocument.appendChild(document.createTextNode("Phone number: " + data.results[0].phone));
    personalInfoBlock.appendChild(phoneNumberDocument);

    return personalInfoBlock;
}


async function getData() {
    try {
        const response = await fetch('https://randomuser.me/api', {
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const value = await response.json();
        console.log(value);

        const parent = document.getElementById("results");
        const personalInfoBlock = await createPersonalInfoBlock(value);

        parent.appendChild(personalInfoBlock);

        numberOfPeopleAdded++; 

        const countLabel = document.getElementById("countLabel");
        if (countLabel) {
            
            countLabel.innerText = `Додано людей: ${numberOfPeopleAdded}`;
        } else {
            
            const label = document.createElement("p");
            label.id = "countLabel";
            label.innerText = `Додано людей: ${numberOfPeopleAdded}`;
            parent.appendChild(label);
        }

    } catch (error) {
        console.error('Fetch error:', error);
    }
}
