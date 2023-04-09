const API = "https://fakestoreapi.com/products";
const category = "https://fakestoreapi.com/products";
// api
// fetch render
const renderAPI = async () => {
  const res = await fetch(API);
  const data = await res.json();
  renderUI(data, best);
  about(data, ul2);
};

renderAPI();

const best = document.querySelector(".best");

const renderUI = (arr, node) => {
  node.innerHTML = "";
  arr.forEach((item, i) => {
    item.price = Math.floor(item.price);

    node.innerHTML += `
   <div id=${i} class="card">
          <div class="img">
            <img class="image" src=${item.image} alt="center" />
          </div>
          <div class="title">
             <h4>${item.title}</h4>
             <i class="fa-regular fa-star"></i>
             <i class="fa-regular fa-star"></i>
             <i class="fa-regular fa-star"></i>
             <i class="fa-regular fa-star"></i>
             <i class="fa-regular fa-star last"></i>
             <i class="fa-solid text-dark fa-2x fa-cart-arrow-down"></i>
             <h5>${item.price}$ <del>${
      item.price + item.price / 5
    }</del> <span>20% Off</span></h5>
          </div>
    </div>
    `;
  });
};

// filter
const li = document.querySelectorAll(".li");
const input = document.querySelector(".input");

input.addEventListener("input", () => {
  const filterAPI = async () => {
    const res = await fetch(category);
    const data = await res.json();
    console.log(data);
    const filter = data.filter((item) => {
      if (item.title.toLowerCase().includes(input.value.toLowerCase())) {
        return item;
      }
    });
    filterUI(filter, best);
  };
  filterAPI();
});

li.forEach((el) => {
  el.addEventListener("click", () => {
    const filterAPI = async () => {
      const res = await fetch(category);
      const data = await res.json();
      const filter = data.filter((item) => {
        if (item.category == el.textContent) {
          return data;
        } else if (el.textContent == "All") {
          return data;
        }
      });
      filterUI(filter, best);
    };
    filterAPI();
  });
});

const filterUI = (arr, node) => {
  node.innerHTML = "";
  arr.forEach((item) => {
    node.innerHTML += `
   <div class="card">
          <div class="img">
            <img class="image" src=${item.image} alt="center" />
          </div>
          <div class="title">
             <h4>${item.title}</h4>
             <i class="fa-regular fa-star"></i>
             <i class="fa-regular fa-star"></i>
             <i class="fa-regular fa-star"></i>
             <i class="fa-regular fa-star"></i>
             <i class="fa-regular fa-star last"></i>
             <h5>${item.price}$ <del>${
      item.price + item.price / 5
    }</del> <span>20% Off</span></h5>
          </div>
    </div>
    `;
  });
};
const tot = document.querySelector(".total");
const ul2 = document.querySelector(".ul2");
let total = document.querySelector("#total");

const about = (arr, node) => {
  node.innerHTML = "";
  const card = document.querySelectorAll(".card");
  card.forEach((item, index) => {
    item.addEventListener("click", () => {
      tot.textContent++;
      let numb = Number(arr[index].price);
      let nums = total.textContent * 1;
      total.textContent = nums + numb;
      let newarray = [];

      arr.find((i) => {
        if (i.id - 1 == item.id) {
          newarray.push(i);
        }
      });
      // bo'ldi
      let son = 0;
      newarray.forEach((item) => {
        if (true) {
          node.innerHTML += `
      <div data-id=${item.id} id=${item.id} class="card uzr" >
          <div class="img">
            <img class="image" src=${item.image} alt="center" />
          </div>
          <div><h3>Price</h3></div>
          <div class="d-flex">
              <button data-id=${item.id} id=${item.id} class="minus btn btn-info">-</button>
              <button data-id=${item.id} id=${item.id} class="num btn btn-danger">1</button>
              <button data-id=${item.id} id=${item.id} class="pilus btn btn-success">+</button>
              <button data-id=${item.id} id=${item.id} class="del btn btn-close btn-danger"></button>
          </div>
          <div class="title">
             <h5>${item.price}$</h5>
          </div>
     </div>
    `;
        }

        const del = document.querySelectorAll(".del");
        del.forEach((del, i) => {
          del.addEventListener("click", (e) => {
            if (e.target.dataset.id == e.target.id) {
              let n = num[i].textContent--;
              let resa = tot.textContent * 1 - n;
              tot.textContent = resa;
              let numb = Number(arr[del.id - 1].price);
              console.log(numb);
              let nums = total.textContent * 1;
              console.log(nums);
              total.textContent = nums - numb * n;
              del.parentElement.parentElement.remove();
            }
          });
        });
      });
      // bo'ldi
      const num = document.querySelectorAll(".num");
      const pilus = document.querySelectorAll(".pilus");
      const minus = document.querySelectorAll(".minus");

      pilus.forEach((plus, x) => {
        plus.addEventListener("click", (e) => {
          if (e.target.dataset.id == plus.id) {
            let newarray = [];
            arr.find((i) => {
              if (i.id - 1 == item.id) {
                newarray.push(i);
              }
            });
            tot.textContent++;
            num[x].textContent++;
            let numb = Number(arr[plus.id - 1].price);
            console.log(numb);
            let nums = total.textContent * 1;
            total.textContent = nums + numb;
          }
        });
        // }
        // });
      });

      minus.forEach((min, c) => {
        min.addEventListener("click", (e) => {
          let t = num[c].textContent * 1;
          if (t) {
            if (e.target.dataset.id == min.id) {
              let newarray = [];
              arr.find((i) => {
                if (i.id - 1 == item.id) {
                  newarray.push(i);
                }
              });
              tot.textContent--;
              num[c].textContent--;
              let numb = Number(arr[min.id - 1].price);
              console.log(numb);
              let nums = total.textContent * 1;
              total.textContent = nums - numb;
            }
          }
        });
      });
    });
  });
};
const over = document.querySelector(".over");
const shp = document.querySelector(".shp");
const close = document.querySelector(".close");

shp.addEventListener("click", () => {
  over.classList.remove("visually-hidden");
});
close.addEventListener("click", () => {
  over.classList.add("visually-hidden");
});
