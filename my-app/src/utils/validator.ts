import { TaskType } from "../../types";

const titleValidator = (title: TaskType['title']) => {
    return title.length > 0;
}

export default titleValidator;