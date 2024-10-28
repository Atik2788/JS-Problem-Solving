const items = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
    { id: 3, name: 'Item 3', price: 300 },
];

const updateId = 2;
const updateItems = items.map(item=>
    item.id === updateId ?{...item, price: 5000}: item
)

console.log(updateItems);