export interface TaskDTO {
    id: number;
    name: string;
    description?: string;
    priority?: PriorityTask;
    isCompleted?: boolean;
}

type PriorityTask = 'LOW' | 'MEDIUM' | 'HIGH';