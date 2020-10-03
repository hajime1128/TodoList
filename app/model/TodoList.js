

class TodoList extends BaseList{
    constructor(){
        super();
    }
    //こっちのaddListは継承元のと同じでよい(追加の条件は不要)
    //だから変更しない

    removeItem(todo){
        let position = this._list.indexOf(todo);
        //渡されたtodoは何番目にあるか検索し、代入
        if(position >=0){
            //positionに値が返ってきてるか
            this._list.splice(position,1);
            //条件に合致したら、それをspliceで削除
        }
    }
}

