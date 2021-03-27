var mountainsArray = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    },
];
function findNameOfTallestMountain(mountains) {
    var tallest = null;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (!tallest) { //if tallest doesn't exist yet
            tallest = mountain; //tallest is current mountain
        }
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    }
    ;
    return "" + (tallest === null || tallest === void 0 ? void 0 : tallest.name); //if tallest is null then the whole thing is null "elvis operator"
}
;
console.log(findNameOfTallestMountain(mountainsArray));
;
var products = [
    {
        name: 'Bloodborne',
        price: 19.99
    },
    {
        name: 'Deathloop',
        price: 53.99
    },
    {
        name: 'Monster hunter rise',
        price: 59.99
    },
    {
        name: 'Resident Evil Village',
        price: 59.99
    }
];
function calcAverageProductPrice(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    var average = total / products.length;
    return average;
}
;
console.log(calcAverageProductPrice(products));
;
var inventory = [
    {
        name: 'motor',
        price: 10.00,
        quantity: 10
    },
    {
        name: 'sensor',
        price: 12.50,
        quantity: 4
    },
    {
        name: 'LED',
        price: 1.00,
        quantity: 20
    }
];
function calcInventoryValue(inventoryItems) {
    var total = 0;
    for (var _i = 0, inventoryItems_1 = inventoryItems; _i < inventoryItems_1.length; _i++) {
        var item = inventoryItems_1[_i];
        total += item.price * item.quantity;
    }
    return total;
}
console.log(calcInventoryValue(inventory));
