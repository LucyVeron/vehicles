import { Chip } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function Details(props: any) {
  return (
    <List className="Details">
      <ListItem>Name: {props.name}</ListItem>
      <ListItem>Company: {props.company.name}</ListItem>
      <ListItem>City: {props.address.city}</ListItem>
      <ListItem>
        Topics:
        {props.company.bs.split(" ").map((topic: string) => {
          return (
            <Chip sx={{ mx: 0.5 }} key={topic} label={topic} size="small" />
          );
        })}
      </ListItem>
    </List>
  );
}

export default Details;
