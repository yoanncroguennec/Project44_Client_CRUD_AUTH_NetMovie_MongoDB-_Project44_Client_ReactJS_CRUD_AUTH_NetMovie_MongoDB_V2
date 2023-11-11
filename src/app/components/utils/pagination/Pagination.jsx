import { GlobalBtns } from "../../layouts";
import {
  BiSolidChevronsLeft,
  FaChevronRight,
  FaChevronLeft,
  BiSolidChevronsRight,
} from "../../../utils/assets/icons";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Pagination({ page, limit, setPage, countAllMovies }) {
  /// RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (action) => {
    if (action === "minus") setPage(page - 1);
    else if (action === "plus") setPage(page + 1);
    else if (action === "reset") setPage(1);
    else if (action === "lastPage") setPage(countAllMovies / limit);
  };
  // 6 * 5 = 30
  const oo = countAllMovies / limit;
  console.log("oo :", oo);
  return (
    <>
      <div
        style={{
          background: "blue",
          display: "flex",
          flexWrap: "nowrap",
          margin: "15px 0",
          justifyContent: "center",
          alignItems: "center",
          width: `${matches ? "100px" : "100vw"}`,
        }}
      >
        <div
          style={{
            background: "grey",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            width: `${matches ? "100px" : "600px"}`,
          }}
        >
          <div
            style={{
              background: "yellow",
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              alignItems: "center",
              width: `${matches ? "150px" : "220px"}`,
            }}
          >
            {page > 1 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "250px",
                }}
              >
                <GlobalBtns
                  titleTooltipBtn='Première page'
                  onClickAction={() => {
                    // setPage(0);
                    handleClick("reset");
                  }}
                  colorIconBtn='#F00'
                  iconBtn={<BiSolidChevronsLeft size={45} />}
                />
                <GlobalBtns
                  titleTooltipBtn='Page précédente'
                  onClickAction={() => {
                    // setPage(page - 1);
                    handleClick("minus");
                  }}
                  colorIconBtn='#F00'
                  iconBtn={<FaChevronLeft size={35} />}
                />
              </div>
            )}
          </div>

          <div
            style={{
              background: "green",
              position: "relative",
              width: "100px",
              left: "40px",
              top: "-25px",
            }}
          >
            {page !== 1 && (
              <Typography sx={{ fontWeight: "bold" }} variant='h5'>
                Page : {page}
              </Typography>
            )}
          </div>

          <div>
            {page < oo && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: `${matches ? "150px" : "220px"}`,
                }}
              >
                <GlobalBtns
                  titleTooltipBtn='Page suivante'
                  onClickAction={() => {
                    handleClick("plus");
                  }}
                  colorIconBtn='#F00'
                  iconBtn={<FaChevronRight size={35} />}
                />
                <GlobalBtns
                  titleTooltipBtn='Dernière page'
                  onClickAction={() => {
                    // setPage(0);
                    handleClick("lastPage");
                  }}
                  colorIconBtn='#F00'
                  iconBtn={<BiSolidChevronsRight size={45} />}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
