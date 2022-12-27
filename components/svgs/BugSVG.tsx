import React from 'react';

const BugSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const { width = 35, height = 35, fill = 'black', ...rest } = props;

    return (
        <svg  width={width} height={height} viewBox="0 0 35 35" fill={fill} {...rest} xmlns="http://www.w3.org/2000/svg">
            <path d="M29.1666 11.6667H25.0687C24.4109 10.5259 23.5035 9.54869 22.4145 8.80833L24.7916 6.43125L22.7353 4.375L19.5708 7.53958C18.8999 7.37917 18.2145 7.29167 17.4999 7.29167C16.7853 7.29167 16.0999 7.37917 15.4437 7.53958L12.2645 4.375L10.2083 6.43125L12.5708 8.80833C11.4916 9.55208 10.5874 10.5292 9.93117 11.6667H5.83325V14.5833H8.88117C8.80825 15.0646 8.74992 15.5458 8.74992 16.0417V17.5H5.83325V20.4167H8.74992V21.875C8.74992 22.3708 8.80825 22.8521 8.88117 23.3333H5.83325V26.25H9.93117C11.4478 28.8604 14.2624 30.625 17.4999 30.625C20.7374 30.625 23.552 28.8604 25.0687 26.25H29.1666V23.3333H26.1187C26.1916 22.8521 26.2499 22.3708 26.2499 21.875V20.4167H29.1666V17.5H26.2499V16.0417C26.2499 15.5458 26.1916 15.0646 26.1187 14.5833H29.1666V11.6667ZM20.4166 23.3333H14.5833V20.4167H20.4166V23.3333ZM20.4166 17.5H14.5833V14.5833H20.4166V17.5Z"/>
        </svg>
    );
}

export default BugSVG;