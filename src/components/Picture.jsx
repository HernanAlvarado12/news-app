
const Picture = ({ classList = '', mobile, desktop, alt = '', breakpoint }) => {
    return (
        <picture className={classList}>
            <source media ={`(min-width: ${breakpoint})`} srcSet={desktop} />
            <img src={mobile} alt={alt} />
        </picture>
    )
}


export { Picture }