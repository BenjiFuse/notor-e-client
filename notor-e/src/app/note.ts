// note.ts
export class Note {
	_id: number;
	text: string;
	archived: boolean;
	user_id: number;

	constructor (options?: {_id: number; text: string; archived: boolean; user_id: number;}) {
		if (options) {
			this._id = options._id;
			this.text = options.text;
			this.archived = options.archived;
			this.user_id = options.user_id;
		}
	}
}