export class BodyTranspilator {
	transform(body: any): string {
		var str = '';
		for (const prop in body) {
			if (body.hasOwnProperty(prop)) {
				str += `${prop}=${body[prop]}&`;
			}
		}
		return str.slice(0, -1);
	}
}
