import { render, screen } from '@testing-library/react';
import TaskInput from './TaskInput';

describe('TaskInput component', () => {
    it('renders', () => {
        render(<TaskInput mode='Добавить' />);
        expect(screen.getByDisplayValue('')).toBeInTheDocument();
    });

    it('renders with edit mode', () => {
        render(<TaskInput mode='Изменить' />);
        expect(screen.getByText('Отменить')).toBeInTheDocument();
        expect(screen.getByText('Изменить')).toBeInTheDocument();
        expect(screen.queryByText('Добавить')).toBeNull();
    })

    it('renders with add mode', () => {
        render(<TaskInput mode='Добавить' />);
        expect(screen.getByText('Добавить')).toBeInTheDocument();
        expect(screen.queryByText('Изменить')).toBeNull();
    })

    it('snapshot with edit mode', () => {
        const taskInput = render(<TaskInput mode='Изменить' />);
        expect(taskInput).toMatchSnapshot();
    })

    it('snapshot with add mode', () => {
        const taskInput = render(<TaskInput mode='Добавить' />);
        expect(taskInput).toMatchSnapshot();
    })
})