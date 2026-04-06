// Demo datasets for various types of analysis

const ecommerceDataset = [
    { productId: 1, name: 'Product A', category: 'Electronics', price: 99.99, sales: 200 },
    { productId: 2, name: 'Product B', category: 'Furniture', price: 249.99, sales: 150 },
];

const saasDataset = [
    { userId: 1, subscriptionPlan: 'Basic', monthlyFee: 9.99, activeUsers: 150 },
    { userId: 2, subscriptionPlan: 'Pro', monthlyFee: 29.99, activeUsers: 300 },
];

const retailDataset = [
    { storeId: 1, location: 'Downtown', monthlyFootTraffic: 5000, revenue: 12000 },
    { storeId: 2, location: 'Suburb', monthlyFootTraffic: 3000, revenue: 8000 },
];

const subscriptionDataset = [
    { subscriberId: 1, subscriptionType: 'Annual', startDate: '2022-01-01', cost: 199.99 },
    { subscriberId: 2, subscriptionType: 'Monthly', startDate: '2022-03-01', cost: 19.99 },
];

const inventoryDataset = [
    { itemId: 1, itemName: 'Widget', quantity: 500, reorderLevel: 100 },
    { itemId: 2, itemName: 'Gadget', quantity: 250, reorderLevel: 50 },
];

// Export datasets
module.exports = {
    ecommerceDataset,
    saasDataset,
    retailDataset,
    subscriptionDataset,
    inventoryDataset,
};