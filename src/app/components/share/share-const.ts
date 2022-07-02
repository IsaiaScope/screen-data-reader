export type icon = {
  icon: string;
  color: string;
  href: string;
  target: string;
};

const S = {
  email: {
    icon: 'email',
    color: 'white',
    href: 'mailto:mail@address.com?subject=SubjectHere&body=message%20goes%20here',
    target: '',
  },
  whatsapp: {
    icon: 'whatsapp',
    color: 'green',
    href: 'https://wa.me?text=carlo',
    target: '_blank',
  },
  copy: {
    icon: 'content_copy',
    color: 'white',
  },
};

export const SHARE = Object.freeze(S);
