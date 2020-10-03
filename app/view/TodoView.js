class TodoView extends BaseView{
    constructor(element){
        super(element);
    }

    template(todo){
        
        return `<li class="ui-state-default">
            <div class="checkbox">
            <label>
                <input type="checkbox" value="" />${todo.name}</label>
            </div>
        </li>`
        //htmlのテンプレに、todoのnameだけ個別化させて返す
    }

    update(todoList){
        //todoListのアイテムごとに,htmlで作成
        let content = '';
            //contentを定義
        
        todoList.forEach(todo =>{
            content += this.template(todo);
        });
        //todoListをforで回す。それをtodoに入れる
        //テンプレートメソッドにtodoを代入
        //返ってきたものを、contentにそれぞれ入れる


        //elementのinnerHTMLにいれる
        this._element.innerHTML = content
            //ループ後のcontentをHTMLにする
    }
}