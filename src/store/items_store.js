import Icon from "./../assets/banquet.svg";
import IconSauna from "./../assets/services-icons/sauna_icon.png";
import IconRest from "./../assets/services-icons/restaurant_icon.png";
import IconBanq from "./../assets/services-icons/banquet_icon 1.svg";

import pool1 from "./../assets/pool/116829567_146653967056012_2365360127273995028_n.jpg";
import pool2 from "./../assets/pool/1.jpg";

import sauna1 from "./../assets/sauna/80343929_102307024611809_351360401726289437_n.jpg";
import sauna2 from "./../assets/sauna/2.jpg";
import sauna3 from "./../assets/sauna/83943680_2557975697859315_7980051811504605919_n.jpg";
import sauna4 from "../assets/sauna/IMG_0916.jpg";

import rest1 from "../assets/restaurant/362300455_18189772717272962_3394809017092620652_n.jpg";
import rest2 from "../assets/restaurant/362919600_18189772735272962_1416420011690700542_n.jpg";
import rest3 from "../assets/restaurant/IMG_0909.jpg";
import benket1 from "../assets/banquet/106349919_315843799806255_9088028334896691131_n.jpg";

// hotels
import hotelIcon1 from "../assets/hotel-icons/two-person_bed.png";
import hotelIconRoom from "../assets/hotel-icons/room_icon.png";
import hotelIconBath from "../assets/hotel-icons/bathroom_icon.png";
import hotelIconShower from "../assets/hotel-icons/shower_icon.png";

import nomer1 from "../assets/2-size-room-1/IMG_0953.jpg";
import nomer1_1 from "../assets/2-size-room-1/test1.jpg";

import nomer2 from "../assets/2-size-room-2/IMG_0946.jpg";
import nomer2_1 from "../assets/2-size-room-2/Untitled-3.jpg";
import nomer2_2 from "../assets/2-size-room-2/IMG_0943.jpg";

import nomer3 from "../assets/4-size-room/IMG_0930.jpg";
import nomer3_1 from "../assets/4-size-room/Untitled-1.jpg";
import nomer3_2 from "../assets/4-size-room/Untitled-2.jpg";

export const pool = {
  title: "Басейн",
  icon: Icon,
  info: "У нас є великий басейн, ідеальний для водних розваг та плавання. Він оснащений комфортними лежаками, і ви можете насолоджуватися відкритим повітрям, водними процедурами та розвагами.",
  info_add: "Примітка: Лежаки в загальній зоні не бронюються.",
  images: [pool1, pool2],
  width: "35%",
  reversed: false,
};
export const sauna = {
  title: "Сауна/чан",
  icon: IconSauna,
  info: "Наша сауна і гарячий чан - це місце для повного розслаблення і відновлення. Ви можете вибрати сауну для сухого тепла або гарячий чан для релаксації у воді, обидві опції допоможуть вам зняти стрес і втому.",
  images: [sauna1, sauna2, sauna3, sauna4],
  width: "24%",
  reversed: true,
};
export const rest = {
  title: "Ресторан/Бенкетний зал",
  icon: IconRest,
  info: "Наш ресторан пропонує розкішну кухню з різноманітними стравами як у приміщенні, так і на відкритому повітрі.",
  info_add:
    "А для урочистих подій, таких як весілля, корпоративи або дні народження, ми маємо ідеальний бенкетний зал з широким спектром послуг та зручностей.",
  images: [rest1, rest2, rest3],
  width: "25%",
  reversed: false,
};
export const shatro = {
  title: "Шатро",
  icon: IconBanq,
  info: "Наші шатри - це ідеальний вибір для тих, хто шукає приватну та затишну атмосферу. Шатро оснащений зручними меблями та м'якими подушками.",
  info_add:
    "Ви можете відсвяткувати особисті події, провести романтичний вечір або просто розслабитися в цьому комфортабельному просторі.",
  images: [benket1],
  width: "35%",
  reversed: true,
};
export const services = [pool, sauna, rest, shatro];

// hotel rooms
export const twoBed1 = {
  title: "Двомісний номер 1",
  icon1: {
    img: hotelIcon1,
    title: "2 гостей",
  },
  icon2: {
    img: hotelIconRoom,
    title: "1 кімната",
  },
  icon3: {
    img: hotelIconBath,
    title: "Ванна",
  },
  info: "Просторий номер на двох осіб, оснащений кондиціонером для вашого комфорту та має надзвичайно зручне ліжко. Вас чекає відчуття розкішності та релаксу завдяки ванній, а дизайн кімнати в сірих тонах додасть атмосферу спокою та вишуканості до вашого перебування.",
  images: [nomer1, nomer1_1],
  width: "50%",
};
export const twoBed2 = {
  title: "Двомісний номер 2",
  icon1: {
    img: hotelIcon1,
    title: "2 гостей",
  },
  icon2: {
    img: hotelIconRoom,
    title: "1 кімната",
  },
  icon3: {
    img: hotelIconShower,
    title: "Душ",
  },
  info: " Номер на двох осіб, оснащений кондиціонером для комфорту. Кімната прикрашена в приємних розових відтінках, створюючи теплу та затишну атмосферу. Цей номер створений для вашого спокійного та комфортного відпочинку",
  images: [nomer2_1, nomer2, nomer2_2],
  width: "50%",
};
export const fourBed = {
  title: "Чотирьохмісний",
  icon1: {
    img: hotelIcon1,
    title: "2 гостей",
  },
  icon2: {
    img: hotelIconRoom,
    title: "1 кімната",
  },
  icon3: {
    img: hotelIconBath,
    title: "Ванна",
  },
  icon4: {
    img: hotelIcon1,
    title: "2 гостей",
  },
  info: "Номер на чотирьох осіб, оснащений кондиціонерм та об'єднує в собі двоспальне ліжко в одній кімнаті та два односпальних ліжка в іншій. Кімната створює теплу та затишну атмосферу. Для вашого зручного перебування є ванна кімната та телевізор.",
  images: [nomer3, nomer3_1, nomer3_2],
  width: "50%",
};
export const hotels = [twoBed1, twoBed2, fourBed];
