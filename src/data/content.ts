import { StaticImageData } from 'next/image'
import Platao from '../../public/img/platao.png'
import Aristoteles from '../../public/img/aristoteles.webp'
import Santo_Agostinho from '../../public/img/Santo-Agostinho-artigoCNBB.jpg'
import Sao_Tomas_de_Aquino from '../../public/img/sao-tomas-de-aquino-capa.jpg'
import Descartes from '../../public/img/descartes3.webp'
import Spinoza from '../../public/img/spinoza.png'
import Hume from '../../public/img/573774e0cdf53-david-hume.webp'
import Kierkegaard from '../../public/img/kierkegaard.jpg'
import Nietzsche from '../../public/img/Nietzsche.jpg'
import Mill from '../../public/img/mill.jpg'
import Heidegger from '../../public/img/Heidegger.webp'
import Sartre from '../../public/img/Sartre_1967_crop.jpg'
import Camus from '../../public/img/camus.jpg'
import Wittgenstein from '../../public/img/Wittgenstein.jpg'
import Popper from '../../public/img/Popper.jpg'
import Husserl from '../../public/img/Husserl.webp'
import Foucault from '../../public/img/Foucault.gif'

export interface iListContent {
  title1: string
  text1: string
  title2?: string
  text2?: string
  image: StaticImageData
  position: number
}

export const listContent: Array<iListContent> = [
  {
    title1: 'Platão',
    text1:
      "Platão foi um filósofo grego antigo e discípulo de Sócrates. Ele é conhecido por fundar a Academia, uma das primeiras instituições de ensino superior do mundo, e por suas contribuições à filosofia ocidental. Suas ideias foram registradas principalmente em diálogos escritos, nos quais seu mestre Sócrates é frequentemente o personagem principal. Sua visão sobre o assunto evoluiu ao longo de sua vida, muito embora uma das abordagens mais notáveis tenha sido apresentada em sua obra 'A república', onde é explorada a natureza da justiça e virtude, buscando compreensão mais profunda de como uma pessoa deve viver uma vida boa e justa.",
    title2: 'Platão acreditava',
    text2:
      'que a ética estava intrinsecamente ligada à busca do conhecimento e sabedoria, onde argumentava que justiça e virtude são alcançadas através de uma harmonia de três partes da alma: razão, vontade e desejo. Onde a governança deveria prevalecer com a razão, de modo que as escolhas e ações fossem guiadas através de sabedoria e conhecimento.',
    image: Platao,
    position: 1,
  },
  {
    title1: 'Aristóteles',
    text1:
      'Aristóteles foi um filósofo grego que teve um impacto significativo na filosofia e na ciência. Aluno de Platão, ele desenvolveu sua própria abordagem filosófica. Sua ética enfatizava a busca da felicidade (eudaimonia) através do cultivo de virtudes e do equilíbrio. Também discutiu política, defendendo a monarquia benevolente como ideal.',
    title2: 'Aristóteles desenvolveu uma abordagem ética',
    text2:
      "que se concentra na busca da felicidade (eudaimonia) como o objetivo supremo da vida humana. Suas ideias sobre ética estão principalmente contidas em sua obra 'Ética a Nicômaco'. Aristóteles acreditava que a felicidade não era meramente uma busca de prazer, mas sim a realização plena das potencialidades humanas. Ele argumentou que a virtude desempenhava um papel crucial na conquista da felicidade. Para Aristóteles, a virtude era a excelência moral e intelectual, e ele delineou uma série de virtudes que incluíam coragem, generosidade, justiça, sabedoria e autocontrole. Um conceito central na ética aristotélica é a ideia do 'justo meio' (ou 'virtude intermediária'). Aristóteles argumentou que a virtude reside em encontrar um equilíbrio entre extremos de comportamento. Por exemplo, a coragem está no meio entre a covardia e a temeridade.",
    image: Aristoteles,
    position: 2,
  },
  {
    title1: 'Santo Agostinho',
    text1:
      'Santo Agostinho foi a primeira grande síntese entre a filosofia grega e o cristianismo. A ética de santo Agostinho resulta de uma releitura das principais teorias éticas de origem grega e romana. No entanto, o platonismo é a corrente filosófica que constitui o pano de fundo filosófico do seu pensamento.',
    title2: 'As principais questões éticas que Santo Agostinho discute',
    text2:
      'são, portanto, herdadas da tradição grega e tratadas com base nos ensinamentos do cristianismo. O problema da natureza humana e do caráter inato da virtude, a origem do Mal, o conceito de felicidade, a liberdade e a possibilidade de agir de forma ética. A doutrina cristã fornece as chaves para a solução dessas questões: a origem da virtude na natureza humana criada por Deus, a queda e o pecado original como explicações das falhas humanas, a graça divina como possibilidade de redenção e alcance da felicidade na vida eterna, e o livre-arbítrio ou liberdade individual concedido ao ser humano por Deus, que torna os indivíduos responsáveis por seus atos.',
    image: Santo_Agostinho,
    position: 3,
  },
  {
    title1: 'São Tomás de Aquino',
    text1:
      'A ética de São Tomás de Aquino toma como ponto de partida a ética aristotélica interpretando-a à luz da doutrina cristã. São Tomás foi o principal responsável, em sua época, por mostrar que a filosofia de Aristóteles era compatível com o cristianismo.',
    title2: 'A ética de São Tomás se contrapõe à visão então predominante',
    text2:
      'herdada de Santo Agostinho, para quem o homem é um ser imperfeito, marcado pelo pecado original. São Tomás parte da concepção aristotélica de virtude, considerando a natureza humana capaz de ser aperfeiçoada. A virtude para ele não é o mesmo, contudo, que para os filósofos gregos, que a relacionam fortemente aos valores da cidade, tais como a amizade, a coragem e a lealdade. Especialmente importante para São Tomás é a introdução das virtudes teologais: a Fé, a Esperança e a Caridade. O conceito aristotélico de felicidade (eudaimonia) será interpretado como beatitude, como culminando na visão beatífica de Deus tornada possível pela Revelação e pela Graça.',
    image: Sao_Tomas_de_Aquino,
    position: 4,
  },
  {
    title1: 'Descartes',
    text1:
      'O filósofo francês René Descartes é considerado um dos fundadores da filosofia moderna, sobretudo devido a sua defesa da ciência nova, inaugurada por Copérnico e desenvolvida por pensadores como Kepler e Galileu, e também a sua crítica à tradição filosófica, principalmente à escolástica medieval, e a ênfase que dá à subjetividade na filosofia que propõe.',
    title2: 'O tema central da filosofia de Descartes é a fundamentação',
    text2:
      'de um novo método científico que possa servir de base à ciência moderna. Sua obra é, portanto, quase toda dedicada a questões epistemológicas, ou seja, de teoria do conhecimento científico. Pouco escreveu sobre outras áreas do pensamento filosófico, como ética, estética ou filosofia política. De certa forma, para Descartes, a solução de todas as questões da filosofia e da ciência dependia da solução, em primeiro lugar, do problema do conhecimento e da fundamentação do novo método científico, para que então se pudesse desenvolver um novo e bem fundamentado sistema filosófico e científico.',
    image: Descartes,
    position: 5,
  },
  {
    title1: 'Spinoza',
    text1:
      "Baruch de Spinoza foi um filósofo holandês do século XVII conhecido por sua abordagem inovadora à filosofia. Ele é notável por sua obra 'Ética', na qual desenvolveu uma filosofia monista que combinava elementos de racionalismo e panteísmo. Spinoza argumentava que Deus e a natureza eram uma e a mesma coisa, rejeitando a visão tradicional de um Deus pessoal, onde enfatizou a importância da razão e da compreensão da causalidade para atingir a liberdade e a felicidade. Suas ideias desafiaram as normas religiosas e filosóficas de sua época, e ele é considerado um dos precursores da filosofia moderna e do Iluminismo. Sua obra influenciou muitos pensadores posteriores e continua a ser estudada e debatida.",
    title2: 'A ética é um tema central na filosofia de Baruch de Spinoza',
    text2:
      'que é exposta principalmente em sua obra de mesmo nome, publicada postumamente. Spinoza aborda a ética de uma maneira única e radical. Spinoza acreditava que a verdadeira virtude e a felicidade poderiam ser alcançadas através do conhecimento e da compreensão da natureza e de Deus, que ele considerava a mesma coisa. Ele rejeitou a ideia de um Deus pessoal e defendeu uma visão panteísta, onde Deus e a natureza são idênticos. Para ele, a ética se baseava em compreender as causas e efeitos que moldam nossa existência, enxergando a paixão (emoções) como um estado de escravidão, enquanto a ação informada pela razão era o caminho para a verdadeira liberdade e felicidade.',
    image: Spinoza,
    position: 6,
  },
  {
    title1: 'Hume',
    text1:
      "David Hume destacou-se sobretudo por seu empirismo radical, que levava a uma posição filosófica cética. Seu questionamento da concepção metafísica de causalidade, sua crítica ao conceito racionalista de 'eu' e sua discussão sobre a indução são os aspectos fundamentais de seu ataque a alguns dos principais baluartes da tradição filosófica. O ceticismo de Hume tem como consequência, contudo, a adoção de uma solução naturalista, segundo a qual é devido à natureza humana, seus impulsos e suas necessidades que se constituem nossas crenças básicas e nossa forma de agir. Sem isso, o ceticismo nos deixaria perplexos e paralisados; porém, como diz Hume, a natureza é suficientemente forte para impedir que isso aconteça.",
    image: Hume,
    position: 7,
  },
  {
    title1: 'Kierkegaard',
    text1:
      'Søren Abbye Kierkegaard foi um dos mais importantes e originais pensadores do século XIX, sendo considerado o filósofo que inaugurou o existencialismo. Sua obra discute questões filosóficas, teológicas e literárias, sempre em um estilo fortemente pessoal. Kierkegaard manteve durante toda a vida uma relação conflituosa com a igreja oficial da Dinamarca. Sua obra é bastante assistemática e sempre de caráter autobiográfico, ressaltando suas angústias, sobretudo em relação à questão religiosa. Em polêmica com o hegelianismo, questiona o universalismo e o caráter abstrato e especulativo dessa filosofia, procurando valorizar, ao contrário, a importância da subjetividade e da experiência individual. É esse o ponto de partida de seu existencialismo: a experiência subjetiva radical e o processo pelo qual o indivíduo, diante do absurdo do mundo e do silêncio de Deus, vê-se compelido a buscar ele próprio o sentido de sua existência. A problemática central de Kierkegaard é exatamente a irracionalidade de nossa experiência do real, a impossibilidade de tomarmos decisões de maneira racional e de justificarmos nossa ação de um ponto de vista ético.',
    image: Kierkegaard,
    position: 8,
  },
  {
    title1: 'Nietzsche',
    text1:
      "Friedrich Wilhelm Nietzsche foi um grande crítico da moral tradicional, desde a filosofia grega até o cristianismo. Propõe uma 'transvaloração de todos os valores', visando romper não só com a moral judaico-cristã mas também com a tradição grega desde Sócrates, representativa do racionalismo e da visão unilateral que teria prevalecido em toda a cultura ocidental. Ele tinha convicção de que o comprometimento com o racionalismo e com o cristianismo levou à repressão dos instintos vitais do ser humano e ao niilismo. Nietzsche procura mostrar que a ética não se fundamenta na razão. A moral cristã se caracteriza pela 'moral do rebanho', em que os indivíduos se deixam levar pela maioria e seguem os ensinamentos da moral tradicional de forma acrítica. É também a moral do 'homem do ressentimento', que assume a culpa e o pecado como características de sua natureza e por isso reprime seus impulsos vitais, sua vontade, sua criatividade, em nome da submissão à autoridade da religião e, por extensão, do Estado e das instituições em geral. Essa é, segundo Nietzsche, a 'moral dos fracos', que consegue se impor aos fortes exatamente através do recurso à culpa e ao remorso inculcados pela tradição em todos os indivíduos.",
    image: Nietzsche,
    position: 9,
  },
  {
    title1: 'Stuart Mill',
    text1:
      "Forte defensor do utilitarismo, John Stuart Mill é tido como o primeiro a utilizar o termo para definir essa corrente filosófica 一 sobretudo em sua principal obra de ética, intitulada precisamente com este nome, 'Utilitarismo'. Stuart Mill inspirou-se nas ideias de Claude-Adrien Helvétius e Jeremy Bentham, pensadores que formularam o 'princípio de utilidade' como critério do valor moral de um ato. De acordo com este princípio universal, o bem seria aquilo que maximiza o benefício e reduz a dor ou o sofrimento. Terão mais valor de um ponto de vista ético, portanto, as ações que beneficiem o maior número de pessoas possível. Trata-se de uma concepção que avalia o caráter ético de uma atitude a partir do ponto de vista de suas consequências ou resultados. Em sua obra, Stuart Mill esclarece que o útil não é algo a ser contraposto ao prazer, mas o próprio prazer. Segundo ele, o Princípio da Máxima Felicidade considera que uma ação é correta na medida em que tende a promover a felicidade, e errada quando tende a gerar o oposto da felicidade. Por felicidade entende-se o prazer e a ausência da dor; por infelicidade, dor, ou privação do prazer. Ao contrário do que alguns críticos do utilitarismo da época argumentam, Stuart Mill afirma que o objetivo dessa filosofia não é apenas a satisfação do próprio agente, mas a de todos os envolvidos. Ele requer que a pessoa seja estritamente imparcial, como um 'espectador benevolente e desinteressado', nas palavras do filósofo.",
    image: Mill,
    position: 10,
  },
  {
    title1: 'Husserl',
    text1:
      "Edmund Husserl é o fundador da fenomenologia, movimento filosófico que busca descrever e analisar as experiências humanas tal como são vivenciadas, sem fazer suposições prévias ou pressupostos sobre a existência do mundo externo. Husserl argumenta que a filosofia tradicional está repleta de conceitos vagos e ambíguos que precisam ser substituídos por uma análise rigorosa da experiência consciente. Ele desenvolveu uma abordagem chamada 'epoquê', na qual se suspende qualquer juízo sobre a existência do mundo externo e se concentra apenas na descrição da experiência consciente. A fenomenologia de Husserl teve um impacto significativo na filosofia contemporânea e influenciou muitos outros pensadores, incluindo existencialistas como Jean-Paul Sartre e Maurice Merleau-Ponty.",
    image: Husserl,
    position: 11,
  },
  {
    title1: 'Heidegger',
    text1:
      "Martin Heidegger é um dos filósofos mais importantes do século XX e é conhecido por sua contribuição à filosofia existencial e fenomenológica. Ele explorou questões fundamentais sobre a existência humana, a linguagem e a compreensão do ser. Heidegger argumentou que a filosofia tradicional negligenciava a questão do ser e estava preocupada principalmente com entes específicos no mundo. Ele propôs uma abordagem mais fundamental, na qual a investigação do ser deveria preceder a investigação de entes individuais. Sua obra mais conhecida, 'Ser e Tempo', busca explorar o significado do ser e a natureza da existência humana, enfatizando a importância da autenticidade e da busca pelo significado na vida.",
    image: Heidegger,
    position: 12,
  },
  {
    title1: 'Sartre',
    text1:
      "Jean-Paul Sartre foi um filósofo existencialista francês que explorou temas como a liberdade, a responsabilidade e a existência humana. Ele argumentou que os seres humanos estão condenados à liberdade, o que significa que somos responsáveis por todas as nossas escolhas e ações. Sartre também é conhecido por sua frase famosa 'A existência precede a essência', que ressalta que não temos uma natureza predefinida e que criamos nosso próprio significado na vida por meio de nossas escolhas. Sua obra 'O Ser e a Nada' é uma das obras mais influentes do existencialismo e continua a ser estudada e debatida até hoje.",
    image: Sartre,
    position: 13,
  },
  {
    title1: 'Camus',
    text1:
      "Albert Camus foi um filósofo existencialista e escritor francês que explorou temas como o absurdo da existência humana e a busca de significado em um mundo aparentemente indiferente. Ele é mais conhecido por sua obra 'O Estrangeiro' e seu ensaio filosófico 'O Mito de Sísifo'. Camus argumentou que a vida é inerentemente absurda, pois buscamos significado em um universo que permanece em silêncio. No entanto, ele também afirmou que podemos encontrar dignidade e propósito por meio da revolta contra o absurdo, abraçando a liberdade e vivendo autenticamente, mesmo em face da falta de significado cósmico.",
    image: Camus,
    position: 14,
  },
  {
    title1: 'Wittgenstein',
    text1:
      "Ludwig Wittgenstein foi um dos filósofos mais importantes do século XX, conhecido por seu trabalho em filosofia da linguagem e filosofia da mente. Ele é autor de duas obras principais, o 'Tratado Lógico-Filosófico' e 'Investigações Filosóficas', que abordam questões relacionadas à linguagem, significado, conhecimento e mente. Wittgenstein argumentou que muitos problemas filosóficos surgem de confusões linguísticas e que o objetivo da filosofia deveria ser esclarecer a linguagem e mostrar os limites do que pode ser significativamente dito. Sua influência na filosofia contemporânea é profunda, e suas ideias continuam a ser estudadas e debatidas em diversas áreas, incluindo filosofia, linguística, psicologia e ciência cognitiva.",
    image: Wittgenstein,
    position: 15,
  },
  {
    title1: 'Popper',
    text1:
      "Karl Popper foi um filósofo da ciência austríaco-britânico que é mais conhecido por sua filosofia da ciência e sua defesa do princípio da falsificabilidade como critério de demarcação entre ciência e pseudociência. Ele argumentou que a ciência avança por meio da formulação de hipóteses testáveis que podem ser falseadas por evidências empíricas. Popper também é conhecido por sua crítica ao historicismo e ao positivismo lógico. Sua obra 'A Lógica da Pesquisa Científica' é uma das obras mais influentes da filosofia da ciência do século XX e teve um impacto significativo em campos como a epistemologia e a metodologia científica.",
    image: Popper,
    position: 16,
  },
  {
    title1: 'Foucault',
    text1:
      "Michel Foucault foi um filósofo francês cujo trabalho teve um impacto duradouro nas áreas de filosofia, teoria social e estudos culturais. Ele explorou temas como poder, conhecimento, sexualidade e controle social em suas obras, argumentando que o poder está intrinsecamente ligado ao conhecimento e que as instituições sociais exercem controle sobre os indivíduos por meio do que ele chamou de 'tecnologias de poder'. Foucault também examinou como as normas culturais e sociais moldam a identidade e a subjetividade. Suas obras influenciaram uma ampla gama de disciplinas e continuam a ser debatidas e estudadas em todo o mundo.",
    image: Foucault,
    position: 17,
  },
]
