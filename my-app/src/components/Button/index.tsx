import React from "react";
import styles from './Button.module.css';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    title: 'Добавить' | 'Удалить' | 'Редактировать' | 'Изменить' | 'Отменить',
}

function Button({ title, onClick }: ButtonProps) {

    return (
        <button onClick={onClick} className={
            title === 'Удалить' ? `${styles.button} ${styles.button__delete}` :
                title === 'Добавить' ? `${styles.button} ${styles.button__add}` :
                    title === 'Отменить' ? `${styles.button} ${styles.button__cancel}` :
                        `${styles.button} ${styles.button__edit}`
        }>{title}</button>
    )
}

export default Button;