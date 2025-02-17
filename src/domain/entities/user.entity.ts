export class usuario {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public usuario: string,
        public pass: string,
        public es_admin: boolean,
    ){}
}