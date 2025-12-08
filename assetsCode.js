const assets =
  window.ENGINE_ASSETS &&
  Array.isArray(window.ENGINE_ASSETS) &&
  window.ENGINE_ASSETS.length
    ? window.ENGINE_ASSETS
    : [
        "assets/tile_basic.png", // 1
        "assets/0_Exits.png", // 2
        "assets/1_Exits.png", // 3
        "assets/2_Exits.png", // 4
        "assets/3_Exits.png", // 5
        "assets/4_Exits.png", // 6
        "assets/close_door.png", // 7
        "assets/open_door.png", // 8
        "assets/poster1.png", // 9
        "assets/poster1_trans.png", // 10
        "assets/poster2.png", // 11
        "assets/poster2_trans.png", // 12
        "assets/poster3.png", // 13
        "assets/poster3_trans.png", // 14
        "assets/poster4.png", // 15
        "assets/poster4_trans.png", // 16
        "assets/poster5.png", // 17
        "assets/poster5_trans.png", // 18
        "assets/left_stairs.png", // 19
        "assets/center_stairs.png", // 20
        "assets/right_stairs.png", // 21
        "assets/dm.png", // 22
      ];

const BASIC_TILE = 1;
const EXIT_SIGN_0 = 2;
const EXIT_SIGN_1 = 3;
const EXIT_SIGN_2 = 4;
const EXIT_SIGN_3 = 5;
const EXIT_SIGN_4 = 6;
const DOOR_CLOSED = 7;
const DOOR_OPEN = 8;
const POSTER_1 = 9;
const POSTER_1_TRANS = 10;
const POSTER_2 = 11;
const POSTER_2_TRANS = 12;
const POSTER_3 = 13;
const POSTER_3_TRANS = 14;
const POSTER_4 = 15;
const POSTER_4_TRANS = 16;
const POSTER_5 = 17;
const POSTER_5_TRANS = 18;
const LEFT_STAIRS = 19;
const CENTER_STAIRS = 20;
const RIGHT_STAIRS = 21;
const DM_LOGO = 22;
