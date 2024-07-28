// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemManager() {
    const items = [];

    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items.slice(); // Return a copy to prevent modification
        }
    };
}

const manager = createItemManager();
manager.addItem('apple');
manager.addItem('banana');
console.log(manager.listItems()); // Logs: ['apple', 'banana']
manager.removeItem('apple');
console.log(manager.listItems()); // Logs: ['banana']

