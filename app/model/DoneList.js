
//継承したTODOを持っておくリスト
class DoneList extends BaseList{
    constructor(){
        super();
    }

    addTodo(todo){
        //継承し直す
        if(todo.isDone()){
            //なんでも追加してはダメ、作業終了したやつだけ 
            //if文で,渡されたtodoクラスの、isDoneメソッドを実行(作業終わってるか)
            super.addTodo(todo);
            //継承元のやつのaddTodoに渡して実行する
        }
    }

}