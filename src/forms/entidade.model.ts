export class Entidade {
    constructor(
        public entCnpj: String,
        public entNome: String,
        public entRazao: String,
        public entEndereco: String,
        public entNumero: String,
        public entComple: String,
        public entBairro: String,
        public entCidade: String,
        public entCep: String,
        public cidCodigo: String,
        public paiCodigo: Number,
        public ufCodigo: String,
        public entIndIEDest: Number,
        public entIe: String,
        
        public names:String[]=[
            "entCnpj",
            "entNome",
            "entRazao",
            "entEndereco",
            "entNumero",
            "entComple",
            "entBairro",
            "entCidade",
            "entCep",
            "cidCodigo",
            "paiCodigo",
            "ufCodigo",
            "entIndIEDest",
            "entIe" ]
            
        
        ) {
        
    }
}