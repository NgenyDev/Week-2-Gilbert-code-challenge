
    document.addEventListener('DOMContentLoaded', function() {
        const addItemForm = document.getElementById('addItemForm');
        const shoppingList = document.getElementById('shoppingList');
        const clearListBtn = document.getElementById('clearList');

        addItemForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const itemNameInput = document.getElementById('itemName');
            const itemName = itemNameInput.value.trim();
            if (itemName !== '') {
                addItem(itemName);
                itemNameInput.value = '';
            }
        });

        function addItem(itemName) {
            const li = document.createElement('li');
            li.textContent = itemName;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', function() {
                li.remove();
            });
            const purchaseBtn = document.createElement('button');
            purchaseBtn.textContent = 'Purchase';
            purchaseBtn.addEventListener('click', function() {
                li.classList.toggle('purchased');
            });
            li.appendChild(removeBtn);
            li.appendChild(purchaseBtn);
            shoppingList.appendChild(li);
        }

        clearListBtn.addEventListener('click', function() {
            while (shoppingList.firstChild) {
                shoppingList.removeChild(shoppingList.firstChild);
            }
        });
    });

