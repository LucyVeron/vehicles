import { ArrowBack } from "@mui/icons-material";
import {
  Chip,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getOfferById, showOffers } from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import "./Product.scss";

function Product() {
  const param = useLocation().pathname;
  const productId: number = parseInt(
    param.substring(param.lastIndexOf("/") + 1)
  );

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

    dispatch(getOfferById(productId));
  }, [offer, dispatch, productId]);

  if (offer) {
    return (
      <div className="Product">
        <Link to={`/`}>
          <Button variant="contained" sx={{ margin: "1rem" }}>
            <ArrowBack sx={{ mr: "0.5rem" }} /> BACK TO OFFERS
          </Button>
        </Link>

        <Paper sx={{ margin: "1rem", padding: "1rem" }}>
          <img src="../../../image.png" alt="image" />
          <List className="Details">
            <ListItem>Name: {offer.name}</ListItem>
            <ListItem>Company: {offer.company.name}</ListItem>
            <ListItem>City: {offer.address.city}</ListItem>
            <ListItem sx={{ display: "flex", flexWrap: "wrap" }}>
              Topics:
              {offer.company.bs.split(" ").map((topic: string) => {
                return (
                  <Chip
                    sx={{ m: 0.5 }}
                    key={topic}
                    label={topic}
                    size="small"
                  />
                );
              })}
            </ListItem>
          </List>
        </Paper>
      </div>
    );
  } else {
    return (
      <div
        className="Spinner"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          alignItems: "center",
        }}
      >
        <CircularProgress size="6rem" />
      </div>
    );
  }
}

export default Product;
