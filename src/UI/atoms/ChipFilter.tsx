import { Chip, Stack } from "@mui/material";
import { useEffect } from "react";
import { showOffers, Topic } from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

function ChipFilter() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  useEffect(() => {});

  const onTopicSelect = (e: any) => {
    let selectedTopic = data.topics.find(
      (topic: any) => topic.name === e.target.value
    );

    let newTopic = {
      name: selectedTopic.name,
      selected: !selectedTopic.selected,
    };
  };

  return (
    <Stack
      sx={{ flexWrap: "wrap" }}
      className="ChipFilter"
      direction="row"
      spacing={1}
    >
      {data.topics.map((topic: Topic) => {
        return (
          <Chip
            style={{ margin: "5px", cursor: "pointer" }}
            key={topic.name}
            label={topic.name}
            size="small"
            variant={topic.selected ? "contained" : ("filled" as any)}
            onClick={(e: any) => onTopicSelect(e)}
          />
        );
      })}
    </Stack>
  );
}

export default ChipFilter;
