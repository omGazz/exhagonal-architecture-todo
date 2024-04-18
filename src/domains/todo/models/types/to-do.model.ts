
export type todoDTO = {
    id: number;
    title: string;
    description: string;
    status: 'done' | 'pending';
    tags: string[];
}

export type status = 'done' | 'pending';

export type tags = string[];