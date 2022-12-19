import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getOfferById, showOffers } from "../../features/offers/offersSlice";
import BackButton from "../../UI/atoms/BackButton";
import Details from "../../UI/atoms/Details";
import Image from "../../UI/atoms/Image";
import Spinner from "../../UI/atoms/Spinner";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

function Offer() {
  const param = useLocation().pathname;
  const offerId: number = parseInt(param.substring(param.lastIndexOf("/") + 1));

  const offer = useAppSelector(showOffers).offer;
  const dispatch = useAppDispatch();

  const calledOnce = React.useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    if (offer === null) {
      calledOnce.current = true;
    }

    dispatch(getOfferById(offerId));
  }, [offer, dispatch, offerId]);

  if (offer) {
    return (
      <div className="Offer">
        <BackButton />
        <Paper sx={{ maxWidth: "500px", margin: "1rem", padding: "1rem" }}>
          <Image />
          <Details {...offer} />
        </Paper>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Offer;
