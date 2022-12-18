import { Stack } from "@mui/material";
import {
  setFilteredTopics,
  setTopics,
  showOffers,
  Topic,
} from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import ChipFilter from "../atoms/ChipFilter";

function Chips() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  const onTopicSelect = (newName: string) => {
    let updatedTopics = data.topics.map((topic: any) => {
      if (topic.name === newName) {
        return { name: newName, selected: !topic.selected };
      } else {
        return topic;
      }
    });

    let filteredTopics = updatedTopics.filter((topic: any) => {
      return topic.selected === true;
    });

    let filteredTopicNames = filteredTopics.map((topic: any) => topic.name);

    dispatch(setFilteredTopics(filteredTopicNames));
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
          <ChipFilter
            key={topic.name}
            topic={topic}
            changeTopicStatus={onTopicSelect}
          />
        );
      })}
    </Stack>
  );
}

export default Chips;
