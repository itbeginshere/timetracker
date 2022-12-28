import React from 'react';

const LoadingSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const { width = 48, height = 48, stroke = 'black', ...rest } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 48 48" {...rest} xmlns="http://www.w3.org/2000/svg">
            <path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke={stroke} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export default LoadingSVG;