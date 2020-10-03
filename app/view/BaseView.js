//TodoView,DoneViewのベースとなるクラス（多分インスタンス化はしない）
class BaseView{
    constructor(element){
        this._element = element;

    }

    template(){
        throw new Error('templateメソッドを実装してください')
        //中身の処理は継承先に任せる(抽象メソッドみたいな感じ)
    }

    update(model){
        this._element.innerHTML = this.template(model);
    }
}