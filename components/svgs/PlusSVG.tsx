import React from 'react';

const PlusSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const { width = 35, height = 35, fill = 'black', ...rest } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} {...rest} xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" />
        </svg>
    );
}

export default PlusSVG;

 