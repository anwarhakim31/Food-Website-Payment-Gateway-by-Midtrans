let quantity = 0;

document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [],
    activeTab: "food",
    // Mengatur tab minuman sebagai tab aktif secara default
    showFood() {
      this.activeTab = "food";
      this.items = foods().foods;
    },
    showDrink() {
      this.activeTab = "drink";
      this.items = drinks().drink;
    },
    showSnack() {
      this.activeTab = "snack";
      this.items = snacks().snack;
    },
    rupiah(price) {
      return "Rp" + price.toLocaleString();
    },
  }));
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((items) => items.id === newItem.id);

      //jika beluma ada/masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //jika barangya udh ada cek apakah barang sama atau beda
        this.items = this.items.map((item) => {
          //jika barang ada
          if (item.id !== newItem.id) {
            return item;
          } else {
            //jika barang     sudah ada ,tambah quantity dan subtotal ;
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;

            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang mau di hapus
      const cartItem = this.items.find((items) => items.id === id);

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

function foods() {
  return {
    foods: [
      {
        id: "p1",
        name: "Chickeen Burger",
        info: "Double Cow Beef With barbaque Sauce",
        price: 50000,
        img: "image/product/product-1.png",
      },
      {
        id: "p2",
        name: "Black Burger",
        info: "burger which has every ingredient of a burger but in black colour, including the cheese, bun and leaves ",
        price: 34000,
        img: "image/product/product-2.png",
      },
      {
        id: "p3",
        name: "Fish Burger",
        info: "BEEF BURGER ORIGINALFISH FILLET BLACK BURGER",
        price: 60000,
        img: "image/product/product-3.png",
      },
      {
        id: "p5",
        name: "Double Burger",
        info: "Burger With cow beef and chicken beef",
        price: 85000,
        img: "image/product/product-4.png",
      },
      {
        id: "p6",
        name: "chicken skin Burger",
        info: "crispy skin chiken with cheese",
        price: 45000,
        img: "image/product/product-5.png",
      },
      {
        id: "p7",
        name: "double cheese Burger",
        info: "burger with 4slice chese top 2 bottom 2",
        price: 60000,
        img: "image/product/product-6.png",
      },
      {
        id: "p8",
        name: "Burgery Burger",
        info: " The Origanaly this Restaurant Burger",
        price: 35000,
        img: "image/product/product-13.png",
      },
      {
        id: "p9",
        name: "original Burger",
        info: "Burger with only beef goat",
        price: 29000,
        img: "image/product/product-7.png",
      },
    ],
  };
}

function snacks() {
  return {
    snack: [
      {
        id: "p10",
        name: "French fries",
        info: " side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips",
        price: 18000,
        img: "image/product/product-9.png",
      },
      {
        id: "p11",
        name: "nugget",
        info: "a small, typically breaded and fried piece of chicken meat",
        price: 20000,
        img: "image/product/product-10.png",
      },
      {
        id: "p12",
        name: "potato chips",
        info: "very thin slices of potato that have been fried until they are hard, dry, and crisp, and are eaten cold as a snack",
        price: 17000,
        img: "image/product/product-11.png",
      },
      {
        id: "p13",
        name: "Hotdog",
        info: "very thin slices of potato that have been fried until they are hard, dry, and crisp, and are eaten cold as a snack",
        price: 17000,
        img: "image/product/product-8.png",
      },
    ],
  };
}

function drinks() {
  return {
    drink: [
      {
        id: "p14",
        name: "CocaCola or Pepsi",
        info: "choose CocaCola or Pepsi",
        price: 8000,
        img: "image/product/drink-1.png",
      },
      {
        id: "p15",
        name: "Orange Juice",
        info: "Fresh & Sweet Orange Juice",
        price: 11000,
        img: "image/product/drink-2.png",
      },
      {
        id: "p16",
        name: "Manggo Juice",
        info: "Manggo Juice",
        price: 12000,
        img: "image/product/drink-3.png",
      },
      {
        id: "p17",
        name: "Lemon Tea",
        info: "Poci Tea",
        price: 8000,
        img: "image/product/drink-4.png",
      },
    ],
  };
}

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
