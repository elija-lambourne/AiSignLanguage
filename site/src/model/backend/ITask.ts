export interface ITask {
    taskName: string;
    taskId: string;
    levelId: string;
    videoPath: string;
    words: string;
    tfSolution: string;
    created_at: Date;
    updated_at: Date;
}