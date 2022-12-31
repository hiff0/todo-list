import { render, screen } from "@testing-library/react";
import Button from "./Button";

const onClick = jest.fn();

type TitleType = {
    add: 'Добавить',
    change: 'Изменить',
    delete: 'Удалить',
    edit: 'Редактировать',
    cancel: 'Отменить'
}

const title: TitleType = {
    add: 'Добавить',
    change: 'Изменить',
    delete: 'Удалить',
    edit: 'Редактировать',
    cancel: 'Отменить'
}

describe('Button component', () => {
    it('renders', () => {
        render(<Button title={title.add} />);
        expect(screen.getByText(title.add)).toBeInTheDocument();
    })


})