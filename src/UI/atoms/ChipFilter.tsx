import { Chip } from "@mui/material";

function ChipFilter(props: any) {
  const onTopicSelect = (newName: string) => {
    props.changeTopicStatus(newName);
  };

  return (
    <Chip
      className="ChipFilter"
      style={{ margin: "5px", cursor: "pointer" }}
      key={props.topic.name}
      label={props.topic.name}
      size="small"
      color={props.topic.selected ? "primary" : "default"}
      onClick={() => onTopicSelect(props.topic.name)}
    />
  );
}

export default ChipFilter;
