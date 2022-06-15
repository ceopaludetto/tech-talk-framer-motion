import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export type IButtonsProps = {
  next?: string;
  prev?: string;
};

export function Buttons({ next, prev }: IButtonsProps) {
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent: "flex-end", mt: 2 }}>
      {!!prev && (
        <Button variant="text" component={Link} to={prev}>
          Anterior
        </Button>
      )}
      {!!next && (
        <Button component={Link} to={next}>
          Próximo
        </Button>
      )}
    </Stack>
  );
}
