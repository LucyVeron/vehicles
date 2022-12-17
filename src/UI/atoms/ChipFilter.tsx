import { Chip, Stack } from "@mui/material";
import { useEffect } from "react";
import {
  setTopics,
  showOffers,
  Topic,
} from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

function ChipFilter() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  useEffect(() => {});

  const onTopicSelect = (newName: string) => {
    let updatedTopics = data.topics.map((topic: any) => {
      if (topic.name === newName) {
        return { name: newName, selected: !topic.selected };
      } else {
        return topic;
      }
    });

    dispatch(setTopics(updatedTopics));
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
            color={topic.selected ? "primary" : "default"}
            onClick={() => onTopicSelect(topic.name)}
          />
        );
      })}
    </Stack>
  );
}

export default ChipFilter;
