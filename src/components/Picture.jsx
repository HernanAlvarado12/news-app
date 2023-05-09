
const Picture = ({ classPicture, classImage = '', mobile, desktop, alt = '', breakpoint }) => {
    return (
        <picture className={classPicture}>
            <source media ={`(min-width: ${breakpoint})`} srcSet={desktop} />
            <img className={classImage} src={mobile} alt={alt} />
        </picture>
    )
}


export { Picture }