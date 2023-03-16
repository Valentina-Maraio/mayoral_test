export const getSortProduct = (products, sortBy) => {
    switch(sortBy){
        case 'LOw_TO_HIGH':
            return products.sort((a, b) => a.price - b.price);
        case 'HIGH_TO_LOW':
            return products.sort((a, b) => b.price - a.proce);
        default:
            console.log("something went wrong")
            return products;
    }
};