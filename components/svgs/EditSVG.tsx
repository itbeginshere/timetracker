import React from 'react';

const EditSVG = (props : React.SVGProps<SVGSVGElement>) => {
    
    const { width = 35, height = 35, fill = 'black', ...rest } = props;
    
    return (
        <svg width={width} height={height} viewBox="0 0 35 35" {...rest} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M28.1458 13.0156L21.9479 6.89058L23.9896 4.84892C24.5486 4.28989 25.2355 4.01038 26.0502 4.01038C26.864 4.01038 27.5503 4.28989 28.1094 4.84892L30.151 6.89058C30.7101 7.44961 31.0017 8.12433 31.026 8.91475C31.0503 9.7042 30.783 10.3784 30.224 10.9375L28.1458 13.0156ZM26.0312 15.1666L10.5729 30.625H4.375V24.427L19.8333 8.96871L26.0312 15.1666Z"/>
        </svg>
    )
}

export default EditSVG;