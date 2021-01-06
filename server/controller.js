const clothes = [
    {
        tops: [
        {id: 1, tops: 'Blouse', size: 'S'},
        {id: 2, tops: 'Button-up', size: 'S'}, 
        {id: 3, tops: 'T-shirt', size: 'S'}, 
        {id: 4, tops: 'Tank Top', size: 'S'}, 
        {id: 5, tops: 'Sweater', size: 'S'},
        {id: 6, tops: 'Turtleneck', size: 'S'}],
    bottoms: [
        {id: 7, bottoms: 'Jeans', size: 'S'},
        {id: 8, bottoms: 'Shorts', size: 'S'},
        {id: 9, bottoms: 'Leggings', size: 'S'},
        {id: 10, bottoms: 'Skirt', size: 'S'},
        {id: 11, bottoms: 'Skorts', size: 'S'},
        {id: 12, bottoms: 'Capris', size: 'S'}],
    shoes: [
        {id: 13, shoes: 'Tennis Shoes', size: 6},
        {id: 14, shoes: 'High Heels', size: 6},
        {id: 15, shoes: 'Flip Flops', size: 6},
        {id: 16, shoes: 'Boots', size: 6},
        {id: 17, shoes: 'Flats', size: 6},
        {id: 18, shoes: 'Wedges', size: 6}],
    hats: [
        {id: 19, hats: 'Baseball Cap', size: 'S'},
        {id: 20, hats: 'Fedora', size: 'S'},
        {id: 21, hats: 'Cowboy Hat', size: 'S'},
        {id: 22, hats: 'Newsboy Cap', size: 'S'},
        {id: 23, hats: 'Beanie', size: 'S'},
        {id: 24, hats: 'Bucket Hat', size: 'S'}]
    }];
let cart = [];

module.exports = {
    getClothes: (req,res) => {
        res.status(200).send(clothes);
    },
    getCart: (req,res) => {
        res.status(200).send(cart);
    },
    addToCart: (req,res) => {
        const {item} = req.body;
        cart.push(item)
        res.status(200).send(cart);
    },
    editSize: (req,res) => {
        const {id} = req.params,
              {size} =req.body;
        let cartSize = cart.findIndex(element => element.id === +id);
        // don't forget to add the cartSize variable
       cart[cartSize].size = size;
        res.status(200).send(cart);
    },
    removeFromCart: (req,res) => {
        const {id} = req.params;
        let clothesId = cart.findIndex(element => element.id === +id);
        cart.splice(clothesId, 1);
        res.status(200).send(cart)
    }
}