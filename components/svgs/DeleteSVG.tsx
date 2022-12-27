const DeleteSVG = (props : React.SVGProps<SVGSVGElement>) => {
    
    const { width = 35, height = 35, fill = 'black', ...rest } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 35 35" fill={fill} {...rest} xmlns="http://www.w3.org/2000/svg">
            <path d="M8.74996 27.7083C8.74996 29.3125 10.0625 30.625 11.6666 30.625H23.3333C24.9375 30.625 26.25 29.3125 26.25 27.7083V10.2083H8.74996V27.7083ZM27.7083 5.83333H22.6041L21.1458 4.375H13.8541L12.3958 5.83333H7.29163V8.75H27.7083V5.83333Z"/>
        </svg>
    )
}

export default DeleteSVG;