import { Chip, Stack } from "@mui/material";

function ChipFilter() {
  const items = ["One Fish", "Two Fish", "Red Fish", "Blue Fish"];
  return (
    <Stack className="Chip" direction="row" spacing={1}>
      {items.map((item: string) => {
        return <Chip label={item} size="small" />;
      })}
    </Stack>
  );
}

export default ChipFilter;
