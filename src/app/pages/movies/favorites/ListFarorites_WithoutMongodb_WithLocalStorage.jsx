import { useState } from "react";
import { Box, Button } from "@mui/material";
import Lottie from "lottie-react";
import {
  Animation_Exclamation_lottie_files,
  dataList_AnimationHandPointingDown,
} from "../../../utils/assets/lotties_json"
import FavoritesListItems from "./FavoritesListItems";
// STYLES
import {
  RootScrollingText,
  RootListFarorites_WithoutMongodb_WithLocalStorage,
  stylesLottieExclamation,
  BoxContentScrollingText,
  ContentScrollingText,
  TypoBold,
  BoxAnimationHandPointingDown,
  RootListFavorites,
  TypoEmptyFavouritesList,
  Box_Title_ListFavorites,
  BoxListFavorites,
} from "./StylesListFarorites_WithoutMongodb_WithLocalStorage";

export default function ListFarorites_WithoutMongodb_WithLocalStorage() {
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );

  const EmptyMyFavouritesFromLocalStorage = () => {
    const newStorageItem = [];
    setStorageItem(newStorageItem);
    localStorage.setItem("favourites", JSON.stringify(newStorageItem));
  };

  const textScrolling = " Vos favoris sont conservées localement dans votre navigateur, pour pouvoir accédez par un autre navigateur ou appareil. Il faut vous connectez afin de les sauvegarder définitivement dans notre Base de données"

  return (
    <RootListFarorites_WithoutMongodb_WithLocalStorage>
      <RootScrollingText>
        <Lottie
          animationData={Animation_Exclamation_lottie_files}
          loop={true}
          style={stylesLottieExclamation}
        />
        <BoxContentScrollingText>
          <ContentScrollingText>
            <TypoBold variant='h5'>{textScrolling}</TypoBold>
          </ContentScrollingText>
        </BoxContentScrollingText>
        <Lottie
          animationData={Animation_Exclamation_lottie_files}
          loop={true}
          style={stylesLottieExclamation}
        />
      </RootScrollingText>
      <BoxAnimationHandPointingDown>
        {dataList_AnimationHandPointingDown.map(({ animationData, loop }) => (
          <Lottie animationData={animationData} loop={loop} />
        ))}
      </BoxAnimationHandPointingDown>
      <Button variant='outlined'>Se connecter</Button>
      <RootListFavorites>
        {storageItem.length === 0 ? (
          <TypoEmptyFavouritesList variant='h4'>
            Liste des favoris vide
          </TypoEmptyFavouritesList>
        ) : (
          <Box_Title_ListFavorites>
            <Button
              onClick={EmptyMyFavouritesFromLocalStorage}
              variant='outlined'
            >
              Vider ma liste des favoris
            </Button>
            <BoxListFavorites>
              {storageItem.map((item) => (
                <FavoritesListItems item={item} />
              ))}
            </BoxListFavorites>
          </Box_Title_ListFavorites>
        )}
      </RootListFavorites>
    </RootListFarorites_WithoutMongodb_WithLocalStorage>
  );
}
