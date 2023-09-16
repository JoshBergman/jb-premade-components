interface IButton1Props {
    children: React.ReactNode;
    onClick: () => void;
}

const Button1 = ({children, onClick}: IButton1Props) => {

    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
};

export default Button1;