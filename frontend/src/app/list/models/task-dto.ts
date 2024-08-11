export interface TaskDTO {
    id: number;
    name: string;
    description: string | null;
    priority: PriorityTask;
    isCompleted: boolean | null;
}

type PriorityTask = 'LOW' | 'MEDIUM' | 'HIGH' | undefined | null;