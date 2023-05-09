
const Item = ({ text, color }) => {
    const variants = {
        blue: 'text-blue-200',
    }
    return <li className={`text-sm font-bold cursor-pointer ${variants[color]}`}>{text}</li>
}

export { Item }