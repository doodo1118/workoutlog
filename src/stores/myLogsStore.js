import {observable, action, computed} from 'mobx';

class MyLogsStore{
    @observable Logs = [];

    @action add(log){
        //concat?
        this.Logs.push(log);
    }
    @action delete(log){
        
    }
    @action editLog(log){
    }
}

export default MyLogsStore;