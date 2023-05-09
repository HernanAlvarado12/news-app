

const Button = ({ classList = '', text, color }) => {
    const variants = {
        white: 'text-white border-transparent bg-red hover:bg-blue-200'
    }
    return (
        <button className={`h-4 px-2 text-sm font-bold uppercase border outline-none ${variants[color]} ${classList}`}>
            {text}
        </button>
    )
}

export { Button }