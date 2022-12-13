import { useEffect } from "react";
import { getOffersAsync, showOffers } from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Tile from "../molecules/Tile";
import "./Cars.scss";

function Cars() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  const mockOffers: any = [
    {
      offer_id: "1",
      name: "name1",
    },
    {
      offer_id: "2",
      name: "name2",
    },
    {
      offer_id: "3",
      name: "name3",
    },
    {
      offer_id: "4",
      name: "name4",
    },
    {
      offer_id: "5",
      name: "name5",
    },
  ];

  useEffect(() => {
    dispatch(getOffersAsync() as any);
  }, []);

  return (
    <div className="Cars">
      {mockOffers.map((offer: any) => {
        return <Tile key={offer.offer_id} {...offer} />;
      })}
    </div>
  );
}

export default Cars;
