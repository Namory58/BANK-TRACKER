
export class transactionsClasse{
    constructor(
        public id :number,
        public description:string,
        public date:Date,
        public montant:bigint,
        public category :{},
    ){}
}