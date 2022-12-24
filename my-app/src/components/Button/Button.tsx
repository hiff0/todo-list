import React from "react";

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    title: 'Добавить' | 'Удалить' | 'Редактировать' | 'Изменить',
}

function Button({ title, onClick }: ButtonProps) {

    const buttonStyle = {
        margin: title === 'Удалить' ? '10px' : '0',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        height: '30px',
        background: title === 'Удалить' ? '#98faef' : title === 'Добавить' ? '#656af7' : '#d67e7e'
    }


    return (
        <button onClick={onClick} style={buttonStyle}>{title}</button>
    )
}

export default Button;