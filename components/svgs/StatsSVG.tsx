import React from 'react';

const StatsSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const { width = 35, height = 35, fill = 'black', ...rest } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 35 35" fill={fill} {...rest} xmlns="http://www.w3.org/2000/svg">
            <path d="M30.625 30.625H4.375V27.7083H30.625V30.625ZM11.6667 4.375H5.83333V24.7917H11.6667V4.375ZM20.4167 8.75H14.5833V24.7917H20.4167V8.75ZM29.1667 14.5833H23.3333V24.7917H29.1667V14.5833Z" />
        </svg>
    );
}

export default StatsSVG;