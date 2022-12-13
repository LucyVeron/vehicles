import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { getOffersAsync, showOffers } from "./offersSlice";

export function Offers() {
  const offers = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  console.log(useAppSelector(showOffers));

  return (
    <div className="App">
      {/* {offers.map((offer: any) => {
        return <p key={offer.id}>{offer.title}</p>;
      })} */}
      <button onClick={() => dispatch(getOffersAsync() as any)}>
        GET OFFERS
      </button>
    </div>
  );
}
