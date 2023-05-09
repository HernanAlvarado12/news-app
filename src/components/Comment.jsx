
const Comment = ({ classList = '', title, text, color }) => {
    const variantsTitle = {
        blue: 'text-blue-200 text-md hover:text-red',
        white: 'text-white text-base lg:text-md hover:text-orange',
    }
    const variantsText = {
        blue: 'text-blue-100 text-sm lg:text-xs',
        white: 'text-gray-100 text-sm',
    }
    return (
        <article className={`cursor-pointer ${classList}`}>
            <h2 className={`font-bold ${variantsTitle[color]}`}>{title}</h2>
            <p className={`font-normal ${variantsText[color]}`}>{text}</p>
        </article>
    )
}

export { Comment }