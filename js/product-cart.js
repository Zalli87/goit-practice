/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
    getItems(item) {
        console.log(this.items);
  },
    add(product) {
      this.items.push(product)
  },
    remove(productName) {     
        for (const item of this.items) {
             if (item.name === productName) {
                //console.log(this.items.indexOf(item));
                this.items.splice(this.items.indexOf(item), 1)
            break;
            } 
         }
  },
    clear() {
        this.items = [];
  },
    countTotalPrice() {
        let total = 0;
      for (const item of this.items) {
          //console.log(item.price);
          total += item.price;
        }
        return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍋', price: 60 });

// console.table(cart.getItems());


cart.remove('🍎');
//cart.getItems();
// console.table(cart.getItems());

// cart.clear();
// cart.getItems();

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

 console.log('Total: ', cart.countTotalPrice());