//Trailer do filme 
const videoElement = document.getElementById('main-video');

const playlist = [

    './assets/trailer1.mp4',

    './assets/trailer2.mp4', 

    './assets/trailer3.mp4'

];

let currentTrack = 0;

videoElement.addEventListener('ended', () => {

    currentTrack = (currentTrack + 1) % playlist.length;


    videoElement.src = playlist[currentTrack];

    videoElement.play();

});


// filmes da marvel que aparece no layout
const filmeMarvel = [

    {
        titulo: "Capitã Marvel", tempo: "2h04min",
        sintese: "Carol Danvers se torna uma das heroínas mais poderosas do universo quando a Terra é pega no meio de uma guerra galáctica entre duas raças alienígenas.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/19/02/04/18/35/1468867.jpg"
    },

    {

        titulo: "Capitão América: O Primeiro Vingador", tempo: "2h04min",
        sintese: "Durante a 2ª Guerra, Steve Rogers se voluntaria para um experimento que o transforma em um super soldado para combater o mal. ",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://media.themoviedb.org/t/p/w600_and_h900_face/xYijVAPunk6neVW2KHKE4Lp45ZU.jpg"     
    },

    {
        titulo: "Capitão América: O Soldado Invernal", tempo: "2h16min ",
        sintese: "Steve Rogers une forças com a Viúva Negra para enfrentar um poderoso e misterioso inimigo em Washington, o Soldado Invernal.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://br.web.img2.acsta.net/c_310_420/pictures/14/02/03/20/36/257136.jpg"
    },

    {
        titulo: "Capitão América: Guerra Civil", tempo: "2h28min",
        sintese: "Uma lei de registro de heróis causa uma cisão entre os Vingadores, dividindo o grupo em duas facções lideradas pelo Capitão América e Homem de Ferro.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/16/03/10/20/36/363874.jpg"  
    },

    {
        titulo: "O Incrivel Hulk", tempo: "1h52min",
        sintese: "Carol Danvers se torna uma das heroínas mais poderosas do universo quando a Terra é pega no meio de uma guerra galáctica entre duas raças alienígenas.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: src = "https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg"
    },

    {
        titulo: "Homem de Ferro", tempo: "2h06min",
        sintese: "O inventor bilionário Tony Stark constrói uma armadura de alta tecnologia para combater o crime após ser sequestrado por terroristas.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/91/79/19/20163665.jpg"
    },

    {
        titulo: "Homem de Ferro 2", tempo: "2h04min",
        sintese: "Tony Stark enfrenta pressões do governo e de novos inimigos enquanto tenta lidar com os efeitos colaterais de sua própria tecnologia.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/31/07/19874181.jpg"
    },

    {
        titulo: "Homem de Ferro 3", tempo: "2h11min",
        sintese: "O herói enfrenta um inimigo sem limites e precisa confiar em seu instinto e engenhosidade para proteger quem ama e descobrir o que define o homem.",
        onde: "Disney+",  link: "https://www.disneyplus.com", capa: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/08/07/20488996.jpg"
    },

    {
        titulo: "Thor", tempo: "1h55min",
        sintese: "O poderoso, porém arrogante, Deus do Trovão é banido de Asgard para viver entre os humanos na Terra, onde aprende o verdadeiro significado de heroísmo.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/33/05/20028705.jpg"
    },

    {
        titulo: "Thor: O Mundo Sombrio", tempo: "1h52min",
        sintese: "Thor luta para salvar a Terra e os Nove Reinos de um inimigo sombrio que surgiu antes do próprio universo.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/210/240/21024039_20130801212713895.jpg"
    },

    {
        titulo: "Thor: Ragnarok", tempo: "2h11min",
        sintese: "Thor deve correr contra o tempo para impedir a destruição de seu mundo natal e o fim da civilização asgardiana pelas mãos da poderosa Hela.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/17/08/26/00/05/175443.jpg"
    },

    {
        titulo: "Thor: Amor e Trovão", tempo: "1h59min",
        sintese: "O herói busca paz interior, mas sua jornada é interrompida por um assassino galáctico; ele conta com a ajuda da Poderosa Thor para detê-lo.",
        onde: "Disney+", link: "https://www.disneyplus.com", capa: "https://br.web.img2.acsta.net/c_310_420/pictures/22/05/24/16/24/4837466.jpg"
    },

    {
        titulo: "Homem-Aranha: De Volta ao Lar", tempo: "2h13min",
        sintese: "Peter Parker tenta equilibrar sua vida de estudante com o combate ao crime, sob a orientação de seu mentor Tony Stark.",
        onde: "HBO Max", link: "https://play.hbomax.com/", capa: "https://br.web.img2.acsta.net/c_310_420/pictures/17/05/29/23/31/530814.jpg"
    },

    {
        titulo: "Homem-Aranha: Longe de Casa", tempo: "2h10min",
        sintese: "Em uma viagem escolar pela Europa, Peter é recrutado por Nick Fury para enfrentar criaturas elementares que estão causando o caos.",
        onde: "Prime Video",link: "https://www.primevideo.com/", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/19/07/05/17/30/5167951.jpg"
    },

    {
        titulo: "Homem-Aranha: Sem Volta para Casa", tempo: "2h 28min",
        sintese: "Após ter sua identidade revelada, Peter pede ajuda ao Doutor Estranho, mas o feitiço dá errado e traz vilões de outros universos.",
        onde: "Prime Video", link: "https://www.primevideo.com/", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/21/11/08/16/02/3963914.png"
    },

    {
        titulo: "Pantera Negra", tempo: "2h15min",
        sintese: "T'Challa retorna para a isolada e tecnológica nação de Wakanda para assumir o trono como rei e o manto de Pantera Negra.",
        onde: "Prime Video", link: "https://www.disneyplus.com", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/17/12/07/16/09/2291532.jpg"
    },

    {
        titulo: "Pantera Negra: Wakanda Para Sempre", tempo: "2h42min",
        sintese: "nação de Wakanda luta para proteger seu reino de potências mundiais enquanto lamenta a morte do Rei T'Challa.",
        onde: "Prime Video", link: "https://www.disneyplus.com", capa: "https://br.web.img2.acsta.net/c_310_420/pictures/22/10/21/20/01/5778952.jpg"
    },

    {
        titulo: "Deadpool & Wolverine", tempo: "2h07min",
        sintese: "Deadpool e Wolverine unem forças em uma aliança explosiva para enfrentar um inimigo comum. A jornada combina ação e humor ácido em uma aventura épica.",
        onde: "Disney+", link: "https://www.disneyplus.com/movies/the-avengers/2Y9unsuReady", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/24/02/28/17/47/5703364.jpg"      
    },

    {
        titulo: "As Marvels", tempo: "1h45min",
        sintese: "Carol, Kamal e Monica têm seus poderes interligados e trocam de lugar involuntariamente. Agora, precisam se unir para estabilizar o universo.",
        onde: "Disney+", link: "https://www.disneyplus.com/movies/the-avengers/2Y9unsuReady", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/23/07/21/20/50/4820227.jpg"
    },

    {
        titulo: "Os Vingadores", tempo: "2h23min",
        sintese: "Nick Fury reúne os heróis mais poderosos da Terra para salvar o planeta de uma ameaça global vinda de Loki e seu exército.",
        onde: "Disney+", link: "https://www.disneyplus.com/movies/the-avengers/2Y9unsuReady", capa: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/43/82/20052140.jpg"
    },

    {
        titulo: "Vingadores: Era de Ultron", tempo: "2h21min",
        sintese: "Tony Stark cria um sistema de inteligência artificial para manter a paz, mas as coisas dão errado e os heróis devem enfrentar o vilão Ultron.",
        onde: "Disney+", link: "https://www.disneyplus.com/movies/avengers-age-of-ultron/769279", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/15/02/24/18/27/528824.jpg"
    },

    {
        titulo: "Vingadores: Guerra Infinita", tempo: "2h29min",
        sintese: "Tony Stark cria um sistema de inteligência artificial para manter a paz, mas as coisas dão errado e os heróis devem enfrentar o vilão Ultron.",
        onde: "Disney+", link: "https://www.disneyplus.com/movies/avengers-infinity-war/1273957", capa: "https://br.web.img3.acsta.net/c_310_420/pictures/18/03/16/15/08/2019826.jpg"
    },

    {
        titulo: "Vingadores: Ultimato", tempo: "3h01min",
        sintese: "Após Thanos eliminar metade das vidas no universo, os Vingadores restantes buscam uma maneira de desfazer suas ações e restaurar a ordem.",
        onde: "Disney+", link: "https://www.disneyplus.com/movies/avengers-endgame/450974", capa: "https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg"     
    },

    {
        titulo: "Vingadores: Doomsday", tempo: "Aprox. 160 min",
        sintese: "O novo capítulo da saga onde os heróis enfrentam a ameaça colossal do Doutor Destino. O retorno épico da equipe aos cinemas.",
        onde: "Dia 18 de dezembro de 2026 nos cinemas", link: "#", capa: "https://cdn.marvel.com/content/2x/avengersdoomsday_lob_crd_02.jpg"   
    },
]

const main = document.querySelector("#marvel-catalog")

function exibirFilmes(filmes) {

    main.innerHTML = filmes.map(filme => `

         <div class="card">

         <img src="${filme.capa}" alt="${filme.titulo}">

         <div class="card-content">

            <h3>${filme.titulo}</h3>

            <h5>${filme.tempo}</h5>

            <p>${filme.sintese}</p>

            <a href="${filme.link}" target="_blank" class="btn-assistir">Assistir no ${filme.onde}</a>


         </div>

         </div>

    `).join("");
}

// filtro de pesquisa de filme 

function filtrar() {

    const termo = document.querySelector("#inputBusca").value.toLowerCase();

    const filmeFiltrados = filmeMarvel.filter(f =>

        f.titulo.toLowerCase().includes(termo)

    );

    exibirFilmes(filmeFiltrados);
}



exibirFilmes(filmeMarvel);