class Todo{
    //プロパティ
      //id デフォルトは0
      //name
      //status デフォルト0
      //全部プライベート
    constructor(name,id=0,status=0){
        //指定がなければ0を使う処理になる。あったらその値
        this._id = id,
        this._name = name,
        this._status = status
    };
    //メソッド
      //get id()
    get id(){
        return this._id;  
    };
      //get name()
    get name(){
        return this._name;  
    };
    
    //真偽を判定。statusの値で実行済みか判定
    isDone(){
        return this.status == 1
    };
    //done() statusを1に変える。Todoしたらstatusを更新
    done(){
        this.status = 1;
    }
}
