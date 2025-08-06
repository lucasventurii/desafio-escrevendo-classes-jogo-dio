class Personagem {
    constructor(nome, idade, tipo) {
    this.nome = "Rash";
    this.idade = "20";
    this.tipo = "monge"

};

atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi = new Personagem("Rash", 20, "monge");
heroi.atacar();