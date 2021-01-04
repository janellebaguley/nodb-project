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
        {id: 1, bottoms: 'jeans', size: 'S'},
        {id: 2, bottoms: 'shorts', size: 'S'},
        {id: 3, bottoms: 'leggings', size: 'S'},
        {id: 4, bottoms: 'skirt', size: 'S'},
        {id: 5, bottoms: 'skorts', size: 'S'},
        {id: 6, bottoms: 'capris', size: 'S'}],
    shoes: [
        {id: 1, shoes: 'tennis shoes', size: 6},
        {id: 2, shoes: 'high heels', size: 6},
        {id: 3, shoes: 'flip flops', size: 6},
        {id: 4, shoes: 'boots', size: 6},
        {id: 5, shoes: 'flats', size: 6},
        {id: 6, shoes: 'wedges', size: 6}],
    hats: [
        {id: 1, hats: 'baseball cap', size: 'S'},
        {id: 2, hats: 'fedora', size: 'S'},
        {id: 3, hats: 'cowboy hat', size: 'S'},
        {id: 4, hats: 'newsboy cap', size: 'S'},
        {id: 5, hats: 'beanie', size: 'S'},
        {id: 6, hats: 'bucket hat', size: 'S'}]
    }];
let id = 1;

module.exports = {
    getClothes: (req,res) => {
        res.status(200).send(clothes);
    },
    addClothes: (req,res) => {
        const {tops, bottoms, shoes, hats} = req.body;
        let clothing ={
            id: id,
            tops: tops,
            bottoms: bottoms,
            shoes: shoes,
            hats: hats
        }
        clothes.push(clothing);
        id++;
        res.status(200).send(clothes);
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