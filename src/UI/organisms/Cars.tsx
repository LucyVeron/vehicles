import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { showOffers, getOffersAsync } from "../../utils/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Tile from "../molecules/Tile";
import "./Cars.scss";

function Cars() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  const [count, setCount] = useState(2);

  const calledOnce = React.useRef(false);

  const offersSlice = () => {
    return data.filteredOffers.slice(0, count);
  };

  const loadMore = () => {
    if (count < data.filteredOffers.length) {
      setCount(count + 2);
    } else {
      alert("stop");
    }
  };

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
        {offersSlice().map((offer: any) => {
          return <Tile key={offer.id} {...offer} />;
        })}
      </div>
      {data.noResult === true && (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert variant="outlined" severity="error">
            No matching results
          </Alert>
        </div>
      )}

      {count < data.filteredOffers.length && (
        <Button onClick={loadMore}>Show More</Button>
      )}
    </>
  );
}

export default Cars;
