import { TaskType } from "./types";

const titleValidator = (title: TaskType['title']) => {
    if (title.length <= 0) {
        return false;
    }

    return true;
}

export default titleValidator;