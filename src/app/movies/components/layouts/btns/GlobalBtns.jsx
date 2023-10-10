import { Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GlobalBtns({
  titleTooltipBtn,
  colorIconBtn,
  marginRightIconBtn,
  urlBtn,
  onClickAction,
  iconBtn,
  textBtn,
}) {
  // RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Link to={urlBtn} style={{ textDecoration: "none" }}>
      <Tooltip
        title={
          titleTooltipBtn && (
            <Typography variant='h6'>{titleTooltipBtn}</Typography>
          )
        }
      >
        <motion.div
          onClick={onClickAction}
          style={{
            boxShadow: "20px 20px 40px -6px rgba(0, 0, 0, .2)",
            border: "2px solid #F00",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            margin: `${matches ? "2px 5px" : "5px 0"}`,
            alignItems: "center",
            padding: `${matches ? "5px 0" : "5px 25px"}`,
            borderRadius: "50px",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div
            style={{
              // color: "#FFF",
              color: `${colorIconBtn}`,
              marginRight: `${matches ? "5px" : { marginRightIconBtn }}`,
            }}
          >
            {iconBtn}
          </div>
          <Typography
            style={{ color: "#F00", fontWeight: "bold" }}
            variant='h6'
          >
            {textBtn}
          </Typography>
        </motion.div>
      </Tooltip>
    </Link>
  );
}
