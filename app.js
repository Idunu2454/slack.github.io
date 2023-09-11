function updateUTCTime() {
     
    const currentTimeElement = document.querySelector("[ data-testid='currentUTCTime']");
    const currentTimeInMillis = new Date().getTime();
    currentTimeElement.textContent = `Current UTC Time (in milliseconds): ${currentTimeInMillis}`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);