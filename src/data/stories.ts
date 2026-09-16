export interface Chapter {
  number: number;
  title: string;
  duration: string;
  text: string[];
}

export interface Story {
  id: string;
  title: string;
  universe: 'romance' | 'thriller' | 'fantastique' | 'mystere';
  universeLabel: string;
  tagline: string;
  author: string;
  readingTime: string;
  episodesCount: number;
  badge: string;
  accentColor: string;
  teaser: string;
  quoteExcerpt: string;
  chapters: Chapter[];
}

export const STORIES: Story[] = [
  {
    id: 'pacte-des-cendres',
    title: 'Le Pacte des Cendres',
    universe: 'romance',
    universeLabel: 'Romance Sombre',
    tagline: 'Certains serments ne brûlent que lorsqu’on tente de les rompre.',
    author: 'Eléonore de Valcreux',
    readingTime: '12 min',
    episodesCount: 8,
    badge: 'Épisode 1 débloqué',
    accentColor: '#7a2331',
    teaser: 'Dans les salons glacés d’un hiver sans fin, Julian ne cherchait pas le pardon. Il cherchait celle qui, dix ans plus tôt, avait emporté la dernière clé de son manoir.',
    quoteExcerpt: '« Ne me promets pas l’aube, murmura-t-il. L’aube rend les monstres visibles. Promets-moi juste l’épaisseur de la nuit. »',
    chapters: [
      {
        number: 1,
        title: 'Les braises sous la neige',
        duration: '6 min',
        text: [
          'La calèche s’arrêta net au croisement des trois croix. Le cocher ne descendit pas. Il savait, comme tous ceux qui sillonnaient la lande après le glas de dix-neuf heures, que certains seuils ne se franchissent pas sans payer tribut au vent.',
          'Camille resserra le col de son manteau de velours sombre. La vitre était couverte d’une fine dentelle de givre. À travers la fêlure du verre, la silhouette du manoir des Hautes-Cendres se découpait contre un ciel d’encre indigo.',
          'Dix ans. Dix années à croire qu’une lettre brûlée cesse d’exister. Mais le feu ne détruit rien dans cette vallée : il garde en mémoire la forme de chaque mot.',
          'La lourde porte de chêne s’ouvrit sans grincement. Dans la pénombre du vestibule, une seule bougie vacillait sur un guéridon d’ébène. Julian se tenait là, immobile, le regard aussi tranchant que les hivers de son enfance.',
          '— Tu es venue, dit-il d’une voix presque inaudible, qui semblait glisser sur le marbre froid.',
          '— Je ne suis pas venue pour toi, répondit Camille en avançant d’un pas. Je suis venue reprendre ce que la nuit m’a dérobé.',
          'Un sourire d’ombre effleura les lèvres de Julian. Il ôta ses gants de cuir usé, révélant la cicatrice argentée qui serpentait le long de son poignet gauche. La marque du pacte.',
          '— Alors prépare-toi à veiller, Camille. Car la nuit ne rend jamais rien d’un seul coup.'
        ]
      },
      {
        number: 2,
        title: 'Le bruit des clés oubliées',
        duration: '6 min',
        text: [
          'Le silence de la grande galerie n’était troublé que par le balancier d’une horloge sans aiguilles. Au mur, les portraits d’ancêtres semblaient détourner les yeux, comme complices d’un crime trop vieux pour être expié.',
          'Julian s’arrêta devant la porte scellée de cire noire. « Derrière cette porte, il n’y a ni remords ni souvenirs heureux. Il n’y a que la vérité telle qu’elle a été séchée entre deux buvards. »',
          'Camille posa sa paume contre le bois veiné. Elle sentit battre, sous la surface polie, un souffle chaud et régulier.',
          'L’histoire ne faisait que commencer.'
        ]
      }
    ]
  },
  {
    id: 'l-heure-sans-aiguilles',
    title: 'L’Heure sans Aiguilles',
    universe: 'thriller',
    universeLabel: 'Thriller & Mystère',
    tagline: 'Quand minuit refuse de sonner, le temps devient une prison.',
    author: 'Gabriel Morhange',
    readingTime: '15 min',
    episodesCount: 12,
    badge: 'Nouveauté de minuit',
    accentColor: '#262b4a',
    teaser: 'Chaque nuit à 03h14 précises, l’inspecteur Vane reçoit l’enregistrement d’une respiration dans une pièce qu’il sait scellée depuis 1924.',
    quoteExcerpt: '« Le temps n’est pas une ligne droite. C’est un nœud coulant qui se resserre à chaque battement de cil. »',
    chapters: [
      {
        number: 1,
        title: 'La fréquence 03:14',
        duration: '7 min',
        text: [
          'Le magnétophone à bande Revox tourna avec un léger couinement métallique. Sur la bande magnétique brune, une impulsion se dessinait sur le cadran à aiguille verte.',
          'Un souffle. Puis un raclement d’ongles sur du plâtre humide.',
          'Vane alluma sa quatrième cigarette de la nuit. La fumée s’enroulait paresseusement autour de la lampe à réflecteur vert. Sur sa table d’architecte reposaient les plans cadastraux du vieux sanatorium Saint-Jude.',
          'La chambre 204 n’avait pas d’accès depuis la réfection de la façade en 1952. Aucun couloir ne la desservait. Pourtant, le micro d’ambiance dissimulé dans le conduit d’aération continuait de capter les mêmes murmures aux mêmes secondes.',
          '« Il est là. Il attend que vous arrêtiez d’écouter. »',
          'Vane mit en pause la bande. Ce n’était pas un enregistrement ancien. À l’arrière-plan, ténu mais indubitable, résonnait le claquement de son propre briquet, allumé trois secondes plus tôt.'
        ]
      }
    ]
  },
  {
    id: 'bibliotheque-engloutie',
    title: 'La Bibliothèque Engloutie',
    universe: 'fantastique',
    universeLabel: 'Fantastique & Gothique',
    tagline: 'Les livres oubliés boivent l’encre des vivants pour ne pas disparaître.',
    author: 'Astrid S. Mallow',
    readingTime: '10 min',
    episodesCount: 6,
    badge: 'Récit complet',
    accentColor: '#c9a24b',
    teaser: 'Sous les cryptes de la ville haute gisent des rayonnages immergés. Pour lire un manuscrit, il faut d’abord accepter d’y laisser une part de sa propre mémoire.',
    quoteExcerpt: '« Plus tu lis, moins tu te souviens de qui t’a appris à lire. »',
    chapters: [
      {
        number: 1,
        title: 'Le premier degré d’immersion',
        duration: '5 min',
        text: [
          'L’eau noire ne montait jamais plus haut que les chevilles. Elle avait l’odeur de la poussière d’étoffe et du vieux cuir de Cordoue.',
          'Thomas tenait sa lanterne à huile bien haute. Les étagères s’élevaient jusqu’aux voûtes en berceau, invisibles dans les ténèbres. Les reliures n’étaient pas mouillées : une pellicule d’air tiède les protégeait de l’humidité séculaire.',
          'Il sortit le feuillet qu’il gardait dans sa poche intérieure. Les caractères s’étaient estompés pendant la descente. À la place, une phrase nouvelle s’était tracée à l’encre vermeille :',
          '« Bienvenue, lecteur. Laisse ici le prénom de ta mère, et tu sauras enfin ce que cache la fin du monde. »',
          'Thomas voulut prononcer ce prénom pour se rassurer. Ses lèvres bougèrent, mais aucun son ne franchit sa gorge. Le troc avait déjà commencé.'
        ]
      }
    ]
  },
  {
    id: 'le-dernier-passeur',
    title: 'Le Murmure du Dernier Passeur',
    universe: 'mystere',
    universeLabel: 'Contes de l’Ombre',
    tagline: 'Le fleuve ne sépare pas les mondes : il les mélange quand les lanternes s’éteignent.',
    author: 'Ismaël V. R.',
    readingTime: '9 min',
    episodesCount: 5,
    badge: 'Conte nocturne',
    accentColor: '#7c778f',
    teaser: 'Sur la berge brumeuse, une barque sans rames attend les passagers qui ont oublié leur propre nom mais se souviennent d’un refrain.',
    quoteExcerpt: '« L’oubli n’est pas une perte. C’est le prix de la traversée. »',
    chapters: [
      {
        number: 1,
        title: 'L’eau qui n’a pas de reflet',
        duration: '4 min',
        text: [
          'Le passeur ne demandait ni pièce sous la langue ni prière. Il tendait simplement une feuille de papier vierge et une fiole d’encre couleur de rouille.',
          '— Écris ce que tu refuses de léguer à ceux qui restent, disait-il.',
          'Ceux qui montaient à bord hésitaient toujours. Certains écrivaient un remords, d’autres un amour tu jusqu’au cercueil. Dès que l’encre séchait, la barque glissait sur l’eau sans remous.',
          'Et sur la berge, les silhouettes laissaient derrière elles une ombre devenue enfin légère.'
        ]
      }
    ]
  }
];

export const QUOTES = [
  {
    text: "On ne choisit pas vraiment son histoire. On croit tourner une page — c'est elle qui vous a déjà trouvé.",
    source: "Trouvé dans les pages d'Encre & Ombre"
  },
  {
    text: "Certaines nuits ne sont pas faites pour dormir, mais pour écouter les livres respirer.",
    source: "Le Pacte des Cendres, Chapitre 3"
  },
  {
    text: "Ce qui est écrit à l'encre noire résiste au soleil. Ce qui est écrit dans l'ombre résiste au temps.",
    source: "Archives du Cercle d'Ombre"
  },
  {
    text: "Un chapitre de trop, et le monde réel devient une rumeur lointaine que l'on n'a plus envie d'entendre.",
    source: "Carnets d'un lecteur insomniaque"
  }
];

export const APP_FEATURES = [
  {
    title: "Des mondes qu'on ne soupçonne pas",
    description: "Romance sombre, thriller, fantastique, mystère — Encre & Ombre ne dévoile jamais un univers en entier avant qu'on y entre. Chaque porte cache une ambiance qu'on ne devine qu'en la franchissant.",
    iconType: "worlds"
  },
  {
    title: "Une lumière qui ne montre jamais tout",
    description: "Le mode ombre efface tout ce qui n'est pas la page. Le texte reste net, le reste disparaît — comme si l'histoire préférait qu'on ne voie qu'elle.",
    iconType: "moon"
  },
  {
    title: "Ce que la suite vous réserve",
    description: "Les histoires avancent par épisodes, révélés un à un. Personne ne sait jamais tout à l'avance — pas même, parfois, ceux qui les écrivent.",
    iconType: "episodes"
  }
];

export const STEPS = [
  {
    number: "i.",
    title: "Télécharger l'application",
    description: "Disponible sur Android et en application Web progressive, elle s'installe en quelques instants — pas de compte compliqué, pas d'attente avant d'entrer."
  },
  {
    number: "ii.",
    title: "Choisir une porte",
    description: "Romance, mystère, fantastique... chaque univers garde son secret jusqu'à ce qu'on décide d'y entrer."
  },
  {
    number: "iii.",
    title: "Ne plus savoir l'heure",
    description: "Un chapitre, dix chapitres, ou un seul par semaine — l'histoire attend qu'on revienne, et elle sait toujours quand on repart trop tôt."
  }
];
