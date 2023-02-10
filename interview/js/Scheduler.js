/**
 * 题目来源：https://juejin.cn/post/6968713283884974088#heading-1
 * 实现有并行限制的Promise调度器
 * 异步调度器，保证同时运行的任务最多只有两个
 * 
 addTask(1000,"1");
 addTask(500,"2");
 addTask(300,"3");
 addTask(400,"4");
 的输出顺序是：2 3 1 4

 整个的完整执行流程：

一开始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
 * 
 */

class Scheduler {
  constructor(maxLen) {
    this.maxLen = maxLen;
    this.undoList = [];
    this.exeList = [];
  }

  addTask(time, log) {
    const task = () => {
      setTimeout(() => {
        console.log(log);
        // 任务执行完毕 清理taskList和exeList
        this.checkExeList(task);
      }, time);
    };

    if (this.exeList.length < this.maxLen) {
      this.exeList.push(task);

      task();
    } else {
      this.undoList.push(task);
    }
  }

  checkExeList(task) {
    this.rmFromList(task, this.exeList);
    if (this.undoList.length) {
      this.undoList[0]();
      this.exeList.push(this.undoList[0]);
      this.undoList.splice(0, 1);
    }
  }

  rmFromList(item, list) {
    const index = list.indexOf(item);
    index >= 0 && list.splice(index, 1);
  }
}

const sche = new Scheduler(2);

function addTask(time, log) {
  sche.addTask(time, log);
}

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
