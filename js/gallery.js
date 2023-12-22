const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// Object in HTML
const createMarkup = ({ preview, original, description }) =>
  `
  <li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;

const markup = images.map(createMarkup).join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", markup);

// Подія Click

gallery.addEventListener("click", handleImages);

function handleImages(event) {
  event.preventDefault();
  const imageSource = event.target.dataset.source;
  const image = images.find(({ original }) => original === imageSource);

  const instance = basicLightbox.create(`
	<div class="modal">
    <img
      src="${image.original}"
      alt="${image.description}"
      width="1112"
      height="640"
    />
    </div>`,
{
    onShow: () => {
        document.addEventListener('keydown', EscKeyPress);
    },
	onClose: () => {
        document.removeEventListener('keydown', EscKeyPress);
    }
}
    );
    instance.show();
  
  function EscKeyPress(e) {
    if (e.code !== "Escape") return;
    instance.close();
  }
}







// function closeModal (e) {
//     if (e.code !== "Escape") return;
//     instance.close();
// }


//  Close modal - not work
// const modal = document.querySelector(".modal");

// const closeModal = (e) => {
//     if (e.code === "Escape") {
//         modal.classList.remove("open");
//         document.removeEventListener("keydown", closeModal);
//     }
// }

// gallery.addEventListener("click", () => {
//     modal.classList.add("open");
//     document.addEventListener("keydown", closeModal);
// });