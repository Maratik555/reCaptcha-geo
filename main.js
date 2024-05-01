const displayArea = document.querySelector("#locationDisplay");
const getLocationBtn = document.querySelector("#getLocation");

getLocationBtn.addEventListener("click", () => {
    if(navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(displayGeoData, displayError);
       const watchId = navigator.geolocation.watchPosition(displayGeoData, displayError);
       setTimeout(() => navigator.geolocation.clearWatch(watchId), 3000);
    } else {
        displayArea.innerHTML = "Geolocation is not supported by this browser.";
    }
});

const displayGeoData = (position) => {
    console.log(position);
    const { latitude, longitude } = position.coords;
    displayArea.textContent = `Latitude: ${latitude} Longitude: ${longitude}`;
    displayArea.href = `https://google.com/maps?q=${latitude},${longitude}`;

};

const displayError = (err) => {
    console.log(err);
    displayArea.textContent = `Error: ${err.message}`;
};
