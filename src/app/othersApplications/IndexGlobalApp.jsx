import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
export default function IndexGlobalApp() {
  return (
    <TypeWriterEffect
      cursorColor='#F00'
      multiText={[
        "Bonjour",
        "Bienvenue sur la page d'accueil regroupant plusieurs petites applications",
      ]}
    //   multiTextLoop
      multiTextDelay={1000}
      startDelay={2000}
      textStyle={{
        fontFamily: "red Hat Display",
        color: "#3F3D56",
        fontWeight: 500,
        fontSize: "1.5em",
      }}
      typeSpeed={30}
    />
  );
}
