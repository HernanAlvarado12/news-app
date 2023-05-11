import { Picture } from "./Picture"
import { Button } from "./Button"
import { Comment } from "./Comment"
import { Option } from "./Option"
import { comments, options } from "../helpers/data"
import mobile from "../assets/mobile.jpg"
import desktop from "../assets/desktop.jpg"

const images = ['../assets/pcs.jpg', '../assets//laptops.jpg', '../assets/gaming.jpg']


const Main = () => {
    return (
        <main className="w-90 mx-auto mt-4 mb-10 lg:w-85 lg:h-main lg:my-0 lg:grid lg:grid-cols-main lg:gap-x-2 lg:gap-y-3 lg:grid-rows-main">
            <section className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-2 lg:grid-rows-hero">
                <Picture classPicture="col-span-2 lg:h-full" classImage="sm:w-full sm:max-h-[43rem] sm:mx-auto ds:max-w-full lg:h-full" mobile={mobile} desktop={desktop} alt="hero image" breakpoint="900px"/>
                <h1 className="mt-1 mb-2 text-blue-200 text-xl font-extrabold sm:m-0 sm:text-2xl ds:text-3xl ds:leading-none lg:self-start">The Bright Future of Web 3.0?</h1>
                <div className="lg:self-start">
                    <p className="text-gray text-sm font-normal">
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                        But is it really fulfilling its promise?
                    </p>
                    <Button classList="mt-2" text="read more" color="white" />                
                </div>
            </section>
            <section className="w-full mt-6 mb-8 p-2 pb-0 bg-blue-200 lg:h-full lg:m-0 lg:py-4 lg:pb-2">
                    <h2 className="text-orange text-base font-extrabold">New</h2>
                    {comments.map((item, key) => <Comment key={key} classList="py-2 first-of-type:border-b first-of-type:border-blue-100 odd:border-b odd:border-blue-100" title={item.title} text={item.text} color="white" />)}
            </section>
            <section className="grid items-center gap-y-3 sm:grid-cols-option sm:grid-rows-optionsm sm:gap-3 ds:grid-rows-optionds ds:gap-3.5 lg:col-span-2 lg:grid-cols-3 lg:grid-rows-optionlg">
                {options.map((item, key) => <Option key={key} image={new URL(images[key], import.meta.url).href} alt={item.alt} number={`0${key}`} title={item.title} text={item.text} />)}
            </section>
        </main>
    )
}

export { Main }