const Outfit = props => {
    const mappedClothes = props.clothesInCart.map((cart, i) => (
        <Cart 
            key={i}
            clothes={clothes}
            editSizeFn={props.editSizeFn}
            removeFromCartFn={props.removeFromCartFn}/>
    ))

    return (
        <div>
            <h1>Pokedex</h1>
            <div className=''>
                {mappedClothes}
            </div>
        </div>
    )
}

export default Outfit;