import { fetchApi } from "./fetchAPI.js";

let productList = document.querySelector("#productList");
const getData = async () => {
    
    const container = document.getElementById("product-container");
    const template = document.getElementById("product-template");
    const data = await fetchApi("https://data-json-server-uxiu.onrender.com/api/products");
    
    data.forEach(product => {
        const clone = template.content.cloneNode(true);

         // Gán dữ liệu vào các phần tử trong card
        clone.querySelector("img").src = product.thumbnail;
        clone.querySelector(".card__title").textContent = product.title;
        clone.querySelector(".card__description").textContent = product.description;
        clone.querySelector(".card__price").innerHTML = `Giá: $${product.price}`;

        // Tạo rating theo số sao (1-5)
        // const rating = clone.querySelector(".card__rating");
        // rating.innerHTML = ""; // xóa stars cũ
        // const stars = Math.round(product.rating);
        // for (let i = 0; i < stars; i++) {
        //     rating.innerHTML += `<i class="fa-solid fa-star"></i>`;
        // }
        const ratingEl = clone.querySelector('.card__rating');
        ratingEl.innerHTML = ''; // Xóa cũ

        let fullStars = Math.floor(product.rating);           // Phần nguyên
        let hasHalfStar = (product.rating % 1) >= 0.25 && (product.rating % 1) <= 0.75;// Có nửa sao không
        console.log(product.rating);
        if(product.rating % 1 > 0.75){
            fullStars++;
        } 
        let emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Sao rỗng còn lại

        // Thêm sao đầy
        for (let i = 0; i < fullStars; i++) {
        ratingEl.innerHTML += '<i class="fa-solid fa-star"></i>';
        }

        // Thêm sao nửa nếu có
        if (hasHalfStar) {
        ratingEl.innerHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
        }

        // Thêm sao rỗng
        for (let i = 0; i < emptyStars; i++) {
        ratingEl.innerHTML += '<i class="fa-regular fa-star"></i>';
        }


        // Thêm card vào container
        container.appendChild(clone);
    });
};

getData();

