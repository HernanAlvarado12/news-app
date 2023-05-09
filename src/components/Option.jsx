import { Comment } from "./Comment"

const Option = ({ image, alt, number, title, text }) => {
    return (
        <article className="w-full h-full flex items-center gap-x-2">
            <img className="w-1/3 h-full max-w-[16rem] aspect-option lg:w-5/12" src={image} alt={alt} />
            <section className="flex-1">
                <h2 className="text-blue text-base font-extrabold">{number}</h2>        
                <Comment title={title} text={text} color="blue" />
            </section>
        </article>
    )
}

export { Option }