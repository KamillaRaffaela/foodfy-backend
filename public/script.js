
const modalOverlay = document.querySelector('.modal-overlay');

const closeModalItem = document.querySelector(".close-modal").addEventListener("click", function() { 
    modalOverlay.classList.remove("active")
})


function openModal(img, title, author) {
    const modalItem = document.getElementById("modal-content-favorite");
    modalItem.innerHTML= `
        <img class="img-favorite-card" src="${img}" alt="hamburguer">
        <h4 class="name-product">${title}</h4>
        <h5 class="creator">${author}</h5>
    `;
    modalOverlay.classList.remove("hidden")
    modalOverlay.classList.add("active")
}

function closeModal() {
    modalOverlay.classList.remove("active")
    modalOverlay.classList.add("hidden")

}