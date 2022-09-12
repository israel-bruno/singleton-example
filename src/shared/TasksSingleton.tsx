import Task from "./interfaces/ITask";

export default class TasksSingleton {
  private static instance: TasksSingleton;
  public tasks: Task[];

  private constructor() {
    this.tasks = [];
  }

  public static getInstance() {
    if (!TasksSingleton.instance) {
      TasksSingleton.instance = new TasksSingleton();
    }

    return TasksSingleton.instance;
  }

  public addTask(newTaskTitle: string) {
    const task: Task = {
      id: parseInt("" + Math.random() * 10000),
      title: newTaskTitle,
      isComplete: false,
    };

    this.tasks.push(task);
    return this.tasks;
  }

  public removeTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id != taskId);

    return this.tasks;
  }

  public toggleCompletion(taskId: number) {
    this.tasks = this.tasks.map((task: Task) =>
      task.id === taskId
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );

    return this.tasks;
  }
}
