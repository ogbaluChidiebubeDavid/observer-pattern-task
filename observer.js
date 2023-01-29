class telephone {
    constructor () {
        this.observers = new Set()
    }

    addPhoneNumber(observer){
        this.observers.add(observer)
    }

    removePhoneNumber(observer){
        this.observers.delete(observer)
    }

    dialPhoneNumber(context){
        for (let observer of this.observers){
            observer.update(context)
        }
    }
}

class Observer {
    constructor (){}
    update(){
        telephone.dialPhoneNumber({now: 'calling 2348148463933'})
    }
}

const call = new telephone();

const chuks2348148463933 = new Observer();
const nowCalling = new Observer();

call.addPhoneNumber(chuks2348148463933);
call.addPhoneNumber(nowCalling);

console.log(call.observers)