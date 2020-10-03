class TodoController{
    constructor(){
        
        let selector = document.querySelector.bind(document);
        //ducument.querlySelectorの仮名を作る
        
        this.inputTodo = selector('.add-todo')
        //htmlの'add-todo'を監視する

        this.inputTodo.addEventListener('keypress',function(event){
            //インプットにキーが押されたときの挙動
            event.preventDefault;

            if(event.key.toLowerCase()== 'enter'){
                //enterが押されたか確認(html上のevent.keyがenterか確認)

                if(event.target.value != ''){
                    //inputが空ではないことを確認
                    console.log(event.target.value);
                    this.addTodo(event.target.value);
                    //このクラスの「Todoを追加するメソッド」を呼ぶ
                    
                }
            }
        
        }.bind(this));
        //bindの時はアローファンクションが使えない
        
        this._todoList = new TodoList();
        this._doneList = new DoneList();
        this._todoView = new TodoView(selector('#sortable'));
        //作ったクラスは、コントローラーのコンストラクターでインスタンス化する
        
    }

    //todoを追加するメソッド
    addTodo(inputValue){
        //inputVlueを使ってTodoオブジェクトを作成
        let todo = new Todo(inputValue);

        //作成したTodoオブジェクトを_todoListに追加
        this._todoList.addTodo(todo);
            //todolistのaddtodoを呼ぶ
        console.log(this._todoList._list)
        //画面に表示
        this._todoView.update(this._todoList._list);

        this.inputTodo.value = '';
    }

    //Todoすべてを完了の状態にする
    allDone(){
        //_todoListの中のもののstatusを1に
        this._todoList._list.forEach(element => {
            element.done();
            //ステータス1のTodoを_dolistに追加する
            this._doneList.addTodo(element);
            
        }); 
        //_todoListを空にする(clearのメソッド)
        this._todoList.clearList()
        //表示をupdateする
        this._todoView.update(this._todoList._list);
    }
}