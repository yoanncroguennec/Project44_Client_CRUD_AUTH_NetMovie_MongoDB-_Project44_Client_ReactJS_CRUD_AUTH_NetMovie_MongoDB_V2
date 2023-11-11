import {
  Typography,
  List,
  styled,
  Dialog,
  Button,
  Accordion,
  AccordionSummary,
  DialogActions,
} from "@mui/material";

export const RootDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      // IMPORTANT ! A REVOIR
      // background: "rgba(255, 255, 255, 04)",
      // backdropFilter: "blur(1px)",
      // WebkitBackdropFilter: "blur(1px)",
      borderRadius: "50px",
      maxWidth: "900px",
      width: "100%",
    },
  },
  [theme.breakpoints.down("sm")]: {},
}));

