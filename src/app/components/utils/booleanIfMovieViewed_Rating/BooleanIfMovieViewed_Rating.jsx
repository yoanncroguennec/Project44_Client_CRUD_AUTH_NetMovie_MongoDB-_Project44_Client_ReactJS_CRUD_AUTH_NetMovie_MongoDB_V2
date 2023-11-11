import { Rating, Tooltip } from "@mui/material";
// UTILS DATA
import { dataRatingLabels } from "../../../utils/assets/data";
// STYLES
import {
  Root_BooleanIfMovieViewed_Rating,
  TypoRating,
} from "./StylesBooleanIfMovieViewed_Rating";
// ICONS
import {
  AiFillHeart,
  AiOutlineHeart,
  LiaEyeSolid,
  LiaEyeSlash,
} from "../../../utils/assets/icons";
const colorIcon = "#ce1957";
const sizeIcon = 30;

////////////// EXPORT FUNCTION COMPONENT UTILS
export default function BooleanIfMovieViewed_Rating({
  rating,
  favorite,
  watch,
}) {
  return (
    <Root_BooleanIfMovieViewed_Rating>
      {/* WATCH */}
      {watch ? (
        <Tooltip title='Vu'>
          <span>
            <LiaEyeSolid size={sizeIcon} />
          </span>
        </Tooltip>
      ) : (
        <Tooltip title='Pas vu'>
          <span>
            <LiaEyeSlash size={sizeIcon} />
          </span>
        </Tooltip>
      )}
      {/* FAVORIS */}
      {favorite ? (
        <Tooltip title='En favori'>
          <span>
            <AiFillHeart color={colorIcon} size={sizeIcon} />
          </span>
        </Tooltip>
      ) : (
        <Tooltip title='Pas en favori'>
          <span>
            <AiOutlineHeart color={colorIcon} size={sizeIcon} />
          </span>
        </Tooltip>
      )}
      <Rating
        name='half-rating-read'
        defaultValue={rating}
        precision={0.5}
        readOnly
        size='large'
      />
      {rating !== null && (
        <TypoRating variant='h5'>{dataRatingLabels[rating]}</TypoRating>
      )}
    </Root_BooleanIfMovieViewed_Rating>
  );
}
