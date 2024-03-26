import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#2A4D50",
  secondary: "#B1CCCC",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e814d",
  green: " #00C135",
  lightWhite: "#FAFAFC",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const IMAGES_NETWORK = {
  homeImageNetwork1:
    "https://resource.rentcafe.com/image/upload/x_0,y_882,w_6960,h_3758,c_crop/q_auto,f_auto,c_lfill,w_1920,ar_1.9753086419753088,g_auto/s3/3/1029306/couchwithtrinkets.jpg",
  homeImageNetwork2:
    "https://www.barretts.co.uk/wp-content/uploads/2023/04/spacejoy-YnLJ3rM4VtI-unsplash-2160x1215.jpg",
  homeImageNetwork3:
    "https://i.etsystatic.com/42742601/r/il/2862b4/4823372672/il_1588xN.4823372672_th5k.jpg",
};

export { COLORS, SIZES, SHADOWS, IMAGES_NETWORK };
