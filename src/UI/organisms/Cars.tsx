import React, { useEffect } from "react";
import { showOffers, getOffersAsync } from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Tile from "../molecules/Tile";
import "./Cars.scss";

function Cars() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  const calledOnce = React.useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    if (data.filteredOffers.length === 0) {
      calledOnce.current = true;
    }
    dispatch(getOffersAsync() as any);
  }, [data]);

  return (
    <>
      <div className="Cars">
        {data.filteredOffers.map((offer: any) => {
          return <Tile key={offer.id} {...offer} />;
        })}
      </div>
    </>
  );
}

export default Cars;
