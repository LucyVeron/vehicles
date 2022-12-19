import { Chip } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

function Details(props: any) {
  return (
    <List className="Details">
      <ListItem>
      <Link to={`products/${props.id}`}>Link to Product Page</Link>
      </ListItem>
      <ListItem>Name: {props.name}</ListItem>
      <ListItem>Company: {props.company.name}</ListItem>
      <ListItem>City: {props.address.city}</ListItem>
      <ListItem sx={{ display: "flex", flexWrap: "wrap" }}>
        Topics:
        {props.company.bs.split(" ").map((topic: string) => {
          return (
            <Chip sx={{ m: 0.5 }} key={topic} label={topic} size="small" />
          );
        })}
      </ListItem>
    </List>
  );
}

export default Details;
