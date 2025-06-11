//Function to display the correct webpage/image
//based on the time of day
function displayTimeOfDay() 
{
    //Get the hour and minutes from the user's device
    const hour =  new Date().getHours(); 
    const minutes = new Date().getMinutes();

    //body of the html page
    let body = document.body;

    //make the time number a h2 header
    const message = document.createElement("h2");

    //image container
    const imageElement = document.createElement("img");

    //Will be set to am/pm depending on time
    let meridiam = "";

    //Use hourDisplayed so the actual hour value never changes
    let hourDisplayed = hour;
    //Use minutesDisplayed so the actual minutes value never changes
    let minutesDisplayed = minutes.toString().padStart(2, '0');

    //Set AM/PM
    if (hour < 12) 
    {
        meridiam = "AM";
    } 
    else 
    {
        meridiam = "PM";
    }

    //If the time is 0 (midnight) display 12
    if (hour == 0) 
    {
        hourDisplayed = 12;
    } 
    //otherwise display the hour % 12
    else if (hour > 12) 
    {
        hourDisplayed = hour % 12;
    }

    // Morning
    if (hour >= 6 && hour < 12)
    {
        //For the morning set background to orange and display black text/time
        body.style.backgroundColor = " #fab844";
        body.style.color = "black";
        message.textContent = `${hourDisplayed}:${minutesDisplayed} ${meridiam} (Morning)`;

        //image source
        imageElement.src = "morning.jpg"; 
        imageElement.alt = "Morning image";
    } 
    //Afternoon
    else if (hour >= 12 && hour < 18) 
    {
        //For the afternoon set background to light blue and display black text/time
        body.style.backgroundColor = "#82dbea";
        body.style.color = "black";
        message.textContent = `${hourDisplayed}:${minutesDisplayed} ${meridiam} (Afternoon)`;

        //image source
        imageElement.src = "afternoon.jpg"; 
        imageElement.alt = "Afternoon image";
    } 
    //Evening/Night
    else
    {
        //For the evening/night set background to indigo and display white text/time
        body.style.backgroundColor = "indigo";
        body.style.color = "white";
        message.textContent = `${hourDisplayed}:${minutesDisplayed} ${meridiam} (Evening/Night)`;

        //image source
        imageElement.src = "night.png";
        imageElement.alt = "Evening/Night image";
    }

    //Time and image display
    message.style.textAlign = "center";
    imageElement.style.display = "block";
    imageElement.style.margin = "auto";
    imageElement.style.maxWidth = "400px";
    imageElement.style.height = "auto";
    imageElement.style.borderRadius = "10px";
   

    //Center the time and add it to the body
    body.appendChild(message);
    body.appendChild(imageElement);
}

displayTimeOfDay();
