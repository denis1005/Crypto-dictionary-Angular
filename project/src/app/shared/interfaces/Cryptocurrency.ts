export interface ICryptocurrency {
    name: string;
    symbol: string;
    imgUrl: string;
    description: string;
    facts: {
        founder: string;
        coins: string;
        funFact: string;
    };
    _id: string;
}
