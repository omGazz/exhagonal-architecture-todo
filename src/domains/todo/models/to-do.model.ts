// Ye I know, I'm using type for now
export type toDo = {
    id: number;
    title: string;
    description: string;
    status: 'done' | 'pending';
    tags: string[];
}

export type toDoList = toDo[];

export type status = 'done' | 'pending';

export type tags = string[];