
const Item = ({ text, color }) => {
    const variants = {
        blue: 'text-blue-200 font-bold ds:text-blue-100 ds:font-normal hover:text-red',
    }
    return <li className={`text-sm cursor-pointer ${variants[color]}`}>{text}</li>
}

export { Item }