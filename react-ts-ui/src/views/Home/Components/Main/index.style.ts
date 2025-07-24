import { CSSProperties } from "react";


export const MainFlexStyle: CSSProperties = {
    flexWrap: 'wrap',
    alignItems: 'center',
    // background: "red",
    position: 'relative',
    left: '32px',
    height: '100vh'
}

export const MainFlexItemStyle: CSSProperties = {
    flex: 3,
    fontSize: '80px',
    fontWeight: 700,
    lineHeight: '0',
    color: '#fff',
}

export const MainButtonStyle: CSSProperties = {
    width: '200px',
    height: '60px',
    fontSize: '20px',
    fontWeight: 500,
    borderRadius: '6px',
    marginRight: '16px'
}

export const MainIconStyle: CSSProperties ={
    position: 'absolute',
    bottom: '100px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '16px',
    color: '#05D9E8',
    cursor: 'pointer'
}