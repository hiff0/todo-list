import { render, screen } from "@testing-library/react";
import Button from ".";

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
    it('renders whit add title and with onClick function', () => {
        render(<Button title={title.add} onClick={onClick} />);
        expect(screen.getByText(title.add)).toBeInTheDocument();
    })

    it('render with change title and without onClick function', () => {
        render(<Button title={title.change} />);
        expect(screen.getByText(title.change)).toBeInTheDocument();
    })

    it('renders with delete title', () => {
        render(<Button title={title.delete} onClick={onClick} />);
        expect(screen.getByText(title.delete)).toBeInTheDocument();
    })

    it('renders with edit title', () => {
        render(<Button title={title.edit} onClick={onClick} />);
        expect(screen.getByText(title.edit)).toBeInTheDocument();
    })

    it('renders with cancel title', () => {
        render(<Button title={title.cancel} onClick={onClick} />);
        expect(screen.getByText(title.cancel)).toBeInTheDocument();
    })
})