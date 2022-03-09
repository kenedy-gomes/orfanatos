
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

//create map

const map = L.map('mapid', options).setView([-16.6807496, -49.2569029], 15);


//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);

//create icon 

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],

})

//create popup overlay



L.marker([-16.6807496, -49.2569029], { icon })
    .addTo(map)


/*IMAGE GALLERY*/

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)



    //remover todas as classes activas//

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")

    }
    //selecionar a imagem clicada//
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src





}

