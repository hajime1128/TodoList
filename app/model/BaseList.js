class BaseList{
    constructor(){
        //TODOを保持するリスト
        this._list= [];
    }


    get list(){
        return this._list;
    }

    //何でもとりあえず追加するメソッド
    addTodo(todo){
        this._list.push(todo);
    }

    //リストを空にする
    clearList(){
        this._list = [];
    }
}

