import { CSSProperties } from 'react';

export const HomeLayoutStyle: CSSProperties = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(96% - 8px)',
  maxWidth: 'calc(96% - 8px)',
  background: 'transparent',
};
export const HomeHeaderStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    position: "fixed",
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(96% - 8px)',
    borderBottom: '1px solid rgb(5 217 232 / 0.3)',
    marginBottom: '8px',
    zIndex: 99
};
export const HomeTypographyTextStyle: CSSProperties = {
    fontSize: '32px',
    fontWeight: 700
}

export const HomeMunuStyle: CSSProperties = {
    color: 'rgb(243 244 246)',
    fontSize: '23px',
    fontWeight: 500,
    background: 'transparent',
}

export const HomeContentStyle: CSSProperties = {};
export const HomeFooteStyle: CSSProperties = {
    backgroundColor: 'transparent',
};
