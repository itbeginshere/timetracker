const CrossSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const { width = 14, height = 14, stroke = 'white', ...rest} = props;

    return (
        <svg width={width} height={height} viewBox="0 0 24 24"  {...rest} xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L4 4M20 4L4 20" stroke={stroke} stroke-width="3" stroke-linecap="round"/>
        </svg>
    );
}

export default CrossSVG;