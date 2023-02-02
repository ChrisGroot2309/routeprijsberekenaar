function gotoSite() {
    const locatie = document.getElementById('locatie').value;
    location.href = `https://www.mapdevelopers.com/distance_from_to.php?&from=Houtrijkstraat%20369%20Amsterdam&to=${locatie}`;
}

