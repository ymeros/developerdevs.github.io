/*/////////////////////////////////////////////////
Dx2 Devil Fusion Emulator
Author: Robin Chiu
E-mail: oceanxdds@gmail.com
Github: https://github.com/oceanxdds/dx2_fusion
Publish: https://oceanxdds.github.io/dx2_fusion/
//////////////////////////////////////////////////*/

// Digital Devil Data (Stable Version)

const ddd_stable = [
    {
        name:'Herald',
        name_tw:'Herald',
        name_en:'Herald',
        formulas:[
            ['Avatar','Megami'],
            ['Avatar','Deity'],
            ['Holy','Megami'],
            ['Dragon','Megami'],    //180713 add
            ['Divine','Megami'],
            ['Divine','Holy'],
            ['Fallen','Holy']
        ],
        devils:[
            {   name:'Metatron',       name_tw:'梅塔特隆', name_en:'Metatron',   rarity:5,   grade:99,  icon:'daitensi_metatoron.png',  skills:['天罰','無限のチャクラ','シナイの神火'], skill4:['不屈の闘志','マハンマダイン','メシアライザー','二分の魔脈','電撃反射'], skill5:['','吸魔','マハポイズマ','マハジオダイン','マハラギダイン'], elements:['','Resist','Resist','Resist','Resist','Null',''], type:"攻擊"     },
            {   name:'Michael',        name_tw:'米迦勒', name_en:'Michael',      rarity:5,    grade:90, icon:'daitensi_mikaeru.png', skills:["勝利の息吹","魂の審判","メギドラオン"], skill4:["食いしばり","裁きの雷火","メディアラハン","地獄のマスク","呪殺反射"], skill5:['','ティタノマキア','火炎耐性','ジオダイン','刹那五月雨撃ち'], elements:["","","Null","Null","","Repel","Weak"], type:"攻擊"     },
            {   name:'Mastema',        name_tw:'莫塞瑪特', name_en:'Mastema',     rarity:5,    grade:83, icon:'daitensi_mansemato.png', skills:["審判の光","バインドボイス","憎悪の試練"], skill4:["二分の魔脈","アイスエイジ","マカジャマオン","破魔ハイブースタ","氷結反射"], skill5:['','殺風激','乱れ狂い','ハマダイン','電撃耐性'], elements:["","Weak","Null","","Repel","Repel",""], type:"攻擊"     },
            {   name:'Azrael',      name_tw:'阿斯萊爾',    name_en:'Azrael', rarity:4,    grade:67, icon:'daitensi_azuraeru.png', skills:["テトラカーン","イービルアイ","アギダイン"], skill4:["マカラカーン","ムドダイン","祟り","マカラカシフト","呪殺無効"], skill5:["","甘噛み","デクンダ","野獣の勘","審判の光"], elements:["Resist","Resist","Weak","","","Repel","Resist"], type:"支援"            },
            {   name:'Sandalphon',   name_tw:'聖達芬',     name_en:'Sandalphon', rarity:4,           grade:61, icon:'daitensi_sandaruhuon.png', skills:["ハマダイン","ザンダイン","スクカオート"], skill4:["アムリタ","マハンマオン","サマリカーム","野獣の勘","衝撃耐性"],skill5:["","メポズムディ","反撃","ラクンダ","メガトンプレス"], elements:["Resist","","","Resist","","Repel","Null"], type:"攻擊"         },
            {   name:'Lailah',          name_tw:'萊拉',    name_en:'Lailah', rarity:3,           grade:43, icon:'daitensi_raira.png', skills:["メディラ","破魔ブースタ","マハンマオン"], skill4:["マカジャマオン","ハマダイン","リカーム","勝利の息吹","電撃耐性"],skill5:["","ザン","マハザン","ヒートウェイブ","ブフ"], elements:["","","","Weak","Resist","Null","Weak"], type:"攻擊"          }
        ]
    },
    {
        name:'Megami',
        name_tw:'Megami',
        name_en:'Megami',
        formulas:[
            ['Avian','Herald'],    //180419 add
            ['Deity','Avian'],      //180419 add
            ['Holy','Herald'],
            ['Holy','Avatar'],
            ['Genma','Avian'],      //180419 add
            ['Dragon','Divine'],      //180713 add
            ['Lady','Deity'],
            ['Lady','Genma'],
            ['Divine','Herald'],
            ['Fallen','Divine'],
            ['Femme','Herald'],
            ['Femme','Avatar'],
            ['Femme','Lady'],
            ['Femme','Fairy']
        ],
        devils:[
            {                name:'Lakshimi',         name_tw:'吉祥天', name_en:'Lakshimi',       rarity:5,                grade:85, icon:'megami_rakusyumi.png', skills:["ディアラハン","ツイスター","蓮華の舞"], skill4:["二分の魔脈","殺風激","マカラカーン","狂い咲き","衝撃無効"], skill5:["","甘噛み","ジオダイン","虚弱無効","毒針"], elements:["","","","","Weak","Resist","Null"], type:"支援"            },
            {                name:'Ishtar',        name_tw:'伊絲塔', name_en:'Ishtar',       rarity:5,                grade:82, icon:'megami_isyutaru.png', skills:["マハンマオン","ディアラハン","ジャッジメント"], skill4:["サマリカーム","裁きの雷火","コンセントレイト","テトラカシフト","衝撃無効"], skill5:["","ゴッドハンド","毒床渡り","デクンダ","アギラオ"],elements:["","","","Null","Weak","Null","Weak"], type:"回復"            },
            {                name:'Sarasvati',    name_tw:'妙音天女', name_en:'Sarasvati',           rarity:4,                grade:69, icon:'megami_sarasuvatei.png', skills:["マハブフーラ","バリア","静寂の祈り"], skill4:["ブフダイン","絶対零度","メディラマ","追い打ち","氷結反射"],skill5:["","メチャームディ","呪い耐性","ミナゴロシの愉悦","イービルアイ"], elements:["","Weak","Null","","","","Weak"], type:"支援"            },
            {                name:'Pallas Athena',      name_tw:'帕拉斯雅典娜', name_en:'Pallas Athena',         rarity:4,                grade:62, icon:'megami_parasuatena.png', skills:["衝撃耐性","刹那五月雨撃ち","天罰"], skill4:["マカラカーン","モータルジハード","ディアラハン","勝利のチャクラ","火炎無効"],skill5:["","五月雨斬り","静寂の祈り","毒針","ツイスター"], elements:["Resist","","","","","Null","Weak"], type:"攻擊"            },
            {                name:'Scathach',          name_tw:'斯卡哈', name_en:'Scathach',     rarity:3,                grade:50, icon:'megami_sukaaha.png', skills:["ザンマ","冥界破","ウィンドブレス"], skill4:["二分の活泉","狂乱の剛爪","ディアラマ","地獄のマスク","電撃耐性"],skill5:["","ブフ","反撃","自然治癒","暴れまくり"], elements:["","","","Weak","Null","Resist",""], type:"攻擊"            },
            {                name:'Arianrhod',     name_tw:'阿麗安蘿德', name_en:'Arianrhod',          rarity:3,                grade:44, icon:'megami_arianrodo.png', skills:["ハマオン","メディア","怪力乱神"], skill4:["ディアラ","刹那五月雨撃ち","リディアコワース","千発千中","氷結無効"],skill5:["","マハジオ","チャームディ","初段の恵体","クロズディ"], elements:["Resist","","","","","Resist",""], type:"攻擊"            },
            {                name:'Hathor',          name_tw:'哈索爾', name_en:'Hathor',     rarity:2,                grade:27, icon:'megami_htohoru.png', skills:["アムリタ","ザン","ジオンガ"], skill4:["メポズムディ","マハジオ","メチャームディ","一分の魔脈","衝撃無効"], skill5:["","ディア","初段の猛速","チャームディ","メウィークディ"],elements:["Weak","","Resist","","Resist","Resist",""], type:"回復"            }
        ]
    },
    {
        name:'Avian',              //180419 add
        name_tw:'Avian',
        name_en:'Avian',
        formulas:[
            ['Avatar','Herald'],
            ['Divine','Avatar'],
            ['Yoma','Megami'],
            ['Beast','Avatar'],
            ['Fairy','Snake'],
            ['Fairy','Beast'],
            ['Femme','Holy'],
            ['Night','Brute'],
            ['Vile','Night'],
            ['Wilder','Yoma'],
            ['Wilder','Snake'],
            ['Tyrant','Yoma']
        ],
        devils:[
            {                name:'Garuda',         name_tw:'迦樓羅', name_en:'Garuda',      rarity:5,                grade:80, icon:'reityou_garuda.png', skills:["ザンダイン","ラクンダオート","ヴァーハナ"], skill4:["三段の賢魔","マハラギダイン","フォッグブレス","狂戦士","破魔無效"], skill5:["","マハマカジャマ","アムリタ","火炎ブースタ","アギラオ"], elements:["","Repel","Weak","","Null","Resist",""], type:"攻擊"            },
            {                name:'Yatagarasu',         name_tw:'八咫烏', name_en:'Yatagarasu',      rarity:4,                grade:66, icon:'reityou_yatagarasu.png', skills:["冥界破","スクンダオート","スピードスター"], skill4:["物理ブースタ","モータルジハード","スクカジャ","寸分の見切り","物理耐性"], skill5:["","マハラギオン","一分の魔脈","ウィンドブレス","緊縛耐性"], elements:["","Null","Weak","","","Resist",""], type:"支援"            },
            {                name:'Feng Huang',         name_tw:'朱雀', name_en:'Feng Huang',      rarity:3,                grade:53, icon:'reityou_suzaku.png', skills:["アギラオ","タルンダオート","メディラマ"], skill4:["ダークゾーン無効","マハンマ","バインドボイス","毒床渡り","物理耐性"], skill5:['','コロシの愉悦','クロズディ','メパララディ','ジオ'], elements:["Weak","Null","Weak","","","",""], type:"回復"            },
            {                name:'Jatayu',         name_tw:'佳塔由', name_en:'Jatayu',      rarity:3,                grade:44, icon:'reityou_jatayu.png', skills:["スクカジャ","スクカオート","デカジャ"], skill4:["スクンダ","デスバウンド","リカーム","野獣の勘","電撃耐性"],skill5:["","マハザン","乱れ狂い","メポズムディ","カースディ"], elements:["","Resist","","Weak","Drain","Null","Weak"], type:"支援"            },
            {                name:'Sparna',         name_tw:'金翅鳥', name_en:'Sparna',      rarity:2,                grade:28, icon:'reityou_suparuna.png', skills:["ジオ","金剛発破","ラクカジャ"], skill4:["ディアラ","吸魔","タルンダ","地獄のマスク","電撃無効"],skill5:["","クロズディ","百発百中","ムド","突撃"], elements:["","","","Resist","","Resist","Weak"], type:"攻擊"            },
            {                name:'Hamsa',         name_tw:'漢薩', name_en:'Hamsa',      rarity:2,                grade:24, icon:'reityou_hansa.png', skills:["ハマ","ジオンガ","スクカジャ"], skill4:["マカジャマ","マハンマ","メディア","スピードスター","氷結耐性"],skill5:["","ディア","ジオ","ポズムディ","なぎ払い"], elements:["","","","Resist","","","Weak"], type:"支援"            }
        ]
    },
    {
        name:'Deity',
        name_tw:'Deity',
        name_en:'Deity',
        formulas:[
            ['Megami','Herald'],
            ['Avian','Megami'],      //180419 add
            //['Avatar','Herald'],     //180419 remove
            ['Fury','Megami'],
            ['Lady','Herald'],
            ['Beast','Herald'],
            ['Fallen','Beast'],
            ['Brute','Kishin'],
            ['Night','Fallen'],
            ['Vile','Avatar'],
            ['Vile','Beast']
        ],
        devils:[
            {                name:'Vishnu',      name_tw:'毘濕奴', name_en:'Vishnu',         rarity:5,                grade:97, icon:'majin_visyunu.png', skills:["ブフダイン","天罰","アヴァターラ"], skill4:["ムドダイン","メギドラオン","常世の祈り","虚弱無効","呪殺反射"], skill5:["","モータルジハード","魔封耐性","ウィンドブレス","ハマオン"],elements:["","Weak","Drain","","","Null","Null"], type:"攻擊"            },
            {                name:'Amaterasu',      name_tw:'天照', name_en:'Amaterasu',         rarity:5,                grade:82, icon:'majin_amaterasu.png', skills:["マハラギオン","タルンダ","天孫降臨"], skill4:["スクカオート","トリスアギオン","メディアラハン","三段の賢魔","電撃無効"], skill5:["","ジュオン","魅了無効","ラクカジャ","スクンダ"],elements:["","Repel","","Weak","","Resist",""], type:"支援"            },
            {                name:'Odin',      name_tw:'奧丁', name_en:'Odin',         rarity:4,                grade:73, icon:'majin_odein.png', skills:["氷結耐性","ショックウェーブ","グングニル"], skill4:["無慈悲な一撃","メガトンレイド","タルカジャ","千発千中","呪殺無効"], skill5:["","イービルアイ","マハラギ","ブフーラ","ポズムディ"],elements:["","","","Repel","Weak","Resist","Resist"], type:"攻擊"            },
            {                name:'Prometheus',    name_tw:'普羅米修斯', name_en:'Prometheus',           rarity:4,                grade:67, icon:'majin_purometeusu.png', skills:["火炎ブースタ","マカラカシフト","アギダイン"], skill4:["三段の恵体","マハラギダイン","リカームドラ","無限のチャクラ","火炎吸収"], skill5:["","電撃耐性","マハザンマ","乱れ狂い","毒耐性"],elements:["","Null","Weak","","","Resist",""], type:"攻擊"            },
            {                name:'Mitra',         name_tw:'密特拉', name_en:'Mitra',      rarity:3,                grade:55, icon:'majin_mitora.png', skills:["マハジュ","バリアコワース","イービルアイ"], skill4:["メギド","マハンマオン","フォッグブレス","狂い咲き","衝撃耐性"], skill5:["","メディア","ディア","マハジオ","初段の恵体"],elements:["Repel","","Weak","","","Resist","Resist"], type:"支援"            },
            {                name:'Horus',         name_tw:'荷魯斯', name_en:'Horus',      rarity:3,                grade:49, icon:'majin_horusu.png', skills:["ディアラマ","デクンダ","マハンマ"], skill4:["二分の魔脈","ハマダイン","アムリタ","破魔ブースタ","電撃無効	"], skill5:["","カースディ","パララディ","マハラギ","カースディ"],elements:["Resist","","","","","Repel","Weak"], type:"回復"            }
        ]
    },
    {
        name:'Avatar',
        name_tw:'Avatar',
        name_en:'Avatar',
        formulas:[
            ['Holy','Deity'],
            ['Dragon','Avian'],    //180713 add
            ['Lady','Holy'],
            ['Snake','Genma'],
            ['Beast','Deity'],
            ['Beast','Holy'],
            ['Beast','Fury'],
            ['Night','Yoma'],
            ['Vile','Deity'],
            ['Wilder','Avian'],      //180419 add
            ['Wilder','Vile'],
            ['Foul','Holy']
        ],
        devils:[
            {                name:'Barong',         name_tw:'巴隆', name_en:'Barong',      rarity:5,                grade:84, icon:'sinjyuu_baron.png', skills:["マハジオンガ","ショックウェーブ","バロンダンス"], skill4:["食いしばり","真理の雷","リカームドラ","電撃ハイブースタ","呪殺無効"], skill5:["","ブフダイン","マハシバブー","二段の恵体","マカジャマ"],elements:["Resist","","","Null","Weak","Null","Weak"],type:"支援"           },
            {                name:'Anubis',       name_tw:'阿努比斯', name_en:'Anubis',        rarity:4,                grade:70, icon:'sinjyuu_anubisu.png', skills:["呪殺ブースタ","ムドダイン","審判の光"], skill4:["デクンダ","煉獄","テトラカーン","無慈悲な一撃","呪殺無効"], skill5:["","吸魔","ポイズマ","ディア","アギラオ"],elements:["","","","","","Null","Resist"],type:"攻擊"            },
            {                name:'Chimera',       name_tw:'奇美拉', name_en:'Chimera',        rarity:3,                grade:49, icon:'sinjyuu_kimaira.png', skills:["マカラコワース","ジオンガ","狂乱の剛爪"], skill4:["怪力乱神","マハジオンガ","雄叫び","猛反撃","衝撃耐性"], skill5:["","パララディ","マハンマ","メディア","自然治癒"],elements:["","Resist","","Resist","Weak","",""],type:"支援"            },
            {                name:'Makami',         name_tw:'真神', name_en:'Makami',      rarity:3,                grade:41, icon:'sinjyuu_makami.png', skills:["メパララディ","緊縛無効","ディアラマ"], skill4:["アムリタ","怪力乱神","サマリカーム","回復ブースタ","電撃無効"], skill5:["","パララディ","マハザン","ディア","アギ"],elements:["","","","","","Resist","Weak"],type:"回復"            },
            {                name:'Shiisaa',       name_tw:'獅爺', name_en:'Shiisaa',        rarity:2,                grade:33, icon:'sinjyuu_sisa.png' , skills:["シバブー","ザン","ウィンドブレス"], skill4:["バインドクロー","マハザン","バリアコワース","緊縛追撃","氷結耐性"], skill5:["","ブフ","アギ","百発百中","ジオ"],elements:["","Resist","","","Resist","Resist",""],type:"支援"           }
        ]
    },
    {
        name:'Holy',
        name_tw:'Holy',
        name_en:'Holy',
        formulas:[
            ['Avatar','Avian'],      //180419 add
            //['Fury','Avatar'],    //180713 remove
            ['Dragon','Herald'],      //180713 add
            ['Dragon','Genma'],        //180713 add
            //['Kishin','Avatar'],      //180713 remove
            ['Divine','Genma'],
            ['Yoma','Fury'],
            ['Beast','Kishin'],
            ['Fairy','Herald'],
            ['Fairy','Divine'],
            ['Fairy','Yoma'],
            ['Night','Avatar'],
            ['Night','Genma'],
            ['Wilder','Megami'],
            ['Haunt','Fairy']
        ],
        devils:[
            {                name:'Sphinx',     name_tw:'斯芬克斯', name_en:'Sphinx',          rarity:4,                grade:76, icon:'seijyuu_sufuinkusu.png', skills:["バリア","テトラカシフト","マハンマオン"], skill4:["モータルジハード","ジオダイン","メディアラハン","ラクカオート","氷結無効"], skill5:["","ジュ","メガトンプレス","氷結耐性","イービルアイ"],elements:["","Null","Weak","","","Repel","Weak"], type:"支援"            },
            {                name:'Sleipnir',     name_tw:'八腳天馬', name_en:'Sleipnir',          rarity:4,                grade:62, icon:'seijyuu_sureipuniru.png', skills:["破魔ブースタ","マハンマオン","スピードスター"], skill4:["サマリカーム","ハマダイン","ディアラハン","三段の猛速","破魔無効"], skill5:["","ファイアブレ","暴飲暴食","ツイスター","マハシバブオン"],elements:["","Weak","","","","Resist",""],type:"攻擊"            },
            {                name:'Baihu',         name_tw:'白虎', name_en:'Baihu',      rarity:3,                grade:48, icon:'seijyuu_byako.png', skills:["スクンダ","ジオンガ","電撃ブースタ"], skill4:["狂乱の剛爪","マハジオンガ","コンセントレイト","威圧の構え","物理耐性"], skill5:["","乱れ狂い","マハブフ","精神漏出","毒床歩き"],elements:["","","","Null","Weak","",""],type:"攻擊"            },
            {                name:'Apis',           name_tw:'阿庇斯', name_en:'Apis',    rarity:3,                grade:44, icon:'seijyuu_apisu.png', skills:["タルカジャ","マハンマ","マカラカシフト"], skill4:["メディラ","捨て身の一撃","ディスコード","三分の活泉","呪殺耐性"], skill5:["","アギ","ポイズマオン","メディア","クロズディ"],elements:["","","","","","Resist","Weak"],type:"支援"            },
            {                name:'Unicorn',       name_tw:'獨角獸', name_en:'Unicorn',        rarity:3,                grade:42, icon:'seijyuu_unicon.png', skills:["メチャームディ","魅了無効","マハザン"], skill4:["ブフダイン","絶対零度","メクロズディ","虐殺者","氷結耐性"], skill5:["","アギ","初段の賢魔","カースディ","なぎ払い"],elements:["","","","Weak","","Null","Null"],type:"回復"            },
            {                name:'Heqet',           name_tw:'海奎特', name_en:'Heqet',    rarity:2,                grade:27, icon:'seijyuu_heketo.png', skills:["メディア","マハジオ","メポズムディ"], skill4:["ジオンガ","放電","デクンダ","二分の活泉","火炎耐性"], skill5:["","メチャームディ","なぎ払い","見切り","百発百中"],elements:["","","","Resist","Weak","",""],type:"回復"            }
        ]
    },
    {
        name:'Genma',
        name_tw:'Genma',
        name_en:'Genma',
        formulas:[
            ['Dragon','Yoma'],    //180713 add
            ['Dragon','Haunt'],    //180713 add
            ['Deity','Megami'],
            ['Lady','Avatar'],
            ['Lady','Fury'],
            ['Yoma','Deity'],
            ['Yoma','Lady'],
            ['Fallen','Yoma'],
            ['Vile','Lady'],
            ['Vile','Kishin'],
            //['Wilder','Kishin'],    //180713 remove
            //['Wilder','Yoma'],    //180419 remove
            ['Foul','Avatar'],
            ['Foul','Fallen'],
            ['Tyrant','Avatar'],
            ['Tyrant','Lady'],
            ['Haunt','Deity']
        ],
        devils:[
            {                name:'Cu Chulainn',    name_tw:'庫夫林', name_en:'Cu Chulainn',           rarity:5,                grade:81, icon:'genma_kuhurin.png', skills:["ミナゴロシの愉悦","マハザンダイン","ゲイボルグ"], skill4:["リベリオン","殺風激","リカームドラ","衝撃貫通","呪殺反射"], skill5:["","メギドラ","マカジャマ","デスバウンド","アイスエイジ"],elements:["Resist","","","","Null","",""],type:"攻擊"            },
            {                name:'Tsukuyomi',          name_tw:'月讀', name_en:'Tsukuyomi',     rarity:4,                grade:67, icon:'genma_tukuyomi.png', skills:["一分の魔脈","ザンマ","月の加護"], skill4:["マハザン","ムドオン","リカーム","二分の活泉","火炎吸収"], skill5:["","スクカジャ","自然治癒","ハマオン","ジオンガ"],elements:["Weak","Null","Null","Resist","Resist","",""], type:"支援"            },
            {                name:'Hanuman',        name_tw:'哈奴曼', name_en:'Hanuman',       rarity:4,                grade:60, icon:'genma_hanuman.png', skills:["物理耐性","空間殺法","マハザンマ"], skill4:["狂乱の剛爪","ザンダイン","挑発","猛反撃","衝撃反射"], skill5:["","初段の恵体","イービルアイ","審判の光","虚弱耐性"],elements:["","","","Weak","Null","",""],type:"攻擊"            },
            {                name:'Kresnik',      name_tw:'克雷斯尼克', name_en:'Kresnik',         rarity:3,                grade:49, icon:'genma_kurusuniku.png', skills:["スクンダ","電撃無効","審判の光"], skill4:["勝利のチャクラ","五月雨斬","リベリオ","無慈悲な一撃","呪殺無効"], skill5:["","初段の恵体","マハムド","猛反撃","百発百中"],elements:["","","","","Weak","Null",""],type:"攻擊"            },
            {                name:'Tam Lin',        name_tw:'塔姆林', name_en:'Tam Lin',       rarity:3,                grade:40, icon:'genma_tamurin.png', skills:["自然治癒","ウィンドブレス","暗夜剣"], skill4:["ハマダイン","デスバウンド","メディラ","テトラカシフト","火炎耐性"], skill5:["","マハザン","マハラギ","突撃","スラッシュ"],elements:["","","","","","Resist","Weak"],type:"攻擊"            },
            {                name:'Kurama Tengu',      name_tw:'鞍馬天狗', name_en:'Kurama Tengu',         rarity:2,                grade:27, icon:'genma_muramatengu.png', skills:["スクカジャ","ハマ","マハザン"], skill4:["マハンマ","ザンマ","スクンダ","毒床渡り","火炎耐性"], skill5:["","メディア","マハブフ","パララディ","メチャームディ"],elements:["","","","Weak","Null","",""], type:"攻擊"           }
        ]
    },
    {
        name:'Fury',
        name_tw:'Fury',
        name_en:'Fury',
        formulas:[
            ['Dragon','Avatar'],    //180713 add
            ['Dragon','Lady'],  //180713 add
            ['Dragon','Kishin'],    //180713 add
            ['Lady','Megami'],
            ['Lady','Avian'],    //180419 add
            ['Kishin','Herald'],
            ['Kishin','Deity'],
            ['Divine','Deity'],
            ['Divine','Lady'],
            ['Snake','Deity'],
            ['Fallen','Deity'],
            //['Brute','Lady'],  //180713 remove
            ['Vile','Megami'],
            ['Tyrant','Deity'],
            ['Tyrant','Fallen'],
            ['Haunt','Megami']
        ],
        devils:[
            {                name:'Shiva',           name_tw:'濕婆', name_en:'Shiva',    rarity:5,                grade:93, icon:'hakaisin_siva.png' , skills:["虐殺者","空間殺法","プララヤ"], skill4:["魅了無効","ゴッドハンド","リベリオン","寸分の見切り","氷結吸収"], skill5:["","デゾレトオン","アイスブレス","ブフーラ","マハポイズマ"],elements:["Resist","Drain","Weak","Drain","","",""],type:"攻擊"           },
            {                name:'Susano-o',         name_tw:'素盞嗚尊', name_en:'Susano-o',      rarity:5,                grade:82, icon:'hakaisin_susanoo.png', skills:["暗殺者","モータルジハード","天叢雲剣"], skill4:["三段の剛力","殺風激","チャージ","無慈悲な一撃","電撃吸収"], skill5:["","ディアラハン","地獄の業火","フォッグブレス","ハマダイン"],elements:["Resist","Weak","","","Drain","",""],type:"攻擊"            },
            {                name:'Beiji-Weng',    name_tw:'北斗星君', name_en:'Beiji-Weng',           rarity:4,                grade:69, icon:'hakaisin_hokutoseikun.png', skills:["氷結ブースタ","ブフダイン","絶対零度"], skill4:["リカーム","マハブフダイン","バリア","呪い無効","氷結反射"], skill5:["","破魔耐性","マハザン","ブフ","乱れ狂い"],elements:["","Weak","Null","","","Resist",""],type:"攻擊"            },
            {                name:'Wu Kong',  name_tw:'齊天大聖', name_en:'Wu Kong',             rarity:4,                grade:61, icon:'hakaisin_seitentaisei.png', skills:["物理ブースタ","挑発","鬼神楽"], skill4:["チャージ","ティタノマキア","アウトブレイク","三段の恵体","物理無効"], skill5:["","裁きの雷火","ヘルズアイ","マハラギ","毒追撃"],elements:["Resist","Resist","","Weak","Resist","Resist","Weak"],type:"攻擊"            },
            {                name:'Ares',           name_tw:'阿瑞斯', name_en:'Ares',    rarity:3,                grade:44, icon:'hakaisin_aresu.png', skills:["金剛発破","反撃","地獄の業火"], skill4:["デクンダ","怪力乱神","チャージ","コロシの愉悦","物理耐性"], skill5:["","地獄のマスク","セクシーダンス","シバブオン","暴れまくり"],elements:["","","","","","Resist","Weak"],type:"攻擊"            }
        ]
    },
    {
        name:'Dragon',
        name_tw:'Dragon',
        name_en:'Dragon',
        formulas:[
            ['Fury','Avatar'],
            ['Fury','Genma'],
            ['Kishin','Avatar'],
            ['Snake','Holy'],
            ['Fallen','Lady'],
            ['Fallen','Snake'],
            ['Brute','Lady'],
            ['Brute','Snake'],
            ['Wilder','Kishin'],
            ['Haunt','Kishin']
        ],
        devils:[
            {  name:'Huang Long',  name_tw:'黃龍', name_en:'Huang Long',  rarity:5,  grade:88, icon:'ryuusin_kouryu.png' , skills:["二段の猛速","メギドラオン","五行思想"], skill4:["勝利の息吹","エナジードレイン","ラスタキャンディ","スピードスター","呪殺無効"], skill5:["","三段の賢魔","虐殺者","ヘルズアイ","不屈の闘志"],elements:["","Resist","Resist","Resist","Resist","Null",""],type:"支援"   },
            {  name:'Quetzalcoatl',  name_tw:'羽蛇神', name_en:'Quetzalcoatl',  rarity:5,  grade:80, icon:'ryuusin_kezuarukatoru.png' , skills:["マハラギダイン","マハザンダイン","セアカトルの再臨"], skill4:["毒無効","マハンマダイン","コンセントレイト","タルンダオート","物理反射"], skill5:["","マハブフダイン","追い打ち","魔封無効","マハムドダイン"],elements:["Resist","Resist","","","Resist","Resist","Weak"],type:"攻擊"   },
            {  name:'Gucumatz',  name_tw:'庫庫爾坎', name_en:'Gucumatz',  rarity:4,  grade:69, icon:'ryuusin_gukumatu.png' , skills:["ヒートウェイブ","アイスブレス","タルンダオート"], skill4:["野生の勘","ウィンドブレス","フォッグブレス","テトラカシフト","火炎無効"], skill5:["","怪力乱神","タルンダ","猛反撃","メディラ"],elements:["","Weak","Resist","","Resist","",""],type:"支援"   },
            {  name:'Seiryu',  name_tw:'青龍', name_en:'Seiryu',  rarity:4,  grade:63, icon:'ryuusin_seiryuu.png' , skills:["衝撃ブースタ","ザンダイン","龍の反応"], skill4:["二段の猛速","怪力乱神","コンセントレイト","勝利のチャクラ","衝撃反射"], skill5:["","マハザンダイン","空間殺法","ジオダイン","マカラコワース"],elements:["","","Resist","Weak","Null","",""],type:"攻擊"   },
            {  name:'Illuyanka',  name_tw:'伊虛延卡', name_en:'Illuyanka',  rarity:3,  grade:47, icon:'ryuusin_iruruyankasyu.png' , skills:["アイスブレス","ザンマ","龍の反応"], skill4:["ブフダイン","マハザンマ","溶解ブレス","二段の賢魔","衝撃無効"], skill5:["","ヒートウェイブ","見切り","ハマオン","野生の勘"],elements:["","","Resist","","Resist","",""],type:"攻擊"   },
            {  name:'Makara',  name_tw:'摩伽羅', name_en:'Makara',  rarity:3,  grade:41, icon:'ryuusin_makara.png' , skills:["マカラコワース","マハブフ","タルンダ"], skill4:["虚弱無効","メギド","マカラカーン","三分の活泉","火炎耐性"], skill5:["","ブフーラ","反撃","精神漏出","甘噛み"],elements:["","Weak","Resist","","","",""],type:"支援"   },
            {  name:'Patrimpas',  name_tw:'帕托利姆帕斯', name_en:'Patrimpas',  rarity:2,  grade:35, icon:'ryuusin_patorimupasu.png' , skills:["リカーム","ディアラマ","テトラジャ"], skill4:["自然治癒","ウィンドブレス","アムリタ","食いしばり","火炎耐性"], skill5:["","","","",""],elements:["","Weak","Resist","","Resist","","Weak"],type:"回復"   }
        ]
    },
    {
        name:'Lady',
        name_tw:'Lady',
        name_en:'Lady',
        formulas:[
            ['Holy','Avian'],      //180419 add
            //['Fury','Genma'],    //180713 remove
            ['Dragon','Snake'],        //180713 add
            ['Kishin','Megami'],
            ['Kishin','Avian'],      //180419 add
            ['Kishin','Holy'],
            ['Kishin','Fury'],
            ['Fallen','Herald'],
            ['Brute','Fury'],
            ['Femme','Deity'],
            //['Femme','Holy'],      //180419 remove
            ['Femme','Fury'],
            ['Femme','Kishin'],
            //['Vile','Night'],      //180419 remove
            ['Tyrant','Femme'],
            ['Tyrant','Night']
        ],
        devils:[
            {   name:'Asherah',    name_tw:'亞舍拉', name_en:'Asherah', rarity:5,        grade:83, icon:'tibosin_asyerato.png', skills:["メディラマ","サマリカーム","マハラギオン"], skill4:["混沌の海","トリスアギオン","静寂の祈り","回復ハイブースタ","氷結反射"], skill5:["","審判の光","地獄のマスク","二段の強運","緊縛追撃"],elements:["","Null","Weak","","Null","","Weak"], type:"回復"            },
            {   name:'Skadi',      name_tw:'絲卡蒂', name_en:'Skadi', rarity:4,        grade:67, icon:'tibosin_sukadei.png', skills:["マハマカジャマ","魔封追撃","マハムドオン"], skill4:["二段の強運","絶対零度","マカラコワース","狂い咲き","火炎耐性"], skill5:["","放電","二段の剛力","メディラ","電撃耐性"],elements:["","Weak","Drain","","","",""], type:"支援"             },
            {                name:'Kikuri-Hime',     name_tw:'菊理媛', name_en:'Kikuri-Hime',          rarity:4,                grade:60, icon:'tibosin_kikurihime.png', skills:["リディア","マハラギオン","マリンカリオン"], skill4:["二段の恵体","アギダイン","ディアラマ","テトラカシフト","呪殺耐性"],skill5:["","火炎耐性","マハポイズマオン","捨て身の一撃","ラクカジャ"], elements:["","","","Weak","Null","","Weak"], type:"回復"            },
            {                name:'Isis',        name_tw:'伊西斯',  name_en:'Isis',      rarity:3,                grade:54, icon:'tibosin_isisu.png', skills:["サマリカーム","ザンダイン","マハマカジャマ"], skill4:["二分の魔脈","マハザン","メウィークディ","追い打","衝撃無効"], skill5:["","初段の剛力","百発百中","メチャームディ","ザン"],elements:["","Resist","","Null","","",""], type:"支援"            },
            {                name:'Kushinada-Hime',   name_tw:'奇稻田姬', name_en:'Kushinada-Hime',            rarity:3,                grade:47, icon:'tibosin_kusinabihime.png', skills:["ディアラ","回復ブースタ","マハンマ"], skill4:["メディア","ハマオン","リディア","自然治癒","破魔無効"], skill5:["","ムド","マハラギ","メパララディ","ジオ"],elements:["","","","","","Resist","Weak"], type:"回復"            },
            {                name:'Pele',          name_tw:'佩蕾', name_en:'Pele',     rarity:3,                grade:40, icon:'tibosin_pere.png', skills:["メポズムディ","アギラオ","毒無効"], skill4:["ディアラ","マハラギオン","リカーム","二段の強運","物理耐性"], skill5:["","メウィークディ","マハザン","毒床歩き","初段の賢魔"],elements:["","Resist","Weak","","","",""], type:"回復"            }
        ]
    },
    {
        name:'Kishin',
        name_tw:'Kishin',
        name_en:'Kishin',
        formulas:[
            ['Genma','Avatar'],
            ['Fury','Holy'],
            ['Fury','Avian'],     //180419 add
            //['Yoma','Megami'],        //180419 remove
            ['Snake','Avian'],      //180419 add
            //['Snake','Holy'],        //180713 remove
            ['Brute','Avian'],      //180419 add
            ['Brute','Deity'],
            ['Brute','Avatar'],
            ['Femme','Snake'],
            ['Night','Lady'],
            //['Night','Brute'],        //180419 remove
            ['Vile','Snake'],
            ['Foul','Deity'],
            ['Tyrant','Snake']
        ],
        devils:[
            {                name:'Thor',          name_tw:'索爾', name_en:'Thor',     rarity:5,                grade:83, icon:'kisin_toru.png', skills:["メガトンレイド","チャージ","ミョルニル"], skill4:["マハジオダイン","ギガントマキア","リベリオン","電撃貫通","火炎反射"], skill5:["","マハンマダイン","マハマリカリオン","イービルアイ","マハマリンカリン"],elements:["Resist","Null","","Drain","Weak","Resist",""], type:"攻擊"            },
            {                name:'Zhong Kui',        name_tw:'鍾馗', name_en:'Zhong Kui',       rarity:4,                grade:75, icon:'kisin_syouki.png', skills:["地獄のマスク","タルカオート","鬼神楽"], skill4:["魔封無効","メガトンレイド","デゾレトオン","威圧の構え","物理耐性"], skill5:["","マハムドダイン","毒床渡り","魔封追撃","マハンマオン"],elements:["","Resist","","","Weak","Resist",""], type:"攻擊"            },
            {                name:'Bishamonten',   name_tw:'毘沙門天', name_en:'Bishamonten',           rarity:4,                grade:70, icon:'kisin_bisyamonten.png', skills:["破魔耐性","ブフダイン","怪力乱神"], skill4:["タルカジャ","冥界破","ディスコード","追い打ち","呪殺耐性"], skill5:["","エナジードレイン","マカジャマオン","メチャームディ","衝撃耐性"],elements:["","Weak","Null","","","",""], type:"攻擊"            },
            {                name:'Jikokuten',       name_tw:'持國天', name_en:'Jikokuten',        rarity:4,                grade:62, icon:'kisin_jikokuten.png', skills:["マハザンマ","冥界破","食いしばり"], skill4:["ザンダイン","メガトンレイド","マハシバブオン","三分の活泉","火炎無効"], skill5:["","バインドクロー","メディアラハン","ホワイトノイズ","吸血"],elements:["","","","Weak","Null","Resist",""], type:"攻擊"            },
            {                name:'Koumokuten',     name_tw:'廣目天', name_en:'Koumokuten',          rarity:3,                grade:50, icon:'kisin_koumokuten.png', skills:["ジオンガ","テトラコワース","冥界破"], skill4:["メガトンプレス","ジオダイン","スクカジャ","反撃","物理耐性"], skill5:["","初段の強運","マハブフ","コロシの愉悦","ブフ"],elements:["","","","Null","Weak","Resist",""], type:"攻擊"            },
            {                name:'Zouchouten',   name_tw:'增長天', name_en:'Zouchouten',            rarity:3,                grade:41, icon:'kisin_zoutyouten.png', skills:["ラクカジャ","金剛発破","アギラオ"], skill4:["チャージ","ファイアブレス","挑発","毒床無効","呪殺耐性"], skill5:["","地獄のマスク","初段の剛力","メチャームディ","メチャームディ"],elements:["","Null","Weak","","","Resist",""], type:"攻擊"            },
            {                name:'Take-Minakata',     name_tw:'建御名方', name_en:'Take-Minakata',          rarity:2,                grade:27, icon:'kisin_takeminakata.png', skills:["反撃","ジオンガ","鬼神楽"], skill4:["電撃ブースタ","放電","メパララディ","一分の魔脈","呪殺耐性"], skill5:["","ザン","百発百中","突撃","マハブフ"],elements:["","Weak","","Resist","","",""], type:"攻擊"            }
        ]
    },
    {
        name:'Divine',
        name_tw:'Divine',
        name_en:'Divine',
        formulas:[
            ['Genma','Megami'],
            ['Yoma','Holy'],
            ['Fairy','Avatar'],
            ['Fallen','Avatar'],
            ['Fallen','Fairy'],
            ['Femme','Brute'],
            ['Night','Fairy'],
            ['Night','Femme'],
            ['Foul','Herald'],
            ['Foul','Snake'],
            ['Haunt','Avatar'],
            ['Haunt','Holy']
        ],
        devils:[
            {                name:'Throne',         name_tw:'座天使', name_en:'Throne',      rarity:4,                grade:60, icon:'tensi_sorone.png', skills:["電撃耐性","マハラギオン","ダークゾーン無効"], skill4:["メディラ","マハンマオン","ディアラハン","寸分の見切り","氷結無効"], skill5:["","雄叫び","氷結耐性","デスタッチ","野生の勘"],elements:["","Null","Weak","","","Null","Weak"], type:"攻擊"            },
            {                name:'Dominion',     name_tw:'主天使', name_en:'Dominion',          rarity:3,                grade:53, icon:'tensi_dominion.png', skills:["メカースディ","呪い無効","マハジオンガ"], skill4:["メギド","ジオダイン","常世の祈り","魔封無効","電撃無効"], skill5:["","メチャームディ","スラッシュ","初段の恵体","ブフ"],elements:["","","","Resist","Weak","Null","Weak"], type:"回復"            },
            {                name:'Virtue',    name_tw:'力天使', name_en:'Virtue',           rarity:3,                grade:47, icon:'tensi_vatya.png', skills:["メクロズディ","魔封無効","ハマオン"], skill4:["バリア","審判の光","コンセントレイト","スクカオート","氷結無効"], skill5:["","マハジオ","アギ","初段の強運","初段の猛速"],elements:["","","","Weak","Null","Null","Weak"], type:"回復"            },
            {                name:'Power',          name_tw:'能天使', name_en:'Power',     rarity:3,                grade:40, icon:'tensi_pawa.png', skills:["メディア","メギド","絶命剣"], skill4:["ディアラ","マハジオンガ","リベリオン","暗殺者","衝撃耐性"], skill5:["","メパララディ","ムド","初段の賢魔","自然治癒"],elements:["","","","Resist","Weak","Null","Weak"], type:"攻擊"            },
            {                name:'Principality',   name_tw:'權天使', name_en:'Principality',            rarity:2,                grade:35, icon:'tensi_purinsiparitei.png', skills:["リカーム","ハマオン","ブフ"], skill4:["メディア","審判の光","カースディ","破魔ブースタ","呪殺耐性"], skill5:["","初段の賢魔","メウィークディ","毒床歩き","マハザン"], elements:["","","","","","Null","Weak"], type:"回復"            },
            {                name:'Archangel',   name_tw:'Herald', name_en:'Archangel',            rarity:2,                grade:25, icon:'tensi_akuenjyeru.png', skills:["タルカジャ","アギ","ハマ"], skill4:["ヒートウェイブ","アギラオ","リディアコワース","百発百中","物理耐性"], skill5:["","ザン","初段の賢魔","ブフ","百発百中"],elements:["","","","","","Null","Weak"], type:"攻擊"            },
            {                name:'Angel',         name_tw:'Divine', name_en:'Angel',      rarity:2,                grade:20, icon:'tensi_enjyeru.png', skills:["ハマ","マハンマ","ディアラ"], skill4:["ラクカジャ","審判の光","チャームディ","魔封無効","電撃耐性"], skill5:["","クロズディ","アギ","メチャームディ","マハブフ"],elements:["","","","Weak","","Null","Weak"], type:"回復"            }
        ]
    },
    {
        name:'Yoma',
        name_tw:'Yoma',
        name_en:'Yoma',
        formulas:[
            ['Genma','Holy'],
            ['Kishin','Genma'],
            //['Fairy','Snake'],        //180419 remove
            ['Fallen','Genma'],
            ['Brute','Divine'],
            ['Vile','Avian'],      //180419 add
            ['Vile','Holy'],
            ['Wilder','Genma'],
            ['Foul','Night'],
            ['Foul','Fury'],
            ['Tyrant','Genma'],
            ['Haunt','Divine']
        ],
        devils:[
            {                name:'Ganesha',     name_tw:'象頭神', name_en:'Ganesha',          rarity:4,                grade:66, icon:'youma_ganesya.png', skills:["怪力乱神","チャージ","ラクカジャ"], skill4:["捨て身の一撃","メガトンレイド","挑発","物理ブースタ","呪殺無効"], skill5:["","メポズムディ","マハザンダイン","天罰","デゾレト"],elements:["Resist","","","Weak","Null","","Weak"], type:"攻擊"            },
            {                name:'Efreet',     name_tw:'伊弗利特', name_en:'Efreet',          rarity:3,                grade:52, icon:'youma_ihurito.png', skills:["アギラオ","火炎ブースタ","マハラギ"], skill4:["アギダイン","地獄の業火","メクロズディ","追い打ち","電撃耐性"], skill5:["","なぎ払い","ヒートウェイブ","ザン","アウトブレイク"],elements:["","Drain","Weak","","","",""], type:"攻擊"            },
            {                name:'Valkyrie',   name_tw:'女武神', name_en:'Valkyrie',            rarity:3,                grade:40, icon:'youma_varukiri.png' , skills:["マハンマ","絶命剣","物理ブースタ"], skill4:["ヒートウェイブ","デスバウンド","テトラコワース","三分の活泉","電撃耐性"], skill5:["","メウィークディ","スラッシュ","クロズディ","ウィークディ"],elements:["Resist","","","Weak","Resist","",""], type:"攻擊"           },
            {                name:'Dis',       name_tw:'迪絲', name_en:'Dis',        rarity:2,                grade:34, icon:'youma_deisu.png', skills:["マカジャマ","アギラオ","ザン"], skill4:["メディラ","メギド","バリアコワース","魔封追撃","衝撃耐性"], skill5:["","チャームディ","初段の賢魔","初段の恵体","マハムド"],elements:["","","Resist","Resist","","","Weak"], type:"回復"            },
            {                name:'Apsaras',     name_tw:'飛天女神', name_en:'Apsaras',          rarity:1,                grade:11, icon:'youma_apusarasu.png', skills:["ポズムディ","ブフ",""], skill4:["ディアラ","ブフーラ","メチャームディ","初段の猛速","電撃耐性"], skill5:["","メポズムディ","マハブフ","野生の勘","見切り"],elements:["","Weak","Resist","","","",""], type:"回復"            },
            {                name:'Koppa Tengu',   name_tw:'木葉天狗', name_en:'Koppa Tengu',            rarity:1,                grade:7, icon:'youma_kopatengu.png', skills:["毒床歩き","ザン",""], skill4:["ウィンドブレス","ザンマ","タルンダ","野生の勘","火炎耐性"], skill5:["","チャームディ","メクロズディ","マハジオ","パララディ"],elements:["","","","Weak","Resist","",""], type:"攻擊"            },
            {                name:'Agathion',     name_tw:'阿珈席翁', name_en:'Agathion',         rarity:1,                grade:5, icon:'youma_agasion.png', skills:["カースディ","ジオ",""], skill4:["マハジオ","ヒートウェイブ","クロズディ","初段の強運","呪殺耐性"], skill5:["","マハラギ","メクロズディ","ザン","初段の強運"],elements:["","Resist","Weak","Resist","","","Weak"], type:"攻擊"            }
        ]
    },
    {
        name:'Snake',
        name_tw:'Snake',
        name_en:'Snake',
        formulas:[
            ['Dragon','Fallen'],  //180713 add
            ['Dragon','Vile'],    //180713 add
            ['Dragon','Foul'],    //180713 add
            ['Divine','Avian'],      //180419 add
            //['Divine','Avatar'],        //180419 remove
            ['Yoma','Genma'],
            //['Beast','Avatar'],        //180419 remove
            ['Fairy','Holy'],
            ['Fairy','Genma'],
            ['Fallen','Avian'],    //180419 add
            ['Brute','Fallen'],
            ['Night','Divine'],
            ['Foul','Genma'],
            ['Foul','Yoma'],
            ['Tyrant','Fury'],
            ['Tyrant','Foul']
            //['Haunt','Kishin']     //180713 remove
        ],
        devils:[
            {                name:'Ananta',      name_tw:'阿南塔', name_en:'Ananta',         rarity:5,                grade:83, icon:'ryuuou_ananta.png' , skills:["ディアラハン","スクカオート","ラクカオート"], skill4:["天罰","マハブフダイン","マハポイズマオン","タルカオート","氷結吸収"], skill5:["","ギガントマキア","マハザンダイン","モータルジハード","鬼神楽"],elements:["","","Null","Null","Weak","Null",""], type:'支援'           },
            {                name:'Yurlungur',      name_tw:'虹蛇', name_en:'Yurlungur',         rarity:4,                grade:70, icon:'ryuuou_yurungu.png', skills:["マハシバブー","サマリカーム","マハブフーラ"], skill4:["三段の強運","ブフダイン","ディアラマ","毒無効","火炎耐性"], skill5:["","溶解ブレス","リカームドラ","毒追撃","マハンマ"], elements:["","Weak","Null","Resist","","","Weak"], type:'支援'            },
            {                name:'Orochi',    name_tw:'八岐大蛇', name_en:'Orochi',           rarity:4,                grade:61, icon:'ryuuou_yamatanooroti.png', skills:["ブフダイン","メガトンプレス","毒床無効"], skill4:["バリア","アギダイン","リカームドラ","タルカオート","破魔無効"], skill5:["","毒床歩き","デカジャ","吸魔","ミナゴロシの愉悦"],elements:["","Null","Null","Weak","","",""], type:"攻擊"            },
            {                name:'Gui Xian',        name_tw:'玄武', name_en:'Gui Xian',       rarity:3,                grade:45, icon:'ryuuou_genbu.png', skills:["ブフーラ","マハブフーラ","氷結ブースタ"], skill4:["ラクカジャ","ブフダイン","マカラコワース","勝利の息吹","物理耐性"], skill5:["","毒床歩き","初段の剛力","スラッシュ","乱れ狂い"],elements:["","Weak","Null","","","",""], type:'攻擊'            },
            {                name:'Naga',        name_tw:'那迦', name_en:'Naga',       rarity:2,                grade:28, icon:'ryuuou_naga.png', skills:["絶命剣","ブフーラ","百発百中"], skill4:["リベリオン","デスバウンド","デゾレト","二分の活泉","氷結無効"], skill5:["","突撃","見切り","メポズムディ","ヒートウェイブ"],elements:["","Weak","Resist","Resist","Weak","","Weak"], type:"攻擊"            },
            {                name:'Nozuchi',        name_tw:'野槌', name_en:'Nozuchi',       rarity:1,                grade:15, icon:'ryuuou_nozuti.png', skills:["一分の活泉","マハジオ",""], skill4:["暴れまくり","ジオンガ","カースディ","百発百中","火炎耐性"], skill5:["","マハザン","メチャームディ","なぎ払い","パララディ"],elements:["Resist","Weak","Resist","Resist","Weak","","Weak"],type:"攻擊"            }
        ]
    },
    {
        name:'Beast',
        name_tw:'Beast',
        name_en:'Beast',
        formulas:[
            ['Dragon','Deity'],    //180713 add
            ['Dragon','Wilder'],    //180713 add
            ['Snake','Herald'],
            ['Snake','Avatar'],
            ['Fallen','Kishin'],
            //['Fallen','Snake'],  //180713 remove
            ['Brute','Genma'],
            //['Brute','Snake'],    //180713 remove
            ['Wilder','Avatar'],
            ['Wilder','Night'],
            ['Foul','Wilder'],
            ['Tyrant','Holy'],
            ['Haunt','Avian'],      //180419 add
            ['Haunt','Fury'],
            ['Haunt','Tyrant']
        ],
        devils:[
            {                name:'Cerberus',     name_tw:'地獄犬', name_en:'Cerberus',          rarity:4,                grade:61, icon:'majyuu_keruberosu.png', skills:["アギダイン","地獄の獰爪","雄叫び"], skill4:["二分の活泉","ファイアブレス","マハデゾレトオン","追い打ち","物理耐性"], skill5:["","緊縛追撃","反撃","ヒートウェイブ","初段の猛速"],elements:["","Repel","Weak","","","",""], type:'攻擊'            },
            {                name:'Ammut',     name_tw:'阿米特', name_en:'Ammut',          rarity:3,                grade:44, icon:'majyuu_aman.png', skills:["リベリオン","デスタッチ","狂乱の剛爪"], skill4:["二段の猛速","暴飲暴食","雄叫び","魅了無効","氷結耐性"], skill5:["","ジオ","暴れまくり","初段の恵体","マハブフ"],elements:["","","Weak","Null","","",""], type:'攻擊'            },
            {                name:'Orthrus',     name_tw:'雙頭犬', name_en:'Orthrus',          rarity:2,                grade:35, icon:'majyuu_orutorosu.png', skills:["アギラオ","丸かじり","マハラギ"], skill4:["金剛発破","ファイアブレス","リカーム","緊縛耐性","電撃耐性"], skill5:["","メクロズディ","ウィークディ","初段の剛力","ヒートウェイブ"],elements:["","Null","Weak","","","","Resist"], type:'攻擊'            },
            {                name:'Nekomata',       name_tw:'貓怪', name_en:'Nekomata',      rarity:1,                grade:14, icon:'majyuu_nekomata.png', skills:["チャームディ","マハザン",""], skill4:["スクカジャ","ザンマ","アムリタ","魅了耐性","氷結耐性"], skill5:["","マハブフ","乱れ狂い","暴れまくり","マハンマ"],elements:["","Resist","Weak","Weak","Resist","",""], type:'支援'            },
            {                name:'Inugami',       name_tw:'犬神', name_en:'Inugami',        rarity:1,                grade:9, icon:'majyuu_inugami.png', skills:["アギ","パララディ",""], skill4:["マハラギ","アギラオ","ラクンダ","緊縛耐性","呪殺耐性"], skill5:["","地獄のマスク","初段の賢魔","メパララディ","ムド"],elements:["","Resist","	Weak","","","",""], type:'支援'            },
            {                name:'Cu Sith',       name_tw:'犬妖', name_en:'Cu Sith',        rarity:1,                grade:3, icon:'majyuu_kasi.png', skills:["スラッシュ","アギ",""], skill4:["アムリタ","甘噛み","タルカジャ","一分の活泉","火炎耐性"], skill5:["","ポズムディ","地獄のマスク","初段の猛速","ディア"],elements:["","","","","","Null",""], type:'支援'            }
        ]
    },
    {
        name:'Fairy',
        name_tw:'Fairy',
        name_en:'Fairy',
        formulas:[
            ['Yoma','Avatar'],
            ['Yoma','Divine'],
            ['Snake','Megami'],
            ['Snake','Divine'],
            ['Beast','Genma'],
            ['Femme','Megami'],
            ['Night','Holy'],
            ['Night','Snake'],
            ['Night','Beast'],
            ['Wilder','Divine'],
            ['Wilder','Brute'],
            ['Foul','Kishin'],
            ['Tyrant','Avian']      //180419 add
        ],
        devils:[
            {                name:'Oberon',        name_tw:'奧伯隆',  name_en:'Oberon',      rarity:4,                grade:67, icon:'yousei_oberon.png', skills:["衝撃ブースタ","ザンダイン","マハマリカリオン"], skill4:["マカラカーン","ツイスター","メチャームディ","スクカオート","氷結耐性"], skill5:["","スラッシュ","初段の恵体","タルカジャ","吸魔"],elements:["","","","Weak","Drain","",""], type:"攻擊"            },
            {                name:'Titania',    name_tw:'提泰妮婭', name_en:'',           rarity:4,                grade:62, icon:'yousei_teitania.png', skills:["電撃ブースタ","マハジオンガ","マカジャマオン"], skill4:["二分の魔脈","ショックウェーブ","デゾレトオン","追い打ち","物理耐性"], skill5:["","タルンダ","マハムド","絶命剣","放電"],elements:["","","","","","Resist","Resist"], type:"支援"            },
            {                name:'Setanta',        name_tw:'瑟坦特', name_en:'',       rarity:3,                grade:47, icon:'yousei_setanta.png', skills:["鬼神楽","千発千中","金剛発破"], skill4:["デスバウンド","ザンマ","タルカジャ","狂戦士","電撃耐性"], skill5:["","初段の恵体","ジオ","カースディ","ヒートウェイブ"],elements:["","","","Weak","Null","","Weak"], type:"攻擊"           },
            {                name:'Silky',        name_tw:'希路奇', name_en:'',       rarity:3,                grade:42, icon:'yousei_siruki.png', skills:["メウィークディ","虚弱無効","ブフダイン"], skill4:["メディラ","マハブフーラ","リディア","奈落のマスク","衝撃無効"], skill5:["","コロシの愉悦","なぎ払い","毒床歩き","野生の勘"],elements:["","Weak","Null","","","",""], type:"支援"            },
            {                name:'Kelpie',        name_tw:'凱爾皮', name_en:'',       rarity:2,                grade:35, icon:'yousei_kerupi.png', skills:["ディアラ","ジオンガ","暴れまくり"], skill4:["ダークゾーン無効","吸魔","リディア","野生の勘","呪殺耐性"], skill5:["","百発百中","マハジオ","百発百中","ジオ"],elements:["","","Resist","","Weak","",""], type:"回復"            },
            {                name:'High Pixie',      name_tw:'高等皮克希', name_en:'',         rarity:2,                grade:24, icon:'yousei_hiipikusi.png', skills:["デゾレト","メディア","マハジオ"], skill4:["リディア","放電","ディアラ","乱れ狂い","破魔耐性"], skill5:["","初段の賢魔","ムド","アギ","初段の剛力"],elements:["","","","","Resist","",""], type:"回復"            },
            {                name:'Pyro Jack',  name_tw:'燈籠傑克', name_en:'',             rarity:1,                grade:13, icon:'yousei_jyakurantan.png', skills:["アギ","マハラギ",""], skill4:["アギラオ","ファイアブレス","バトンタッチ","一分の魔脈","衝撃耐性"], skill5:["","マハンマ","クロズディ","初段の賢魔","自然治癒"],elements:["","Resist","Weak","","","",""], type:"攻擊"            },
            {                name:'Jack Frost',  name_tw:'冰霜傑克', name_en:'',             rarity:1,                grade:7, icon:'yousei_jyakufurosuto.png', skills:["ブフ","マハブフ",""], skill4:["ハマ","ブフーラ","バトンタッチ","反撃","電撃耐性"], skill5:["","メカースディ","自然治癒","見切り","パララディ"],elements:["","Weak","Resist","","","",""], type:"攻擊"            },
            {                name:'Pixie',         name_tw:'皮克希', name_en:'',      rarity:1,                grade:2, icon:'yousei_pikusi.png' , skills:["ザン","ディア",""], skill4:["回復ブースタ","マハジオ","メディア","魔封耐性","破魔耐性"], skill5:["","初段の賢魔","メカースディ","メチャームディ","地獄のマスク"],elements:["","","","Resist","","","Weak"], type:"回復"           }
        ]
    },
    {
        name:'Fallen',
        name_tw:'Fallen',
        name_en:'Fallen',
        formulas:[
            ['Dragon','Fury'],  //180713 add
            ['Dragon','Tyrant'],    //180713 add
            ['Deity','Herald'],
            ['Beast','Divine'],
            ['Beast','Yoma'],
            ['Brute','Beast'],
            ['Night','Herald'],
            ['Night','Megami'],
            ['Vile','Genma'],
            ['Vile','Divine'],
            ['Wilder','Femme'],
            ['Foul','Megami'],
            ['Foul','Divine'],
            ['Haunt','Herald']
        ],
        devils:[
            {                name:'Samael',       name_tw:'薩麥爾', name_en:'',        rarity:5,                grade:84, icon:'datensi_samaeru.png', skills:["勝利のチャクラ","メシアライザー","エナジードレイン"], skill4:["デスカウンター","煉獄","テトラカーン","無限のチャクラ","火炎無効"], skill5:["","ファイアブレス","アギラオ","丸かじり","回復ブースタ"],elements:["","","","Weak","","Repel","Repel"], type:'支援'            },
            {                name:'Dantalian',   name_tw:'但他林', name_en:'',            rarity:4,                grade:70, icon:'datensi_dantarian.png', skills:["マカラカーン","フォッグブレス","ハマダイン"], skill4:["二分の魔脈","暴飲暴食","バインドボイス","マカラカシフト","呪殺反射"], skill5:["","バインドボイス","アイスブレス","挑発","二段の強運"],elements:["","Resist","Resist","Weak","Null","Weak","Resist"], type:'支援'            },
            {                name:'Ose',          name_tw:'歐賽', name_en:'',     rarity:3,                grade:54, icon:'datensi_ose.png', skills:["冥界破","マハジオンガ","チャージ"], skill4:["猛反撃","メガトンプレス","テトラカーン","二段の剛力","物理無効"], skill5:["","アギ","チャームディ","メディア","乱れ狂い"],elements:["","","","","","","Resist"], type:'攻擊'            },
            {                name:'Forneus',   name_tw:'佛鈕司', name_en:'',            rarity:3,                grade:41, icon:'datensi_huoruneosu.png', skills:["ブフーラ","マハジオ","フォッグブレス"], skill4:["電撃耐性","マハブフーラ","マハシバブー","氷結ブースタ","破魔無効"], skill5:["","初段の猛速","メクロズディ","ジオ","チャームディ"],elements:["","","Drain","Weak","","","Null"], type:'支援'            },
            {                name:'Decarabia',     name_tw:'丹卡拉比', name_en:'',          rarity:2,                grade:23, icon:'datensi_dekarabia.png', skills:["マハラギ","マハブフ","ブフ"], skill4:["マリンカリン","アギラオ","メクロズディ","魔封耐性","氷結耐性"], skill5:["","ディア","マハジオ","ポズムディ","パララディ"],elements:["","","","","","	Weak","Resist"], type:'攻擊'            },
            {                name:'Eligor',     name_tw:'埃力格', name_en:'',          rarity:1,                grade:10, icon:'datensi_erigoru.png', skills:["ムド","なぎ払い",""], skill4:["食いしばり","絶命剣","ラクカジャ","反撃","破魔耐性"], skill5:["","ディア","初段の賢魔","チャームディ","チャームディ"],elements:["Resist","","","Weak","","","Null"], type:'攻擊'            },
            {                name:'Melchom',       name_tw:'梅爾克', name_en:'',        rarity:1,                grade:4, icon:'datensi_merukomu.png', skills:["ディア","アギ",""], skill4:["ファイアブレス","マハラギ","カースディ","一分の魔脈","物理耐性"], skill5:["","毒床歩き","コロシの愉悦","スラッシュ","ムド"],elements:["","Resist","Weak","","Weak","Weak","Resist"], type:'回復'            }
        ]
    },
    {
        name:'Brute',
        name_tw:'Brute',
        name_en:'Brute',
        formulas:[
            ['Yoma','Herald'],
            ['Beast','Snake'],
            ['Fairy','Fury'],
            ['Fairy','Kishin'],
            ['Femme','Avian'],      //180419 add
            ['Femme','Yoma'],
            ['Vile','Fairy'],
            ['Vile','Fallen'],
            ['Vile','Femme'],
            ['Wilder','Holy'],
            ['Haunt','Snake'],
            ['Haunt','Fallen'],
            ['Haunt','Foul']
        ],
        devils:[
            {                name:'Ongyo-Ki',     name_tw:'隱形鬼', name_en:'',          rarity:4,                grade:68, icon:'youki_ongyouki.png', skills:["暗夜剣","ラクカオート","マハブフーラ"], skill4:["デスタッチ","虚空爪激","アウトブレイク","デスカウンター","呪殺無効"], skill5:["","反撃","魅了追撃","初段の強運","ウィンドブレス"],elements:["Resist","","Resist","","Resist","Weak",""], type:"攻擊"            },
            {                name:'Berserker',       name_tw:'狂戰士', name_en:'',        rarity:3,                grade:54, icon:'youki_beruseruku.png', skills:["チャージ","暗夜剣","マハブフ"], skill4:["不屈の闘志","メガトンプレス","リベリオン","猛反撃","氷結無効"], skill5:["","ソウルドレイン","初段の賢魔","クロズディ","野生の勘"],elements:["Null","","","","Weak","",""], type:"攻擊"            },
            {                name:'Shiki-Ougi',       name_tw:'式王子', name_en:'',        rarity:3,                grade:49, icon:'youki_sikiouji.png', skills:["魔封耐性","ハマ","ムド"], skill4:["デカジャ","メギド","ラクンダ","追い打ち","氷結耐性"], skill5:["","メウィークディ","マハラギ","祟り","ディア"],elements:["Null","Weak","Weak","","","Resist","Resist"], type:"攻擊"            },
            {                name:'Yomotsu-Ikusa',     name_tw:'黃泉軍', name_en:'',          rarity:3,                grade:41, icon:'youki_yomotuikusa.png', skills:["毒耐性","アイスブレス","マハムドオン"], skill4:["無慈悲な一撃","刹那五月雨撃ち","ジュオン","ミナゴロシの愉悦","破魔耐性"], skill5:["","クロズディ","初段の恵体","メカースディ","メウィークディ"],elements:["","","","","Weak","Weak","Resist"], type:"攻擊"            },
            {                name:'Oni',            name_tw:'鬼', name_en:'',   rarity:2,                grade:27, icon:'youki_oni.png', skills:["テトラコワース","マハラギ","金剛発破"], skill4:["鬼神楽","五月雨斬り","チャージ","コロシの愉悦","衝撃耐性"],skill5:["","ヒートウェイブ","アギ","突撃","ポズムディ"], elements:["","","","Weak","","",""], type:"攻擊"            },
            {                name:'Momunofu',         name_tw:'桃生', name_en:'',      rarity:1,                grade:15, icon:'youki_momunohu.png', skills:["なぎ払い","反撃",""], skill4:["ヒートウェイブ","鬼神楽","デクンダ","食いしばり","衝撃耐性"], skill5:["","見切り","アギ","メポズムディ","初段の恵体"],elements:["Resist","","","","Weak","",""], type:"攻擊"            },
            {                name:'Azumi',          name_tw:'安曇神', name_en:'',     rarity:1,                grade:3, icon:'youki_azumi.png', skills:["パララディ","ブフ",""], skill4:["アイスブレス","マハブフ","ディア","一分の活泉","衝撃耐性"], skill5:["","ジオ","メパララディ","マハジオ","スラッシュ"],elements:["","","Resist","Weak","","",""], type:"回復"            }
        ]
    },
    {
        name:'Femme',
        name_tw:'Femme',
        name_en:'Femme',
        formulas:[
            ['Dragon','Night'],    //180713 add
            ['Yoma','Kishin'],
            ['Snake','Lady'],
            ['Snake','Kishin'],
            ['Beast','Avian'],      //180419 add
            ['Beast','Lady'],
            ['Fallen','Megami'],
            ['Brute','Megami'],
            ['Brute','Holy'],
            ['Brute','Yoma'],
            ['Night','Avian'],      //180419 add
            ['Night','Kishin'],
            ['Haunt','Genma'],
            ['Haunt','Night']
        ],
        devils:[
            {                name:'Rangda',          name_tw:'讓特', name_en:'',    rarity:4,                grade:67, icon:'kijyo_randa.png', skills:["マハジュオン","ムドダイン","マハザンダイン"], skill4:["空間殺法","煉獄","リカームドラ","食いしばり","衝撃無効"], skill5:["","ウィンドブレス","マハブフーラ","デカジャ","吸魔"],elements:["Repel","","","Weak","","",""] , type:"攻擊"           },
            {                name:'Dakini',      name_tw:'荼吉尼', name_en:'',         rarity:3,                grade:53, icon:'kijyo_dakini.png', skills:["バリアコワース","アギラオ","怪力乱神"], skill4:["ポイズマオン","アギダイン","マハマカジャマ","毒無効","氷結耐性"], skill5:["","毒ガスブレス","ショックウェーブ","初段の賢魔","野生の勘"],elements:["Resist","Drain","Weak","","","",""], type:"支援"            },
            {                name:'Mermaid',      name_tw:'美人魚', name_en:'',         rarity:3,                grade:42, icon:'kijyo_mameido.png', skills:["アイスブレス","ウィンドブレス","メディア"], skill4:["セクシーダンス","ブフダイン","メチャームディ","無限のチャクラ","氷結無効"], skill5:["","クロズディ","暴れまくり","パララディ","暴れまくり"],elements:["","","Resist","Weak","Resist","",""] , type:"回復"           },
            {                name:'Yaksini',      name_tw:'夜叉女', name_en:'',         rarity:2,                grade:34, icon:'kijyo_yakusini.png', skills:["呪い耐性","アギラオ","マハザン"], skill4:["刹那五月雨撃ち","ジオンガ","シバブー","初段の剛力","物理耐性"], skill5:["","ハマ","毒床歩き","マハラギ","初段の猛速"],elements:["","","","Weak","Resist","",""], type:"攻擊"            },
            {                name:'Yomotsu-Shikome',    name_tw:'黃泉醜女', name_en:'',           rarity:2,                grade:23, icon:'kijyo_yomotusikome.png', skills:["タルンダ","毒針","ブフーラ"], skill4:["バインドクロー","デスバウンド","ウィークディ","見切り","衝撃耐性"], skill5:["","突撃","アギ","パララディ","ザン"],elements:["","Weak","","","","Weak","Resist"] , type:"支援"           },
            {                name:'Leanan Sidhe',    name_tw:'菈南希', name_en:'',           rarity:1,                grade:12, icon:'kijyo_ryanansi.png', skills:["ディア","ブフ",""], skill4:["メディア","ムドオン","リカーム","毒耐性","衝撃耐性"], skill5:["","自然治癒","ハマ","地獄のマスク","なぎ払い"],elements:["","","","","Weak","",""], type:"回復"            }
        ]
    },
    {
        name:'Night',
        name_tw:'Night',
        name_en:'Night',
        formulas:[
            ['Dragon','Fairy'],    //180713 add
            ['Dragon','Brute'],    //180713 add
            ['Dragon','Femme'],    //180713 add
            ['Divine','Kishin'],
            ['Yoma','Avian'],      //180419 add
            ['Snake','Yoma'],
            ['Fairy','Avian'],      //180419 add
            ['Fairy','Deity'],
            //['Fallen','Lady'],    //180713 remove
            ['Brute','Fairy'],
            ['Femme','Genma'],
            ['Wilder','Deity'],
            //['Wilder','Snake'],      //180419 remove
            ['Wilder','Fallen'],
            //['Tyrant','Yoma'],      //180419 remove
            ['Tyrant','Fairy'],
            ['Tyrant','Wilder'],
            ['Haunt','Wilder']
        ],
        devils:[
            {                name:'Lilith',        name_tw:'莉莉絲', name_en:'',       rarity:5,                grade:80, icon:'yoma_ririsu.png', skills:["マハジオダイン","エナジードレイン","肉体の解放"], skill4:["狂い咲き","精神漏出","サマリカーム","三段の強運","破魔無効"], skill5:["","毒床渡り","タルンダ","煉獄","暗殺者"],elements:["","Resist","Resist","Drain","Weak","Weak","Null"], type:"支援"            },
            {                name:'Succubus',    name_tw:'女夢魔', name_en:'',           rarity:4,                grade:63, icon:'yoma_sakyubasu.png', skills:["マハマリンカリン","魅了追撃","ブフダイン"], skill4:["吸魔","マハジオンガ","マハデゾレト","魅了無効","破魔耐性"], skill5:["","吸血","マハブフーラ","野獣の勘","マハムドオン"],elements:["","Resist","Resist","","","Weak",""], type:"支援"            },
            {                name:'Lilim',        name_tw:'莉莉姆', name_en:'',       rarity:3,                grade:47, icon:'yoma_ririmu.png', skills:["魅了耐性","マハザンマ","マリンカリン"], skill4:["吸魔","ザンダイン","メクロズディ","二段の賢魔","電撃無効"], skill5:["","初段の強運","ブフ","ウィークディ","ジオ"],elements:["","","Weak","","Null","",""], type:"支援"            },
            {                name:'Kaiwan',        name_tw:'迦溫',   name_en:'',     rarity:3,                grade:42, icon:'yoma_kiun.png', skills:["ムドオン","マハムド","呪殺ブースタ"], skill4:["スクカジャ","マハムドオン","マカラコワース","食いしばり","氷結耐性"], skill5:["","初段の賢魔","初段の強運","コロシの愉悦","マハンマ"],elements:["","","Weak","","","Weak","Null"], type:"攻擊"            },
            {                name:'Fomorian',   name_tw:'弗莫爾', name_en:'',            rarity:2,                grade:30, icon:'yoma_huomoria.png' , skills:["マハブフ","金剛発破","ハマオン"], skill4:["追い打ち","ブフーラ","リベリオン","二分の活泉","破魔耐性"], skill5:["","ムド","ザン","ブフ","マハラギ"],elements:["","Weak","Resist","","","",""], type:"攻擊"           },
            {                name:'Incubus',   name_tw:'男夢魔', name_en:'',            rarity:2,                grade:21, icon:'yoma_inkyubasu.png', skills:["マリンカリン","ムドオン","ザン"], skill4:["吸血","マハザン","メパララディ","魅了追撃","氷結耐性"], skill5:["","マハムド","乱れ狂い","地獄のマスク","コロシの愉悦"],elements:["","","","Weak","Resist","",""], type:"支援"            },
            {                name:'Sandman',     name_tw:'睡魔', name_en:'',          rarity:1,                grade:10, icon:'yoma_zandoman.png', skills:["ザン","スラッシュ",""], skill4:["シバブー","暗夜剣","スクンダ","超自然治癒","氷結耐性"], skill5:["","暴れまくり","ポズムディ","マハジオ","毒床歩き"],elements:["","","","Weak","Resist","",""], type:"攻擊"            },
            {                name:'Mokoi',         name_tw:'惡靈', name_en:'',      rarity:1,                grade:5, icon:'yoma_mokoi.png', skills:["ジオ","突撃",""], skill4:["暴れまくり","ジオンガ","ウィークディ","初段の剛力","呪殺耐性"], skill5:["","ムド","ヒートウェイブ","毒床歩き","自然治癒"],elements:["","","","Resist","Weak","",""], type:"攻擊"            }
        ]
    },
    {
        name:'Vile',
        name_tw:'Vile',
        name_en:'Vile',
        formulas:[
            ['Divine','Fury'],
            ['Wilder','Beast'],
            ['Foul','Lady'],
            ['Tyrant','Divine'],
            ['Tyrant','Beast']
        ],
        devils:[
            {                name:'Seth',         name_tw:'賽特', name_en:'',      rarity:5,                grade:84, icon:'jyasin_seto.png', skills:["ザンダイン","ランダマイザ","モータルジハード"], skill4:["ティタノマキア","精神漏出","アウトブレイク","衝撃ハイブースタ","火炎耐性"], skill5:["","マリンカリン","マハマリンカリン","冥界破","ジュ"],elements:["","Weak","","Null","Null","","Drain"], type:'攻擊'            },
            {                name:'Girimehkala',    name_tw:'獨眼魔象', name_en:'',           rarity:4,                grade:67, icon:'jyasin_girimekara.png', skills:["呪殺耐性","反逆の魔象","メガトンプレス"], skill4:["バインドボイス","暴飲暴食","ラクンダ","ミナゴロシの愉悦","衝撃耐性"], skill5:["","審判の光","アギダイン","クロズディ","ブフーラ"],elements:["Repel","","","Weak","Weak","Weak",""], type:'攻擊'            },
            {                name:'Pazuzu',        name_tw:'帕祖祖', name_en:'',       rarity:4,                grade:62, icon:'jyasin_pazusu.png', skills:["火炎耐性","メディラマ","煉獄"], skill4:["ホワイトノイズ","マハムドダイン","サマリカーム","デスカウンター","破魔無効"], skill5:["","魔封耐性","メディア","ザンマ","デスバウンド"],elements:["","","Weak","","Null","","Null"], type:'回復'            },
            {                name:'Arahabaki',    name_tw:'荒霸吐', name_en:'',           rarity:3,                grade:50, icon:'jyasin_arahabaki.png', skills:["メギド","マカラカーン","コンセントレイト"], skill4:["エナジードレイン","アイスブレス","メポズムディ","マカラカシフト","氷結無効"], skill5:["","なぎ払い","乱れ狂い","ムド","メチャームディ"],elements:["Resist","Weak","Weak","Weak","Weak","Resist","Resist"], type:'攻擊'            },
            {                name:'Baphomet',  name_tw:'巴風特', name_en:'',             rarity:3,                grade:41, icon:'jyasin_bahuometo.png', skills:["マハムド","吸血","マハラギ"], skill4:["二分の魔脈","ムドダイン","マハポイズマ","呪殺ブースタ","破魔耐性"], skill5:["","暴れまくり","マハブフ","野生の勘","ジオ"],elements:["","","","","","Weak","Null"], type:'攻擊'            },
            {                name:'Abraxas',  name_tw:'亞布拉薩', name_en:'',             rarity:2,                grade:26, icon:'jyasin_aburakusasu.png', skills:["デクンダ","タルカジャ","ブフーラ"], skill4:["ラクカジャ","金剛発破","アムリタ","地獄のマスク","呪殺無効"], skill5:["","マハラギ","初段の賢魔","マハラギ","乱れ狂い"],elements:["Drain","Weak","Weak","Weak","Weak","Weak","Weak"], type:'支援'            }
        ]
    },
    {
        name:'Wilder',
        name_tw:'Wilder',
        name_en:'Wilder',
        formulas:[
            ['Genma','Herald'],
            ['Dragon','Beast'],    //180713 add
            //['Fairy','Beast'],        //180419 remove
            ['Brute','Herald'],
            ['Femme','Fallen'],
            ['Night','Deity'],
            ['Vile','Yoma'],
            ['Foul','Avian'],      //180419 add
            ['Foul','Beast'],
            ['Foul','Brute'],
            ['Foul','Femme'],
            ['Tyrant','Herald'],
            ['Haunt','Lady'],
            ['Haunt','Yoma'],
            ['Haunt','Beast']
        ],
        devils:[
            {                name:'Fenrir',    name_tw:'芬里爾', name_en:'',           rarity:4,                grade:61, icon:'youjyuu_huenriru.png', skills:["虚空爪激","二段の猛速","タルカオート"], skill4:["丸かじり","冥界破","マカラコワース","スピードスター","衝撃耐性"], skill5:["","呪殺耐性","丸かじり","メウィークディ","ハマ"],elements:["","Weak","Drain","Resist","Weak","",""], type:"支援"            },
            {                name:'Peallaidh',     name_tw:'皮亞雷', name_en:'',          rarity:3,                grade:46, icon:'youjyuu_piarei.png', skills:["マハデゾレト","狂い咲き","マハムドオン"], skill4:["毒ガスブレス","イービルアイ","コンセントレイト","地獄のマスク","破魔耐性"], skill5:["","ジオ","マハラギ","初段の猛速","毒床歩き"],elements:["","Weak","Resist","","","Weak",""], type:"支援"            },
            {                name:'Mothman',     name_tw:'天蛾人', name_en:'',          rarity:3,                grade:41, icon:'youjyuu_mosuman.png', skills:["緊縛耐性","マハジオ","マハシバブー"], skill4:["一分の魔脈","ジオダイン","シバブオン","狂い咲き","火炎無効"], skill5:["","ザン","ヒートウェイブ","見切り","メパララディ"],elements:["","","","Resist","Weak","",""], type:"支援"            },
            {                name:'Nue',         name_tw:'鵺', name_en:'',      rarity:2,                grade:25, icon:'youjyuu_nue.png', skills:["マハジオ","ジオ","丸かじり"], skill4:["バインドクロー","ジオンガ","ラクンダ","初段の剛力","物理耐性"], skill5:["","メカースディ","スラッシュ","ポズムディ","野生の勘"],elements:["","","","Resist","Weak","",""], type:"攻擊"            },
            {                name:'Raijuu',    name_tw:'雷獸', name_en:'',           rarity:2,                grade:20, icon:'youjyuu_raijyuu.png', skills:["虚弱耐性","ジオンガ","放電"], skill4:["食いしばり","バインドクロー","バリアコワース","初段の猛速","電撃無効"], skill5:["","ハマ","クロズディ","初段の恵体","クロズディ"],elements:["","","","Resist","Weak","",""], type:"支援"            },
            {                name:'Bicorn',    name_tw:'雙角獸', name_en:'',           rarity:1,                grade:9, icon:'youjyuu_baikon.png', skills:["突撃","アギ",""], skill4:["マハラギ","ヒートウェイブ","チャームディ","地獄のマスク","破魔耐性"], skill5:["","ディア","メパララディ","メディア","メウィークディ"],elements:["","","","","Weak","","Null"], type:"攻擊"            },
            {                name:'Chagrin',    name_tw:'恰古林', name_en:'',           rarity:1,                grade:4, icon:'youjyuu_tyagurinn.png', skills:["ウィークディ","ジオ",""], skill4:["放電","マハジオ","スクカジャ","初段の猛速","呪殺耐性"], skill5:["","百発百中","暴れまくり","ヒートウェイブ","ポズムディ"],elements:["","Weak","","Resist","","",""], type:"支援"            }
        ]
    },
    {
        name:'Foul',
        name_tw:'Foul',
        name_en:'Foul',
        formulas:[
            ['Fairy','Lady'],
            ['Femme','Divine'],
            ['Femme','Beast'],
            ['Night','Fury'],
            ['Wilder','Fairy'],
            ['Haunt','Brute'],
            ['Haunt','Femme'],
            ['Haunt','Vile']
        ],
        devils:[
            {                name:'Mad Gasser',     name_tw:'毒氣怪客', name_en:'',          rarity:3,                grade:45, icon:'gedou_madogasa.png', skills:["マハポイズマ","毒追撃","ムドダイン"], skill4:["地獄のマスク","デスタッチ","バリアコワース","乱れ狂い","呪殺無効"], skill5:["","ジオ","ハマ","スクカジャ","メチャームディ"],elements:["","","","","","Weak","Resist"],type:"支援"            },
            {                name:'Shadow',          name_tw:'黑影', name_en:'',     rarity:2,                grade:35, icon:'gedou_syadou.png', skills:["ラクンダ","マハジオ","ムド"], skill4:["タルカジャ","ムドオン","デゾレト","初段の猛速","氷結耐性"], skill5:["","地獄のマスク","マハムド","ジオ","初段の強運"],elements:["Resist","","","","Weak","Weak","Null"],type:"支援"            },
            {                name:'Black Ooze',    name_tw:'黑泥怪', name_en:'',           rarity:2,                grade:25, icon:'gedou_burakuuzu.png', skills:["ジュ","ポイズマ","甘噛み"], skill4:["乱れ狂い","デスタッチ","マハジュ","食いしばり","火炎無効"],skill5:["","マハザン","ヒートウェイブ","メウィークディ","メカースディ"], elements:["Resist","","","Weak","","Weak","Null"],type:"支援"            },
            {                name:'Blob',           name_tw:'果凍怪', name_en:'',    rarity:2,                grade:20, icon:'gedou_burobu.png', skills:["ポイズマ","ザン","マハザン"], skill4:["タルンダ","吸魔","マハポイズマ","乱れ狂い","衝撃耐性"], skill5:["","ウィークディ","ブフ","マハムド","ジオ"],elements:["Resist","","Weak","","","Weak","Null"],type:"支援"            },
            {                name:'Phantom',       name_tw:'鬼魅', name_en:'',        rarity:1,               grade:10, icon:'gedou_huantomu.png', skills:["ジオ","ムド","マハジオ"], skill4:["マハジオ","ジオンガ","デカジャ","地獄のマスク","電撃耐性"], skill5:["","初段の強運","パララディ","マハムド","マハブフ"],elements:["Resist","","","","Weak","Weak","Null"],type:"攻擊"            },
            {                name:'Slime',        name_tw:'軟泥怪', name_en:'',       rarity:1,                grade:1, icon:'gedou_suraimu.png', skills:["スラッシュ","一分の活泉",""], skill4:["吸血","吸魔","ポズムディ","反撃","衝撃耐性"], skill5:["","なぎ払い","野生の勘","初段の猛速","毒床歩き"],elements:["Weak","Weak","Weak","Weak","Weak","Weak",""],type:"攻擊"            }
        ]
    },
    {
        name:'Tyrant',
        name_tw:'Tyrant',
        name_en:'Tyrant',
        formulas:[
            ['Genma','Deity'],
            ['Fury','Herald'],
            ['Fury','Deity'],
            ['Dragon','Holy'],    //180713 add
            ['Kishin','Lady'],
            ['Snake','Fury'],
            ['Fallen','Fury'],
            ['Vile','Fury']
        ],
        devils:[
            {                name:'Lucifer',     name_tw:'露西法', name_en:'',          rarity:5,                grade:98, icon:'maou_rusifua.png', skills:["メギドラオン","トリスアギオン","明けの明星"], skill4:["三段の恵体","ティタノマキア","リカームドラ","大虐殺者","破魔吸収"], skill5:["","ムドダイン","魅了無効","電撃ブースタ","マリンカリオン"],elements:["Resist","","","","","Weak","Repel"], type:'攻擊'            },
            {                name:'Mara',         name_tw:'魔羅', name_en:'',      rarity:5,                grade:90, icon:'maou_mara.png', skills:["緊縛無効","ティタノマキア","地獄突き"], skill4:["メガトンレイド","ソウルドレイン","チャージ","物理貫通","氷結無効"], skill5:["","真理の雷","デゾレトオン","マハマカジャオン","地獄の業火"],elements:["","","Weak","Drain","","Resist","Resist"], type:'攻擊'            },
            {                name:'Surt',         name_tw:'史爾特爾', name_en:'',     rarity:5,                grade:83, icon:'maou_suruto.png', skills:["怪力乱神","テトラカシフト","ラグナロク"], skill4:["威圧の構え","マハラギダイン","リディア","火炎貫通","氷結無効"], skill5:["","毒追撃","衝撃ブースタ","ラクンダ","丸かじり"],elements:["","Drain","Weak","","","",""], type:'攻擊'            },
            {                name:'Loki',           name_tw:'洛基', name_en:'',    rarity:4,                grade:75, icon:'maou_roki.png', skills:["ザンダイン","アギダイン","トリックスター"], skill4:["ジオダイン","ブフダイン","祟り","ダークゾーン無効","破魔耐性"], skill5:["","コロシの愉悦","丸かじり","マハムドオン","ムドオン"],elements:["","","Null","","Resist","Weak","Resist"], type:'攻擊'           },
            {                name:'Beelzebub',     name_tw:'別西卜', name_en:'',          rarity:4,                grade:68, icon:'maou_beruzebubu.png', skills:["ムドダイン","マハジオンガ","暴食の大罪"], skill4:["野獣の勘","ショックウェーブ","アウトブレイク","マカラカシフト","破魔反射"], skill5:["","マハデゾレトオン","物理耐性","コロシの愉悦","電撃耐性"],elements:["","","","Resist","Resist","Null","Null"], type:'攻擊'            },
            {                name:'King Frost',     name_tw:'冰傑克王', name_en:'',          rarity:4,                grade:64, icon:'maou_jyakuhurosuto.png', skills:["氷結ブースタ","メガトンプレス","大冷界"], skill4:["","絶対零度","コンセントレイト","三段の強運","火炎耐性"], skill5:["","ブフダイン","暴飲暴食","地獄のマスク","緊縛耐性"],elements:["","Weak","Null","","","Resist",""], type:'攻擊'            },
            {                name:'Abaddon',       name_tw:'阿巴頓', name_en:'',        rarity:4,                grade:60, icon:'maou_abadon.png', skills:["猛反撃","マハラギオン","暴飲暴食"], skill4:["地獄の業火","メガトンレイド","マハデゾレト","コロシの愉悦","物理無効"], skill5:["","初段の猛速","地獄のマスク","ジュ","メクロズディ"],elements:["","Repel","","Weak","","",""], type:'攻擊'            },
            {                name:'Horkos',       name_tw:'奧迦斯', name_en:'',        rarity:3,                grade:46, icon:'maou_okasu.png', skills:["食いしばり","猛反撃","地獄の業火"], skill4:["ラクカオート","捨て身の一撃","テトラコワース","二段の恵体","氷結無効"], skill5:["","マハブフ","ザン","野生の勘","自然治癒"],elements:["Resist","","Weak","","","Weak",""], type:'攻擊'            }
        ]
    },
    {
        name:'Haunt',
        name_tw:'Haunt',
        name_en:'Haunt',
        formulas:[
            ['Beast','Megami'],
            ['Fairy','Megami'],
            ['Vile','Herald'],
            ['Vile','Brute'],
            ['Wilder','Herald'],
            ['Wilder','Fury'],
            ['Wilder','Lady'],
            ['Foul','Fairy'],
            ['Foul','Vile'],
            ['Tyrant','Megami'],
            ['Tyrant','Kishin'],
            ['Tyrant','Brute'],
            ['Tyrant','Vile']
        ],
        devils:[
            {                name:'Vetala',        name_tw:'毘陀羅', name_en:'',       rarity:3,                grade:55, icon:'yuuki_vetara.png', skills:["リディアコワース","ブフダイン","丸かじり"], skill4:["暴れまくり","エナジードレイン","溶解ブレス","毒耐性","火炎耐性"], skill5:["","カースディ","初段の猛速","ヒートウェイブ","初段の猛速"],elements:["","Weak","","","","Weak","Null"], type:"攻擊"            },
            {                name:'Chatterskull',   name_tw:'笑面骷髏', name_en:'',            rarity:3,                grade:44, icon:'yuuki_rahuinsukaru.png', skills:["ディスコード","ムドオン","デスタッチ"], skill4:["デカジャ","冥界破","雄叫び","緊縛無効","衝撃耐性"], skill5:["","なぎ払い","ポズムディ","暴れまくり","マハジオ"],elements:["","Drain","Weak","","","Weak","Null"], type:"支援"            },
            {                name:'Legion',          name_tw:'惡靈軍團', name_en:'',     rarity:2,                grade:34, icon:'yuuki_region.png', skills:["マハザン","ムド","アギ"], skill4:["デスバウンド","ウィンドブレス","マカラコワース","衝撃ブースタ","火炎耐性"], skill5:["","初段の強運","ヒートウェイブ","マハブフ","メウィークディ"],elements:["","","","Weak","","Weak","Resist"], type:"攻擊"            },
            {                name:'Pisaca',      name_tw:'畢舍遮', name_en:'',         rarity:2,                grade:26, icon:'yuuki_pisyatya.png', skills:["マハムド","甘噛み","吸血"], skill4:["ジュ","ムドオン","マハシバブー","毒床渡り","氷結耐性"], skill5:["","スラッシュ","地獄のマスク","ハマ","百発百中"],elements:["","Weak","","","Null","Weak","Resist"], type:"支援"            },
            {                name:'Mou-Ryo',        name_tw:'魍魎', name_en:'',       rarity:2,                grade:20, icon:'yuuki_mouryou.png', skills:["ムド","シバブオン","ファイアブレス"], skill4:["吸魔","イービルアイ","カースディ","初段の賢魔","呪殺反射"], skill5:["","ウィークディ","暴れまくり","メクロズディ","見切り"],elements:["","","","","","Weak","Null"], type:"攻擊"            },
            {                name:'Obariyon',        name_tw:'背負小鬼', name_en:'',       rarity:1,                grade:7, icon:'yuuki_obariyon.png', skills:["クロズディ","メディア",""], skill4:["突撃","暴れまくり","スクンダ","見切り","火炎耐性"], skill5:["","乱れ狂い","メカースディ","地獄のマスク","マハンマ"],elements:["","","Weak","Resist","","Weak","Null"], type:"回復"            },
            {                name:'Preta',             name_tw:'餓鬼', name_en:'',  rarity:1,                grade:4, icon:'yuuki_gaki.png', skills:["ブフ","ムド",""], skill4:["マハブフ","吸血","ディスコード","百発百中","衝撃耐性"], skill5:["","ヒートウェイブ","メパララディ","マハムド","初段の剛力"],elements:["","Weak","Resist","","Weak","Weak","Null"], type:"攻擊"            }
        ]
    },
    {
        name:'Fiend',
        name_tw:'Fiend',
        name_en:'Fiend',
        formulas:[],
        devils:[
            { name:'Trumpeter', name_tw:'吹號者', name_en:'', rarity:5, grade:94, icon:'majin_toranpeta.png', skills:['コンセントレイト','ソウルドレイン','アポカリプス'], skill4:['マハマカジャオン','ジャッジメント','祟り','ラクカオート','物理耐性'], skill5:['','タルカジャ','マハブフーラ','空間殺法','火炎耐性'], elements:['','','','','','Null','Null'], type:'攻擊'},
            { name:'Alice', name_tw:'愛麗絲', name_en:'', rarity:5, grade:89, icon:'majin_arisu.png', skills:['マハムドオン','ムドダイン','死んでくれる？'], skill4:['ソウルドレイン','ヘルズアイ','マハジュオン','呪殺ハイブースタ','破魔反射'], skill5:['','絶対零度','マハブフダイン','呪い耐性','刹那五月雨撃ち'], elements:['','','','','','Weak','Repel'], type:'攻擊'},
            {   name:'White Rider', name_tw:'白騎士', name_en:'', rarity:4, grade:74, icon:'majin_waitonaito.png', skills:['ジオダイン','ホワイトノイズ','ゴッドアロー'], skill4:['ショックウェーブ','ソウルドレイン','リカームドラ','緊縛無効','衝撃無効'], skill5:['','ブフーラ','百発百中','ヒートウェイブ','ブフ'], elements:['','','','Drain','Weak','Resist','Resist'], type:'攻擊'}
        ]
    },
    {
        name:'Hero',
        name_tw:'Hero',
        name_en:'Hero',
        formulas:[],
        devils:[
            { name:'Yoshitsune', name_tw:'義經', name_en:'', rarity:5, grade:97, icon:'eiyuu_yositune.png', skills:['空間殺法','勝利のチャクラ','八艘飛び'], skill4:['不屈の闘志','ギガントマキア','テトラカーン','物理ハイブースタ','物理吸収'], skill5:['','マハマカジャマ','マハブフダイン','殺風激','ウィンドブレス'], elements:['Resist','','','','','Null','Null'], type:'攻擊'},
            { name:'Huang Di', name_tw:'皇帝', name_en:'', rarity:5, grade:88, icon:'eiyuu_koutei.png', skills:['冥界破','帝の権威','応龍撃破'], skill4:['','怪力乱神','メシアライザー','魅了無効','破魔反射'], skill5:['','タルカオート','物理無効','虐殺者','奈落のマスク'], elements:['','Resist','Resist','Resist','Resist','',''], type:'攻擊'},
            { name:'Siegfried', name_tw:'齊格飛', name_en:'', rarity:5, grade:83, icon:'eiyuu_jikuhurito.png', skills:['怪力乱神','リベリオン','武道の素養'], skill4:['勝利の息吹','ティタノマキア','チャージ','不屈の闘志','衝撃無効'], skill5:['','マハジオダイン','トリスアギオン','メギドラ','イービルアイ'], elements:['Drain','','','','','',''], type:'攻擊'},
            { name:"Jeanne d'Arc", name_tw:'貞德', name_en:'', rarity:4, grade:78, icon:'eiyuu_jannu.png', skills:['回復ブースタ','天罰','オルレアンの祈り'], skill4:['勝利の息吹','ジャッジメント','静寂の祈り','魔封無効','火炎反射'], skill5:['','精神漏出','メディラマ','煉獄','ザンマ'], elements:['','Weak','Resist','Resist','Resist','',''], type:'回復'}
        ]
    },
    {
        name:'Rumor',
        name_tw:'Rumor',
        name_en:'Rumor',
        formulas:[],
        devils:[
            { name:'Kamiotoko', name_tw:'啃咬魔', name_en:'', rarity:2, grade:25, icon:'kaii_kamiotoko.png', skills:['ムドオン','狂い咲き','痺れかみつき'], skill4:['雄叫び','丸かじり','ディスコード','初段の強運','衝撃無効'], skill5:['','暴れまくり','ディア','マハンマ','コロシの愉悦'], elements:['','','','','','Weak','Repel'], type:'支援'}
        ]
    },
    {
        name:'UMA',
        name_tw:'珍獸',
        name_en:'UMA',
        formulas:[],
        devils:[
            { name:'Hare of Inaba', name_tw:'因幡白兔', name_en:'',rarity:3, grade:41, icon:'tinjyuu_inabasirousagi.png', skills:['デカジャ','メディア','ワナフーリ'], skill4:['リカーム','狂乱の剛爪','ディスコード','初段の猛速','火炎無効'], skill5:['','マハムド','マハンマ','メカースディ','メウィークディ'], elements:['','Weak','','','','',''], type:'回復'},
            { name:'Chupacabra', name_tw:'卓柏卡布拉', name_en:'',rarity:1, grade:15, icon:'tinjyuu_typakabura.png', skills:['マハザン','ステルス','ワナフーリ'], skill4:['スクカオート','吸魔','パララディ','地獄のマスク','電撃耐性'], skill5:['','マハムド','メディア','初段の恵体','野生の勘'], elements:['','','','Weak','','',''], type:'攻擊'}
        ]
    },
    {
        name:'Enigma',
        name_tw:'Enigma',
        name_en:'Enigma',
        formulas:[],
        devils:[
            { name:'Kama', name_tw:'伽摩', name_en:'',rarity:4, grade:75, icon:'hisin_kama.png', skills:['スピードスター','デクンダ','魅了の神弓'], skill4:['空間殺法','刹那五月雨撃ち','静寂の祈り','スクカオート','火炎反射'], skill5:['','衝撃耐性','メポズムディ','毒針','タルンダ'], elements:['Resist','Weak','','','','Resist',''], type:'支援'},
            { name:'Kinmamon', name_tw:'君真物', name_en:'',rarity:3, grade:55, icon:'hisin_kinmamon.png', skills:['メギド','バリア','マレビト'], skill4:['メギドラ','エナジードレイン','アムリタ','見切り','呪殺無効'], skill5:['','初段の恵体','毒床歩き','乱れ狂い','カースディ'], elements:['','Null','Weak','','','Resist','Resist'], type:'支援'},
            { name:'Kanbari', name_tw:'加牟波理', name_en:'',rarity:2, grade:30, icon:'hisin_kanbari.png', skills:['暴れまくり','ハマオン','コウウン'], skill4:['メガトンプレス','マハンマ','メカースディ','勝利のチャクラ','火炎耐性'], skill5:['','','','',''], elements:['Weak','','','','','Resist','Weak'], type:'攻擊'}
        ]
    },
    {
        name:'Zealot',
        name_tw:'Zealot',
        name_en:'Zealot',
        formulas:[],
        devils:[
            { name:'Attis', name_tw:'阿提斯', name_en:'',rarity:4, grade:65, icon:'kyousin_ateisu.png', skills:['不屈の闘志','リカームドラ','乱・かすみ斬り'], skill4:['勝利の息吹','マハブフダイン','ディアラマ','魅了無効','氷結無効'], skill5:['','二段の猛速','マハラギオン','毒床歩き','メチャームディ'], elements:['Resist','','','','','',''], type:'攻擊'}
        ]
    },
    {
        name:'Entity',
        name_tw:'Entity',
        name_en:'Entity',
        formulas:[],
        devils:[
            { name:'Alilat', name_tw:'阿利拉特', name_en:'',rarity:5, grade:85, icon:'irei_arirato.png', skills:['メギドラ','奈落のマスク','貫反の霊圧'], skill4:['ディアラハン','ソウルドレイン','メディラマ','二分の魔脈','物理無効'], skill5:['','','','',''], elements:['Resist','','','','','Resist','Resist'], type:'支援'}
        ]
    }
];

const skill_stable = [
    {
        name:"Physical",
        name_tw:"Physical",
        name_en:"",
        skills:[
            //Physical
            {"name":"スラッシュ","name_tw":"斬擊","desc":"敵単体に物理属性の打撃型ダメージを威力120で与える。","mp":4,"point":1,"element":"Physical"},
            {"name":"絶命剣","name_tw":"絕命劍","desc":"敵単体に物理属性の打撃型ダメージを威力140で与える。","mp":5,"point":6,"element":"Physical"},
            {"name":"怪力乱神","name_tw":"怪力亂神","desc":"敵単体に物理属性の打撃型ダメージを威力160で与える。","mp":6,"point":9,"element":"Physical"},
            {"name":"メガトンレイド","name_tw":"百萬噸襲擊","desc":"敵単体に物理属性の打撃型ダメージを威力180で与える。","mp":7,"point":"12","element":"Physical"},
            {"name":"ゴッドハンド","name_tw":"神之手","desc":"敵単体に物理属性の打撃型ダメージを威力200で与える。","mp":8,"point":"15","element":"Physical"},
            {"name":"なぎ払い","name_tw":"橫斬","desc":"敵全体に物理属性の打撃型ダメージを威力80で与える。","mp":4,"point":2,"element":"Physical"},
            {"name":"金剛発破","name_tw":"金剛發破","desc":"敵全体に物理属性の打撃型ダメージを威力100で与える。","mp":5,"point":4,"element":"Physical"},
            {"name":"冥界破","name_tw":"冥界破","desc":"敵全体に物理属性の打撃型ダメージを威力120で与える。","mp":6,"point":6,"element":"Physical"},
            {"name":"空間殺法","name_tw":"空間殺法","desc":"敵全体に物理属性の打撃型ダメージを威力140で与える。","mp":7,"point":8,"element":"Physical"},
            {"name":"ギガントマキア","name_tw":"巨人之戰","desc":"敵全体に物理属性の打撃型ダメージを威力160で与える。","mp":8,"point":"10","element":"Physical"},
            {"name":"突撃","name_tw":"突擊","desc":"敵単体にクリティカル率30%の物理属性の打撃型ダメージを威力115で与える。","mp":4,"point":2,"element":"Physical"},
            {"name":"鬼神楽","name_tw":"鬼神樂","desc":"敵単体にクリティカル率30%の物理属性の打撃型ダメージを威力130で与える。","mp":5,"point":5,"element":"Physical"},
            {"name":"モータルジハード","name_tw":"絕命鬥爭","desc":"敵単体にクリティカル率30%の物理属性の打撃型ダメージを威力145で与える。","mp":6,"point":7,"element":"Physical"},
            {"name":"ヒートウェイブ","name_tw":"灼熱波浪","desc":"敵全体にクリティカル率30%の物理属性の打撃型ダメージを威力70で与える。","mp":5,"point":2,"element":"Physical"},
            {"name":"メガトンプレス","name_tw":"百萬噸重壓","desc":"敵全体にクリティカル率30%の物理属性の打撃型ダメージを威力90で与える。","mp":6,"point":4,"element":"Physical"},
            {"name":"ティタノマキア","name_tw":"泰坦之戰","desc":"敵全体にクリティカル率30%の物理属性の打撃型ダメージを威力110で与える。","mp":7,"point":6,"element":"Physical"},
            {"name":"暴れまくり","name_tw":"橫衝直撞","desc":"ランダムな敵に２～３回、物理属性の打撃型ダメージを威力45で与える。","mp":3,"point":3,"element":"Physical"},
            {"name":"デスバウンド","name_tw":"神威之擊","desc":"ランダムな敵に２～３回、物理属性の打撃型ダメージを威力55で与える。","mp":4,"point":5,"element":"Physical"},
            {"name":"狂乱の剛爪","name_tw":"狂亂硬爪","desc":"ランダムな敵に２～３回、物理属性の打撃型ダメージを威力65で与える。","mp":5,"point":7,"element":"Physical"},
            {"name":"地獄の獰爪","name_tw":"地獄兇爪","desc":"ランダムな敵に3回、クリティカル率30％の物理属性の打撃型ダメージを威力65で与える。","mp":5,"point":7,"element":"Physical"},
            {"name":"虚空爪激","name_tw":"虛空爪激","desc":"ランダムな敵に２～３回、物理属性の打撃型ダメージを威力75で与える。","mp":6,"point":9,"element":"Physical"},
            {"name":"五月雨斬り","name_tw":"五月雨斬","desc":"ランダムな敵に２～５回、物理属性の打撃型ダメージを威力50で与える。","mp":5,"point":7,"element":"Physical"},
            {"name":"刹那五月雨撃ち","name_tw":"剎那五月雨擊","desc":"ランダムな敵に２～５回、物理属性の打撃型ダメージを威力65で与える。","mp":7,"point":9,"element":"Physical"},
            {"name":"毒針","name_tw":"毒針","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、基礎確率40%で毒状態にする。","mp":5,"point":6,"element":"Physical"},
            {"name":"バインドクロー","name_tw":"束縛爪擊","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、基礎確率40%で緊縛状態にする。","mp":5,"point":6,"element":"Physical"},
            {"name":"暗夜剣","name_tw":"暗夜劍","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、基礎確率40%で魔封状態にする。","mp":5,"point":6,"element":"Physical"},
            {"name":"甘噛み","name_tw":"甜蜜輕咬","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、基礎確率40%で魅了状態にする。","mp":5,"point":6,"element":"Physical"},
            {"name":"丸かじり","name_tw":"大快朵頤","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、そのダメージの25%分、自身を回復する。","mp":5,"point":6,"element":"Physical"},
            {"name":"暴飲暴食","name_tw":"暴飲暴食","desc":"敵単体に物理属性の打撃型ダメージを威力140で与え、そのダメージの40%分、自身を回復する。","mp":6,"point":8,"element":"Physical"},
            {"name":"捨て身の一撃","name_tw":"捨身一擊","desc":"自身のＨＰを10%消費して、敵単体に物理属性の打撃型ダメージを威力170で与える。","mp":7,"point":6,"element":"Physical"},
            {"name":"八艘飛び","name_tw":"八艘跳躍","desc":"ランダムな敵に８回、物理属性の打撃型ダメージを威力35で与える。","mp":7,"point":null,"element":"Physical"},
            {"name":"乱・かすみ斬り","name_tw":"亂・霞霧斬擊","desc":"敵に3～5回、物理属性の打撃型ダメージを威力50で与える","mp":6,"point":null,"element":"Physical"},
            {"name":"ゲイボルグ","name_tw":"千棘魔槍","desc":"ランダムな敵に４～６回、物理属性の打撃型ダメージを威力50で与える。","mp":7,"point":null,"element":"Physical"},
            {"name":"地獄突き","name_tw":"地域刺擊","desc":"ランダムな敵に４回、物理属性の打撃型ダメージを威力35で与え、基礎確率35％で魅了状態にする。","mp":7,"point":null,"element":"Physical"},
            {"name":"痺れかみつき","name_tw":"麻痺咬痕","desc":"敵単体に物理属性の打撃型ダメージを威力160で与え、基礎確率35％で緊縛状態にする。","mp":5,"point":null,"element":"Physical"},
            {"name":"グングニル","name_tw":"永恆之槍","desc":"敵全体にクリティカル率30％の物理属性の打撃型ダメージを威力145で与える。","mp":7,"point":null,"element":"Physical"},
            {"name":"応龍撃破","name_tw":"應龍擊破","desc":"敵全体にクリティカル率50%の物理属性の打撃型ダメージを威力150で与える。","mp":8,"point":null,"element":"Physical"}
        ]
    },
    {
        name:"Fire",
        name_tw:"Fire",
        name_en:"",
        skills:[
            //火
            {"name":"アギ","name_tw":"亞基","desc":"敵単体に火炎属性の魔法型ダメージを威力120で与える。","mp":4,"point":1,"element":"Fire"},
            {"name":"アギラオ","name_tw":"亞基拉歐","desc":"敵単体に火炎属性の魔法型ダメージを威力140で与える。","mp":5,"point":6,"element":"Fire"},
            {"name":"アギダイン","name_tw":"亞基達因","desc":"敵単体に火炎属性の魔法型ダメージを威力160で与える。","mp":6,"point":9,"element":"Fire"},
            {"name":"トリスアギオン","name_tw":"多利斯亞基翁","desc":"敵単体に火炎属性の魔法型ダメージを威力180で与える。","mp":7,"point":12,"element":"Fire"},
            {"name":"マハラギ","name_tw":"瑪哈拉基","desc":"敵全体に火炎属性の魔法型ダメージを威力80で与える。","mp":5,"point":2,"element":"Fire"},
            {"name":"マハラギオン","name_tw":"瑪哈拉基翁","desc":"敵全体に火炎属性の魔法型ダメージを威力100で与える。","mp":6,"point":6,"element":"Fire"},
            {"name":"マハラギダイン","name_tw":"瑪哈亞吉達因","desc":"敵全体に火炎属性の魔法型ダメージを威力120で与える。","mp":7,"point":9,"element":"Fire"},
            {"name":"ファイアブレス","name_tw":"火焰吐息","desc":"ランダムな敵に２～４回、火炎属性の魔法型ダメージを威力40で与える。","mp":4,"point":7,"element":"Fire"},
            {"name":"地獄の業火","name_tw":"地獄業火","desc":"ランダムな敵に２～４回、火炎属性の魔法型ダメージを威力50で与える。","mp":5,"point":"10","element":"Fire"},
            {"name":"ラグナロク","name_tw":"諸神的黃昏","desc":"敵単体に火炎属性の魔法型ダメージを威力215で与える。","mp":7,"point":null,"element":"Fire"}
        ]
    },
    {
        name:"Ice",
        name_tw:"冰凍",
        name_en:"",
        skills:[
            //冰
            {"name":"ブフ","name_tw":"布芙","desc":"敵単体に氷結属性の魔法型ダメージを威力120で与える。","mp":4,"point":1,"element":"Ice"},
            {"name":"ブフーラ","name_tw":"布芙拉","desc":"敵単体に氷結属性の魔法型ダメージを威力140で与える。","mp":"5","point":"6","element":"Ice"},
            {"name":"ブフダイン","name_tw":"布芙達因","desc":"敵単体に氷結属性の魔法型ダメージを威力160で与える。","mp":6,"point":9,"element":"Ice"},
            {"name":"アイスエイジ","name_tw":"大冰河時期","desc":"敵単体に氷結属性の魔法型ダメージを威力180で与える。","mp":7,"point":12,"element":"Ice"},
            {"name":"マハブフ","name_tw":"瑪哈布芙","desc":"敵全体に氷結属性の魔法型ダメージを威力80で与える。","mp":5,"point":2,"element":"Ice"},
            {"name":"マハブフーラ","name_tw":"瑪哈布芙拉","desc":"敵全体に氷結属性の魔法型ダメージを威力100で与える。","mp":6,"point":6,"element":"Ice"},
            {"name":"マハブフダイン","name_tw":"瑪哈布芙達因","desc":"敵全体に氷結属性の魔法型ダメージを威力120で与える。","mp":7,"point":9,"element":"Ice"},
            {"name":"アイスブレス","name_tw":"極寒吐息","desc":"ランダムな敵に２〜４回、氷結属性の魔法型ダメージを威力40で与える。","mp":4,"point":7,"element":"Ice"},
            {"name":"絶対零度","name_tw":"絕對零度","desc":"ランダムな敵に２～４回、氷結属性の魔法型ダメージを威力50で与える。","mp":5,"point":10,"element":"Ice"},
            {"name":"大冷界","name_tw":"大冷界","desc":"敵全体に氷結属性の魔法型ダメージを威力130で与え、3ターンの間、敵全体の防御力を20％減少させる。","mp":7,"point":null,"element":"Ice"}
        ]
    },
    {
        name:"Elec",
        name_tw:"電擊",
        name_en:"",
        skills:[
            //雷
            {"name":"ジオ","name_tw":"吉歐","desc":"敵単体に電撃属性の魔法型ダメージを威力120で与える。","mp":4,"point":1,"element":"Elec"},
            {"name":"ジオンガ","name_tw":"吉歐加","desc":"敵単体に電撃属性の魔法型ダメージを威力140で与える。","mp":5,"point":6,"element":"Elec"},
            {"name":"ジオダイン","name_tw":"吉歐達因","desc":"敵単体に電撃属性の魔法型ダメージを威力160で与える。","mp":6,"point":9,"element":"Elec"},
            {"name":"真理の雷","name_tw":"真理之雷","desc":"敵単体に電撃属性の魔法型ダメージを威力180で与える。","mp":"7","point":12,"element":"Elec"},
            {"name":"マハジオ","name_tw":"瑪哈吉歐","desc":"敵全体に電撃属性の魔法型ダメージを威力80で与える。","mp":5,"point":2,"element":"Elec"},
            {"name":"マハジオンガ","name_tw":"瑪哈吉歐加","desc":"敵全体に電撃属性の魔法型ダメージを威力100で与える。","mp":6,"point":6,"element":"Elec"},
            {"name":"マハジオダイン","name_tw":"瑪哈吉歐達因","desc":"敵全体に電撃属性の魔法型ダメージを威力120で与える。","mp":7,"point":9,"element":"Elec"},
            {"name":"放電","name_tw":"放電","desc":"ランダムな敵に２〜４回、電撃属性の魔法型ダメージを威力40で与える。","mp":4,"point":7,"element":"Elec"},
            {"name":"ショックウェーブ","name_tw":"衝擊波","desc":"ランダムな敵に２〜４回、電撃属性の魔法型ダメージを威力50で与える。","mp":5,"point":10,"element":"Elec"},
            {"name":"ミョルニル","name_tw":"雷神之槌","desc":"ランダムな敵に３～５回、電撃属性の魔法型ダメージを威力60で与える。","mp":7,"point":null,"element":"Elec"}
        ]
    },
    {
        name:"Force",
        name_tw:"衝擊",
        name_en:"",
        skills:[
            //衝
            {"name":"ザン","name_tw":"颯","desc":"敵単体に衝撃属性の魔法型ダメージを威力120で与える。","mp":4,"point":1,"element":"Force"},
            {"name":"ザンマ","name_tw":"颯瑪","desc":"敵単体に衝撃属性の魔法型ダメージを威力140で与える。","mp":5,"point":6,"element":"Force"},
            {"name":"ザンダイン","name_tw":"颯達因","desc":"敵単体に衝撃属性の魔法型ダメージを威力160で与える。","mp":6,"point":9,"element":"Force"},
            {"name":"殺風激","name_tw":"殺風激","desc":"敵単体に衝撃属性の魔法型ダメージを威力180で与える。","mp":7,"point":12,"element":"Force"},
            {"name":"マハザン","name_tw":"瑪哈颯","desc":"敵全体に衝撃属性の魔法型ダメージを威力80で与える。","mp":5,"point":2,"element":"Force"},
            {"name":"マハザンマ","name_tw":"瑪哈颯瑪","desc":"敵全体に衝撃属性の魔法型ダメージを威力100で与える。","mp":6,"point":6,"element":"Force"},
            {"name":"マハザンダイン","name_tw":"瑪哈颯達因","desc":"敵全体に衝撃属性の魔法型ダメージを威力120で与える。","mp":7,"point":9,"element":"Force"},
            {"name":"ウィンドブレス","name_tw":"狂風吐息","desc":"ランダムな敵に２～４回、衝撃属性の魔法型ダメージを威力40で与える。","mp":4,"point":7,"element":"Force"},
            {"name":"ツイスター","name_tw":"龍捲風","desc":"ランダムな敵に２～４回、衝撃属性の魔法型ダメージを威力50で与える。","mp":5,"point":10,"element":"Force"},
            {"name":"天叢雲剣","name_tw":"","desc":"敵単体に衝撃属性の魔法型ダメージを威力180で与え、3ターンの間、味方全体の攻撃力を20%増加させる。このスキルによるダメージは物理攻撃力に依存する。","mp":6,"point":null,"element":"Force"}
        ]
    },
    {
        name:"Light",
        name_tw:"Light",
        name_en:"",
        skills:[
            //Light
            {"name":"ハマ","name_tw":"哈瑪","desc":"敵単体に破魔属性の魔法型ダメージを威力120で与える。","mp":4,"point":1,"element":"Light"},
            {"name":"ハマオン","name_tw":"哈瑪翁","desc":"敵単体に破魔属性の魔法型ダメージを威力140で与える。","mp":5,"point":6,"element":"Light"},
            {"name":"ハマダイン","name_tw":"哈瑪達因","desc":"敵単体に破魔属性の魔法型ダメージを威力160で与える。","mp":6,"point":9,"element":"Light"},
            {"name":"裁きの雷火","name_tw":"制裁雷火","desc":"敵単体に破魔属性の魔法型ダメージを威力180で与える。","mp":7,"point":12,"element":"Light"},
            {"name":"マハンマ","name_tw":"瑪哈瑪","desc":"敵全体に破魔属性の魔法型ダメージを威力80で与える。","mp":5,"point":2,"element":"Light"},
            {"name":"マハンマオン","name_tw":"瑪哈瑪翁","desc":"敵全体に破魔属性の魔法型ダメージを威力100で与える。","mp":6,"point":6,"element":"Light"},
            {"name":"マハンマダイン","name_tw":"瑪翰達因","desc":"敵全体に破魔属性の魔法型ダメージを威力120で与える。","mp":7,"point":9,"element":"Light"},
            {"name":"審判の光","name_tw":"審判之光","desc":"敵ランダムに２～４回、破魔属性の魔法型ダメージを威力40で与える。","mp":7,"point":7,"element":"Light"},
            {"name":"天罰","name_tw":"天譴","desc":"ランダムな敵に２～４回、破魔属性の魔法型ダメージを威力50で与える。","mp":5,"point":10,"element":"Light"},
            {"name":"ゴッドアロー","name_tw":"神差箭矢","desc":"敵単体に破魔属性の魔法型ダメージを威力200で与え、50％の確率で死亡させる。","mp":7,"point":null,"element":"Light"},
            {"name":"憎悪の試練","name_tw":"憎惡的試煉","desc":"敵全体に破魔属性の魔法型ダメージを威力130で与え、3ターンの間、敵全体の攻撃力．防御力．回避と命中のいずれかを20%減少させる","mp":7,"point":null,"element":"Light"},
            {"name":"魂の審判","name_tw":"斷罪刑魂","desc":"ランダムな敵に7回、破魔属性の魔法型ダメージを威力30で与える。","mp":5,"point":null,"element":"Light"}
        ]
    },
    {
        name:"Dark",
        name_tw:"咒殺",
        name_en:"",
        skills:[
            //Dark
            {"name":"ムド","name_tw":"姆多","desc":"敵単体に呪殺属性の魔法型ダメージを威力120で与える。","mp":4,"point":1,"element":"Dark"},
            {"name":"ムドオン","name_tw":"姆多翁","desc":"敵単体に呪殺属性の魔法型ダメージを威力140で与える。","mp":5,"point":6,"element":"Dark"},
            {"name":"ムドダイン","name_tw":"姆多達因","desc":"敵単体に呪殺属性の魔法型ダメージを威力160で与える。","mp":6,"point":9,"element":"Dark"},
            {"name":"ヘルズアイ","name_tw":"地獄之眼","desc":"敵単体に呪殺属性の魔法型ダメージを威力180で与える。","mp":7,"point":12,"element":"Dark"},
            {"name":"マハムド","name_tw":"瑪哈姆多","desc":"敵全体に呪殺属性の魔法型ダメージを威力80で与える。","mp":5,"point":2,"element":"Dark"},
            {"name":"マハムドオン","name_tw":"瑪哈姆多翁","desc":"敵全体に呪殺属性の魔法型ダメージを威力100で与える。","mp":6,"point":6,"element":"Dark"},
            {"name":"マハムドダイン","name_tw":"瑪哈姆多達因","desc":"敵全体に呪殺属性の魔法型ダメージを威力120で与える。","mp":7,"point":9,"element":"Dark"},
            {"name":"イービルアイ","name_tw":"邪惡之眼","desc":"ランダムな敵に２～４回、呪殺属性の魔法型ダメージを威力40で与える。","mp":4,"point":7,"element":"Dark"},
            {"name":"煉獄","name_tw":"煉獄","desc":"ランダムな敵に２～４回、呪殺属性の魔法型ダメージを威力50で与える。","mp":5,"point":10,"element":"Dark"},
            {"name":"肉体の解放","name_tw":"肉體的解放","desc":"敵全体に呪殺属性の魔法型ダメージを威力110で与え、基礎確率35%で魅了状態にする。","mp":6,"point":null,"element":"Dark"},
            {"name":"暴食の大罪","name_tw":"暴食重罪","desc":"敵全体に呪殺属性の魔法型ダメージを威力130で与え、そのダメージの50％分、自身を回復する。","mp":7,"point":null,"element":"Dark"},
            {"name":"死んでくれる？","name_tw":"可以為我而死嗎？","desc":"敵単体を死亡させる。","mp":7,"point":null,"element":"Dark"}
        ]
    },
    {
        name:"万能",
        name_tw:"萬能",
        name_en:"",
        skills:[
            //萬
            {"name":"吸血","name_tw":"吸血","desc":"敵単体に万能属性の魔法型ダメージを威力120で与え、そのダメージの25％分、自身を回復する。","mp":5,"point":3,"element":"万能"},
            {"name":"デスタッチ","name_tw":"死亡之觸","desc":"敵単体に万能属性の魔法型ダメージを威力140で与え、そのダメージの40％分、自身を回復する。","mp":6,"point":6,"element":"万能"},
            {"name":"吸魔","name_tw":"吸魔","desc":"敵単体に万能属性の魔法型ダメージを威力100で与え、MPを１奪う。","mp":6,"point":3,"element":"万能"},
            {"name":"エナジードレイン","name_tw":"能量抽取","desc":"敵単体に万能属性の魔法型ダメージを威力120で与え、そのダメージの25%分、自身を回復し、MPを1奪う。","mp":7,"point":6,"element":"万能"},
            {"name":"ソウルドレイン","name_tw":"靈魂抽取","desc":"敵単体に万能属性の魔法型ダメージを威力140で与え、そのダメージの40％分、自身を回復し、MPを１奪う。","mp":8,"point":7,"element":"万能"},
            {"name":"メギド","name_tw":"米吉朵","desc":"敵全体に万能属性の魔法型ダメージを威力80で与える。","mp":6,"point":5,"element":"万能"},
            {"name":"メギドラ","name_tw":"米吉朵拉","desc":"敵全体に万能属性の魔法型ダメージを威力100で与える。","mp":7,"point":8,"element":"万能"},
            {"name":"メギドラオン","name_tw":"米吉朵拉翁","desc":"敵全体に万能属性の魔法型ダメージを威力120で与える。","mp":8,"point":"12","element":"万能"},
            {"name":"混沌の海","name_tw":"混沌之海","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、3ターンの間、敵全体の防御力を20%減少させる。","mp":9,"point":null,"element":"万能"},
            {"name":"ジャッジメント","name_tw":"審判","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、3ターンの間、味方全体の攻撃力を20%増加させる。","mp":9,"point":"12","element":"万能"},
            {"name":"精神漏出","name_tw":"精神漏出","desc":"敵単体に万能属性の魔法型ダメージを威力80で与え、MPを３失わせる。","mp":5,"point":6,"element":"万能"},
            {"name":"シナイの神火","name_tw":"西奈的神火","desc":"ランダムな敵に５回、万能属性の魔法型ダメージを威力45で与える。","mp":7,"point":null,"element":"万能"},
            {"name":"プララヤ","name_tw":"大劫","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、魔法型ダメージ反射状態と物理型ダメージ反射状態を解除する。このスキルによるダメージは物理攻撃力に依存する。","mp":8,"point":null,"element":"万能"},
            {"name":"アポカリプス","name_tw":"默示錄","desc":"敵全体に万能属性の魔法型ダメージを威力110で与え、基礎確率30％で魔封状態にする。","mp":8,"point":null,"element":"万能"},
            {"name":"明けの明星","name_tw":"拂曉明星","desc":"敵全体に万能属性の魔法型ダメージを威力135で与える。","mp":8,"point":null,"element":"万能"},
            {"name":"魅了の神弓","name_tw":"魅惑神弓","desc":"敵単体に万能属性の魔法型ダメージを威力190で与え、基礎確率45％で魅了状態にする。","mp":8,"point":null,"element":"万能"}
        ]
    },
    {
        name:"回復",
        namw_tw:"回復",
        name_en:"Heal",
        skills:[
            //回
            {"name":"ディア","name_tw":"迪亞","desc":"味方単体を回復力50で回復する。","mp":4,"point":1,"element":"Null"},
            {"name":"ディアラ","name_tw":"迪亞拉","desc":"味方単体を回復力90で回復する。","mp":5,"point":5,"element":"Null"},
            {"name":"ディアラマ","name_tw":"迪亞拉瑪","desc":"味方単体を回復力130で回復する。","mp":6,"point":8,"element":"Null"},
            {"name":"ディアラハン","name_tw":"迪亞拉瑪翰","desc":"味方単体を回復力170で回復する。","mp":7,"point":"11","element":"Null"},
            {"name":"メディア","name_tw":"梅迪亞","desc":"味方全体を回復力25で回復する。","mp":6,"point":2,"element":"Null"},
            {"name":"メディラ","name_tw":"梅迪拉","desc":"味方全体を回復力60で回復する。","mp":7,"point":5,"element":"Null"},
            {"name":"メディラマ","name_tw":"梅迪拉瑪","desc":"味方全体を回復力95で回復する。","mp":8,"point":8,"element":"Null"},
            {"name":"メディアラハン","name_tw":"梅迪亞拉翰","desc":"味方全体を回復力130で回復する。","mp":9,"point":"11","element":"Null"},
            {"name":"メシアライザー","name_tw":"救世主喚起者","desc":"味方全体を回復力95で回復し、状態異常を全て回復する。","mp":"10","point":"15","element":"Null"},
            {"name":"オルレアンの祈り","name_tw":"","desc":"味方単体のHPを回復力130で回復すると同時にMPを3回復する。","mp":null,"point":null,"element":"Null"},
            //持回
            {"name":"リディア","name_tw":"利迪亞","desc":"３回行動するまでの間、味方単体をリディア状態にし、行動する前にHPを回復する。","mp":4,"point":8,"element":"Null"},
            {"name":"リディアコワース","name_tw":"利迪亞破壞","desc":"敵全体のリディア状態を解除する。","mp":3,"point":6,"element":"Null"},
            //復活
            {"name":"リカーム","name_tw":"利卡姆","desc":"死亡している味方単体をHP10％で復活させる。","mp":6,"point":6,"element":"Null"},
            {"name":"サマリカーム","name_tw":"薩瑪利卡姆","desc":"死亡している味方単体を完全回復で復活させる。","mp":8,"point":8,"element":"Null"},
            {"name":"リカームドラ","name_tw":"利卡姆托拉","desc":"死亡している味方全体を完全回復で復活させるが、自身は死亡する。","mp":8,"point":"10","element":"Null"},
            {"name":"母なる創造","name_tw":"","desc":"死亡している味方単体を完全回復で復活させ、リディア状態にする。","mp":8,"point":null,"element":"Null"},
            {"name":"セアカトルの再臨","name_tw":"","desc":"死亡している味方全体を完全回復で復活(使用した悪魔も死なない)。","mp":null,"point":null,"element":"Null"},
            //解毒
            {"name":"ポズムディ","name_tw":"病毒解除術","desc":"味方単体の毒を回復する。","mp":3,"point":1,"element":"Null"},
            {"name":"メポズムディ","name_tw":"梅波茲姆迪","desc":"味方全体の毒を回復する。","mp":4,"point":5,"element":"Null"},
            //解封
            {"name":"クロズディ","name_tw":"克洛茲迪","desc":"味方単体の魔封を回復する。","mp":3,"point":1,"element":"Null"},
            {"name":"メクロズディ","name_tw":"梅克洛茲迪","desc":"味方全体の魔封を回復する。","mp":4,"point":5,"element":"Null"},
            //解縛
            {"name":"パララディ","name_tw":"帕拉拉迪","desc":"味方単体の緊縛を回復する。","mp":3,"point":1,"element":"Null"},
            {"name":"メパララディ","name_tw":"梅帕拉拉迪","desc":"味方全体の緊縛を回復する。","mp":4,"point":5,"element":"Null"},
            //解魅
            {"name":"チャームディ","name_tw":"查姆蒂","desc":"味方単体の魅了を回復する。","mp":3,"point":1,"element":"Null"},
            {"name":"メチャームディ","name_tw":"梅查姆蒂","desc":"味方全体の魅了を回復する。","mp":4,"point":5,"element":"Null"},
            //解呪
            {"name":"カースディ","name_tw":"卡斯迪","desc":"味方単体の呪いを回復する。","mp":3,"point":1,"element":"Null"},
            {"name":"メカースディ","name_tw":"梅卡斯迪","desc":"味方全体の呪いを回復する。","mp":4,"point":5,"element":"Null"},
            //解虛
            {"name":"ウィークディ","name_tw":"溫坤迪","desc":"味方単体の虚弱を回復する。","mp":3,"point":1,"element":"Null"},
            {"name":"メウィークディ","name_tw":"梅溫庫迪","desc":"味方全体の虚弱を回復する。","mp":4,"point":5,"element":"Null"},
            //解異常
            {"name":"アムリタ","name_tw":"甘露","desc":"味方単体の状態異常を全て回復する。","mp":4,"point":3,"element":"Null"},
            {"name":"常世の祈り","name_tw":"永恆的祈禱","desc":"味方全体の状態異常を全て回復する。","mp":5,"point":8,"element":"Null"},
            {"name":"静寂の祈り","name_tw":"寂靜的禱告","desc":"敵味方全体の状態異常を全て回復する。","mp":7,"point":8,"element":"Null"},
            //狀態
            {"name":"バリア","name_tw":"防壁","desc":"３ターンの間、味方単体をバリア状態にし、状態異常を無効にする。","mp":4,"point":8,"element":"Null"},
            {"name":"バリアコワース","name_tw":"防壁破壞","desc":"敵全体のバリア状態を解除する。","mp":3,"point":6,"element":"Null"}
        ]
    },
    {
        name:"異常",
        name_tw:"異常",
        name_en:"",
        skills:[
            //毒
            {"name":"ポイズマ","name_tw":"波伊佐瑪","desc":"敵単体を基礎確率40%で毒状態にする。","mp":5,"point":2,"element":"Null"},
            {"name":"ポイズマオン","name_tw":"波伊佐瑪翁","desc":"敵単体を基礎確率50%で毒状態にする。","mp":6,"point":null,"element":"Null"},
            {"name":"マハポイズマ","name_tw":"瑪哈波伊佐瑪","desc":"敵全体を基礎確率30%で毒状態にする。","mp":6,"point":null,"element":"Null"},
            {"name":"マハポイズマオン","name_tw":"瑪哈波伊佐瑪翁","desc":"敵全体を基礎確率40%で毒状態にする。","mp":7,"point":null,"element":"Null"},
            {"name":"毒ガスブレス","name_tw":"猛毒吐息","desc":"ランダムな敵を２〜４回、基礎確率30％で毒状態にする。","mp":6,"point":7,"element":"Null"},
            //縛
            {"name":"シバブー","name_tw":"希巴縛","desc":"敵単体を基礎確率40%で緊縛状態にする。","mp":5,"point":2,"element":"Null"},
            {"name":"シバブオン","name_tw":"希巴縛翁","desc":"敵単体を基礎確率50%で緊縛状態にする。","mp":6,"point":8,"element":"Null"},
            {"name":"マハシバブー","name_tw":"瑪哈希巴縛","desc":"敵全体を基礎確率30%で緊縛状態にする。","mp":6,"point":5,"element":"Null"},
            {"name":"マハシバブオン","name_tw":"瑪哈希巴縛翁","desc":"敵全体を基礎確率40%で緊縛状態にする。","mp":7,"point":null,"element":"Null"},
            {"name":"バインドボイス","name_tw":"束縛咆嘯","desc":"ランダムな敵を２～４回、基礎確率30%で緊縛状態にする。","mp":6,"point":null,"element":"Null"},
            //魅
            {"name":"マリンカリン","name_tw":"瑪琳卡琳","desc":"敵単体を基礎確率40%で魅了状態にする。","mp":5,"point":2,"element":"Null"},
            {"name":"マリンカリオン","name_tw":"瑪琳卡琳翁","desc":"敵単体を基礎確率50%で魅了状態にする。","mp":6,"point":null,"element":"Null"},
            {"name":"マハマリンカリン","name_tw":"瑪哈瑪琳卡琳","desc":"敵全体を基礎確率30%で魅了状態にする。","mp":6,"point":5,"element":"Null"},
            {"name":"マハマリカリオン","name_tw":"瑪哈瑪琳卡琳翁","desc":"敵全体を基礎確率40%で魅了状態にする。","mp":7,"point":null,"element":"Null"},
            {"name":"セクシーダンス","name_tw":"色誘之舞","desc":"ランダムな敵を２～４回、基礎確率30%で魅了状態にする。","mp":6,"point":7,"element":"Null"},
            {"name":"蓮華の舞","name_tw":"蓮華之舞","desc":"敵全体を基礎確率60％で魅了状態にする。","mp":6,"point":null,"element":"Null"},
            //封
            {"name":"マカジャマ","name_tw":"瑪卡加瑪","desc":"敵単体を基礎確率40%で魔封状態にする。","mp":5,"point":2,"element":"Null"},
            {"name":"マカジャマオン","name_tw":"瑪卡加瑪翁","desc":"敵単体を基礎確率40%で魔封状態にする。","mp":6,"point":8,"element":"Null"},
            {"name":"マハマカジャマ","name_tw":"瑪哈瑪卡加瑪","desc":"敵全体を基礎確率30%で魔封状態にする。","mp":6,"point":5,"element":"Null"},
            {"name":"マハマカジャオン","name_tw":"瑪哈瑪卡加瑪翁","desc":"敵全体を基礎確率40%で魔封状態にする。","mp":7,"point":9,"element":"Null"},
            {"name":"ホワイトノイズ","name_tw":"白茫噪音","desc":"ランダムな敵を２～４回、基礎確率30%で魔封状態にする。","mp":6,"point":7,"element":"Null"},
            //呪
            {"name":"ジュ","name_tw":"祖","desc":"敵単体を基礎確率50％で呪い状態にする。","mp":5,"point":2,"element":"Null"},
            {"name":"ジュオン","name_tw":"祖翁","desc":"敵単体を基礎確率60％で呪い状態にする。","mp":6,"point":8,"element":"Null"},
            {"name":"マハジュ","name_tw":"瑪哈祖","desc":"敵全体を基礎確率40％で呪い状態にする。","mp":6,"point":5,"element":"Null"},
            {"name":"マハジュオン","name_tw":"瑪哈祖翁","desc":"敵全体を基礎確率50％で呪い状態にする。","mp":7,"point":9,"element":"Null"},
            {"name":"祟り","name_tw":"報應","desc":"ランダムな敵を１～４回、基礎確率40％で呪い状態にする。","mp":6,"point":7,"element":"Null"},
            //虛
            {"name":"デゾレト","name_tw":"特奏累托","desc":"敵単体を基礎確率70％で虚弱状態にする。","mp":5,"point":2,"element":"Null"},
            {"name":"デゾレトオン","name_tw":"特奏累托翁","desc":"敵単体を基礎確率80％で虚弱状態にする。","mp":6,"point":8,"element":"Null"},
            {"name":"マハデゾレト","name_tw":"瑪哈特奏累托","desc":"敵全体を基礎確率60％で虚弱状態にする。","mp":6,"point":5,"element":"Null"},
            {"name":"マハデゾレトオン","name_tw":"瑪哈特奏累托翁","desc":"敵全体を基礎確率70％で虚弱状態にする。","mp":7,"point":9,"element":"Null"},
            {"name":"アウトブレイク","name_tw":"威力爆發","desc":"ランダムな敵を１～４回、基礎確率60％で虚弱状態にする。","mp":6,"point":7,"element":"Null"}
        ]
    },
    {
        name:"增強",
        name_tw:"增強",
        name_en:"",
        skills:[
            //蓄力
            {"name":"チャージ","name_tw":"蓄力","desc":"自身をチャージ状態にし、次に与える打撃型ダメージを125％増加させる。","mp":6,"point":8,"element":"Null"},
            {"name":"リベリオン","name_tw":"反叛","desc":"自身を会心状態にし、次に行う打撃型攻撃を必ずクリティカルにする。","mp":6,"point":8,"element":"Null"},
            {"name":"反逆の魔象","name_tw":"反叛魔象","desc":"自身をチャージと会心状態にし、次に与える打撃型ダメージを125％増加させ、攻撃が必ずクリティカルになる。","mp":6,"point":null,"element":"Null"},
            {"name":"コンセントレイト","name_tw":"專注","desc":"自身をコンセントレイト状態にし、次に与える魔法型ダメージを125％増加させる。","mp":6,"point":8,"element":"Null"},
            {"name":"ディスコード","name_tw":"異調相斥","desc":"敵全体のチャージ、コンセントレイト、会心状態を解除する。","mp":3,"point":6,"element":"Null"},
            {"name":"バトンタッチ","name_tw":"下一位","desc":"自身のプレスターンアイコンを消費せずにパスを行う。","mp":3,"point":6,"element":"Null"},
            //反射
            {"name":"テトラカーン","name_tw":"提特拉康","desc":"１ターンの間、味方全体を打撃型ダメージ反射状態にする。","mp":7,"point":8,"element":"Null"},
            {"name":"マカラカーン","name_tw":"瑪卡拉康","desc":"１ターンの間、味方全体を魔法型ダメージ反射状態にする。","mp":7,"point":8,"element":"Null"},
            {"name":"五行思想","name_tw":"五行思想","desc":"１ターンの間、味方全体を万能属性も含めた魔法型ダメージ反射状態にする。","mp":null,"point":null,"element":"Null"},
            {"name":"テトラコワース","name_tw":"提特拉破壞","desc":"敵全体の打撃型ダメージ反射状態を解除する。","mp":3,"point":6,"element":"Null"},
            {"name":"マカラコワース","name_tw":"瑪卡拉破壞","desc":"敵全体の魔法型ダメージ反射状態を解除する。","mp":3,"point":6,"element":"Null"},
            //防即死
            {"name":"テトラジャ","name_tw":"","desc":"１ターンの間、味方全体をスキルによる即死無效狀態にする。","mp":null,"point":null,"element":"Null"},
            //強弱化
            {"name":"タルカジャ","name_tw":"塔爾卡加","desc":"３ターンの間、味方全体の攻撃力を20％増加させる。","mp":5,"point":6,"element":"Null"},
            {"name":"ラクカジャ","name_tw":"拉庫卡加","desc":"３ターンの間、味方全体の防御力を20％増加させる。","mp":5,"point":6,"element":"Null"},
            {"name":"スクカジャ","name_tw":"斯庫卡加","desc":"３ターンの間、味方全体の回避と命中を20％増加させる。","mp":5,"point":6,"element":"Null"},
            {"name":"タルンダ","name_tw":"塔倫達","desc":"３ターンの間、敵全体の攻撃力を20％減少させる。","mp":5,"point":6,"element":"Null"},
            {"name":"ラクンダ","name_tw":"拉昆達","desc":"３ターンの間、敵全体の防御力を20％減少させる。","mp":5,"point":6,"element":"Null"},
            {"name":"スクンダ","name_tw":"斯坤達","desc":"３ターンの間、敵全体の回避と命中を20％減少させる。","mp":5,"point":6,"element":"Null"},
            {"name":"デカジャ","name_tw":"迪卡加","desc":"敵全体のステータス強化効果を解除する。","mp":5,"point":4,"element":"Null"},
            {"name":"デクンダ","name_tw":"迪坤達","desc":"味方全体のステータス弱体化効果を解除する。","mp":5,"point":4,"element":"Null"},
            {"name":"バロンダンス","name_tw":"巴隆之舞","desc":"味方全体を回復力95で回復し、３ターンの間、味方全体の攻撃力・防御力・回避と命中をそれぞれ20％ずつ増加させる。","mp":7,"point":null,"element":"Null"},
            {"name":"天孫降臨","name_tw":"天孫降臨","desc":"６ターンの間、味方全体の攻撃力・防御力・回避と命中をそれぞれ20％ずつ増加させる。","mp":8,"point":null,"element":"Null"},
            {"name":"雄叫び","name_tw":"吶喊","desc":"３ターンの間、敵全体の攻撃力・防御力をそれぞれ20％ずつ減少させる。","mp":6,"point":8,"element":"Null"},
            {"name":"溶解ブレス","name_tw":"溶解吐息","desc":"３ターンの間、敵全体の防御力・回避と命中をそれぞれ20％ずつ減少させる。","mp":6,"point":8,"element":"Null"},
            {"name":"フォッグブレス","name_tw":"迷霧吐息","desc":"３ターンの間、敵全体の攻撃力・回避と命中をそれぞれ20％ずつ減少させる。","mp":6,"point":8,"element":"Null"},
            {"name":"挑発","name_tw":"挑釁","desc":"３ターンの間、敵全体の攻撃力を20％増加させ、防御力を20％減少させる。","mp":3,"point":8,"element":"Null"},
            {"name":"ランダマイザ","name_tw":"女巫詛咒","desc":"３ターンの間、敵全体の攻撃力・防御力・回避と命中をそれぞれ20％ずつ減少させる。","mp":8,"point":"15","element":"Null"}
        ]
    },
    {
        name:"属性",
        name_tw:"屬性",
        name_en:"",
        skills:[
            //強化
            {"name":"物理ブースタ","name_tw":"物理強化","desc":"物理属性で与えるダメージが15％増加する。","mp":null,"point":6,"element":"パシップ"},
            {"name":"物理ハイブースタ","name_tw":"高級物理強化","desc":"物理属性で与えるダメージが25％増加する。","mp":null,"point":"21","element":"パシップ"},
            {"name":"火炎ブースタ","name_tw":"火炎強化","desc":"火炎属性で与えるダメージが15％増加する。","mp":null,"point":6,"element":"パシップ"},
            {"name":"火炎ハイブースタ","name_tw":"高級火炎強化","desc":"火炎属性で与えるダメージが25％増加する。","mp":null,"point":21,"element":"パシップ"},
            {"name":"氷結ブースタ","name_tw":"冰凍強化","desc":"氷結属性で与えるダメージが15％増加する。","mp":null,"point":6,"element":"パシップ"},
            {"name":"氷結ハイブースタ","name_tw":"高級冰凍強化","desc":"氷結属性で与えるダメージが25％増加する。","mp":null,"point":21,"element":"パシップ"},
            {"name":"電撃ブースタ","name_tw":"電擊強化","desc":"電撃属性で与えるダメージが15％増加する。","mp":null,"point":6,"element":"パシップ"},
            {"name":"電撃ハイブースタ","name_tw":"高級電擊強化","desc":"電撃属性で与えるダメージが25％増加する。","mp":null,"point":"21","element":"パシップ"},
            {"name":"衝撃ブースタ","name_tw":"衝擊強化","desc":"衝撃属性で与えるダメージが15％増加する。","mp":null,"point":6,"element":"パシップ"},
            {"name":"衝撃ハイブースタ","name_tw":"高級衝擊強化","desc":"衝撃属性で与えるダメージが25％増加する。","mp":null,"point":"21","element":"パシップ"},
            {"name":"破魔ブースタ","name_tw":"破魔強化","desc":"破魔属性で与えるダメージが15％増加する。","mp":null,"point":6,"element":"パシップ"},
            {"name":"破魔ハイブースタ","name_tw":"高級破魔強化","desc":"破魔属性で与えるダメージが25％増加する。","mp":null,"point":21,"element":"パシップ"},
            {"name":"呪殺ブースタ","name_tw":"咒殺強化","desc":"呪殺属性で与えるダメージが15％増加する。","mp":null,"point":6,"element":"パシップ"},
            {"name":"呪殺ハイブースタ","name_tw":"高級咒殺強化","desc":"呪殺属性で与えるダメージが25％増加する。","mp":null,"point":"21","element":"パシップ"},
            {"name":"回復ブースタ","name_tw":"回復強化","desc":"回復スキルの回復量が15％増加する。","mp":null,"point":6,"element":"パシップ"},
            {"name":"回復ハイブースタ","name_tw":"高級回復強化","desc":"回復スキルの回復量が25％増加する。","mp":null,"point":"21","element":"パシップ"},
            //貫通
            {"name":"物理貫通","name_tw":"物理貫通","desc":"物理貫通を得る。","mp":null,"point":"32","element":"パシップ"},
            {"name":"帝の権威","name_tw":"帝王權威","desc":"物理命中率が20%増加し、物理貫通を得る。","mp":null,"point":null,"element":"パシップ"},
            {"name":"火炎貫通","name_tw":"火炎貫通","desc":"火炎貫通を得る。","mp":null,"point":"32","element":"パシップ"},
            {"name":"電撃貫通","name_tw":"電擊貫通","desc":"電撃貫通を得る。","mp":null,"point":"32","element":"パシップ"},
            {"name":"衝撃貫通","name_tw":"衝擊貫通","desc":"衝撃貫通を得る。","mp":null,"point":"32","element":"パシップ"},
            //耐性
            {"name":"物理耐性","name_tw":"物理耐性","desc":"物理耐性を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"火炎耐性","name_tw":"火炎耐性","desc":"火炎耐性を得る。","mp":null,"point":8,"element":"パシップ"},
            {"name":"氷結耐性","name_tw":"冰凍耐性","desc":"氷結耐性を得る。","mp":null,"point":8,"element":"パシップ"},
            {"name":"電撃耐性","name_tw":"電擊耐性","desc":"電撃耐性を得る。","mp":null,"point":8,"element":"パシップ"},
            {"name":"衝撃耐性","name_tw":"衝擊耐性","desc":"衝撃耐性を得る。","mp":null,"point":8,"element":"パシップ"},
            {"name":"破魔耐性","name_tw":"破魔耐性","desc":"破魔耐性を得る。","mp":null,"point":8,"element":"パシップ"},
            {"name":"呪殺耐性","name_tw":"咒殺耐性","desc":"呪殺耐性を得る。","mp":null,"point":8,"element":"パシップ"},

            {"name":"物理無効","name_tw":"物理無效","desc":"物理無効を得る。","mp":null,"point":"18","element":"パシップ"},
            {"name":"火炎無効","name_tw":"火炎無效","desc":"火炎無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"氷結無効","name_tw":"冰凍無效","desc":"氷結無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"電撃無効","name_tw":"電擊無效","desc":"電撃無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"衝撃無効","name_tw":"衝擊無效","desc":"衝撃無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"破魔無効","name_tw":"破魔無效","desc":"破魔無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"呪殺無効","name_tw":"咒殺無效","desc":"呪殺無効を得る。","mp":null,"point":"12","element":"パシップ"},

            {"name":"物理反射","name_tw":"物理反射","desc":"物理反射を得る。","mp":null,"point":null,"element":"パシップ"},
            {"name":"火炎反射","name_tw":"火炎反射","desc":"火炎反射を得る。","mp":null,"point":"16","element":"パシップ"},
            {"name":"氷結反射","name_tw":"冰凍反射","desc":"氷結反射を得る。","mp":null,"point":"16","element":"パシップ"},
            {"name":"電撃反射","name_tw":"電擊反射","desc":"電撃反射を得る。","mp":null,"point":"16","element":"パシップ"},
            {"name":"衝撃反射","name_tw":"衝擊反射","desc":"衝撃反射を得る。","mp":null,"point":"16","element":"パシップ"},
            {"name":"破魔反射","name_tw":"破魔反射","desc":"破魔反射を得る。","mp":null,"point":"16","element":"パシップ"},
            {"name":"呪殺反射","name_tw":"咒殺反射","desc":"呪殺反射を得る。","mp":null,"point":"16","element":"パシップ"},

            {"name":"物理吸収","name_tw":"物理吸收","desc":"物理吸収を得る。","mp":null,"point":"30","element":"パシップ"},
            {"name":"火炎吸収","name_tw":"火炎吸收","desc":"火炎吸収を得る。","mp":null,"point":"20","element":"パシップ"},
            {"name":"氷結吸収","name_tw":"冰凍吸收","desc":"氷結吸収を得る。","mp":null,"point":"20","element":"パシップ"},
            {"name":"電撃吸収","name_tw":"電擊吸收","desc":"電撃吸収を得る。","mp":null,"point":"20","element":"パシップ"},
            {"name":"破魔吸収","name_tw":"破魔吸收","desc":"破魔吸収を得る。","mp":null,"point":"20","element":"パシップ"},

            {"name":"毒耐性","name_tw":"毒耐性","desc":"毒になる確率が50％減少する。","mp":null,"point":4,"element":"パシップ"},
            {"name":"緊縛耐性","name_tw":"束縛耐性","desc":"緊縛になる確率が50％減少する。","mp":null,"point":4,"element":"パシップ"},
            {"name":"魅了耐性","name_tw":"魅惑耐性","desc":"魅了になる確率が50％減少する。","mp":null,"point":4,"element":"パシップ"},
            {"name":"魔封耐性","name_tw":"魔封耐性","desc":"魔封になる確率が50％減少する。","mp":null,"point":4,"element":"パシップ"},
            {"name":"呪い耐性","name_tw":"詛咒耐性","desc":"呪いになる確率が50％減少する。","mp":null,"point":4,"element":"パシップ"},
            {"name":"虚弱耐性","name_tw":"虛弱耐性","desc":"虚弱になる確率が50％減少する。","mp":null,"point":4,"element":"パシップ"},

            {"name":"毒無効","name_tw":"毒無效","desc":"毒無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"緊縛無効","name_tw":"束縛無效","desc":"緊縛無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"魅了無効","name_tw":"魅惑無效","desc":"魅了無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"魔封無効","name_tw":"魔封無效","desc":"魔封無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"呪い無効","name_tw":"詛咒無效","desc":"呪い無効を得る。","mp":null,"point":"12","element":"パシップ"},
            {"name":"虚弱無効","name_tw":"虛弱無效","desc":"虚弱無効を得る。","mp":null,"point":"12","element":"パシップ"}
        ]
    },
    {
        name:"能力",
        name_tw:"能力",
        name_en:"",
        skills:[
            //速度
            {"name":"スピードスター","name_tw":"急速之星","desc":"悪魔のバトルスピードへの影響が50％増加する。","mp":null,"point":"10","element":"パシップ"},
            //命中
            {"name":"百発百中","name_tw":"百發百中","desc":"物理命中率が10％増加する。","mp":null,"point":4,"element":"パシップ"},
            {"name":"千発千中","name_tw":"千發千中","desc":"物理命中率が20％増加する。","mp":null,"point":"16","element":"パシップ"},
            {"name":"龍の反応","name_tw":"","desc":"物理命中率が15％増加し、物理回避率が15％増加する。","mp":null,"point":null,"element":"パシップ"},
            //迴避
            {"name":"見切り","name_tw":"識破","desc":"物理回避率が10％増加する。","mp":null,"point":4,"element":"パシップ"},
            {"name":"寸分の見切り","name_tw":"分寸識破","desc":"物理回避率が20％増加する。","mp":null,"point":"16","element":"パシップ"},
            {"name":"ヴァーハナ","name_tw":"神馭騎獸","desc":"物理回避率15%増加。状態異常になる確率を30%減少。","mp":null,"point":null,"element":"パシップ"},
            {"name":"ステルス","name_tw":"隱密","desc":"物理回避率が20％増加する。さらに、この悪魔が死亡するとき、一度だけHP1で踏みとどまる。","mp":null,"point":null,"element":"パシップ"},
            //異命
            {"name":"乱れ狂い","name_tw":"凌亂綻放","desc":"状態異常にする確率が10％増加する。","mp":null,"point":8,"element":"パシップ"},
            {"name":"狂い咲き","name_tw":"狂亂綻放","desc":"状態異常にする確率が20％増加する。","mp":null,"point":"24","element":"パシップ"},
            //狀防
            {"name":"地獄のマスク","name_tw":"地域口罩","desc":"状態異常になる確率が35％減少する。","mp":null,"point":8,"element":"パシップ"},
            {"name":"奈落のマスク","name_tw":"奈落口罩","desc":"状態異常になる確率が60％減少する。","mp":null,"point":"16","element":"パシップ"},
            {"name":"マレビト","name_tw":"稀人","desc":"全ての状態異常にかからなくなる。","mp":null,"point":null,"element":"パシップ"},
            //狀回
            {"name":"自然治癒","name_tw":"自然痊癒","desc":"状態異常の自然回復率が20％増加する。","mp":null,"point":8,"element":"パシップ"},
            {"name":"超自然治癒","name_tw":"超自然痊癒","desc":"状態異常の自然回復率が30％増加する。","mp":null,"point":"16","element":"パシップ"},
            //會增
            {"name":"コロシの愉悦","name_tw":"殺戮的愉悅","desc":"クリティカル率が15％増加する。","mp":null,"point":8,"element":"パシップ"},
            {"name":"ミナゴロシの愉悦","name_tw":"趕盡殺絕的愉悅","desc":"クリティカル率が25％増加する。","mp":null,"point":"14","element":"パシップ"},
            //會減
            {"name":"野生の勘","name_tw":"野生直覺","desc":"自身が受ける攻撃のクリティカル率を15％減少させる。","mp":null,"point":8,"element":"パシップ"},
            {"name":"野獣の勘","name_tw":"野獸直覺","desc":"自身が受ける攻撃のクリティカル率を25％減少させる。","mp":null,"point":"14","element":"パシップ"},
            //
            {"name":"一分の活泉","name_tw":"一分之活泉","desc":"最大HPが10％増加する。","mp":null,"point":3,"element":"パシップ"},
            {"name":"二分の活泉","name_tw":"二分之活泉","desc":"最大HPが20％増加する。","mp":null,"point":7,"element":"パシップ"},
            {"name":"三分の活泉","name_tw":"三分之活泉","desc":"最大HPが30％増加する。","mp":null,"point":"15","element":"パシップ"},
            {"name":"一分の魔脈","name_tw":"一分之魔脈","desc":"最大MPが１増加する。","mp":null,"point":8,"element":"パシップ"},
            {"name":"二分の魔脈","name_tw":"二分之魔脈","desc":"最大MPが２増加する。","mp":null,"point":"15","element":"パシップ"},
            {"name":"初段の剛力","name_tw":"初段之剛力","desc":"力が５増加する。","mp":null,"point":3,"element":"パシップ"},
            {"name":"初段の賢魔","name_tw":"初段之賢魔","desc":"魔が５増加する。","mp":null,"point":3,"element":"パシップ"},
            {"name":"初段の恵体","name_tw":"初段之惠體","desc":"体が５増加する。","mp":null,"point":3,"element":"パシップ"},
            {"name":"初段の猛速","name_tw":"初段之猛速","desc":"速が５増加する。","mp":null,"point":3,"element":"パシップ"},
            {"name":"初段の強運","name_tw":"初段之強運","desc":"運が５増加する。","mp":null,"point":3,"element":"パシップ"},
            {"name":"二段の剛力","name_tw":"二段之剛力","desc":"力が10増加する。","mp":null,"point":13,"element":"パシップ"},
            {"name":"二段の賢魔","name_tw":"二段之賢魔","desc":"魔が10増加する。","mp":null,"point":13,"element":"パシップ"},
            {"name":"二段の恵体","name_tw":"二段之惠體","desc":"体が10増加する。","mp":null,"point":13,"element":"パシップ"},
            {"name":"二段の猛速","name_tw":"二段之猛速","desc":"速が10増加する。","mp":null,"point":13,"element":"パシップ"},
            {"name":"二段の強運","name_tw":"二段之強運","desc":"運が10増加する。","mp":null,"point":13,"element":"パシップ"},
            {"name":"三段の剛力","name_tw":"三段之剛力","desc":"力が15増加する。","mp":null,"point":"32","element":"パシップ"},
            {"name":"三段の賢魔","name_tw":"三段之賢魔","desc":"魔が15増加する。","mp":null,"point":"32","element":"パシップ"},
            {"name":"三段の恵体","name_tw":"三段之惠體","desc":"体が15増加する。","mp":null,"point":"32","element":"パシップ"},
            {"name":"三段の猛速","name_tw":"三段之猛速","desc":"速が15増加する。","mp":null,"point":"32","element":"パシップ"},
            {"name":"三段の強運","name_tw":"三段之強運","desc":"運が15増加する。","mp":null,"point":"32","element":"パシップ"}
        ]
    },
    {
        name:"追擊",
        name_tw:"追擊",
        name_en:"",
        skills:[
            {"name":"暗殺者","name_tw":"暗殺者","desc":"単体攻撃スキルで与えるダメージが10％増加する。","mp":null,"point":8,"element":"パシップ"},
            {"name":"虐殺者","name_tw":"虐殺者","desc":"全体攻撃スキルで与えるダメージが10％増加する。","mp":null,"point":8,"element":"パシップ"},
            {"name":"大虐殺者","name_tw":"大虐殺者","desc":"全体攻撃スキルで与えるダメージが20％増加する。","mp":null,"point":"24","element":"パシップ"},
            {"name":"毒追撃","name_tw":"毒追擊","desc":"敵が毒状態のときに与えるダメージが30％増加する。","mp":null,"point":13,"element":"パシップ"},
            {"name":"緊縛追撃","name_tw":"束縛追擊","desc":"敵が緊縛状態のときに与えるダメージが30％増加する。","mp":null,"point":13,"element":"パシップ"},
            {"name":"魅了追撃","name_tw":"魅惑追擊","desc":"敵が魅了状態のときに与えるダメージが30％増加する。","mp":null,"point":13,"element":"パシップ"},
            {"name":"魔封追撃","name_tw":"魔封追擊","desc":"敵が魔封状態のときに与えるダメージが30％増加する。","mp":null,"point":13,"element":"パシップ"},
            {"name":"狂戦士","name_tw":"狂戰士","desc":"敵に与えるダメージが10％増加し、自身が受けるダメージも20％増加する。","mp":null,"point":"18","element":"パシップ"},
            {"name":"追い打ち","name_tw":"追擊","desc":"敵の弱点をついたとき、ダメージが10％増加する。","mp":null,"point":"12","element":"パシップ"},
            {"name":"無慈悲な一撃","name_tw":"無情的一擊","desc":"敵の弱点をついたとき、ダメージが20％増加する。","mp":null,"point":"12","element":"パシップ"},
            {"name":"武道の素養","name_tw":"武道的素養","desc":"物理属性で与えるダメージが15％増加し、物理命中率も15％増加する。","mp":null,"point":null,"element":"パシップ"}
        ]
    },
    {
        name:"オート",
        name_tw:"自動",
        name_en:"",
        skills:[
            //反擊
            {"name":"反撃","name_tw":"反擊","desc":"敵の打撃型攻撃を受けたとき、50％の確率で物理属性の打撃型ダメージを威力50で与える。","mp":null,"point":6,"element":"パシップ"},
            {"name":"猛反撃","name_tw":"兇猛反擊","desc":"敵の打撃型攻撃を受けたとき、50％の確率で物理属性の打撃型ダメージを威力100で与える。","mp":null,"point":"12","element":"パシップ"},
            {"name":"デスカウンター","name_tw":"死亡反擊","desc":"敵の打撃型攻撃を受けたとき、50％の確率で物理属性の打撃型ダメージを威力150で与える。","mp":null,"point":"18","element":"パシップ"},
            //防死
            {"name":"食いしばり","name_tw":"強忍","desc":"この悪魔が死亡するとき、一度だけHP1で踏みとどまる。","mp":null,"point":6,"element":"パシップ"},
            {"name":"不屈の闘志","name_tw":"不屈的鬥志","desc":"この悪魔が死亡するとき、一度だけHPが200回復する。","mp":null,"point":"18","element":"パシップ"},
            {"name":"アヴァターラ","name_tw":"降世化身","desc":"この悪魔が死亡するとき、一度だけHP1で踏みとどまる。ウェーブをまたぐとき、HPが10％回復する。","mp":null,"point":null,"element":"パシップ"},
            //自回
            {"name":"勝利の息吹","name_tw":"勝利的氣息","desc":"ウェーブをまたぐとき、HPが30％回復する。","mp":null,"point":6,"element":"パシップ"},
            {"name":"勝利のチャクラ","name_tw":"勝利的查克拉","desc":"ウェーブをまたぐとき、MPが10回復する。","mp":null,"point":"12","element":"パシップ"},
            {"name":"無限のチャクラ","name_tw":"無限的查克拉","desc":"MPの自然回復量が１増加する。","mp":null,"point":"18","element":"パシップ"},
            //反射
            {"name":"テトラカシフト","name_tw":"提特拉康脈動","desc":"後攻でバトルを開始したとき、テトラカーンが発動する。","mp":null,"point":"18","element":"パシップ"},
            {"name":"マカラカシフト","name_tw":"瑪卡拉康脈動","desc":"後攻でバトルを開始したとき、マカラカーンが発動する。","mp":null,"point":"18","element":"パシップ"},
            {"name":"貫反の霊圧","name_tw":"貫反靈壓","desc":"","mp":null,"point":null,"element":"パシップ"},
            //增強
            {"name":"タルカオート","name_tw":"自動塔爾卡","desc":"１ターン目開始時、タルカジャが発動する。","mp":null,"point":"12","element":"パシップ"},
            {"name":"ラクカオート","name_tw":"自動拉庫卡","desc":"１ターン目開始時、ラクカジャが発動する。","mp":null,"point":"12","element":"パシップ"},
            {"name":"スクカオート","name_tw":"自動斯庫卡","desc":"１ターン目開始時、スクカジャが発動する。","mp":null,"point":"12","element":"パシップ"},
            {"name":"タルンダオート","name_tw":"自動塔倫達","desc":"１ターン目開始時、タルンダが発動する。","mp":null,"point":"12","element":"パシップ"},
            {"name":"ラクンダオート","name_tw":"自動拉昆達","desc":"１ターン目開始時、ラクンダが発動する。","mp":null,"point":"12","element":"パシップ"},
            {"name":"スクンダオート","name_tw":"自動斯坤達","desc":"１ターン目開始時、スクンダが発動する。","mp":null,"point":"12","element":"パシップ"},
            //壓制
            {"name":"威圧の構え","name_tw":"威攝姿態","desc":"後攻でバトルを開始したとき、敵のプレスターンアイコンを１つ減少させる。","mp":null,"point":"21","element":"パシップ"},
            {"name":"制圧の構え：Drain","name_tw":"威攝姿態:Drain","desc":"このスキルを持っている悪魔が生きている間、味方の属性吸収が発動した際、敵のプレスターンアイコンを1つ減少させる。","mp":null,"point":null,"element":"パシップ"},
            {"name":"富の信仰","name_tw":"","desc":"最大HPが10%増加する。敵のスキル効果によってこちらのプレスターンアイコンが減少するたび、味方全体のMPを1回復する。","mp":null,"point":null,"element":"パシップ"},
            //節省
            {"name":"トリックスター","name_tw":"狡計之星","desc":"敵の弱点をついたとき、20％の確率でプレスターンアイコンを消費しない。","mp":null,"point":null,"element":"パシップ"},
            {"name":"月の加護","name_tw":"月之庇佑","desc":"MPを消費するとき、消費するMPが１減少する。","mp":null,"point":null,"element":"パシップ"}
        ]
    },
    {
        name:"特殊",
        name_tw:"特殊",
        name_en:"",
        skills:[
            {"name":"コウウン","name_tw":"幸運","desc":"D×2とパーティ悪魔がバトルで獲得する経験値を20％、バトルで獲得するマッカを20％増加させる。","mp":null,"point":null,"element":"パシップ"},
            {"name":"毒床歩き","name_tw":"漫步雷池","desc":"アウラゲート内のダメージ床のダメージが25％減少する。","mp":null,"point":2,"element":"パシップ"},
            {"name":"毒床渡り","name_tw":"闊步雷池","desc":"アウラゲート内のダメージ床のダメージが50％減少する。","mp":null,"point":4,"element":"パシップ"},
            {"name":"ワナフーリ","name_tw":"陷阱弱化","desc":"アウラゲート内でダメージ床のダメージが30％減少し、ダークゾーンの効果を無効にする。","mp":null,"point":null,"element":"パシップ"},
            {"name":"毒床無効","name_tw":"雷池無懼","desc":"アウラゲート内のダメージ床のダメージを無効にする。","mp":null,"point":8,"element":"パシップ"},
            {"name":"ダークゾーン無効","name_tw":"黑暗區域無效","desc":"アウラゲート内のダークゾーンの効果を無効にする。","mp":null,"point":8,"element":"パシップ"}
        ]
    }
];


//////////////////////
// i18n
//////////////////////

const messages = {
    en: {
      message: {
        fusion: 'Fusion',
        skill:'Skill',
        reverse:'Reverse',
        normal:'Normal',
        reverse_fusion: 'Reverse Fusion',
        normal_fusion: 'Normal Fusion',
        devil: 'Demon',
        setting:'Settings',
        language: 'Language',
        downgrade_fusion: 'Downgrade Fusion',
        prevent_unload:'Prevent Unload',
        allow: 'Allow',
        deny: 'Deny',
        search:'Search',
        element:'Element',
        inherit:'Inherit',
        description:'Description',
        cost:'Cost',
        cost_others:'Cost(Others)',
        cost_pure:'Cost(Pure)',
        fusion_mag:'Fusion',
        fusion_mag_others:'Fusion(Others)',
        fusion_mag_pure:'Fusion(Pure)'
      }
    },
    ja: {
      message: {
        fusion: 'Fusion',
        skill:'Skill',
        reverse:'Reverse',
        normal:'Normal',
        reverse_fusion: 'Reverse Fusion',
        normal_fusion: 'Normal Fusion',
        devil: 'Demon',
        setting:'Settings',
        language: 'Language',
        downgrade_fusion: 'Downgrade Fusion',
        prevent_unload:'Prevent Unload',
        allow: 'Allow',
        deny: 'Deny',
        search:'Search',
        element:'Element',
        inherit:'Inherit',
        description:'Description',
        cost:'Cost',
        cost_others:'Cost(Others)',
        cost_pure:'Cost(Pure)',
        fusion_mag:'Fusion',
        fusion_mag_others:'Fusion(Others)',
        fusion_mag_pure:'Fusion(Pure)'
      }
    },
    tw: {
        message:{
            fusion:'合體',
            skill:'技能',
            reverse:'逆向',
            normal:'順向',
            reverse_fusion: '逆向合體',
            normal_fusion: '順向合體',
            devil: '惡魔',
            setting:'設定',
            language: '語言',
            downgrade_fusion: '降階合體',
            prevent_unload:'防止換頁',
            allow:'允許',
            deny:'不允許',
            search:'查詢',
            element:'屬性',
            inherit:'繼承',
            description:'說明',
            cost:'成本',
            cost_others:'成本(他)',
            cost_pure:'成本(素)',
            fusion_mag:'合體費',
            fusion_mag_others:'合體費(他)',
            fusion_mag_pure:'合體費(素)'
        }
    }
};


//////////////////////
// Devil Class
//////////////////////

var Devil = function(devil){

    this.name = devil.name;
    this.name_tw = devil.name_tw;
    this.name_en = devil.name_en;
    this.rarity = devil.rarity;
    this.grade = devil.grade;
    this.icon = devil.icon;
    this.elements = devil.elements;
    this.skills = devil.skills;
    this.skill4 = devil.skill4;
    this.skill5 = devil.skill5;
    this.type = devil.type;
    this.max = null;
    this.min = null;
    this.race = null;
    this.cost = null;
    this.cost_pure = null;
    this.costs = [null,null,null,null,null,null];
    this.pure_costs = [null,null,null,null,null,null];
};

Devil.prototype.showName = function(){

    var name;

    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }
    if(!name)
        name = this.name;

    return name;
}

Devil.prototype.showGrade = function(){

    return 'G.'+this.grade;
}

Devil.prototype.showRarity = function(){

    var rarity = "";
    for(var i=0; i<this.rarity;i++)
        rarity += '★';
    return rarity;
}
Devil.prototype.showCost = function(rarity){
/*
    var cost = this.costs[rarity];
*/

    return (this.cost/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
Devil.prototype.showCostPure = function(rarity){

    /*
    var cost = this.pure_costs[rarity];
    */

    return (this.cost_pure/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
Devil.prototype.fission_formulas = function(){

    var devil = this;

    var formulas = [];

    this.race.formulas.forEach(function(f){

        var r1 = f[0];
        var r2 = f[1];

        var boms = [];

        r1.devils.forEach(function(d1){
            r2.devils.forEach(function(d2){

                var bom = DevilBom.bom(devil,d1,d2);

                if(bom)
                    boms.push(bom);
            });
        });

        boms.sort(function(bom1,bom2){
            return bom1.order - bom2.order;
        });

        if(boms.length>0){
            formulas.push({
                'name': r1.name + ' x ' + r2.name,
                'boms':boms
            });
        }

    });

    return formulas;
}

Devil.prototype.fusion_formulas = function(){

    var d1 = this;
    var multi_formulas = [];

    // Target Race Loop
    this.race.usage.forEach(function(u){

        // Target Devil Loop
        u.target.devils.forEach(function(target){

            var formulas = [];

            u.r2s.forEach(function(r2){

                var boms = [];

                // Pair Devil Loop
                r2.devils.forEach(function(d2){

                    var bom = DevilBom.bom(target, d1, d2);

                    if(bom)
                        boms.push(bom)
                });

                boms.sort(function(c1,c2){
                    return c1.order - c2.order;
                });

                if(boms.length>0){

                    formulas.push({
                        'name': d1.race.name_en + ' x ' + r2.name_en,
                        'boms': boms
                    });
                }
            });

            if(formulas.length>0){
                multi_formulas.push({
                    devil:target,
                    formulas:formulas
                });
            }
        });

    });

    return multi_formulas;
}

////////////////////
// Race Class
///////////////////

var Race = function(race){
    this.name = race.name_en
    this.formulas = race.formulas;
    this.devils = race.devils;
}

Race.prototype.showName = function(){

    var name;

    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }

    return name ? name : this.name;
}

////////////////////
// Skill Class
////////////////////

var Skill = function(skill){

    this.name = skill.name;
    this.name_tw = skill.name_tw==null ? "" : skill.name_tw;
    this.name_en = "";
    this.desc = skill.desc==null ? "" : skill.desc;
    this.desc_tw = skill.desc_tw==null ? "" : skill.desc_tw;
    this.mp = skill.mp==null ? "" : skill.mp;
    this.point = skill.point == null ? "" : skill.point;
    this.element = skill.element == null ? "" : skill.element;
    this.type = null;
    this.devils = [];
}
Skill.prototype.showName = function(){

    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }
    if(!name)
        name = this.name;
    if(!name)
        name = '--------------------';
    return name;
}
Skill.prototype.showDesc = function(){

    switch(i18n.locale){
        case 'ja': desc = this.desc; break;
        case 'tw': desc = this.desc_tw; break;
        case 'en': desc = this.desc_en; break;
        default: desc = this.desc;
    }
    if(!desc)
        desc = this.desc;
    if(!desc)
        desc = '';

    return desc;
}
Skill.prototype.showHint = function(){

    var hint = '屬性: '+this.element+' MP: '+this.mp+' 繼承: '+this.point+'\n'+this.showDesc();
    return hint;
}
Skill.prototype.addDevil = function(new_devil){

    var devils = this.devils.filter(function(devil){
        return devil.name == new_devil.name;
    });

    if(devils.length==0)
        this.devils.push(new_devil);
}

////////////////////
// Skill Type Class
////////////////////

var SkillType = function(type){

    this.name = type.name;
    this.name_tw = type.name_tw == null ? "" : type.name_tw;
    this.name_en = type.name_en == null ? "" : type.name_en;
    this.skills = type.skills;
}
SkillType.prototype.showName = function(){

    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }
    if(!name)
        name = this.name;
    if(!name)
        name = '';
    return name;
}
////////////////////
// Devil Bom Class
////////////////////

function DevilBom(devil, d1, d2){

    var child1 = d1==null?null:new DevilBom(d1);
    var child2 = d2==null?null:new DevilBom(d2);

    if(child1) child1.parent = this;
    if(child2) child2.parent = this;

    this.devil = devil;
    this.parent = null;
    this.child1 = child1;
    this.child2 = child2;
    this.order = 0;
    this.upgrade = false;
    this.downgrade = false;
    this.mag = 0;
    this.mag_pure = 0;
    this.collapse = false;

    this.init();
}

DevilBom.prototype.set = function(bom){

    bom.child1.parent = this;
    bom.child2.parent = this;

    this.child1 = bom.child1;
    this.child2 = bom.child2;
    this.order = bom.order;
    this.upgrade = bom.upgrade;
    this.downgrade = bom.downgrade;
    this.mag = bom.mag;
    this.mag_pure = bom.mag_pure;
}

DevilBom.prototype.unset = function(){

    this.child1 = null;
    this.child2 = null;
    this.order = 0;
    this.upgrade = false;
    this.downgrade = false;
    this.mag = 0;
    this.mag_pure = 0;
}

DevilBom.prototype.init = function(){

    if(this.child1 && this.child2){

        var devil = this.devil;
        var d1 = this.child1.devil;
        var d2 = this.child2.devil;

        this.order = (d1.rarity>d2.rarity)
            ? (d1.rarity*10+d2.rarity)
            : (d2.rarity*10+d1.rarity);
        this.upgrade = (d1.rarity < devil.rarity && d2.rarity < devil.rarity);
        this.downgrade = (d1.rarity > devil.rarity || d2.rarity > devil.rarity);

        var g = (d1.grade + d2.grade)/2;
        var A = B = 0;
        var r = (devil.rarity*2)-d1.rarity-d2.rarity;

        A = [
            //-1 ~ 4
            [5,     5,          5,          5,          5,          5],
            [5,     5,          25,         50,         0,          0],
            [250,   500,        2500,       5000,       5200,       5400],
            [0,     6000,       150000,     300000,     320000,     0],
            [0,     60000,      1500000,    3000000,    4200000,    0]
        ][devil.rarity-1][r+1];

        B = [0,0,0.3,0.45,60,75,1080,1260,14400,16200][Math.floor(devil.grade/10)];

        var mag = A + (devil.grade-g) * B;

        this.mag = Math.floor(mag);

        if(devil.rarity==5)         this.mag_pure = Math.floor(mag*0.7);
        else if(devil.rarity==4)    this.mag_pure = Math.floor(mag*0.5);
        else                        this.mag_pure = this.mag;

        if( A==0 ){
            this.mag = 0;
            this.mag_pure = 0;
        }
    }
    else{
        this.order = 0;
        this.upgrade = false;
        this.downgrade = false;
        this.mag = 0;
        this.mag_pure = 0;
    }
};

DevilBom.prototype.showMag = function(){

    return (this.mag/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


DevilBom.prototype.showMagPure = function(){

    return (this.mag_pure/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

DevilBom.prototype.caculate_mag = function(layer){

    var mag = this.mag;
    var mag1 = (this.child1?this.child1.caculate_mag(layer+1):0);
    var mag2 = (this.child2?this.child2.caculate_mag(layer+1):0);

    if(layer==1){
        if(mag1>mag2){  mag += mag1 + (this.child2?this.child2.caculate_mag_pure():0);   }
        else{           mag += (this.child1?this.child1.caculate_mag_pure():0) + mag2;   }
    }
    else{               mag += mag1 + mag2;                                   }

    return mag;
};

DevilBom.prototype.caculate_mag_pure = function(){

    return this.mag_pure
        + (this.child1?this.child1.caculate_mag_pure():0)
        + (this.child2?this.child2.caculate_mag_pure():0);
};

DevilBom.prototype.showTotalMag = function(){

    var mag = this.caculate_mag(1);

    return (mag/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

DevilBom.prototype.showTotalMagPure = function(){

    var mag_pure = this.caculate_mag_pure();

    return (mag_pure/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

DevilBom.prototype.getCost = function(rarity){

    var d1 = this.child1.devil;
    var d2 = this.child2.devil;

    var cost1_p = d1.pure_costs[rarity];
    var cost1_x = d1.costs[rarity];
    var cost2_p = d2.pure_costs[rarity];
    var cost2_x = d2.costs[rarity];

    if(cost1_p==null||cost1_x==null||cost2_p==null||cost2_x==null)
        return null;

    if(d1.rarity <= rarity){
        cost1_p = 0;
        cost1_x = 0;
    }

    if(d2.rarity <= rarity){
        cost2_p = 0;
        cost2_x = 0;
    }

    var cost1 = cost1_x + cost2_p;
    var cost2 = cost1_p + cost2_x;

    return (cost1 > cost2 ? cost2 : cost1) + this.mag;

};

DevilBom.prototype.getCostPure = function(rarity){

    var d1 = this.child1.devil;
    var d2 = this.child2.devil;

    var cost1 = d1.pure_costs[rarity];
    var cost2 = d2.pure_costs[rarity];

    if(cost1==null||cost2==null)
        return null;

    return (d1.rarity > rarity ? cost1 : 0)
        + (d2.rarity > rarity ? cost2 : 0)
        + this.mag_pure;
};

DevilBom.bom = function(devil, d1, d2){

    var g = (d1.grade + d2.grade)/2;

    if( ! (devil.min <= g && g < devil.max ) ){
        return null;
    }

    return new DevilBom(devil, d1, d2);
}

/////////////////////////////
// Digital Devil Data Class
/////////////////////////////

function Resource(ddd, sss){

    this.races = [];
    this.devils = [];
    this.skillTypes = [];
    this.skills = [];

    var race_data = {};
    var devil_data = {};
    var devil_array = [];
    var type_data = {};
    var skill_data = {};
    var skill_array = [];

    sss = sss.map(function(type){

        type = new SkillType(type);
        type_data[type.name] = type;

        type.skills = type.skills.map(function(skill){
            skill = new Skill(skill);
            skill.type = type;
            skill_data[skill.name] = skill;
            skill_array.push(skill);
            return skill;
        });
        return type;
    });

    //create race_data
    //convert race to Race Class
    //convert devil to Devil Class
    ddd = ddd.map(function(race){

        race.devils = race.devils.map(function(devil){
            return new Devil(devil);
        });
        race_data[race.name] = race;
        return new Race(race);
    });

    //replace formula's race from text to object
    ddd.forEach(function(race){

        race.formulas.forEach(function(formula){
            formula[0] = race_data[formula[0]];
            formula[1] = race_data[formula[1]];
        });
    });

    //create devil_data
    //convert devil's skill from text to object
    ddd.forEach(function(r1){

        r1.devils.forEach(function(devil, index){

            devil.race = r1;
            devil.max = devil.grade;
            devil.min = (index==r1.devils.length-1 ? 0 : r1.devils[index+1].grade);

            if(devil.skills){
                devil.skills = devil.skills.map(function(name){
                    var skill = skill_data[name];
                    if(skill){
                        skill.addDevil(devil);
                    }
                    return skill ? skill : new Skill({name:name});
                });
            }
            if(devil.skill4){
                devil.skill4 = devil.skill4.map(function(name){
                    var skill = skill_data[name];
                    if(skill){
                        skill.addDevil(devil);
                    }
                    return skill ? skill : new Skill({name:name});
                });
            }
            if(devil.skill5){
                devil.skill5 = devil.skill5.map(function(name){
                    var skill = skill_data[name];
                    if(skill){
                        skill.addDevil(devil);
                    }
                    return skill ? skill : new Skill({name:name});
                });
            }

            devil_array.push(devil);
            devil_data[devil.name] = devil;
        });

        var usage_temp = {};

        ddd.forEach(function(target){

            target.formulas.forEach(function(f){

                var r2 = null;

                if(f[0].name==r1.name){
                    r2 = f[1];
                }
                if(f[1].name==r1.name){
                    r2 = f[0];
                }
                if(r2){

                    if(! (target.name in usage_temp)){
                        usage_temp[target.name] = [];
                    }

                    usage_temp[target.name].push(r2);
                }
            });
        });

        r1.usage = [];

        for(name in usage_temp){
            r1.usage.push({
                target:race_data[name],
                r2s:usage_temp[name]
            })
        }
    });

    devil_array.sort(function(d1,d2){
        if(d1.grade==d2.grad2)  return 0;
        return d1.grade > d2.grade ? 1 : -1;
    });

    //create fission and fusion options

    devil_array.forEach(function(devil){
        devil.fission_boms = [];
        devil.fission_options = devil.fission_formulas();
        devil.fission_options.forEach(function(option){
             devil.fission_boms = devil.fission_boms.concat(option.boms);
        });
    });

    var break_limit=10;
    var all_pass = false;

    while( break_limit-- > 0 && !all_pass){

        all_pass = true;

        devil_array.forEach(function(devil){

            var pass = true;

            for(var rarity=1; rarity<=5; rarity++){

                var cost = null;
                var pure_cost = null;

                if(devil.fission_boms.length){

                    devil.fission_boms.forEach(function(bom){

                        var l_pure_cost = bom.getCostPure(rarity);

                        if(l_pure_cost==null) pass = false;
                        else if(pure_cost==null) pure_cost = l_pure_cost;
                        else pure_cost = pure_cost > l_pure_cost ? l_pure_cost : pure_cost;

                        var l_cost = bom.getCost(rarity);

                        if(l_cost==null)    pass = false;
                        else if(cost==null) cost = l_cost;
                        else                cost = cost > l_cost ? l_cost : cost;
                    });

                    if(devil.rarity > rarity){

                        if(pure_cost!=null && devil.pure_costs[rarity] != pure_cost){
                            devil.pure_costs[rarity] = pure_cost;
                            pass = false;
                        }

                        if(cost!=null && devil.costs[rarity] != cost){
                            devil.costs[rarity] = cost;
                            pass = false;
                        }
                    }
                    else{
                        devil.pure_costs[rarity] = 0;
                        devil.costs[rarity] = 0;
                    }
                }
                else{
                    devil.pure_costs[rarity] = 0;
                    devil.costs[rarity] = 0;
                }
            }

            if(!pass)   all_pass = false;
        });
    }

    this.races = ddd;
    this.race_data = race_data;
    this.devils = devil_array;
    this.devil_data = devil_data;
    this.skillTypes = sss;
    this.skills = skill_array;
    this.skill_data = skill_data;
    this.builder_options = [];
    this.fusion_options = [];
}

////////////////////
//      Main
////////////////////

// Initialize

var resource = [];
resource.push(new Resource(ddd_stable, skill_stable));

function setCookie(name,value)
{
    var Days = 365;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: messages // set locale messages
});

var app = new Vue({
    i18n:i18n,
    el:'#app',
    data:{
        resource_id:0,
        resource_options:[
            {text:'Stable', value:0}
//            {text:'Preview (Dragon)',value:1}
        ],
        race_id:0,
        skillType_id:0,

        //builder
        builder_rarity_options:[
            {text:"1+1", state:true, active:false},
            {text:"1+2", state:true, active:false},
            {text:"1+3", state:true, active:false},
            {text:"1+4", state:true, active:false},
            {text:"1+5", state:true, active:false},
            {text:"2+2", state:true, active:false},
            {text:"2+3", state:true, active:false},
            {text:"2+4", state:true, active:false},
            {text:"2+5", state:true, active:false},
            {text:"3+3", state:true, active:false},
            {text:"3+4", state:true, active:false},
            {text:"3+5", state:true, active:false},
            {text:"4+4", state:true, active:false},
            {text:"4+5", state:true, active:false},
            {text:"5+5", state:true, active:false}
        ],
        //fusion
        fusion_rarity_options:[
            {text:"1+1", state:true, active:false},
            {text:"1+2", state:true, active:false},
            {text:"1+3", state:true, active:false},
            {text:"1+4", state:true, active:false},
            {text:"1+5", state:true, active:false},
            {text:"2+2", state:true, active:false},
            {text:"2+3", state:true, active:false},
            {text:"2+4", state:true, active:false},
            {text:"2+5", state:true, active:false},
            {text:"3+3", state:true, active:false},
            {text:"3+4", state:true, active:false},
            {text:"3+5", state:true, active:false},
            {text:"4+4", state:true, active:false},
            {text:"4+5", state:true, active:false},
            {text:"5+5", state:true, active:false}
        ],

        //setting
        lang_value:2,
        lang_options:[
            {text:'日本語', value:0},
            {text:'繁體中文', value:1},
            {text:'English', value:2}
        ],
        allow_down_grade:0,
        allow_down_grade_options:[
            {text: 'message.allow', value:1},
            {text: 'message.deny', value:0}
        ],
        allow_prevent_unload:0,
        index_main:0,
        index_main_last:0,
        index_fusion:0,
        index_fusion_last:0,
        keyword:'',
        searchBar:false,
        //orb
        orbs:[
            {'name':'ライト', icon:'images/theme/light.png', state:false},
            {'name':'ダーク', icon:'images/theme/dark.png', state:false},
            {'name':'ニュートラル', icon:'images/theme/natural.png', state:false },
            {'name':'ロー', icon:'images/theme/law.png', state:false},
            {'name':'カオス', icon:'images/theme/chaos.png', state:false}
        ],

        //timer
        now:null,
        gate_status_ch:false,
        gate_status_jp:false,
        gate_timer_ch:null,
        gate_timer_jp:null,
        moon_status:0,
        moon_timer:null,

        //modal

        updated_at:'180719',

        //important for update computed's getter from setter
        computed_counter:{
            builder_target:0,
            builder_options:0,
            info_target:0,
            current_bom:0,
            fusion_target:0,
            fusion_options:0
        }
    },
    created:function(){

        var c_lang_value = getCookie('lang_value');

        if(c_lang_value!=null){
            this.lang_value = c_lang_value;
        }

        switch(this.lang_value){
            case '0': i18n.locale='ja';break;
            case '1': i18n.locale='tw';break;
            case '2': i18n.locale='en';break;
            default: i18n.locale='en';break;
        }

        var c_allow_down_grade = getCookie('allow_down_grade');

        if(c_allow_down_grade!=null){
            this.allow_down_grade = c_allow_down_grade;
        }

        var c_allow_prevent_unload = getCookie('allow_prevent_unload');

        if(c_allow_prevent_unload!=null){
            this.allow_prevent_unload = c_allow_prevent_unload;
        }

        this.update_now();

        setInterval(function(){

            app.tick();

        },1000);

    },
    updated:function(){


    },
    watch:{
        lang_value:function(){

            switch(this.lang_value){
                case 0: i18n.locale='ja';break;
                case 1: i18n.locale='tw';break;
                case 2: i18n.locale='en';break;
            }

            setCookie('lang_value', this.lang_value);
        },
        allow_down_grade:function(){

            this.update_builder_filter();
            this.update_fusion_filter();

            setCookie('allow_down_grade', this.allow_down_grade);
        },
        allow_prevent_unload:function(){

            setCookie('allow_prevent_unload', this.allow_prevent_unload);
        },
        resource_id:function(){

            this.reset_builder();
            this.reset_fusion();
        }
    },
    computed:{
        resource:function(){

            return resource[this.resource_id];
        },
        races:function(){

            return this.resource.races;
        },
        devils:function(){

            return this.resource.devils;
        },
        devils_by_race:function(){

            if(this.race_id >= this.races.length)
                this.race_id = this.races.length-1;

            return this.races[this.race_id].devils;
        },
        skillTypes:function(){

            return this.resource.skillTypes;
        },
        skills:function(){

            return this.resource.skills;
        },
        skills_by_type:function(){

            if(this.skillType_id >= this.skillTypes.length)
                this.skillType_id = this.skillType.length-1;

            return this.skillTypes[this.skillType_id].skills;
        },
        builder_target:{
            get:function(){

                this.computed_counter.builder_target;
                return this.resource.builder_target;
            },
            set:function(bom){

                this.resource.builder_target = bom;
                this.computed_counter.builder_target++;
            }
        },
        builder_options:{
            get: function(){

                this.computed_counter.builder_options;
                return this.resource.builder_options;
            },
            set:function(options){

                this.resource.builder_options = options;
                this.computed_counter.builder_options++;
            }
        },
        current_bom:{
            get:function(){

                this.computed_counter.current_bom;
                return this.resource.current_bom;
            },
            set:function(bom){
                this.resource.current_bom = bom;
                this.computed_counter.current_bom++;
            }
        },
        fusion_target:{
            get:function(){

                this.computed_counter.fusion_target;
                return this.resource.fusion_target;
            },
            set:function(bom){

                this.resource.fusion_target = bom;
                this.computed_counter.fusion_target++;
            }
        },
        fusion_options:{
            get: function(){

                this.computed_counter.fusion_options;
                return this.resource.fusion_options;
            },
            set:function(options){

                this.resource.fusion_options = options;
                this.computed_counter.fusion_options++;
            }
        },
        info_target:{
            get:function(){

                this.computed_counter.info_target;
                return this.resource.info_target;
            },
            set:function(devil){

                this.resource.info_target = devil;
                this.computed_counter.info_target++;
            }
        },
        filtered_devils: function(){

            var keyword = this.keyword.replace(/[!@#$%^&*()-=_+\[\]{}|\\]/g,'');

            var result = [];

            if(keyword){
                result = this.devils.filter(function(d){
                    return d.name.match(keyword)||d.name_tw.match(keyword);
                });
            }

            return result;
        },
        filtered_skills: function(){

            var keyword = this.keyword.replace(/[!@#$%^&*()-=_+\[\]{}|\\]/g,'');

            var result = [];

            if(keyword){
                result = this.skills.filter(function(s){
                    return s.name.match(keyword)||s.name_tw.match(keyword);
                });
            }

            return result;
        },
        filtered_builder_options:function(){

            var options = [];
            var filters = this.builder_rarity_options;
            var allow_down_grade = this.allow_down_grade;

            this.builder_options.forEach(function(option){

                var boms = option.boms.filter(function(bom){

                    var r = bom.devil.rarity;
                    var r1 = bom.child1.devil.rarity;
                    var r2 = bom.child2.devil.rarity;
                    var temp = [r1,r2].sort();

                    r1 = temp[0];
                    r2 = temp[1];

                    if( allow_down_grade==0 && (r1>r||r2>r)){
                        return false;
                    }

                    return filters.filter(function(filter){
                        if(filter.active&&filter.state&&filter.text==r1+'+'+r2){
                            return true;
                        }
                    }).length > 0;
                });

                if(boms.length)
                    options.push({name:option.name,boms:boms});
            });

            return options;
        },
        filtered_fusion_options:function(){

            var options = [];
            var filters = this.fusion_rarity_options;
            var allow_down_grade = this.allow_down_grade;

            this.fusion_options.forEach(function(option){

                var formulas = [];

                option.formulas.forEach(function(formula){

                    var boms = formula.boms.filter(function(bom){

                        var r = bom.devil.rarity;
                        var r1 = bom.child1.devil.rarity;
                        var r2 = bom.child2.devil.rarity;
                        var temp = [r1,r2].sort();

                        r1 = temp[0];
                        r2 = temp[1];

                        if( allow_down_grade==0 && (r1>r||r2>r)){
                            return false;
                        }

                        return filters.filter(function(filter){
                            if(filter.active&&filter.state&&filter.text==r1+'+'+r2){
                                return true;
                            }
                        }).length > 0;
                    });

                    if(boms.length){
                        formulas.push({name:formula.name,boms:boms});
                    }
                });

                if(formulas.length){
                    options.push({devil:option.devil,formulas:formulas,active:false});
                }
            });

            return options;
        }
    },
    methods:{

        route:function(name, skip_update_last){

            var index_main = this.index_main;
            var index_fusion = this.index_fusion;

            switch(name){
                case 'fusion.devil':    index_main = 0; index_fusion = 0;   break;
                case 'fusion.fission':  index_main = 0; index_fusion = 1;   break;
                case 'fusion.fusion':   index_main = 0; index_fusion = 2;   break;
                case 'skill':           index_main = 1;                     break;
                case 'customize':       index_main = 2;                     break;
                case 'search':          index_main = 3;                     break;
                case 'setting':         index_main = 4;                     break;
                case 'last':            index_main = this.index_main_last;
                                        index_fusion = this.index_fusion_last;  break;
                default:                index_main = 0; index_fusion = 0;   break;
            }

            if(!skip_update_last){
                this.index_main_last = index_main;
                this.index_fusion_last = index_fusion;
            }

            this.index_main = index_main;
            this.index_fusion = index_fusion;
        },
        isRoute:function(name){

            var index_main = this.index_main;
            var index_fusion = this.index_fusion;

            switch(name){
                case 'home':            index_main = 0; index_fusion = 0;   break;
                case 'fusion.devil':    index_main = 0; index_fusion = 0;   break;
                case 'fusion.fission':  index_main = 0; index_fusion = 1;   break;
                case 'fusion.fusion':   index_main = 0; index_fusion = 2;   break;
                case 'skill':           index_main = 1;                     break;
                case 'customize':       index_main = 2;                     break;
                case 'search':          index_main = 3;                     break;
                case 'setting':         index_main = 4;                     break;
                default:                index_main = 0; index_fusion = 0;   break;
            }

            return index_main == this.index_main && index_fusion == this.index_fusion;
        },
        start_bom: function(devil){

            this.builder_target = new DevilBom(devil);
            this.current_bom = null;
            this.route('fusion.fission');
            this.list_bom(this.builder_target);
        },
        list_bom: function(bom){

            this.update_current_bom(this.current_bom==bom?null:bom);
        },
        update_current_bom:function(bom){

            this.current_bom = bom;
            this.update_builder();
        },
        choose_bom: function(bom){

            this.current_bom.set(bom);
            this.update_current_bom(null);
        },
        reset_bom:function(bom){

            bom.unset();
            this.update_current_bom(null);
        },
        reset_builder:function(){

            this.builder_target = null;
            this.update_current_bom(null);
        },
        builder_rarity_option_click:function(option){

            var flag_first_down = true;
            var flag_last_down = true;

            if(option.state)
                return false;

            this.builder_rarity_options.forEach(function(opt){

                if(opt.active && opt!=option && !opt.state){
                    flag_first_down = false;
                }

                if(opt.active && opt!=option && opt.state){
                    flag_last_down = false;
                }
            });

            if(flag_first_down){
                this.builder_rarity_options.forEach(function(opt){
                    opt.state = opt==option ;
                });
            }

            if(flag_last_down){
                this.builder_rarity_options.forEach(function(opt){
                    opt.state=true;
                });
            }
        },
        update_builder:function(){

            if(this.current_bom){
                this.builder_options = this.current_bom.devil.fission_formulas();
            }
            else{
                this.builder_options = [];
            }
            this.update_builder_filter();
        },
        update_builder_filter:function(){

            var combs = {};
            var allow_down_grade = this.allow_down_grade;

            this.builder_options.forEach(function(option){

                option.boms.forEach(function(bom){

                    var r = bom.devil.rarity;
                    var r1 = bom.child1.devil.rarity;
                    var r2 = bom.child2.devil.rarity;
                    var temp = [r1,r2].sort();

                    r1 = temp[0];
                    r2 = temp[1];

                    if( allow_down_grade==0 && (r1>r||r2>r)){
                        //skip
                    }
                    else{
                        if(!combs[r1+'+'+r2])
                            combs[r1+'+'+r2] = r1+'+'+r2;
                    }

                });
            });

            this.builder_rarity_options.forEach(function(option){

                if(combs[option.text]){
                    option.active=true;
                    option.state=true;
                }
                else{
                    option.active=false;
                }
            });
        },
        fusion_rarity_option_click:function(option){

            var flag_first_down = true;
            var flag_last_down = true;

            if(option.state)
                return false;

            this.fusion_rarity_options.forEach(function(opt){

                if(opt.active && opt!=option && !opt.state){
                    flag_first_down = false;
                }

                if(opt.active && opt!=option && opt.state){
                    flag_last_down = false;
                }
            });

            if(flag_first_down){
                this.fusion_rarity_options.forEach(function(opt){
                    opt.state = opt==option ;
                });
            }

            if(flag_last_down){
                this.fusion_rarity_options.forEach(function(opt){
                    opt.state=true;
                });
            }
        },
        update_fusion:function(){

            if(this.fusion_target){
                this.fusion_options = this.fusion_target.fusion_formulas();
            }
            else{
                this.fusion_options = [];
            }
            this.update_fusion_filter();
        },
        fusion: function(devil){

            this.fusion_target = devil;
            this.update_fusion();
            this.route('fusion.fusion');
        },
        reset_fusion: function(){

            this.fusion_target = null;
            this.update_fusion();
        },
        update_fusion_filter: function(){

            var combs = {};
            var allow_down_grade = this.allow_down_grade;

            this.fusion_options.forEach(function(option){
                option.formulas.forEach(function(formula){
                    formula.boms.forEach(function(bom){

                        var r = bom.devil.rarity;
                        var r1 = bom.child1.devil.rarity;
                        var r2 = bom.child2.devil.rarity;
                        var temp = [r1,r2].sort();

                        r1 = temp[0];
                        r2 = temp[1];

                        if( allow_down_grade==0 && (r1>r||r2>r)){
                            //skip
                        }
                        else{
                            if(!combs[r1+'+'+r2])
                                combs[r1+'+'+r2] = r1+'+'+r2;
                        }
                    });
                });
            });

            this.fusion_rarity_options.forEach(function(option){

                if(combs[option.text]){
                    option.active=true;
                    option.state=true;
                }
                else{
                    option.active=false;
                }
            });
        },
        update_now:function(){

            var now = new Date();
            var utc = now.getTime() + now.getTimezoneOffset() * 60000;
            this.now = new Date( utc + 9 * 3600000 );
        },
        tick:function(){

            var sec = this.now.getSeconds()+1;

            if(sec==60)
                this.update_now();

            this.now.setSeconds( sec );

            var next, diff, h;
            var gate_hours_ch = [0,9,12,17,19,22];    //utc+8 [8,11,16,18,21,23]
            var gate_hours_jp = [0,7,12,17,19,22];    //utc+8 [6,11,16,18,21,23]

            var h = this.now.getHours();

            next = new Date(this.now.getTime());
            next.setMinutes(0);
            next.setSeconds(0);

            for(var i=0; i<gate_hours_ch.length;i++){
                var gate_hour = gate_hours_ch[i];
                if(h<gate_hour){
                    next.setHours(gate_hour);
                    this.gate_status_ch = false;
                    break;
                }
                if(h==gate_hour){
                    next.setHours(next.getHours()+1);
                    this.gate_status_ch = true;
                    break;
                }
                if(i==gate_hours_ch.length-1){
                    gate_hour = gate_hours_ch[0];
                    next.setHours(next.getHours()+24-h+gate_hour);
                    this.gate_status_ch = false;
                    break;
                }
            }
            var diff = new Date(next.getTime() - this.now.getTime());
            this.gate_timer_ch =  (diff.getUTCHours()+':'+diff.getUTCMinutes()+':'+diff.getUTCSeconds()).replace(/\b(?=(\d{1})(?!\d))/g,'0');

            next = new Date(this.now.getTime());
            next.setMinutes(0);
            next.setSeconds(0);

            for(var i=0; i<gate_hours_jp.length;i++){

                var gate_hour = gate_hours_jp[i];
                if(h<gate_hour){
                    next.setHours(gate_hour);
                    this.gate_status_jp = false;
                    break;
                }
                if(h==gate_hour){
                    next.setHours(next.getHours()+1);
                    this.gate_status_jp = true;
                    break;
                }
                if(i==gate_hours_jp.length-1){
                    gate_hour = gate_hours_jp[0];
                    next.setHours(next.getHours()+24-h+gate_hour);
                    this.gate_status_jp = false;
                    break;
                }
            }
            diff = new Date(next.getTime() - this.now.getTime());
            this.gate_timer_jp =  (diff.getUTCHours()+':'+diff.getUTCMinutes()+':'+diff.getUTCSeconds()).replace(/\b(?=(\d{1})(?!\d))/g,'0');

            //orb
            var day = this.now.getDay();
            this.orbs[0].state = (day==1||day==6);          //light
            this.orbs[1].state = (day==2||day==6);          //dark
            this.orbs[2].state = (day==3||day==6||day==0);  //natural
            this.orbs[3].state = (day==4||day==0);          //law
            this.orbs[4].state = (day==5||day==0);          //chaos
        },
        show_devil_info:function(devil){

            //this.info_name = devil.name;
            this.info_target = devil;
            this.$root.$emit('bv::show::modal','modal_devil_info');
        },
        auto_costdown: function(bom, rarity, type){

            if(bom && bom.devil.rarity>rarity){

                var boms = [];

                bom.devil.fission_formulas().forEach(function(option){
                    boms = boms.concat(option.boms);
                });

                boms.sort(function(bom1, bom2){
                    var cost1 = type ? bom1.getCost(rarity) : bom1.getCostPure(rarity);
                    var cost2 = type ? bom2.getCost(rarity) : bom2.getCostPure(rarity);
                    if(cost1==cost2) return 0;
                    return cost1 > cost2 ? 1 : -1;
                });

                if(boms.length>0){
                    bom.set(boms[0]);
                }

                if(type==1){
                    //雜體
                    //var type1 = bom.pure_child == 1 ? 0 : 1;
                    //var type2 = bom.pure_child == 2 ? 0 : 1;
                    type1=0; //TODO
                    type2=0; //TODO
                    this.auto_costdown(bom.child1, rarity, type1);
                    this.auto_costdown(bom.child2, rarity, type2);
                }
                else{
                    //純素體
                    this.auto_costdown(bom.child1, rarity, type);
                    this.auto_costdown(bom.child2, rarity, type);
                }
            }
        },
        builder_auto_costdown:function(rarity, type){

            this.auto_costdown(this.builder_target, rarity, type);
            this.update_current_bom(null);
        }
    }
});

Vue.component('skill',{
    props:['skill'],
    template:'#skill-t'
});

Vue.component('skill-list',{
    props:['skills'] ,
    template:'#skill-list-t',
    data:function(){
        return {
            actives:[]
        }
    },
    watch:{
        skills:function(){
            this.actives=[];
        }
    }
});

Vue.component('devil',{
    props:['devil','usage','skill'],
    template:'#devil-t',
    methods:{
        click:function(){
            if(this.usage=='fission'){
                app.start_bom(this.devil);
            }
            if(this.usage=='builder'){
                this.$emit('click');
            }
        },
        info:function(){
            app.show_devil_info(this.devil);
        },
        isSkillAvailable:function(inherit){

            if(inherit){
                return this.skill==this.devil.skills[0] ||
                    this.devil.skill5.indexOf(this.skill)>=0;
            }
            else{
                return this.skill==this.devil.skills[1] ||
                    this.skill==this.devil.skills[2] ||
                    this.devil.skill4.indexOf(this.skill)>=0;
            }
        }
    }
});

Vue.component('devil-list',{
    props:['devils','usage','skill'] ,
    template:'#devil-list-t',
    methods:{
        click:function(devil){
            if(this.usage=='fission'){
                app.fission(devil);
            }
            if(this.usage=='builder'){
                this.start_bom(devil);
            }
        },
        fusion:function(devil){
            app.fusion(devil);
        },
        fission:function(devil){
            app.fission(devil, true);
        },
        start_bom:function(devil){
            app.start_bom(devil);
        }
    }
});

Vue.component('devil-bom',{
    props:['bom','usage'],
    template:'#devil-bom-t',
    methods:{
        click:function(){
            if(this.usage=='builder')
                this.choose_bom(this.bom);
        },
        choose_bom: function(){
            app.choose_bom(this.bom);
        },
        info:function(devil){
            app.show_devil_info(devil);
        }
    }
});

Vue.component('devil-bom-list',{
    props:['boms','usage'],
    template:'#devil-bom-list-t'
});

Vue.component('devil-bom-builder',{
    props:['bom'],
    template:'#devil-bom-builder-t',
    methods:{
        list_bom:function(bom){
            app.list_bom(bom);
        },
        reset_bom:function(bom){
            app.reset_bom(bom);
        },
        info:function(){
            app.show_devil_info(this.bom.devil);
        },
        toggle:function(){
            this.collapsed = !this.collapsed;
        },
        hasChild:function(){
            return this.bom.child1 || this.bom.child2;
        },
        isCurrent:function(){
            return this.bom ? this.bom == app.current_bom : false;
        },
        isParentCurrent:function(){
            return this.parent ? this.parent == app.current_bom : false;
        }
    },
    data:function(){
        return {collapsed: false}
    },
    computed:{
        collapsed_sign:function(){
            return this.collapsed ? '+' : '-';
        }
    }
});

Vue.component('devil-bom-options',{
    props:['options','usage'],
    template:'#devil-bom-options-t'
});

var window_before_unload = function(){

    if(app.allow_prevent_unload=='1'){
        return true;
    }
}
