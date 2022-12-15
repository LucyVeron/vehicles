import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function Details(props: any) {

  // console.warn(props);

  return (
    <List className="Details">
      {/* return <p key={offer.offer_id}>{offer.brand}</p>; */}
      <ListItem>Make</ListItem>
      <ListItem>Model</ListItem>
      <ListItem>Mileage</ListItem>
      <ListItem>First Registration</ListItem>
      <ListItem>Fuel</ListItem>
      <ListItem>Power</ListItem>
      <ListItem>Consumption</ListItem>
      <ListItem>co2</ListItem>
    </List>
  );
}

export default Details;
