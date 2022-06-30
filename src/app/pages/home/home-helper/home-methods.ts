const noResult = 'value cannot be defined';

export const getWindowData = (dataType: string) => {
  switch (dataType) {
    case 'userAgent':
      return getUserAgent();
    case 'screenOrientation':
      return getScreenOrientation();
    case 'windowOrientation':
      return getWindowOrientation();
    case 'isSafari':
      return isSafari();
    case 'innerWidth':
      return getInnerWidth();
    case 'innerHeight':
      return getInnerHeight();
    case 'screenWidth':
      return getScreenWidth();
    case 'screenHeight':
      return getScreenHeight();
    case 'avWidth':
      return getAvWidth();
    case 'avHeight':
      return getAvHeight();
    default:
      return noResult;
  }
};

const getUserAgent = () => navigator.userAgent;

const getInnerWidth = () => window.innerWidth.toString();
const getInnerHeight = () => window.innerHeight.toString();
const getScreenWidth = () => screen.width.toString();
const getScreenHeight = () => screen.height.toString();
const getAvWidth = () => screen.availWidth.toString();
const getAvHeight = () => screen.availHeight.toString();

const isSafari = () =>
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent).toString();

// deprecated
const getWindowOrientation = () => window.orientation || noResult;
const getScreenOrientation = () => {
  return (
    (screen.orientation || {}).type ||
    // @ts-ignore
    screen.mozOrientation ||
    // @ts-ignore
    screen.msOrientation
  );
};
