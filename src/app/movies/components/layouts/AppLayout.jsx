import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import ExtendNavbarCellular from "./navbar/extendNavbarCellular/ExtendNavbarCellular";
import { FaPlus } from "react-icons/fa";
import bgWebRadios from "./radios1.jpg";
import iconsRadio64 from "./iconsRadio64.png";
import moreApplication from "./moreApplication.jpg";
import img4 from "./img4.jpeg";
import television94 from "./television94.png";
import contact from "./contact1.jpg";
import myProfile from "./myProfile.jpg";

  const dataBtnMoreEffectOpeningCircleMenu = [
    ["", "#3E84E6", img4, television94],
    ["", "#15AB88", moreApplication],
    ["", "#EB5089", bgWebRadios, iconsRadio64],
    ["Mon profil", "#AFD91A", myProfile],
    ["Contact", "#F27127", contact],
  ];


// COMMON UTILS
// import { Navbar } from "../../../../badMovies/movies/components/layouts";
// import NavbarResponsive from "../../../../badMovies/movies/components/layouts/navbar/NavbarResponsive";

//////////////////// STYLES ////////////////////
const RootNavbar = styled(Box)(({ theme }) => ({
  alignItems: "center",
  color: "white",
  display: "flex",
  flexWrap: "nowrap",
  height: " 100px",
  justifyContent: "space-between",
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: "999",
  [theme.breakpoints.down("sm")]: {},
}));

const styleLink = {
  color: "#FFF",
  cursor: "pointer",
  display: "flex",
  flexWrap: "nowrap",
  marginRight: "20px",
  marginLeft: "55px",
  textDecoration: "none",
  textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
};

export default function AppLayout({
  handleTokenAndId,
  token,
  id_Of_ConnectedUser,
}) {

  const [openBtnMoreCircleMenu, setOpenBtnMoreCircleMenu] = useState(false);

  function OpenBtnMoreCircleMenu() {
    setOpenBtnMoreCircleMenu((prevBool) => !prevBool);
  }

  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const [darkMode, setDarkMode] = useState(false);

  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies`;
        const { data } = await axios.get(url);
        setAllMovies(data.movies);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [allMovies]);

  return (
    <div
      style={{
        background: "transparent",
        height: `${matches && "100vh"}`,
      }}
    >
      <div
        style={{
          // background: "#000",
          // color: "#F00",
          paddingBottom: `${matches && "50px"}`,
          height: `${matches && "100vh"}`,
          overflow: `${matches && "scroll"}`,
          zIndex: "-150",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        quibusdam soluta eum enim sit deserunt totam, fuga laborum? Nobis
        placeat perferendis harum! Labore delectus quae quod quaerat fuga itaque
        culpa libero dolore unde ex optio aperiam eius dolorum mollitia repellat
        molestiae asperiores vitae accusamus, non debitis nihil ipsum
        dignissimos. Eius nobis accusamus ipsa, officiis libero itaque ratione.
        Beatae at unde est, illum repellendus ullam, corrupti sint quibusdam hic
        dicta eligendi quis assumenda eveniet cumque. Similique commodi culpa
        blanditiis laborum vitae, error qui voluptate, expedita voluptatum
        placeat adipisci deserunt! Sequi minima perspiciatis sapiente dolor
        eveniet? Cupiditate dignissimos illo fugiat harum architecto molestias
        praesentium tempora totam eum dolore dolor laborum pariatur vel autem
        similique neque cum, dolores officiis expedita nihil hic voluptate.
        Ducimus dicta eos minima atque labore? Veniam corrupti placeat nemo,
        nesciunt vitae nostrum eveniet ad aspernatur necessitatibus sequi
        impedit at qui quis corporis aperiam ex repellendus expedita, minus
        autem, id beatae eum cupiditate voluptatum. Asperiores illum,
        dignissimos similique quae dolore adipisci. Dolor sapiente voluptatem
        doloremque laboriosam optio? Culpa commodi est dolores harum sapiente
        rerum aliquid ad accusantium exercitationem labore, qui ipsum, vel
        tempora, quos magnam dolor repudiandae. Soluta modi dolorem ut vitae ab!
        Debitis illum alias nam sit voluptates odio, quia non deserunt? Iure,
        molestiae ipsam. Tenetur fugit mollitia voluptates sed assumenda sint in
        laborum reprehenderit earum consequuntur odit architecto quaerat aliquam
        molestiae quis quae recusandae deserunt deleniti exercitationem
        aspernatur totam, ut eius beatae similique. Id voluptatem impedit
        voluptatibus inventore odit perferendis quaerat aspernatur possimus
        expedita! Aliquam, maxime quod rerum qui nobis totam ducimus porro
        expedita nam harum beatae eligendi assumenda numquam quibusdam earum
        asperiores, eveniet ad possimus? Alias dolore itaque culpa quam
        praesentium sint rerum distinctio laudantium nesciunt. Maxime adipisci
        ex saepe aliquid voluptas voluptatibus ullam aliquam aperiam et iusto
        iure molestias enim voluptatem, beatae doloribus eos quos id quisquam
        ipsam veniam obcaecati modi suscipit animi assumenda. Reprehenderit,
        eligendi. Dolore, nihil! Non nesciunt error a veniam repellendus nisi
        laudantium numquam libero! Dicta est at necessitatibus, distinctio
        facere aspernatur labore tenetur, non blanditiis possimus animi dolore
        aut minima sit inventore esse. Illum eligendi quisquam corrupti hic quod
        quae excepturi repellat laborum earum dicta consectetur, nihil corporis
        molestias maiores perspiciatis laudantium dolorem consequuntur quidem
        voluptatum suscipit magni? Soluta necessitatibus unde accusantium
        tempora ipsum sit ut quasi beatae aut, praesentium sequi harum fugit nam
        magnam eaque architecto in eum eveniet sed repellat esse id? Laboriosam
        impedit sunt quibusdam in incidunt vel quos officia deleniti aspernatur
        iste, aperiam quod laudantium natus minus quasi ex iure quo! Fuga earum
        officiis placeat totam possimus ullam eaque dolores numquam laudantium
        maxime explicabo illum sed sit tempora sapiente reiciendis, ipsam
        ducimus odit a ab quisquam labore eos amet! Facere commodi rerum ut
        velit voluptate magnam numquam rem cumque obcaecati minus ullam eum
        incidunt doloremque, explicabo exercitationem? Nisi, sed saepe at
        debitis unde molestiae consequatur vitae perferendis cum aliquid
        provident consectetur a laboriosam nam expedita quia inventore sit modi
        voluptatem pariatur quisquam voluptatibus dolor, excepturi voluptatum.
        Error cupiditate voluptates facere, id sequi molestias pariatur aliquid.
        Incidunt, nemo laboriosam? Aspernatur culpa consequatur sint officia
        architecto ex, ipsam nulla suscipit autem beatae quisquam eos officiis
        dignissimos sed laborum provident eum numquam commodi blanditiis enim!
        Corporis quam iusto ipsum? Nisi iure blanditiis cupiditate voluptas
        consequatur soluta labore qui quod, suscipit animi iste quas magni
        eveniet enim est ut exercitationem facere iusto doloremque. Laborum nisi
        perspiciatis atque vitae, dolores, illum error corrupti est dolor modi
        esse? Molestias nulla temporibus perferendis sed vel, pariatur sit,
        recusandae delectus sunt non culpa hic rerum expedita libero! Totam
        consectetur illo dolorum delectus suscipit in magni ipsum vitae eos et.
        At facilis totam in ex molestiae quis. Ea delectus dicta obcaecati amet
        excepturi nobis cumque rem voluptatibus dolore. Quidem odio odit, esse
        accusantium, ullam eius iusto repellendus cumque numquam et corporis
        velit expedita! Veniam, maxime impedit assumenda harum asperiores
        recusandae a eaque sit laborum doloremque fugiat dignissimos corrupti
        ducimus. Officiis minus explicabo facere maiores! Inventore ipsum cumque
        eligendi deserunt distinctio vero sunt, reprehenderit blanditiis
        excepturi obcaecati dolorem voluptate quibusdam soluta a itaque et harum
        eos maxime. Rem fugit ab sunt voluptatem adipisci aperiam doloremque!
        Quasi, maiores iure iusto tenetur laudantium porro quas expedita numquam
        fuga dicta aut assumenda ipsam beatae ut similique repellat totam natus
        ex autem praesentium temporibus? Corporis cum officiis porro veniam
        quidem quis maxime nihil dolorum sequi numquam? Vero eum deleniti
        deserunt quos amet accusamus consequatur magnam reprehenderit itaque
        mollitia veniam, aliquam tenetur repellendus molestias est assumenda.
        Illo tenetur magni nemo vel distinctio odit laudantium, minus magnam
        laborum iusto. Possimus iure assumenda deserunt similique libero tempore
        expedita sint quo tempora officiis praesentium fugit esse suscipit quam
        veniam, eaque voluptate repellendus id. Adipisci dicta quis sit
        consequatur neque dignissimos asperiores quas accusantium quia id porro
        commodi rerum nemo ad numquam dolores aliquam cumque et autem, impedit
        eum sunt. Minus doloremque tempora tempore, numquam ea vitae quis
        dolores optio et nostrum alias mollitia cupiditate distinctio quam
        laborum officiis. Nulla adipisci nihil cum id sequi consequuntur
        obcaecati, distinctio fugit quidem explicabo repellendus a maxime
        eligendi alias eius recusandae sed possimus beatae ullam mollitia minima
        at commodi expedita. Atque, facere. Totam blanditiis voluptates,
        obcaecati eum eligendi asperiores, dignissimos vero iste minus
        repellendus animi a dolores magnam iure voluptate expedita! Velit libero
        repellat labore magnam officia commodi eaque ex! Quos velit sunt
        laboriosam autem, at, esse voluptatum sed facilis, totam error assumenda
        minima! Corporis beatae neque quae quibusdam, incidunt odit at facilis
        praesentium magni ea rem ut consectetur error earum nulla quidem
        necessitatibus ratione, sequi culpa nisi, minus excepturi? Sit at
        veritatis recusandae, sint voluptatum illo voluptates rem corporis
        expedita. Accusamus perspiciatis nulla dolorum temporibus voluptatem
        corrupti deserunt esse hic dolor aspernatur odit itaque quis repellendus
        molestiae dignissimos, velit, error corporis ea voluptatibus alias in
        doloribus omnis placeat. Ducimus alias optio ea sit recusandae, repellat
        minus, doloribus fuga, magni consectetur asperiores. Dolorem a eum
        provident optio. Ipsam, quisquam distinctio. Expedita, totam consectetur
        consequatur sapiente nam repellendus, quam aliquam accusantium corrupti
        facere similique illo, deleniti dignissimos ipsum. Architecto culpa
        natus ducimus perferendis repellendus aperiam dolores ea, ullam
        inventore? Accusantium doloribus iusto excepturi aliquam quis animi sed
        laudantium natus, quae exercitationem neque, cupiditate consequuntur.
        Quae dignissimos voluptates nesciunt alias, illo, voluptatum aspernatur,
        in commodi consequatur sunt nulla delectus iure. Labore, quo. Ab
        deleniti quis rerum blanditiis quod possimus id ducimus quidem facere,
        quibusdam magni dolorum nesciunt voluptatibus accusamus sapiente tempora
        asperiores quos totam quasi, eligendi incidunt iure alias ipsa
        laudantium! Odit et autem eaque quo vero. Laudantium quisquam
        exercitationem enim! Impedit cum tenetur deserunt, ipsa rem et quos.
        Soluta, deleniti! Reprehenderit quam, deserunt dolores unde
        exercitationem obcaecati architecto cupiditate quia, fuga, officia
        aliquid quasi rem. Cupiditate deserunt ipsa est aliquam aut soluta
        voluptates quidem eos. Earum modi sapiente necessitatibus rem explicabo.
        Quidem minus aperiam magni, quo eos eligendi dicta, impedit in autem ex
        dignissimos quisquam modi illum. Blanditiis similique corporis dolores.
        Nulla illum, tempora nostrum similique molestiae, enim facere accusamus
        eveniet amet odit ad quaerat corrupti nesciunt reprehenderit veniam
        quasi non! Atque placeat ad voluptates porro reiciendis molestias
        maiores incidunt, nam, itaque ut consectetur corrupti mollitia amet
        accusamus nemo pariatur? Laborum aspernatur voluptatibus numquam magnam
        suscipit sapiente aliquam ad, molestias eaque laboriosam similique
        corrupti obcaecati temporibus culpa et quae quis consequatur distinctio
        saepe corporis quas enim fugiat. Accusamus asperiores autem sint earum
        provident dicta ratione libero adipisci alias veniam laboriosam, commodi
        voluptates quos quae totam officiis rerum nisi eligendi labore corporis
        ipsum laborum. Maiores aperiam iure, dolorum alias ipsam maxime debitis!
        Earum hic veritatis, reiciendis, aperiam ab autem, repellat eaque unde
        provident voluptatem voluptas suscipit adipisci magni cum porro nulla
        placeat fugiat! Necessitatibus possimus quae aspernatur quo, dolorem cum
        corporis nesciunt quis incidunt ipsum dicta, reiciendis assumenda ex et
        aliquid illo fugit atque. Aliquid impedit fugiat accusantium iste, esse
        autem sequi quia aperiam. Officiis iure sed ipsum, nihil adipisci
        aliquid illo rem, culpa aliquam ab earum voluptatibus. Omnis itaque
        debitis quaerat perferendis molestias iure magnam incidunt odio
        praesentium, vero laudantium architecto enim, illo quibusdam nihil id
        doloribus eaque, error dolorum dignissimos esse nulla. Modi rerum
        laborum exercitationem rem aperiam sed. Nulla facere perspiciatis, culpa
        perferendis corrupti aliquid? Doloremque quasi, sequi voluptatem fugiat
        atque ex provident ipsa doloribus velit error minima perferendis porro
        rem quaerat perspiciatis odit repellat possimus, exercitationem,
        temporibus libero sit voluptatibus deleniti facilis et? Voluptate labore
        beatae impedit, excepturi ipsa nulla vel dolores doloribus odio sint ea
        vitae modi provident a quod exercitationem fugiat aspernatur ex
        consequuntur esse numquam cum? Odio rem porro ea optio iste nam,
        nesciunt illo repellat, perferendis voluptates repudiandae similique!
        Provident nostrum officia aliquid veniam quam dolores voluptates quos
        ipsa labore soluta, sapiente iste numquam fugit ratione! Veritatis quo
        repellat ullam aliquid rem officiis fuga perspiciatis laborum ad fugit
        numquam tenetur tempora quaerat eligendi deleniti ex est, optio fugiat a
        porro obcaecati quisquam! Fugit accusantium delectus dolorum aliquid
        modi fugiat! Quae tenetur, ex doloremque, perferendis similique illum
        voluptatem vitae, quos delectus autem aliquam rerum nam a nostrum
        architecto officiis in cum voluptate? Officiis optio ipsam minus fugit
        quisquam. Ipsam eveniet, id eos nulla quod architecto quasi sed earum ab
        quaerat, sint vitae quia incidunt exercitationem non cum, perspiciatis
        necessitatibus velit? Consequatur illo suscipit ab ipsam nesciunt optio
        placeat iste! Distinctio, ex vitae. Nisi molestias officiis perferendis
        quas sequi laudantium, molestiae odio facilis quia minus ratione,
        aliquam sed quisquam voluptas sit illo ab maiores ullam sapiente cum
        magni. Et suscipit nobis eaque? Veniam asperiores deserunt corrupti.
        Possimus voluptate at in rem saepe corporis nemo, laudantium labore ex
        nulla! Mollitia veniam quam id temporibus sequi consequatur quisquam
        distinctio tempora sit eius corrupti perspiciatis aperiam deserunt qui
        excepturi suscipit amet, quasi quibusdam optio animi! Ipsam assumenda,
        quisquam, itaque tempore soluta velit quidem modi quod magni numquam
        ipsa temporibus facilis quae, placeat iste voluptate. Rerum doloremque
        molestiae distinctio eveniet, delectus, sint quis laborum magnam sed
        ducimus odit porro labore aliquam, exercitationem illo! Quod eveniet
        quis corporis voluptatum, ipsum iusto animi nisi magni explicabo
        quibusdam, ad voluptatem temporibus, maxime culpa voluptates ratione
        perferendis velit at placeat dicta. Adipisci quod cum iure voluptate
        sunt, voluptas mollitia obcaecati! Laborum, aliquam possimus! Vitae
        natus dignissimos, voluptate recusandae error sed laudantium officia
        deleniti nam aliquam at aspernatur sequi non eos pariatur aut quisquam
        ea ut? Amet saepe cupiditate quos fugit natus reprehenderit, aperiam,
        consequatur at quod ratione officia alias expedita? Corrupti in numquam
        expedita. Blanditiis quo corrupti assumenda ut nam, ratione placeat
        voluptas cum sequi aliquam sit quis praesentium quod! Corrupti aliquam
        debitis fugit perspiciatis atque dolorem facere consequuntur in, modi,
        ex mollitia quisquam ea facilis illo impedit nostrum reiciendis officiis
        omnis quidem velit accusamus temporibus! Natus modi saepe velit corporis
        porro voluptates officia cumque deleniti animi accusamus libero
        similique, odio quis veniam reprehenderit reiciendis unde exercitationem
        nisi dolores ipsum! Laborum id illo ipsum magni nihil quam magnam illum
        soluta reiciendis ipsam repellat, quo, ipsa facere autem alias nisi
        aspernatur rem tenetur iste ullam fugiat quidem necessitatibus? Autem
        dolores nostrum, illo provident quaerat libero modi laboriosam quis
        possimus rem necessitatibus accusantium assumenda soluta reprehenderit
        suscipit, unde nulla doloremque sequi repellat harum laborum quod. Velit
        tempora rerum nobis dolores earum reprehenderit officia veniam
        perspiciatis perferendis. Illum dolorem eius reprehenderit cumque
        corrupti id soluta delectus quisquam voluptatibus dignissimos sed enim
        ad quo at nesciunt laboriosam, ullam aliquam harum consequatur deserunt
        ipsam nihil totam. Nihil velit eveniet sapiente, ipsam possimus
        asperiores exercitationem deleniti expedita magnam distinctio dolores
        aspernatur ut architecto. Nostrum impedit nihil possimus molestias
        delectus exercitationem facilis, doloremque dolores rerum illum
        perspiciatis? Modi sint eveniet, incidunt magni laudantium at quos sit,
        magnam adipisci possimus culpa reprehenderit dolores dolorum vel id
        alias obcaecati? Dolor eos illo veniam officiis quidem reiciendis modi
        quas? A, similique, debitis placeat iste quisquam nostrum tempora
        temporibus fuga aperiam nihil dolorem neque non. Quam vero minus
        architecto, tempora deserunt fugiat ut aperiam necessitatibus labore,
        temporibus beatae sint, aliquid libero repellat qui. Consequuntur,
        dolores possimus, explicabo dignissimos quis dolore non, fugit
        asperiores soluta ad delectus ipsum reiciendis quae nam eveniet
        architecto sapiente suscipit eum ipsam quia veritatis perspiciatis?
        Asperiores at natus alias quaerat, error eaque quisquam atque soluta
        deleniti repellat recusandae, illum amet autem adipisci omnis dolorem
        sapiente repudiandae. Laborum quidem molestiae possimus, atque illo
        fugit mollitia sequi praesentium delectus nesciunt eius consequatur
        temporibus quisquam tempora quod doloribus veniam inventore provident
        animi! Veritatis officiis eligendi minima esse cumque. Id ut porro,
        veniam dolore sequi corporis doloremque itaque quae autem tempore quidem
        doloribus ab non perspiciatis pariatur suscipit maiores laborum? Id amet
        eveniet ab quidem nostrum ullam, sapiente unde, aut laborum consectetur
        iure odit maxime deleniti? Unde laborum quisquam accusamus, expedita
        eum, iste quidem ab ut quis consequuntur corporis magni a iusto ea
        similique amet, fuga molestias quasi natus voluptatibus fugiat corrupti
        odio veritatis. Rem enim sed neque aspernatur dignissimos vero dolor
        maiores officia quas obcaecati cumque distinctio porro magni ipsa odio
        nemo dolores laudantium illum commodi earum accusamus, iure nostrum
        sapiente! Explicabo, distinctio ullam! Sequi ipsa at, eum quo obcaecati
        maxime ad tenetur? Soluta repudiandae eum culpa accusantium ad laborum
        reiciendis, nam nisi sint, totam ipsum consequatur quaerat perferendis
        architecto officiis suscipit similique voluptates. Provident maiores id
        iure! Nulla optio velit dicta hic odit error corrupti beatae id ex?
        Culpa explicabo quibusdam iusto similique. Autem veniam perferendis
        impedit. Quos omnis quaerat consequatur amet error blanditiis maxime
        autem, velit eligendi neque repellat ratione ad exercitationem tenetur
        quasi ab iste qui sapiente impedit, laborum veritatis, minus recusandae
        vero. Qui labore iste vero dolor doloribus ab saepe aliquam perspiciatis
        sit, tenetur, distinctio quae quaerat aperiam enim in, beatae esse
        voluptatem. Repudiandae eius iste sed dicta sequi, nostrum doloremque
        veritatis ipsa aperiam et rerum culpa hic, nam minus! Asperiores
        quisquam voluptas libero voluptatum praesentium dolorem quas impedit
        autem aliquid aspernatur, eligendi mollitia id exercitationem, laborum
        magnam labore alias eos doloremque repellat nam dolores vitae officia
        assumenda ullam. Fuga nobis reprehenderit culpa voluptate et error alias
        quidem delectus facilis modi aperiam dolorem, tenetur ullam!
        Voluptatibus, alias. Fuga ab natus debitis totam accusamus alias,
        sapiente delectus quos ipsam commodi nemo officiis praesentium
        voluptatem soluta repellendus ea explicabo exercitationem veniam
        asperiores voluptate? Quis, itaque saepe nulla maxime laborum obcaecati
        minima ut fugiat qui, totam necessitatibus maiores eligendi
        consequuntur, eaque cupiditate assumenda distinctio at enim repudiandae?
        Omnis ipsam quos enim tenetur necessitatibus nobis cum, quibusdam
        perferendis quis consectetur commodi? Corporis error fugit sunt numquam
        nobis iusto sit quo cumque aliquam velit inventore voluptatum, labore
        nihil ratione exercitationem porro! Ipsam expedita tempora, possimus
        nihil ratione alias minus voluptatibus rerum illo a ducimus perspiciatis
        aut aspernatur repellat illum, enim, eaque omnis facere doloremque
        sapiente magni. Iure, eius possimus dignissimos amet porro ea sapiente
        expedita unde autem. Magni dignissimos voluptate doloribus dicta ea vero
        velit. Fugiat unde veniam consequuntur saepe numquam dolorem in iure eos
        obcaecati totam aperiam ea nulla, animi quaerat provident ut fuga
        accusantium quam illum quia porro quod facilis. Expedita at quas
        blanditiis laboriosam, quisquam ab id velit possimus suscipit atque
        aperiam eos eius fuga aliquid ut officia iusto. Minus eveniet soluta
        asperiores consequuntur velit et eum blanditiis! Obcaecati eveniet
        veniam quae itaque expedita mollitia libero sit, hic, molestias modi
        velit maxime voluptatibus incidunt, et error ut praesentium nostrum quam
        quas doloribus. Eaque vel omnis, ut inventore aliquid tempora fugiat
        ipsa asperiores ratione, non assumenda. Fugit, doloremque. Dicta quidem
        iusto id laborum doloremque saepe veniam quibusdam repellat enim
        consectetur? Aut similique adipisci sunt voluptate quibusdam esse
        dolores ab maiores nostrum est eos vero molestiae, officia magnam iure
        consectetur fugit aperiam iusto expedita ex, delectus necessitatibus
        ullam. Commodi omnis illum eaque quo eos incidunt ea laborum explicabo
        iure voluptates earum quisquam exercitationem unde delectus fuga veniam
        suscipit amet alias, quasi et dolor. Soluta, sint, voluptas, vel sit
        consectetur neque molestias cumque veniam assumenda incidunt
        necessitatibus sequi. Quos ex accusantium voluptas voluptate et earum
        explicabo odio molestias fuga, aperiam maxime nostrum modi esse mollitia
        asperiores magni amet dolor fugit totam? Maxime perspiciatis inventore
        eos nam ducimus, necessitatibus tempore suscipit amet quasi, nemo illum.
        Culpa officiis quaerat a magni beatae debitis, cum alias quis
        exercitationem sint, accusamus vel praesentium quos illo similique
        accusantium? Maxime ratione praesentium suscipit vel earum quia
        doloremque molestias sint consequatur! Nesciunt, cumque laudantium quod
        dolore saepe quam veniam ipsam rem est incidunt explicabo quis dolorem
        maxime? Vitae quasi nesciunt officiis rerum eligendi laboriosam maiores
        sunt nam et cupiditate nemo sequi assumenda suscipit voluptate
        necessitatibus itaque, adipisci qui tenetur accusamus. Eum odit quidem
        iste hic. A iste doloribus cum, sunt recusandae minus voluptatem,
        aspernatur accusantium sed, illo dicta repellat aut mollitia fuga totam
        officia illum nobis. Libero quaerat molestiae, nobis reprehenderit
        sapiente eos magnam sunt accusamus dolores quas vel aut possimus
        repudiandae numquam vero natus illo. A nisi animi doloribus omnis
        consectetur eligendi officiis mollitia? Laudantium assumenda esse
        officia, iusto ducimus quo quod, aliquid non at adipisci numquam nulla
        pariatur, ullam nesciunt earum? Enim, vitae cumque temporibus itaque
        eaque molestias tempore dolor alias perferendis voluptatum nesciunt
        aliquid veritatis quibusdam veniam vel, expedita facere aperiam. Ab
        aspernatur possimus, fugiat vitae exercitationem quam iusto dolorem
        provident non laboriosam sit repellendus quibusdam ex ullam dicta?
        Maxime explicabo recusandae beatae amet ullam eaque aspernatur earum
        obcaecati optio labore quaerat necessitatibus esse, nam et. Id magni quo
        est reiciendis ipsam cumque perferendis quam optio aliquid consectetur
        delectus recusandae incidunt voluptatum, illo saepe, perspiciatis, nemo
        rem inventore architecto corrupti minima culpa fuga! Quae dolores
        ratione autem deserunt cupiditate ipsum itaque laboriosam ea. Sed
        asperiores corporis iure explicabo unde repellendus illum suscipit earum
        accusantium laudantium libero corrupti autem sequi, laborum nulla
        aliquam iste architecto ipsa. Vitae id earum doloremque cum dolor
        mollitia veritatis sequi error corporis delectus at, iure architecto?
        Porro consectetur excepturi aut temporibus enim amet debitis corrupti
        nam libero itaque? Saepe veniam quia doloremque temporibus quod aperiam,
        reprehenderit dolore voluptatem beatae quos corporis voluptas
        consectetur assumenda minus maiores magnam ipsa ipsum? Reprehenderit nam
        id doloribus veniam temporibus nostrum incidunt omnis voluptatum
        explicabo eaque fuga iste ipsa dolore amet, unde tempore sapiente soluta
        laudantium! Natus labore dolorem tempora omnis aperiam obcaecati ratione
        doloribus harum architecto facilis consectetur maxime voluptatum beatae
        excepturi quidem, temporibus repellendus impedit ut veritatis id earum
        asperiores esse ea. Non delectus, saepe aspernatur excepturi esse
        tempore quaerat! Laboriosam cupiditate maiores laborum quisquam optio
        consequatur obcaecati vero, neque animi error nihil nemo suscipit,
        impedit sed in!
      </div>
      {matches && (
        <div
          style={{
            bottom: 0,
            background: "",
            height: `${matches && "45vh"}`,
            overflow: "hidden",
            position: "absolute",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* *********************************************** */}
          {/* *********************************************** */}
          {/* *********************************************** */}
          {/* *********************************************** */}
          <div
            onClick={OpenBtnMoreCircleMenu}
            style={{ position: "absolute", zIndex: "55", height: "54px", width: "55px", top: "100px" }}
          >
            {openBtnMoreCircleMenu ? (
              <div
                className='closecircularMenu'
                style={{
                  alignItems: "center",
                  background: "#FFF",
                  border: "2px solid #F00",
                  display: "flex",
                  height: "100%",
                  justifyContent: "center",
                  borderRadius: "50%",
                  width: "100%",
                }}
              >
                <AiOutlineClose color='#F00' size={25} />
              </div>
            ) : (
              <div
                className='circularMenuIcon'
                style={{
                  alignItems: "center",
                  background: "#FFF",
                  border: "2px solid #F00",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  // height: "18px",
                  justifyContent: "center",
                  width: "100%",
                  zIndex: "9",
                }}
              >
                <FaPlus color='#F00' size={25} />
              </div>
            )}
            {dataBtnMoreEffectOpeningCircleMenu.map(
              ([page, color, bgRounded, icon], index) => {
                // rotate(${(360/5) => 360° / 5 because 5 items in array "dataBtnMoreEffectOpeningCircleMenu"
                const rotation =
                  (-223 / dataBtnMoreEffectOpeningCircleMenu.length) * index;
                const transitionDelay = index * 75;
                return (
                  <div
                    key={page}
                    className='menuItem'
                    style={{
                      alignItems: "center",
                      backgroundImage: `url("${bgRounded}")`,
                      backgroundSize: "cover",
                      opacity: "0.9",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      left: 0,
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      transition: "transform 500ms ease",
                      transitionDelay: `${
                        openBtnMoreCircleMenu ? transitionDelay : 0
                      } ms`,
                      transform: `rotate(${rotation}deg) translate(${
                        openBtnMoreCircleMenu ? 175 : 0
                      }%)`,
                      width: "100%",
                      zIndex: "-1",
                    }}
                  >
                    <span style={{ transform: `rotate(${-rotation}deg)` }}>
                      {icon && (
                        <img
                          alt='icon'
                          src={icon}
                          style={{
                            height: "35px",
                            width: "35px",
                          }}
                        />
                      )}
                    </span>
                  </div>
                );
              }
            )}
          </div>

          {/* *********************************************** */}
          {/* *********************************************** */}
          {/* *********************************************** */}
          {/* *********************************************** */}
          {/* <div
            style={{
              background: "",
              top: "15px",
              position: "relative",
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
              height: "25vh",
              // width: "100%",
            }}
          >
            
            <div
              style={{
                background: "#000",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid #F00",
                borderRadius: "50%",
                height: "35px",
                width: "35px",
                zIndex: "99",
              }}
            >
              <FaPlus color='grey' size={20} />
            </div>
          </div> */}
          <div
            style={{
              height: `${matches && "10vh"}`,
              background: "#000",
              border: "2px solid #F00",
              position: "absolute",
              color: "#FFF",
              bottom: 0,
              borderBottom: "none",
              borderTopLeftRadius: "35px",
              borderTopRightRadius: "35px",
              margin: "0 15px",
              width: "90%",
            }}
          >
            <ExtendNavbarCellular />
          </div>
        </div>
      )}
    </div>
  );

  // return (
  //   <>
  //     {matches}

  //     bbbbbbbbbbbbb
  //     <div
  //       ref={cursorRef}
  //       style={{
  //         minHeight: "100vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         flexDirection: "column",
  //       }}
  //     >
  //       {/* <Navbar
  //         id_Of_ConnectedUser={id_Of_ConnectedUser}
  //         token={token}
  //         handleTokenAndId={handleTokenAndId}
  //       /> */}
  //       <div
  //         style={{
  //           // position: "relative",
  //           // display: "flex",
  //           // justifyContent: "center",
  //           // flexDirection: "column",
  //           height: "80vh",
  //           width: "100vw",
  //           // marginTop: "70px",
  //         }}
  //       >
  //         <Outlet
  //           context={[
  //             allMovies,
  //             darkMode,
  //             id_Of_ConnectedUser,
  //             token,
  //             handleTokenAndId,
  //           ]}
  //         />
  //       </div>
  //       {/* <NavbarResponsive /> */}
  //     </div>
  //     {/* <NavbarResponsive /> */}
  //     {/* <div style={{    position: "absolute", bottom: "0", width: "100%", height:"100px"}}>
  //       <Typography color='error' variant='h2'>
  //         Footerr
  //       </Typography>
  //     </div> */}
  //   </>
  // );
}
