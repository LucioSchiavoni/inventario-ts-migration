export class Equipo {
    constructor(
        public id: number,
        public nombre: string,
        public nro_serie: string,
        public id_oficina: number,
        public id_inventario: string,
        public tipo: string,
        public observaciones: string,
        public dominio: boolean, 
        public oficina: string,
    ) {}
}