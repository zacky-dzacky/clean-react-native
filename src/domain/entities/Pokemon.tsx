interface PokemonInterface {
    _name: string,
    _url: string
}

export class Pokemon implements PokemonInterface {
    _name: string;
    _url: string;

    constructor(_name: string, _url: string) {
        this._name = _name
        this._url = _url
    }

    get name(): string {
        return this._name
    }

    get url(): string {
        return this._url;
    }

    static fromJson(json: any): Pokemon {
        return new Pokemon(json.name, json.url);
    }
}