import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AllButtons() {
  return (
    <Stack spacing={3} direction="column">
      {/* Variants */}
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      {/* Sizes */}
      <Stack direction="row" spacing={2}>
        <Button size="small" variant="contained">
          Small
        </Button>
        <Button size="medium" variant="contained">
          Medium
        </Button>
        <Button size="large" variant="contained">
          Large
        </Button>
      </Stack>

      {/* Colors */}
      <Stack direction="row" spacing={2}>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
        <Button color="warning" variant="contained">
          Warning
        </Button>
        <Button color="info" variant="contained">
          Info
        </Button>
      </Stack>

      {/* Disabled */}
      <Button variant="contained" disabled>
        Disabled
      </Button>

      {/* With Icons */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="outlined" endIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Stack>

      {/* Icon Button */}
      <IconButton color="primary">
        <DeleteIcon />
      </IconButton>

      {/* Button Group */}
      <ButtonGroup variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      {/* Loading Button */}
      <LoadingButton loading variant="contained">
        Loading
      </LoadingButton>

      {/* Full Width */}
      <Button fullWidth variant="contained">
        Full Width Button
      </Button>
    </Stack>
  );
}
