//** Вопросы и ответами и изменение счета */
const questions = [
    [
        "Выберете город м мире Герои Меча и Магии III?",
        ["Замок", "Оплот", "Башня", "Крепость", "Цитадель", "Инферно", "Некрополис", "Темница", "Сопряжение"],
        [
            "this.score.castle=2; this.score.rampart++; this.score.tower++",
            "this.score.rampart=2; this.score.castle; this.score.tower++",
            "this.score.tower=2; this.score.castle++; this.score.rampart++",
            "this.score.fortress=2; this.score.stronghold++",
            "this.score.stronghold=2; this.score.fortress++",
            "this.score.inferno=2; this.score.dungeon++",
            "this.score.necropolis=2; this.score.conflux++",
            "this.score.dungeon=2; this.score.inferno++",
            "this.score.conflux=2; this.score.necropolis++"
        ]
    ],
    [
        "Какая награда в Ящике пандоры Вам предпочтительней?",
        ["Ресурсы", "Золото", "Опыт", "Существа"],
        [
            "this.score.rampart++; this.score.inferno++; this.score.conflux++; this.score.necropolis++",
            "this.score.castle++; this.score.tower++; this.score.dungeon++; this.score.conflux++",
            "this.score.fortress++; this.score.stronghold++; this.score.dungeon++; this.score.rampart++;",
            "this.score.necropolis+=2; this.score.castle++; this.score.tower++; this.score.inferno++"
        ]
    ],
    [
        "Какой объект на выбор Вы посетите первым?",
        ["Сад откровения", "Башня Марлетто", "Звёздное колесо", "Лагерь наёмников"],
        [
            "this.score.conflux++; this.score.rampart++; this.score.dungeon++; this.score.tower++",
            "this.score.fortress++; this.score.tower++; this.score.stronghold++; this.score.castle++",
            "this.score.inferno++; this.score.necropolis++; this.score.conflux++; this.score.rampart++",
            "this.score.stronghold++; this.score.castle++; this.score.dungeon++; this.score.inferno++; this.score.necropolis++"
        ]
    ],
    [
        "Какой вторичный навык Вы возьмёте сразу?",
        ["Первая помощь", "Доспехи", "Стрельба", "Нападение"],
        [
            "this.score.fortress++; this.score.rampart++; this.score.necropolis++; this.score.castle++",
            "this.score.tower++; this.score.inferno++; this.score.stronghold++; this.score.dungeon++",
            "this.score.castle++; this.score.dungeon++; this.score.conflux++; this.score.necropolis++",
            "this.score.stronghold++; this.score.castle++; this.score.fortress++; this.score.tower++"
        ]
    ],
    [
        "Какой артефакт для вас желанный в Утопии драконов?",
        ["Щит часового", "Крылья ангела", "Книга магии", "Гладиус титана"],
        [
            "this.score.castle+=2; this.score.fortress+=2; this.score.necropolis+=Math.floor(Math.random()*5)+1; this.score.stronghold+=Math.floor(Math.random()*5)+1; this.score.inferno+=Math.floor(Math.random()*5)+1; this.score.dungeon+=Math.floor(Math.random()*5)+1; this.score.rampart+=Math.floor(Math.random()*5)+1; this.score.tower+=Math.floor(Math.random()*5)+1; this.score.conflux+=Math.floor(Math.random()*5)+1",
            "this.score.castle+=2; this.score.stronghold+=2; this.score.inferno+=Math.floor(Math.random()*5)+1; this.score.necropolis+=Math.floor(Math.random()*5)+1; this.score.dungeon+=Math.floor(Math.random()*5)+1; this.score.fortress+=Math.floor(Math.random()*5)+1; this.score.rampart+=Math.floor(Math.random()*5)+1; this.score.tower+=Math.floor(Math.random()*5)+1; this.score.conflux+=Math.floor(Math.random()*5)+1",
            "this.score.rampart+=2; this.score.tower+=2; this.score.necropolis+=2; this.score.conflux+=2; this.score.castle+=Math.floor(Math.random()*5)+1; this.score.fortress+=Math.floor(Math.random()*5)+1; this.score.stronghold+=Math.floor(Math.random()*5)+1; this.score.inferno+=Math.floor(Math.random()*5)+1; this.score.dungeon+=Math.floor(Math.random()*5)+1",
            "this.score.tower+=2; this.score.inferno+=2; this.score.dungeon+=2; this.score.castle+=Math.floor(Math.random()*5)+1; this.score.fortress+=Math.floor(Math.random()*5)+1; this.score.stronghold+=Math.floor(Math.random()*5)+1; this.score.necropolis+=Math.floor(Math.random()*5)+1; this.score.conflux+=Math.floor(Math.random()*5)+1; this.score.rampart+=Math.floor(Math.random()*5)+1"
        ]
    ],
    [
        "Какие заклинания Вы выберете?",
        ["Лечение / Снятие заклинаний", "Ускорение / Медлительность", "Проклятье / Благословение", "Магическая / Ледяная стрела"],
        [
            "this.score.castle++; this.score.tower++; this.score.inferno++; this.score.necropolis++; this.score.dungeon++",
            "this.score.rampart++; this.score.conflux++; this.score.fortress++; this.score.stronghold++",
            "this.score.inferno++; this.score.necropolis++; this.score.dungeon++; this.score.castle++; this.score.tower++",
            "this.score.fortress++; this.score.stronghold++; this.score.rampart++; this.score.conflux++"
        ]
    ],
    [
        "Какой редкий ресурс Вам больше всего по душе?",
        ["Самоцветы", "Кристаллы", "Ртуть", "Сера"],
        [
            "this.score.castle+=2; this.score.tower+=2; this.score.rampart++",
            "this.score.rampart+=2; this.score.stronghold+=2; this.score.castle++; this.score.tower++;this.score.fortress++",
            "this.score.inferno+=2; this.score.necropolis+=2; this.score.conflux+=2; this.score.dungeon++",
            "this.score.dungeon+=2; this.score.fortress+=2; this.score.inferno++; this.score.stronghold++"
        ]
    ],
    [
        "Какая стихия Вам нравится больше?",
        ["Вода", "Воздух", "Земля", "Огонь"],
        [
            "this.score.castle+=2; this.score.fortress+=2; this.score.inferno--; this.score.dungeon--; this.score.conflux--",
            "this.score.tower+=2; this.score.necropolis+=2; this.score.rampart--; this.score.stronghold--",
            "this.score.rampart+=2; this.score.stronghold+=2; this.score.tower--; this.score.necropolis--",
            "this.score.inferno+=2; this.score.dungeon+=2; this.score.conflux+=2; this.score.castle--; this.score.fortress--"
        ]
    ],
    [
        "Какой цвет флага выбираете?",
        ["Серый", "Зеленый", "Синий", "Белый", "Красный", "Бурый", "Желтый", "Бирюзовый", "Оранжевый"],
        [
            "this.score.necropolis+=5; this.score.rampart-=Math.floor(Math.random()*5)+1; this.score.castle-=Math.floor(Math.random()*5)+1; this.score.tower-=Math.floor(Math.random()*5)+1; this.score.inferno-=Math.floor(Math.random()*5)+1; this.score.dungeon-=Math.floor(Math.random()*5)+1; this.score.stronghold-=Math.floor(Math.random()*5)+1; this.score.fortress-=Math.floor(Math.random()*5)+1; this.score.conflux-=Math.floor(Math.random()*5)+1",
            "this.score.necropolis-=Math.floor(Math.random()*5)+1; this.score.rampart+=5; this.score.castle-=Math.floor(Math.random()*5)+1; this.score.tower-=Math.floor(Math.random()*5)+1; this.score.inferno-=Math.floor(Math.random()*5)+1; this.score.dungeon-=Math.floor(Math.random()*5)+1; this.score.stronghold-=Math.floor(Math.random()*5)+1; this.score.fortress-=Math.floor(Math.random()*5)+1; this.score.conflux-=Math.floor(Math.random()*5)+1",
            "this.score.necropolis-=Math.floor(Math.random()*5)+1; this.score.rampart-=Math.floor(Math.random()*5)+1; this.score.castle+=5; this.score.tower-=Math.floor(Math.random()*5)+1; this.score.inferno-=Math.floor(Math.random()*5)+1; this.score.dungeon-=Math.floor(Math.random()*5)+1; this.score.stronghold-=Math.floor(Math.random()*5)+1; this.score.fortress-=Math.floor(Math.random()*5)+1; this.score.conflux-=Math.floor(Math.random()*5)+1",
            "this.score.necropolis-=Math.floor(Math.random()*5)+1; this.score.rampart-=Math.floor(Math.random()*5)+1; this.score.castle-=Math.floor(Math.random()*5)+1; this.score.tower+=5; this.score.inferno-=Math.floor(Math.random()*5)+1; this.score.dungeon-=Math.floor(Math.random()*5)+1; this.score.stronghold-=Math.floor(Math.random()*5)+1; this.score.fortress-=Math.floor(Math.random()*5)+1; this.score.conflux-=Math.floor(Math.random()*5)+1",
            "this.score.necropolis-=Math.floor(Math.random()*5)+1; this.score.rampart-=Math.floor(Math.random()*5)+1; this.score.castle-=Math.floor(Math.random()*5)+1; this.score.tower-=Math.floor(Math.random()*5)+1; this.score.inferno+=5; this.score.dungeon-=Math.floor(Math.random()*5)+1; this.score.stronghold-=Math.floor(Math.random()*5)+1; this.score.fortress-=Math.floor(Math.random()*5)+1; this.score.conflux-=Math.floor(Math.random()*5)+1",
            "this.score.necropolis-=Math.floor(Math.random()*5)+1; this.score.rampart-=Math.floor(Math.random()*5)+1; this.score.castle-=Math.floor(Math.random()*5)+1; this.score.tower-=Math.floor(Math.random()*5)+1; this.score.inferno-=Math.floor(Math.random()*5)+1; this.score.dungeon+=5; this.score.stronghold-=Math.floor(Math.random()*5)+1; this.score.fortress-=Math.floor(Math.random()*5)+1; this.score.conflux-=Math.floor(Math.random()*5)+1",
            "this.score.necropolis-=Math.floor(Math.random()*5)+1; this.score.rampart-=Math.floor(Math.random()*5)+1; this.score.castle-=Math.floor(Math.random()*5)+1; this.score.tower-=Math.floor(Math.random()*5)+1; this.score.inferno-=Math.floor(Math.random()*5)+1; this.score.dungeon-=Math.floor(Math.random()*5)+1; this.score.stronghold+=5; this.score.fortress-=Math.floor(Math.random()*5)+1; this.score.conflux-=Math.floor(Math.random()*5)+1",
            "this.score.necropolis-=Math.floor(Math.random()*5)+1; this.score.rampart-=Math.floor(Math.random()*5)+1; this.score.castle-=Math.floor(Math.random()*5)+1; this.score.tower-=Math.floor(Math.random()*5)+1; this.score.inferno-=Math.floor(Math.random()*5)+1; this.score.dungeon-=Math.floor(Math.random()*5)+1; this.score.stronghold-=Math.floor(Math.random()*5)+1; this.score.fortress+=5; this.score.conflux-=Math.floor(Math.random()*5)+1",
            "this.score.necropolis-=Math.floor(Math.random()*5)+1; this.score.rampart-=Math.floor(Math.random()*5)+1; this.score.castle-=Math.floor(Math.random()*5)+1; this.score.tower-=Math.floor(Math.random()*5)+1; this.score.inferno-=Math.floor(Math.random()*5)+1; this.score.dungeon-=Math.floor(Math.random()*5)+1; this.score.stronghold-=Math.floor(Math.random()*5)+1; this.score.fortress-=Math.floor(Math.random()*5)+1; this.score.conflux+=5"
        ]
    ],
    [
        "Каких неитральных существ выберете с самого начала игры?",
        ["1 Колдун", "3 Тролля", "3 Снайпера", "7 Мумий", "7 Кочевников", "12 Борова", "12 Разбойников", "20 Полуросликов", "50 Крестьянин"],
        [
            "this.score.tower+=2; this.score.castle++",
            "this.score.fortress+=2; this.score.stronghold++",
            "this.score.rampart+=2; this.score.castle++",
            "this.score.necropolis+=2; this.score.castle--; this.score.tower--",
            "this.score.conflux+=2; this.score.stronghold++",
            "this.score.stronghold+=2; this.score.fortress++",
            "this.score.dungeon+=2; this.score.inferno++",
            "this.score.inferno+=2; this.score.dungeon++",
            "this.score.castle+=2; this.score.necropolis+=2"
        ]
    ],
    [
        "Перед вами 3 ящика Пандоры, выберите любой",
        ["№1", "№2", "№3"],
        [
            "this.score.necropolis+=Math.floor(Math.random()*10)+5; this.score.rampart+=Math.floor(Math.random()*10)+5; this.score.castle+=Math.floor(Math.random()*10)+5; this.score.tower+=Math.floor(Math.random()*10)+5; this.score.inferno+=Math.floor(Math.random()*10)+5; this.score.dungeon+=Math.floor(Math.random()*10)+5; this.score.stronghold+=Math.floor(Math.random()*10)+5; this.score.fortress+=Math.floor(Math.random()*10)+5; this.score.conflux+=Math.floor(Math.random()*10)+5",
            "this.score.necropolis+=Math.floor(Math.random()*10)+5; this.score.rampart+=Math.floor(Math.random()*10)+5; this.score.castle+=Math.floor(Math.random()*10)+5; this.score.tower+=Math.floor(Math.random()*10)+5; this.score.inferno+=Math.floor(Math.random()*10)+5; this.score.dungeon+=Math.floor(Math.random()*10)+5; this.score.stronghold+=Math.floor(Math.random()*10)+5; this.score.fortress+=Math.floor(Math.random()*10)+5; this.score.conflux+=Math.floor(Math.random()*10)+5",
            "this.score.necropolis+=Math.floor(Math.random()*10)+5; this.score.rampart+=Math.floor(Math.random()*10)+5; this.score.castle+=Math.floor(Math.random()*10)+5; this.score.tower+=Math.floor(Math.random()*10)+5; this.score.inferno+=Math.floor(Math.random()*10)+5; this.score.dungeon+=Math.floor(Math.random()*10)+5; this.score.stronghold+=Math.floor(Math.random()*10)+5; this.score.fortress+=Math.floor(Math.random()*10)+5; this.score.conflux+=Math.floor(Math.random()*10)+5"
        ]
    ]
]

//** Дынные для экранов результата каждой расы */
const results = {
    'castle': {
        name: "Архангел",
        description: "Вы сильнейший среди ангелов, прирождённый борец с демоническим злом. Вы оплот и защита государства Эрафия мира Энрот. Одним своим присутствием на поле боя архангелы воодушевляют союзные войска на подвиги, ведь они способны воскрешать павших соратников. Сами архангелы ненавидят дьяволов — этих могущественнейших порождений тьмы, и потому, атакуя их, наносят им действительно сокрушительные удары. Вооружены Мечами Правосудия – длинными волнистыми мечами, которые при ударе полыхают языками пламени. Защищены специальными нагрудниками, наручами, поножами, а также щитами.",
        quote1: "Слава всегда найдёт того, кто идёт по верной дороге",
        quote2: "Сила в единстве.",
        author: "(Катерина)",
        point: "170"
    },
    'rampart': {
        name: "Золотой Дракон",
        description: "Вы блеск золота и солнца с вершин скальных утесов в высокогорьях АвЛи мира Энрот. Вы Золотой Дракон -  внушительное и опасное создания, чья чешуя отливает цветом чистого золота, поражают врагов разъедающим серным дыханием, способным поразить сразу нескольких жертв. Кроме того, лишь самым могущественным магам, владеющим наиболее сильными из известных заклинаний, под силу оказать на золотых драконов какое-либо магическое воздействие.",
        quote1: "Закаляй своё тело и волю, как умелый кузнец закаляет меч. Чем строже ты к себе относишься, тем сильнее ты станешь!",
        quote2: "-Ты разговариваешь с владыкой.",
        author: "(Джелу)",
        point: "160"
    },
    'tower': {
        name: "Титан",
        description: "Вы сильный, быстрый и выносливый среди всех своих собратьев. Вы грозный союзник магов Бракады мира Энрот. Титаны одинаково страшны как в ближнем бою, где они безжалостно разят противников необычными мечами, напоминающими легендарный Гром титана, так и на расстоянии, где оружием им служат смертоносные молнии. Как и гиганты, титаны сильны не только телом, но и духом – на них не действуют заклинания управления разумом. В отличие от Гигантов, Титаны облачены в лёгкие доспехи. Титаны ненавидят Чёрных Драконов и, атакуя их, наносят действительно сокрушительные удары.",
        quote1: "Как-то раз мне довелось судить солдата, который сжег и вырезал целую деревню. Он сказал, что лишь исполнял приказ своего господина. Но я все равно осудил его. Он должен был ослушаться своего хозяина так же, как я должен был ослушаться своего...",
        quote2: "Смерть не имеет значения, важна только магия.",
        author: "(Дракон)",
        point: "150"
    },
    'fortress': {
        name: "Гидра Хаоса",
        description: "ВЫ Гидра Хаоса – самая матёрая и крупная как среди других гидр, так и среди остальных существ, населяющих болота Таталии мира Энрот. Пять голов этого прожорливого хищника атакуют всех, кто имел неосторожность приблизиться к этому зверю, и так ошеломляют жертву, что та не находит в себе сил ответить. Истинный и ужасный хозяин Крепости.",
        quote1: "Людям присуще обманывать друг друга. Люди ненавидят друг друга. Люди презирают друг друга. И так всю жизнь... Только смерть примиряет их всех.",
        quote2: "Мне нужна эссенция. Эссенция это жизнь. Я жить без неё не могу.",
        author: "(Адриэн)",
        point: "140"
    },
    'stronghold': {
        name: "Древнее Чудище",
        description: "Вы правитель государства Крюлод мира Энрот. Древнее Чудище, что владычествует над варварскими племенами. Внешне отличаясь от простых чудищ лишь окрасом и более внушительными когтями, их древние сородичи гораздо мощнее и свирепее. Тем не менее, жителям Крюлода удалось найти подход и к этим существам. В бою Древние Чудища атакуют врага ещё эффективнее, Снижает защиту атакуемого отряда на 80 %",
        quote1: "Закаляй своё тело и волю, как умелый кузнец закаляет меч. Чем строже ты к себе относишься, тем сильнее ты станешь!",
        quote2: "Как ты смерд можешь мне послужить?",
        author: "(Крэг Хэк)",
        point: "130"
    },
    'inferno': {
        name: "Архидьявол",
        description: "Вы могущественнейшие из дьяволов, когда-либо ступавших на землю Эофоле мира Энрота. Вашу силу и авторитет признают и уважают не только обычные демоны, но и другие дьяволы. Архидьяволы, вооружены инфернальными изогнутыми косами, лезвия которых полыхают языками пламени при взмахе, а защищены особыми кирасами, наручами и поножами. Атаки косами так ошеломляют любого противника, что тот не находит в себе сил ответить на удар. Кроме того, Архидьяволы способны телепортироваться, моментально меняя своё положение в пространстве, а один лишь их вид лишает противника удачи. Архидьяволы ненавидят ангелов и, атакуя их, наносят действительно сокрушительные удары.",
        quote1: "Есть единственно правильная вера — НАША! Любая другая — еретичество и это еретичество должно сгореть в огне во имя нашего Бога. Кто не с нами, тот против нас! Мы несём кару нашего Бога!",
        quote2: "Ад не имеет такой ярости, как униженная женщина!",
        author: "(Ксерон)",
        point: "120"
    },
    'necropolis': {
        name: "Призрачный Дракон",
        description: "Вы Призрачный Дракон – самый могущественный из всех существ армии нежити - призываетесь из мира мёртвых некромантами Дейи мира Энтрота с помощью сложнейших ритуалов. Эффективность Призрачных Драконов на поле боя восполняет любые затраты - один только вид этих потусторонних чудовищ наводит ужас на солдат противника, а их свирепые укусы способны значительно ускорить процессы старения всех живых существ, моментально заставив их почувствовать себя немощными и обессиленными.",
        quote1: "Те, кто сопротивляется силам — становятся их рабами. Те, кто служат силам — сами становятся силами. Если сопротивляться смерти, то всё равно умрёшь! А после неё станешь скелетом или зомби. Если ты примешь другую сторону существования — ты станешь личем или вампиром, не подвластным обычной смерти. Делай свой выбор сам!",
        quote2: "Каждому даётся право выбора. Каждый реализует его так, как захочет и сможет. Кто-то становится магом. Кто-то рыцарем. Наш путь иной — мы рыцари смерти. Ибо тьма тоже нуждается в защите от тех, кто стремится насадить повсюду только свет. Как день не может без ночи, как не светит луна без солнца, так и Свет не может без Тьмы!",
        author: "(Сандро)",
        point: "200"
    },
    'dungeon': {
        name: "Черный Дракон",
        description: "Вы обитаете в бесконечных туннелях обширных пещер Нигона мира Энрот, время от времени появляясь на поверхности. С давних пор Вы используете лордов подземелий в качестве военной силы для своих завоевательных походов. Благодаря врождённому иммунитету ко всей магии, Чёрные Драконы являются настоящим кошмаром для любого натолкнувшегося на них мага, а их давняя вражда с Титанами Бракады вынуждает сжигать их своим огненным дыханием с повышенной жестокостью.",
        quote1: "Единой веры нет, ибо вера — внутри человека. Как нет двух одинаковых людей, так нет и двух одинаковых вер. Никакие Боги, никакая кара Богов не сможет убить свободу выбирать себя.",
        quote2: "Понятие совершенства растяжимо. Можно стремиться, невозможно достичь. Совершенство, как цель, лишено смысла.",
        author: "(Мутаре)",
        point: "180"
    },
    'conflux': {
        name: "Феникс",
        description: "Вы самое настоящие чудо Эрафии мира Энрот. Могучий Феникс - божественное создание, целиком объятое пламенем. Вы во многом похожи на огненных птиц, однако сильнее их, и, в отличие от последних, обладаете удивительной особенностью - даже будучи полностью уничтоженными, Феникс рождается чудом из смерти, не обжигая доверчивых рук. Справа молитвы, по левому - черти, так замыкается жизненный круг. Феникс встаёт на крыло из пожара - Искры становятся Млечным путём.",
        quote1: "Никто не может победить прошлое. Оно хватает вас, цепляет намертво, как рыба-прилипала. И ему неважно, что вы пытаетесь его забыть.",
        quote2: "Однажды мне надоест спасать ей жизнь...",
        author: "(Монер)",
        point: "190"
    }
}