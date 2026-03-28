const restaurantes = [
    {
        nome: "Cavanhas",
        logo: "https:\\",
        tipo: "lanches",
        distancia: "5.8Km",
        tempoEntrega: "37-52 min",
        valorTipo: "R$",
        valorEntrega: 12.99,
        avaliacao: 4.8,
        estrela: [
            {
                possui: true,
                tamanho: "Grande",
            }
        ],
        desconto: [
            {
                porcentagem: "10%",
                condicao: "Entrega Clube"
            }
        ]
    },
    {
        nome: "McDonald's",
        logo: "https:\\",
        tipo: "lanches",
        distancia: "1.4Km",
        tempoEntrega: "16-31 min",
        valorTipo: "R$",
        valorEntrega: 6.99,
        avaliacao: 4.8,
        estrela: [
            {
                possui: false
            }
        ],
        desconto: [
            {
                porcentagem: "10%",
                condicao: "Entrega Clube"
            }
        ]
    },
    {
        nome: "Corujão Lanches",
        logo: "https:\\",
        tipo: "lanches",
        distancia: "3.7Km",
        tempoEntrega: "60-70 min",
        valorTipo: "R$",
        valorEntrega: 10.00,
        avaliacao: 4.5,
        estrela: [
            {
                possui: false
            }
        ],
        desconto: []
    },
    {
        nome: "Chickens do Méqui",
        logo: "https:\\",
        tipo: "frangos",
        distancia: "1.4Km",
        tempoEntrega: "15-30 min",
        valorTipo: "R$",
        valorEntrega: 7.99,
        avaliacao: 4.8,
        estrela: [
            {
                possui: false
            }
        ],
        desconto: [
            {
                porcentagem: "10%",
                condicao: "Entrega Clube"
            }
        ]
    },
    {
        nome: "Planeta Xis Lanches",
        logo: "https:\\",
        tipo: "lanches",
        distancia: "0.5Km",
        tempoEntrega: "24-34 min",
        valorTipo: "Grátis",
        valorEntrega: 0,
        avaliacao: 4.8,
        estrela: [
            {
                possui: true,
                tamanho: "Grande"
            }
        ],
        desconto: []
    },
    {
        nome: "A la Minuta Zona Norte",
        logo: "https:\\",
        tipo: "marmita",
        distancia: "1.6Km",
        tempoEntrega: "34-44 min",
        valorTipo: "Grátis",
        valorEntrega: 0,
        avaliacao: 4.5,
        estrela: [
            {
                possui: false
            }
        ],
        desconto: [
            {
                porcentagem: "10%",
                condicao: "Clube (até R$10)"
            }
        ]
    },
    {
        nome: "Mega X",
        logo: "https:\\",
        tipo: "lanches",
        distancia: "3.6Km",
        tempoEntrega: "50-60 min",
        valorTipo: "R$",
        valorEntrega: 5.99,
        avaliacao: 4.7,
        estrela: [
            {
                possui: false
            }
        ],
        desconto: [
            {
                porcentagem: "R$7",
                condicao: "Presente"
            }
        ]
    },
    {
        nome: "Samcro's Burger",
        logo: "https:\\",
        tipo: "lanches",
        distancia: "5.2Km",
        tempoEntrega: "27-37 min",
        valorTipo: "Grátis",
        valorEntrega: 0,
        avaliacao: 4.9,
        estrela: [
            {
                possui: true,
                tamanho: "Grande"
            }
        ],
        desconto: [
            {
                porcentagem: "10%",
                condicao: "Clube (até R$10)"
            }
        ]
    }
];


//filter pra pegar avalição maior que 4.6 estrelas
const avalicaoMaiorQue46 = restaurantes
    .filter(restaurante => restaurante.avaliacao >= 4.6);

    console.log(avalicaoMaiorQue46)

const entregaGratis = restaurantes
    .filter(restaurante => restaurante.valorEntrega === 0);

    console.log(entregaGratis)

const restaurantesDoTipoLanche = restaurantes
    .filter(restaurante => restaurante.tipo === "lanches")

    console.log(restaurantesDoTipoLanche)

const nomeDosRestaurantes = restaurantes
    .map(restaurante => restaurante.nome)

    console.log(nomeEAvaliacao)
