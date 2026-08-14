class Personagem {
    constructor(nome, codinome, armaPrincipal, armaSecundaria, forca, velocidade, resistencia) {
        this.nome = nome;
        this.codinome = codinome;
        this.armaPrincipal = armaPrincipal;
        this.armaSecundaria = armaSecundaria;
        this.velocidade = velocidade;
        this.forca = forca;
        this.resistencia = resistencia;
        this.descricao = function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria: " + this.armaSecundaria + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia
        };
    }
}

function comparacao(adversario1, adversario2) {
    function maior(stats1, stats2) {
        if (stats1 > stats2) {
            return stats1 + ' > ' + stats2
        } else if (stats1 < stats2) {
            return stats1 + ' < ' + stats2
        } else {
            return stats1 + ' = ' + stats2
        }
    }

    return "Nome do personagem: " + adversario1.nome + " - " + adversario2.nome + "\n"
        + "Codinome do personagem: " + adversario1.codinome + " - " + adversario2.codinome + "\n"
        + "Arma principal: " + adversario1.armaPrincipal + " - " + adversario2.armaPrincipal + "\n"
        + "Arma secundaria: " + adversario1.armaSecundaria + " - " + adversario2.armaSecundaria + "\n"
        + "Nível de força: " + maior(adversario1.forca, adversario2.forca) + "\n"
        + "Nível de velocidade: " + maior(adversario1.velocidade, adversario2.velocidade) + "\n"
        + "Nível de resistência: " + maior(adversario1.resistencia, adversario2.resistencia)
}

let personagens = [
    new Personagem("Steve Rogers", "Capitão América", "Escudo americano", "", 75, 85, 80),
    new Personagem("Tony Stark", "Homem de Ferro", "Armadura Mark LXXXV", "", 80, 95, 90),
    new Personagem("Thor Odinson", "Thor", "Mjolnir", "Stormbreaker", 100, 90, 85),
    new Personagem("Bruce Banner", "Hulk", "Força Bruta", "", 100, 50, 70),
    new Personagem("Natasha Romanoff", "Viúva Negra", "Bastões", "", 50, 75, 95),
    new Personagem("Clint Barton", "Gavião Arqueiro", "Arco", "", 45, 70, 90),
    new Personagem("Thanos", "Titã Louco", "Manopla do Infinito", "", 100, 100, 100)
]

for (let i = 0; i < personagens.length; i++) {
    for (let x = i + 1; x < personagens.length; x++) {
        console.log(comparacao(personagens[i], personagens[x]) + '\n')
    }
}

let maiorStatus = 0
let maiorPersonagem = 0

for (let i = 0; i < personagens.length; i++) {
    const perso = personagens[i]
    const status = perso.forca + perso.velocidade + perso.resistencia

    if (status > maiorStatus) {
        maiorSatus = status
        maiorPersonagem = i
    }

}

console.log('Personagem que as melhores estastísticas: \n' + personagens[maiorPersonagem].descricao())
