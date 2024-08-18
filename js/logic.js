const addBtn = document.getElementById('Add');
const activeBtn = document.getElementById('Active');
const addCardDiv = document.querySelector('.add-card');
const activeCardsDiv = document.querySelector('.active-cards');

addBtn.addEventListener('click', () => {
  addCardDiv.style.display = 'flex';
  activeCardsDiv.style.display = 'none';
});

activeBtn.addEventListener('click', () => {
  addCardDiv.style.display = 'none';
  activeCardsDiv.style.display = 'flex';
});

function renderCards(cards) {
  const adminCardsContainer = document.querySelector('.active-cards', document.getElementById('admin-panel'));
  const engineerCardsContainer = document.querySelector('.active-cards', document.getElementById('engineer-panel'));

  adminCardsContainer.innerHTML = '';
  engineerCardsContainer.innerHTML = '';

  cards.forEach((card) => {
    const cardHTML = `
      <div class="card">
        <img class="img_card" src="${card.image}" alt="" onclick="openImage(this)">
        <div style="margin-left: 15px;">
          <p class="part-number">Part number: <span>${card.partNumber}</span></p>
          <p class="name-number">Name: <span>${card.name}</span></p>
          <p class="desc-part">Description: <span>${card.description}</span></p>
        </div>
      </div>
    `;

    adminCardsContainer.innerHTML += cardHTML;
    engineerCardsContainer.innerHTML += cardHTML;
  });
}

