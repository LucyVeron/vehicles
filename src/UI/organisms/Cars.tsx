import { useEffect } from "react";
import { getOffersAsync, showOffers } from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Tile from "../molecules/Tile";

function Cars() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOffersAsync() as any);
  }, []);

  return (
    <div className="Cars">
      {data.offers.map((offer: any) => {
        <Tile key={offer.offer_id} {...offer}/>
      })}
    </div>
  );
}

export default Cars;
