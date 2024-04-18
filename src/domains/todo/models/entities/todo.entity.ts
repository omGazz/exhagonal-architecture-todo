
export class ToDo {
    constructor(public id: number, public title: string, public description: string, public status: string, public tags: string[]) {

    }

    public toDto<T>(): T{
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            status: this.status,
            tags: this.tags
        } as T;
    }
}