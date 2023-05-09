
const Comment = ({ classList = '', title, text }) => {
    const variantsTitle = {
        blue: 'text-blue-200 text-md',
        white: 'text-white text-base',
    }
    const variantsText = {
        gray: 'text-gray text-sm',
    }
    return (
        <article className={classList}>
            <h2 className="text-white text-md font-bold">{title}</h2>
            <p className="text-gray-100 text-sm font-normal">{text}</p>
        </article>
    )
}

export { Comment }