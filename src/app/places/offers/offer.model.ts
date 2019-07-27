export class OfferModel {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number
    ) {
    }
}
