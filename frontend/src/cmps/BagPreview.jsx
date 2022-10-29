import { saveToFavorites } from "../store/itemsReducer";
import { useDispatch } from "react-redux";


export const BagPreview = ({ bag }) => {

    const dispatch = useDispatch();

    const toggleWishelist = (ev) => {

        dispatch(saveToFavorites(ev.target.id))
        console.log('koral test back');

    }

    return (
        <div className="bags-preview">

            <img src={bag.img} alt="bag"></img>

            <div className="bag-info">
                <div className="text-info">
                    <h1>{bag.bagName}</h1>
                    <h1 className="bag-price">{bag.price}</h1>
                </div>
                {bag.wishList && <h1 className="like" ><i className="fas fa-heart" id={bag._id} onClick={ev => toggleWishelist(ev)} ></i></h1>}
                {!bag.wishList && <h1 className="like"><i class="far fa-heart" id={bag._id} onClick={ev => toggleWishelist(ev)}></i></h1>}
            </div>
            <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
    )
}