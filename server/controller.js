const clothes = [
    {
        tops: [
        {id: 1, tops: 'blouse', size: 'S'},
        {id: 2, tops: 'button-up', size: 'S'}, 
        {id: 3, tops: 't-shirt', size: 'S'}, 
        {id: 4, tops: 'tank top', size: 'S'}, 
        {id: 5, tops: 'sweater', size: 'S'},
        {id: 6, tops: 'turtleneck', size: 'S'}],
    bottoms: [
        {id: 7, bottoms: 'jeans', size: 'S'},
        {id: 8, bottoms: 'shorts', size: 'S'},
        {id: 9, bottoms: 'leggings', size: 'S'},
        {id: 10, bottoms: 'skirt', size: 'S'},
        {id: 11, bottoms: 'skorts', size: 'S'},
        {id: 12, bottoms: 'capris', size: 'S'}],
    shoes: [
        {id: 13, shoes: 'tennis shoes', size: 6},
        {id: 14, shoes: 'high heels', size: 6},
        {id: 15, shoes: 'flip flops', size: 6},
        {id: 16, shoes: 'boots', size: 6},
        {id: 17, shoes: 'flats', size: 6},
        {id: 18, shoes: 'wedges', size: 6}],
    hats: [
        {id: 19, hats: 'baseball cap', size: 'S'},
        {id: 20, hats: 'fedora', size: 'S'},
        {id: 21, hats: 'cowboy hat', size: 'S'},
        {id: 22, hats: 'newsboy cap', size: 'S'},
        {id: 23, hats: 'beanie', size: 'S'},
        {id: 24, hats: 'bucket hat', size: 'S'}]
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
        const {id} = req.params;
        let clothesIndex = clothes.findIndex(element => element.id === +id);
        clothes [clothesIndex] ={
            id: clothes[clothesIndex].id,
            size: req.body.size || clothes[clothesIndex].size
        }
        res.status(200).send(clothes);
    },
    removeFromCart: (req,res) => {
        const {id} = req.params;
        let clothesId = clothes.findIndex(element => element.id === +id);
        clothes.splice(clothesId, 1);
        res.status(200).send(clothes)
    }
}