import LoadingSVG from '../svgs/LoadingSVG'

const LoadingIndicator = () => {
    return (
        <div className={'absolute flex flex-col items-center justify-center h-full w-full top-0 left-0'}>
            <div className={'absolute h-full w-full top-0 left-0 bg-white opacity-60 rounded-xl'}/>
            <LoadingSVG className={'animate-spin fill-white'} stroke={'#01B7F0'}/>
        </div>
    );
}

export default LoadingIndicator;