import ExercisersStore from './exercisersStore';
import MyLogsStore from './myLogsStore';
import TimerStore from './TimerStore';

class RootStore{
    constructor(){
        this.exercisers = new ExercisersStore(this);
        this.myLogs = new MyLogsStore(this);
        this.timer = new TimerStore(this);
    }
}

export default RootStore;
