

const Button = ({ classList = '', text, color }) => {
    const variants = {
        white: 'text-white border-transparent bg-red'
    }
    return (
        <button className={`h-4 px-2 text-sm font-bold uppercase border ${variants[color]} ${classList}`}>
            {text}
        </button>
    )
}

export { Button }