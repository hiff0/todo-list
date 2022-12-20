import React, { useContext } from "react";

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    title: 'Добавить' | 'Удалить' | 'Редактировать',
}

function Button({ id, title, onClick }: ButtonProps) {

    const buttonStyle = {
        margin: title === 'Удалить' ? '10px' : '0',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        height: '30px',
        background: title === 'Удалить' ? '#98faef' : '#656af7'
    }



    return (
        <button onClick={onClick} style={buttonStyle}>{title}</button>
    )
}

export default Button;