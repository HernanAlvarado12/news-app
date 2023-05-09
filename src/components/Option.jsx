import { Comment } from "./Comment"

const Option = ({ image, alt, number, title, text }) => {
    return (
        <article className="flex items-center gap-x-2">
            <img className="w-1/3 h-full" src={image} alt={alt} />
            <section className="flex-1">
                <h2 className="text-blue text-base font-extrabold">{number}</h2>
                <h3 className="text-blue-200 text-md font-bold">{title}</h3>
                <p className="text-blue-100 text-sm">{text}</p>
            </section>
        </article>
    )
}

export { Option }