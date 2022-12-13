import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { getOffersAsync, showOffers } from "./offersSlice";

export function Offers() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      {data.offers.map((offer: any) => {
        return <p key={offer.offer_id}>{offer.brand}</p>;
      })}
      <button onClick={() => dispatch(getOffersAsync() as any)}>
        GET OFFERS
      </button>
    </div>
  );
}
