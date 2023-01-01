import React from 'react';

const MinusSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const { width = 35, height = 35, fill = 'black', ...rest } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} {...rest} xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12.998H5V10.998H19V12.998Z" />
        </svg>
    );
}

export default MinusSVG;