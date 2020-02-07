import {observable, action, computed} from 'mobx';

class TimerStore {
    @observable beganExerciseAt=null;
    @observable now;
    @observable completedLastMotionAt;
    @observable finishedExerciseAt;

    @computed timer = this.now - this.beganExerciseAt;
    @computed temporaryTimer = this.now - this.completedLastMotionAt;

    @action setStartTime (){
        if(this.beganExerciseAt == null)
            this.beganExerciseAt = new Date();
    }
    @action resetTemporaryTimer (){
        this.completedLastMotionAt = new Date();
    }
    @action finishExercise(){
        this.finishedExerciseAt = new Date();
    }
};

export default TimerStore;