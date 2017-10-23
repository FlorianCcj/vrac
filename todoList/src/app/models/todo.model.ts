export class TodoModel {
    done: Boolean;
    title: string;

    text: String;
    // private _text: String;
    // get text() {
    //     return this._text;
    // }
    // set text(value: String) {
    //    this._text = value.trim();
    // }

    constructor(text: String) {
        this.done = false;
        this.text = text.trim();
    }
}
