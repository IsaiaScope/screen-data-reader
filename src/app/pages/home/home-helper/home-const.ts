export interface LabelItem {
  label: string;
  value: string;
}

interface KeyType {
  [key: string]: { secTitle: string; props: LabelItem[] };
}

export interface LabelData extends KeyType {
  orientation: { secTitle: string; props: LabelItem[] };
  deviceInfo: { secTitle: string; props: LabelItem[] };
  viewPort: { secTitle: string; props: LabelItem[] };
  screenSize: { secTitle: string; props: LabelItem[] };
}

const L: LabelData = {
  orientation: {
    secTitle: 'Orientation',
    props: [
      { label: 'Screen Orientation', value: 'screenOrientation' },
      { label: 'Window Orientation', value: 'windowOrientation' },
    ],
  },
  deviceInfo: {
    secTitle: 'Device Info',
    props: [
      { label: 'User Agent', value: 'userAgent' },
      { label: 'is Safari', value: 'isSafari' },
    ],
  },
  viewPort: {
    secTitle: 'View Port',
    props: [
      { label: 'Width', value: 'innerWidth' },
      { label: 'Height', value: 'innerHeight' },
    ],
  },
  screenSize: {
    secTitle: 'Screen Size',
    props: [
      { label: 'Screen Width', value: 'screenWidth' },
      { label: 'Screen Height', value: 'screenHeight' },
      { label: 'Available Width', value: 'avWidth' },
      { label: 'Available Height', value: 'avHeight' },
    ],
  },
};

export const LABELS = Object.freeze(L);
