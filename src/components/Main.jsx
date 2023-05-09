import { Picture } from "./Picture"
import { Button } from "./Button"
import { Comment } from "./Comment"
import { Option } from "./Option"
import { comments, options } from "../helpers/data"
import mobile from "../assets/mobile.jpg"
import desktop from "../assets/desktop.jpg"


const Main = () => {
    return (
        <main className="w-90 mx-auto mt-4 mb-10">
            <section>
                <Picture mobile={mobile} desktop={desktop} alt="hero image" breakpoint="900px"/>
                <h1 className="mt-1 mb-2 text-blue-200 text-xl font-extrabold">The Bright Future of Web 3.0?</h1>
                <p className="text-gray text-sm font-normal">
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?
                </p>
                <Button classList="mt-2" text="read more" color="white" />
                <section className="w-full mt-6 mb-8 p-2 pb-0 bg-blue-200">
                    <h2 className="text-yellow-300 text-base font-extrabold">New</h2>
                    {comments.map((item, key) => <Comment key={key} classList="py-2 first-of-type:border-b first-of-type:border-blue-100 odd:border-b odd:border-blue-100" title={item.title} text={item.text} />)}
                </section>
                <section className="flex items-center flex-col gap-y-3">
                    {options.map((item, key) => <Option key={key} image={item.image} alt={item.alt} number={`0${key}`} title={item.title} text={item.text} />)}
                </section>
            </section>
        </main>
    )
}

export { Main }