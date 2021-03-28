interface Mountain {
    name: string;
    height: number;
}




const mountainsArray: Mountain[] = [
    {
        name: 'Kilimanjaro',
        height: 19341,
    },

    {
        name: 'Everest',
        height: 29029,
    },

    {
        name: 'Denali',
        height: 20310,
    },

];




function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallest = null;

    for (let mountain of mountains) {
        if (!tallest) {//if tallest doesn't exist yet
            tallest = mountain;//tallest is current mountain
        }

        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    };
    return `${tallest?.name}`; //if tallest is null then the whole thing is null "elvis operator"
};

console.log(findNameOfTallestMountain(mountainsArray));





interface Product {
    name: string;
    price: number;
};



const products: Product[] = [
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


function calcAverageProductPrice(products: Product[]): number {
    let total = 0;

    for (let product of products) {
        total += product.price;
    }

    let average = total / products.length;
    return average;
};

console.log(calcAverageProductPrice(products));







interface InventoryItem {
    product: Product;
    quantity: number;
};


const inventory: InventoryItem[] = [
    {
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10
    },

    {
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    },

    {
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }
];


function calcInventoryValue(inventoryItems: InventoryItem[]): number {
    let total = 0;

    for (let item of inventoryItems) {
        total += item.product.price * item.quantity
    }

    return total;
}

console.log(calcInventoryValue(inventory));
