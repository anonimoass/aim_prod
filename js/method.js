const createCardBtn = document.getElementById('create-card-btn');
const activeCardsContainer = document.querySelector('.active-cards');

createCardBtn.addEventListener('click', (e) => {
  e.preventDefault(); // предотвратить отправку формы

  const uploadedImage = document.getElementById('uploadedImage').src;
  const partNumber = document.getElementById('order_number').value;
  const name = document.getElementById('name_number').value;
  const description = document.getElementById('desc_part').value;

  const cardHTML = `
    <div class="card">
      <img class="img_card" src="${uploadedImage}" alt="" onclick="openImage(this)">
      <div style="margin-left: 15px;">
        <p class="part-number">Part number: <span>${partNumber}</span></p>
        <p class="name-number">Name: <span>${name}</span></p>
        <p class="desc-part">Description: <span>${description}</span></p>
      </div>
    </div>
    <p>
    <button class="confirm-btn">Confirm</button>
  `;

  const newCard = document.createElement('div');
  newCard.innerHTML = cardHTML;
  activeCardsContainer.appendChild(newCard);

  // Добавляем обработчик события клика на кнопку Confirm
  const confirmBtn = newCard.querySelector('.confirm-btn');
  confirmBtn.addEventListener('click', () => {
    newCard.remove(); // Удаляем карточку
  });
});

document.getElementById('create-card-btn').addEventListener('click', function() {
  const form = document.querySelector('form');
  form.reset();
  const img = document.getElementById('uploadedImage');
  img.src = '';
  img.style.display = 'none';
  const uploadText = document.getElementById('uploadText');
  uploadText.style.display = 'block';
});

function openImage(img) {
  // Создаем элемент overlay, который будет содержать фотографию и кнопку скачать
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.innerHTML = `
    <img src="${img.src}" alt="${img.alt}">
    <button class="download-btn">Download</button>
  `;

  // Добавляем overlay к body документа
  document.body.appendChild(overlay);

  // Добавляем обработчик события клика на кнопку скачать
  const downloadBtn = overlay.querySelector('.download-btn');
  downloadBtn.addEventListener('click', () => {
    // Создаем ссылку на фотографию и симулируем клик по ней
    const link = document.createElement('a');
    link.href = img.src;
    link.download = img.alt;
    link.click();
  });

  // Добавляем обработчик события клика на overlay, чтобы закрыть его
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
}