import ReactDOM from 'react-dom/client';
import TaskListDisplay from './components/TaskList';
import {Task} from "./types.ts";
import {FC} from "react";

type Props = {
    tasks: Task[];
    onToggleComplete: (id: number) => void;
    onDeleteTask: (id: number) => void;
    containerId: string;
}

const TaskListApp: FC<Props> = ({ tasks, onToggleComplete, onDeleteTask, containerId }) => {
    const container = document.getElementById(containerId);
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(
            <TaskListDisplay
                tasks={tasks}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
            />
        );
    }
    return null;
};

export default TaskListApp;