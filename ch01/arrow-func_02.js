class Task {}

class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach((task) => {
            console.log(task);
        })
    }
}

new TaskCollection([
    new Task, new Task, new Task
]).log();

//输出3个Task{}