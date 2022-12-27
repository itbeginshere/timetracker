import React from 'react';

const LogoSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const { width = 40, height = 40, fill = 'black', ...rest } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 90 90" fill={fill} {...rest} xmlns="http://www.w3.org/2000/svg">
            <path d="M60 52.5H65.625V63.075L74.775 68.3625L71.9625 73.2375L60 66.3375V52.5ZM63.75 45C58.7772 45 54.0081 46.9754 50.4917 50.4917C46.9754 54.008 45 58.7772 45 63.75C45 68.7228 46.9754 73.4919 50.4917 77.0082C54.0081 80.5246 58.7772 82.5 63.75 82.5C68.7228 82.5 73.4919 80.5246 77.0082 77.0082C80.5246 73.4919 82.5 68.7228 82.5 63.75C82.5 58.7772 80.5246 54.008 77.0082 50.4917C73.4919 46.9754 68.7228 45 63.75 45ZM63.75 37.5C70.7119 37.5 77.3887 40.2656 82.3115 45.1884C87.2344 50.1113 90 56.7881 90 63.75C90 70.7119 87.2344 77.3887 82.3115 82.3115C77.3887 87.2344 70.7119 90 63.75 90C53.2875 90 44.25 83.85 40.0125 75H3.75V63.75C3.75 53.775 23.7375 48.75 33.75 48.75C36 48.75 38.775 49.0125 41.7 49.5C44.0785 45.8153 47.3433 42.786 51.1955 40.6896C55.0477 38.5932 59.3643 37.4965 63.75 37.5ZM37.5 63.75C37.5 61.125 37.875 58.575 38.5875 56.25C37.0125 55.9875 35.3625 55.875 33.75 55.875C22.6125 55.875 10.875 61.35 10.875 63.75V67.875H37.8375C37.6119 66.5116 37.499 65.1319 37.5 63.75ZM33.75 15C37.7282 15 41.5436 16.5804 44.3566 19.3934C47.1696 22.2064 48.75 26.0218 48.75 30C48.75 33.9782 47.1696 37.7936 44.3566 40.6066C41.5436 43.4196 37.7282 45 33.75 45C29.7718 45 25.9564 43.4196 23.1434 40.6066C20.3304 37.7936 18.75 33.9782 18.75 30C18.75 26.0218 20.3304 22.2064 23.1434 19.3934C25.9564 16.5804 29.7718 15 33.75 15ZM33.75 22.125C31.6614 22.125 29.6584 22.9547 28.1815 24.4315C26.7047 25.9084 25.875 27.9114 25.875 30C25.875 32.0886 26.7047 34.0916 28.1815 35.5685C29.6584 37.0453 31.6614 37.875 33.75 37.875C35.8386 37.875 37.8416 37.0453 39.3185 35.5685C40.7953 34.0916 41.625 32.0886 41.625 30C41.625 27.9114 40.7953 25.9084 39.3185 24.4315C37.8416 22.9547 35.8386 22.125 33.75 22.125Z" fill="white"/>
        </svg>

    );
}

export default LogoSVG;