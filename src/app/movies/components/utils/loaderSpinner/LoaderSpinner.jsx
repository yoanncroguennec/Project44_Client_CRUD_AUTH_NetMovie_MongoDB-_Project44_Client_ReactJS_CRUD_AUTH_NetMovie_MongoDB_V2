import MoonLoader from "react-spinners/MoonLoader";
// STYLES
import { Root_LoaderSpinner } from "./StylesLoaderSpinner";

export default function LoaderSpinner() {
  return (
    <Root_LoaderSpinner>
      <MoonLoader color='#8b008b' size={150} />
    </Root_LoaderSpinner>
  );
}
