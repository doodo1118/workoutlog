import {observable, action, computed} from 'mobx';

class ExercisersStore{
    constructor(root){
        this.root = root;
    }
    //Exerciser{id:String, Logs:[], finishedAt:, }
    @observable Exercisers = [];
    @observable syncWith;

    @action addExerciser(exerciser){
        //concat?
        this.Exercisers.concat(exerciser);
    }
    @action deleteExerciser(exerciserId){
        this.Exercisers.filter(exerciser=> exerciser.id!==exerciserId)
    }
    @action syncExerciser(exerciser){

    }
}

export default ExercisersStore;