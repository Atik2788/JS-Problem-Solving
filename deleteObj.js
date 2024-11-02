const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

const deleteId = 2;
const updateItems = items.filter(item => item.id !== deleteId)
console.log(updateItems);