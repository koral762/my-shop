import { BagPreview } from "./BagPreview";

export const BagList = ({ bags }) => {

    return (

        <div className="bags-list">
            {bags.map(bag =>
                <BagPreview key={bag._id} bag={bag} />)}
        </div>
    )
}