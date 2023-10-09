import {
  Typography,
  Breadcrumbs,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// ICONS
import { MdOutlineNavigateNext } from "react-icons/md";


export default function BreadcrumbsMovie({ _id, name }) {
  /// RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const dataBreadcrumbsMovie = [
    {
      text: "Accueil",
      url: "/",
    },
    {
      text: "Catalogue de fims",
      url: "listAllMovies",
    },
    // {
    //   text: "TEST",
    //   url: "#",
    // },
  ];

  return (
    <Breadcrumbs
      aria-label='breadcrumbs'
      maxItems={3}
      separator={
        <MdOutlineNavigateNext color='#FFF' size={matches ? 15 : 45} />
      }
      style={{
        textShadow:
          "5px 0 #f00, -1px 0 #F00, 0 Fpx #F00, 0 -2px #F00, 1px 1px #F00, -1px -1px #F00, 1px -1px #F00, -1px 1px #F00",
      }}
    >
      {dataBreadcrumbsMovie.map(({ text, url, id }) => (
        <Link
          href={url}
          key={id}
          style={{ color: "#FFF", cursor: "pointer", underline: "hover" }}
        >
          <Typography variant={matches ? "body2 " : "h3"}>{text}</Typography>
        </Link>
      ))}
      {name ? (
        <Link
          href={`${_id}`}
          style={{ color: "#FFF", cursor: "pointer", underline: "hover" }}
        >
          <Typography variant={matches ? "body2 " : "h3"}>
            Film : {name}
          </Typography>
        </Link>
      ) : (
        ""
      )}
    </Breadcrumbs>
  );
}
