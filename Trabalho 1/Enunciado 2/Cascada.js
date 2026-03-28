const evento = [
    {
        nome: "Cascada Na Rebobi Summer e os caralho",
        produtora: "Rebobinights",
        logo: "img://",
        data: [
            {
                dia: "Wed-3-Jun",
                hora: "10:00 PM to 6:00AM",
            } 
        ], 
        localizacao: [
            {
                local: "KOMPLEXO TEMPO",
                cep: "03109-001",
                logradouro: "Avenida Henry Ford",
                numero: 511,
                estado: "São Paulo", 
                pais: "Brasil"
            }
        ],
        interessado: false,
        quantiInteressados: 710, 

        tickts: [
            {
                Titulo: "Pista Promo 4",
                valorTipo: "R$",
                valor: 130.00,
                descricao: "" 
            },
            {
                Titulo: "Pista Promo 5",
                valorTipo: "R$",
                valor: 150.00,
                descricao: ""
            },
            {
                Titulo: "Camarote 2º Lote",
                valorTipo: "R$",
                valor: 240.00,
                descricao: "Esse ingresso dá acesso ao mezanino para você poder ser humilhado pelo seu artista favorito"
            }
        ]
    }
]

function getMenorValorIngresso() {
    let menor = 1000;

    evento[0].tickts.forEach(ticket => {
        if (ticket.valor < menor) {
            menor = ticket.valor;
        }
    });

    return menor;
}

console.log(getMenorValorIngresso())