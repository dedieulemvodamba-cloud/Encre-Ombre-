export interface Chapter {
  number: number;
  title: string;
  duration: string;
  text: string[];
}

export interface Story {
  id: string;
  title: string;
  universe: 'romance' | 'thriller' | 'mystere' | 'conte';
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
    id: 'les-enfants-de-l-ombre',
    title: "Les Enfants de l’Ombre",
    universe: 'thriller',
    universeLabel: 'Horreur Surnaturelle',
    tagline: 'Tome I — La ville qui oubliait les enfants • Tome II — Le retour des ténèbres',
    author: 'Dedieu Lemvo Damba',
    readingTime: '15 min',
    episodesCount: 10,
    badge: 'Tomes I & II',
    accentColor: '#7a2331',
    teaser: 'À Valombre, des enfants disparaissent sans laisser de traces. Lorsque la vieille cloche sonne à minuit derrière l’ancienne école, une porte rouge apparaît sur un mur nu, et un souffle glacé murmure leurs prénoms.',
    quoteExcerpt: '« Tant qu’une peur existera, l’ombre cherchera un chemin. »',
    chapters: [
      {
        number: 1,
        title: 'Chapitre 1 — La cloche de minuit',
        duration: '5 min',
        text: [
          'La nuit enveloppait Valombre lorsque Noé, Maya, Samuel et Inès arrivèrent devant le lieu interdit. Depuis plusieurs semaines, des enfants disparaissaient sans laisser de traces. Une vieille cloche sonnait toujours à minuit. Ce soir-là, elle retentit derrière les murs de l’ancienne école.',
          'Ils avancèrent malgré la peur. Dans le couloir, une porte rouge apparut là où il n’y avait auparavant qu’un mur. Derrière elle, un souffle glacé prononça leurs prénoms. Noé serra la lampe. Ils comprirent que quelque chose les observait et que la ville cachait un secret beaucoup plus ancien qu’eux.',
          'Ils décidèrent de rester ensemble. Plus ils cherchaient la vérité, plus l’ombre semblait apprendre leurs peurs. Une silhouette apparut au bout du couloir, puis disparut lorsque la lumière revint. Personne ne parla. Ils savaient désormais qu’ils étaient entrés dans une histoire dont ils ne connaissaient pas encore la fin.'
        ]
      },
      {
        number: 2,
        title: 'Chapitre 2 — Le retour des ténèbres (17 ans plus tard)',
        duration: '5 min',
        text: [
          'Dix-sept ans après leur première confrontation, les anciens amis reçurent le même message : « La cloche sonnera encore. » Ils retournèrent à Valombre. Les rues semblaient identiques, mais les habitants évitaient leur regard. Les anciennes disparitions recommencèrent.',
          'Une carte retrouvée dans les archives de la ville révéla un réseau de tunnels sous les maisons. Au centre se trouvait une chambre sans porte. Ils découvrirent alors que la créature se nourrissait moins des personnes que de leurs peurs.',
          'Pour la vaincre, ils devraient affronter chacun le souvenir qu’ils avaient passé leur vie à fuir. La nuit suivante, la ville entière plongea dans l’obscurité. Les quatre amis descendirent sous terre. La cloche sonna. L’ombre les attendait. Cette fois, ils ne fuiraient pas.'
        ]
      },
      {
        number: 3,
        title: 'Épilogue — Le souffle sous les pavés',
        duration: '3 min',
        text: [
          'À l’aube, Valombre retrouva enfin le silence. Le soleil d’or pâle se leva sur les toits froids de la ville.',
          'Pourtant, sous les rues endormies, une petite cloche tinta une dernière fois dans la pénombre.',
          'Sur une vitre embuée apparut une phrase tracée du bout d’un doigt invisible : « Tant qu’une peur existera, l’ombre cherchera un chemin. »'
        ]
      }
    ]
  },
  {
    id: 'l-amour-au-dela-du-hasard',
    title: 'L’Amour au-delà du Hasard',
    universe: 'romance',
    universeLabel: 'Romance & Mystère',
    tagline: 'Roman surréaliste de passion, de rêve, de hasard et de mémoire',
    author: 'Dedieu Lemvo Damba',
    readingTime: '18 min',
    episodesCount: 50,
    badge: 'Roman Surréaliste',
    accentColor: '#c9a24b',
    teaser: 'L’aventure passionnée entre Noé, jeune écrivain congolais, et Alma, femme insaisissable. Une traversée entre Brazzaville, Paris, Séoul et New York où chaque coïncidence est une lettre envoyée par l’avenir.',
    quoteExcerpt: '« Certaines rencontres ne commencent pas quand deux êtres se voient, mais quand deux destins se reconnaissent. »',
    chapters: [
      {
        number: 1,
        title: 'Chapitre 1 — La femme au parapluie rouge',
        duration: '6 min',
        text: [
          'À Brazzaville, le soir avait cette étrange manière de rendre les choses ordinaires presque irréelles. Noé avançait sans but précis. Il avait pris l’habitude de marcher lorsque les phrases refusaient de venir. Ce soir-là, pourtant, il ne cherchait pas une histoire. Il cherchait seulement un peu de calme. Dans l’air flottait la pluie sur les vitres, et chaque détail semblait retenir son souffle.',
          'Il pensa à Alma. Depuis leur première rencontre, son nom apparaissait dans ses carnets comme s’il avait été écrit avant même qu’il ne la connaisse. Il y avait chez elle quelque chose qu’il ne savait pas définir : une présence à la fois proche et impossible à saisir. Elle pouvait rire pendant plusieurs minutes puis devenir silencieuse sans explication. Elle disait que les coïncidences étaient des lettres envoyées par l’avenir.',
          'Noé : « Tu crois vraiment que le hasard nous écrit ? »',
          'Alma : « Je crois surtout qu’il nous laisse des indices. C’est nous qui décidons de les lire. »',
          'Noé avait souri. Il n’avait pas encore compris que cette phrase deviendrait la règle secrète de leur histoire.'
        ]
      },
      {
        number: 2,
        title: 'Chapitre 2 — Le billet sans adresse',
        duration: '6 min',
        text: [
          'À Paris, le lendemain, un événement apparemment insignifiant bouleversa la journée. Noé reçut un message sans expéditeur. Il ne contenait qu’une phrase : « Ne va pas à Séoul avant de m’avoir retrouvée. » Il relut le message plusieurs fois. Une partie de lui voulait rire ; une autre avait déjà peur.',
          'Alma n’était pas joignable. Son téléphone sonnait dans le vide. Noé se rendit alors au lieu où ils avaient l’habitude de se retrouver. La table était libre. Deux tasses étaient posées là, bien que personne ne les ait commandées. Sur la première, un mot : « Pour celui qui doute. » Sur la seconde : « Pour celle qui revient. »',
          'Cette absurdité aurait dû le convaincre de partir. Au contraire, elle réveilla en lui cette curiosité dangereuse qui accompagne les grandes histoires. Il prit la seconde tasse, regarda la porte et attendit.',
          'Voix inconnue : « Vous attendez quelqu’un ? » — Noé : « Oui. Mais je commence à me demander si cette personne existe vraiment. » Un rire discret répondit depuis le fond de la salle.'
        ]
      },
      {
        number: 3,
        title: 'Chapitre 9 — La porte rouge',
        duration: '5 min',
        text: [
          'Cette nuit-là, Noé rentra seul. Il ouvrit son carnet et découvrit une page qu’il ne se souvenait pas avoir écrite. Une phrase occupait le centre : « L’amour n’est pas une preuve. C’est une porte. » En dessous figurait un dessin d’une porte rouge, exactement semblable à celle qu’Alma lui avait décrite dans un rêve quelques semaines auparavant.',
          'Il comprit alors que son histoire d’amour ne serait pas une simple romance. Elle allait devenir une traversée : une traversée du doute, de la peur, de la jalousie, du rire et de la liberté.',
          'Noé : « Alma, où que tu sois, je vais te retrouver. »',
          'Dehors, la pluie sur les vitres recommença. Dans une autre ville, Alma ouvrit les yeux. Elle regarda l’heure, sourit et murmura une phrase que Noé ne pouvait pas entendre : « Enfin, il a compris. »'
        ]
      }
    ]
  },
  {
    id: 'shadows-and-scars',
    title: 'Shadows & Scars',
    universe: 'romance',
    universeLabel: 'Drame & Romance',
    tagline: 'Une BD adulte multiculturelle entre Manhattan et Brazzaville',
    author: 'Dedieu Lemvo Damba',
    readingTime: '14 min',
    episodesCount: 6,
    badge: 'BD Multiculturelle',
    accentColor: '#dcc074',
    teaser: 'Nadia Mbemba, brillante avocate à New York, doit affronter le passé trouble de son père au Congo lorsque le journaliste Jason Cole et son ami d’enfance Kwon Ji-Ho font resurgir une vérité étouffée.',
    quoteExcerpt: '« Les cicatrices sont là où la lumière entre. »',
    chapters: [
      {
        number: 1,
        title: 'Épisode 1 — Racines brisées (Manhattan)',
        duration: '5 min',
        text: [
          'Manhattan. 23h45. L’appartement de Nadia, 34e étage. Vue sur Central Park. Nadia se tient immobile devant la baie vitrée, tenant un verre de vin rouge qu’elle ne boit pas. Sur la table derrière elle, un billet d’avion pour Maya-Maya, Brazzaville, et une lettre manuscrite : « Ta mère est en danger. Reviens. — Ji-Ho ».',
          'Son téléphone sonne. JASON (voix off) : « Nadia, c’est la troisième fois que j’appelle. J’ai besoin de te parler ce soir. Je suis devant ta porte. »',
          'Nadia ouvre. Jason entre, le manteau froissé et trempé par la pluie. Il pose une enveloppe sur la table : des photos, des documents, des noms.',
          'JASON : « En 1994, ton père a signé un contrat avec une milice. Des mines illégales dans le nord du Congo. Des enfants, Nadia… il y a des enfants là-dedans. »',
          'NADIA : « Tu mens ! » — JASON : « Je voudrais tellement mentir. Mais les preuves sont là. »',
          'Nadia glisse lentement le long du mur jusqu’au sol. Et pour la première fois depuis des années, elle pense à sa mère.'
        ]
      },
      {
        number: 2,
        title: 'Épisode 2 — Le langage des cicatrices (Brazzaville)',
        duration: '5 min',
        text: [
          'Brazzaville. Trois jours après. Le marché du Plateau des 15 ans. Couleurs, odeurs de poisson fumé, de papaye et d’huile de palme.',
          'Une main se pose sur son épaule. C’est Ji-Ho — impeccable dans sa chemise blanche, son regard doux qui voit tout.',
          'JI-HO : « Tu es venue. » — NADIA : « Tu m’as dit que ma mère était en danger. Depuis combien de temps tu sais, pour mon père ? »',
          'JI-HO : « Depuis que j’avais seize ans. Mon père travaillait pour le sien. » — NADIA : « Et tu ne m’as rien dit ? Pourquoi ? »',
          'JI-HO : « Parce que j’avais peur de te perdre. Et je me déteste pour ça. »',
          'Un silence. Le bruit du marché autour d’eux. NADIA : « Est-ce que tu m’as aimée, Ji-Ho ? Vraiment aimée ? »',
          'JI-HO (voix douce) : « Toute ma vie. Depuis que tu avais douze ans et que tu m’as dit que j’étais trop sérieux et que je devais apprendre à danser. »',
          'Leurs mains se touchent sur la table. Une promesse silencieuse.'
        ]
      },
      {
        number: 3,
        title: 'Épisode 3 — Lola ne filtre pas',
        duration: '4 min',
        text: [
          'La maison familiale des Mbemba. Un dîner où tout le monde est trop bien habillé et où personne ne dit ce qu’il pense. Sauf Lola, l’amie d’enfance de Nadia.',
          'EDOUARD (froid) : « Lola, vous avez une famille ici à Brazzaville ? »',
          'LOLA : « Oui ! Ma mère, mes trois sœurs, mon oncle Célestin qui joue de la sanza comme si c’était une arme, et mon chat Mobutu ! »',
          'EDOUARD : « Votre chat s’appelle Mobutu ? »',
          'LOLA : « Oui. Parce qu’il mange tout ce qu’il trouve et il ne rend jamais compte de rien ! »',
          'Célestine éclate de rire. Dans cette maison pleine de secrets et de non-dits, Lola était le seul être qui disait simplement la vérité.'
        ]
      }
    ]
  },
  {
    id: 'l-ombre-du-congo',
    title: 'L’Ombre du Congo',
    universe: 'mystere',
    universeLabel: 'Aventure & Mystère Ésotérique',
    tagline: 'Les Fils de Salomon — Une vérité vieille de trois mille ans',
    author: 'Dedieu Lemvo Damba',
    readingTime: '20 min',
    episodesCount: 12,
    badge: 'Mystère Ésotérique',
    accentColor: '#c9a24b',
    teaser: 'Dans les profondeurs de la forêt équatoriale et sous les sables d’Égypte, le professeur Elias Mokonzi traque le légendaire Manuscrit de Loango pour sauver la mémoire originelle de l’humanité.',
    quoteExcerpt: '« La vérité est comme le soleil. On peut s’en passer un moment, mais sans elle, pas de vie. »',
    chapters: [
      {
        number: 1,
        title: 'Prologue — L’Initiation (Kinshasa, 1987)',
        duration: '6 min',
        text: [
          'Kinshasa, 1987. Il était minuit passé quand on banda les yeux d’Elias Mokonzi. Il avait vingt-deux ans, fils d’un pasteur protestant et petit-fils d’un guérisseur traditionnel kongo. Ces deux héritages contradictoires avaient depuis toujours déchiré son âme comme un fleuve que deux courants opposent.',
          'On le fit avancer dans le noir sur un sol de pierre froide. Une voix grave résonna, amplifiée par la roche : « Qui frappe à la porte du Temple ? »',
          'Elias répondit : « Un homme libre, de bonnes mœurs, qui cherche la Lumière. » — « Que portes-tu avec toi, Profane ? » — « Rien que l’ignorance et la volonté de la surmonter. »',
          'On lui retira son bandeau. La salle qui se révéla devant lui lui coupa le souffle : une loge maçonnique, mais africaine jusque dans les os. Les colonnes sculptées de masques kongo. L’œil de la Providence entouré de l’Ankh égyptien et du Nsibidi.',
          '« Bienvenue, Frère Elias. Tu entres ce soir dans la Loge du Léopard. Ce que tu vas voir ne peut être raconté. Es-tu prêt ? » — « Je suis prêt. » Trente ans plus tard, il allait regretter ces mots.'
        ]
      },
      {
        number: 2,
        title: 'Chapitre I — Le Messager des Ténèbres',
        duration: '6 min',
        text: [
          'Brazzaville, 2017. Trente ans après. Le professeur Elias Mokonzi était assis sur la terrasse de son appartement de Poto-Poto quand son téléphone sonna. Indicatif égyptien.',
          'La voix d’Anwar Ibrahim, Grand Maître de la Loge d’Osiris au Caire, tremblait : « Frère Elias… Le Manuscrit de Loango a été retrouvé. »',
          'Elias faillit lâcher son verre. Un texte mythique du XVIe siècle reliant les prêtres du royaume de Loango aux secrets de l’Égypte ancienne.',
          '« Je l’ai tenu entre mes mains ce matin, Elias. Il contient la preuve d’une connexion directe entre nos origines. Mais les Frères de l’Ombre sont à mes trousses. Prends le premier vol pour Le Caire. L’avenir de notre mémoire en dépend. » La ligne fut coupée.'
        ]
      },
      {
        number: 3,
        title: 'Chapitre XII — Le Sanctuaire de Ngoma Lungunda',
        duration: '6 min',
        text: [
          'En croisant les coordonnées célestes du Sphinx de Gizeh et des chutes de Livingstone, Elias découvrit le Sanctuaire sur la colline Ngoma Lungunda dans la province du Pool.',
          'Au centre de la chambre circulaire, sur un socle de granit noir, reposaient deux tablettes de pierre grise intactes.',
          'Elias lut la première ligne à voix haute : « Nous, serviteurs de la Lumière première, gardons ici non un trésor d’or, non une arme de domination, mais une vérité simple que les hommes oublient sans cesse : toute connaissance est une. Toute humanité est une. Ce que vous cherchez était dans le chemin que vous avez parcouru. »'
        ]
      }
    ]
  },
  {
    id: 'l-ombre-de-kinshasa',
    title: 'L’Ombre de Kinshasa',
    universe: 'thriller',
    universeLabel: 'Action & Thriller',
    tagline: 'Livre & adaptation BD — Romance, Action et Espionnage',
    author: 'Dedieu Lemvo Damba',
    readingTime: '14 min',
    episodesCount: 10,
    badge: 'Espionnage & Enquête',
    accentColor: '#262b4a',
    teaser: 'Dans la moiteur nocturne de Brazzaville, la rencontre fortuite entre David et la troublante Sarah Jay déclenche une traque internationale où interviennent James Bond et des réseaux secrets.',
    quoteExcerpt: '« Ne fais confiance à personne. »',
    chapters: [
      {
        number: 1,
        title: 'Chapitre 1 — La rencontre à Brazzaville',
        duration: '5 min',
        text: [
          'La nuit enveloppe Brazzaville. Dans un quartier animé, les lumières des restaurants se reflètent sur les capots luisants des voitures. Un jeune Congolais, David, remarque Sarah Jay assise seule à une table. Elle semble attendre quelqu’un.',
          'Une conversation s’engage. Le courant passe immédiatement, mais Sarah reste sur ses gardes. Un téléphone vibre sur la table en verre.',
          'Avant de disparaître dans la foule, elle glisse discrètement à David un petit morceau de papier plié : « Ne fais confiance à personne. »',
          'David déplie le billet sous la lueur d’un réverbère. Une adresse et une heure : 02h15, entrepôt des douanes fluviales.'
        ]
      },
      {
        number: 2,
        title: 'Chapitre 2 — Le message secret et James Bond',
        duration: '5 min',
        text: [
          'David découvre que le papier contient les coordonnées d’une archive confidentielle convoitée par un syndicat international.',
          'Au même instant, James Bond arrive incognito en ville pour localiser cette organisation clandestine. Sur ses pas, la journaliste indépendante Mia Khalifa scrute chaque mouvement.',
          'Leurs chemins convergent dans un bâtiment désaffecté en bordure du fleuve Congo alors qu’une pluie tropicale commence à tambouriner sur les tôles.'
        ]
      }
    ]
  },
  {
    id: 'le-nounours-gardien-des-reves',
    title: 'Le Nounours Gardien des Rêves',
    universe: 'conte',
    universeLabel: 'Conte Poétique & Doux',
    tagline: 'Le secret des nounours qui veillent quand la nuit s’endort',
    author: 'Dedieu Lemvo Damba',
    readingTime: '8 min',
    episodesCount: 4,
    badge: 'Conte Nocturne',
    accentColor: '#4a7c59',
    teaser: 'Dans une chambre aux murs couleur de ciel, Milo le nounours s’anime dès qu’Emma s’endort pour veiller sur son sommeil et chasser les ombres grises grâce à sa boîte magique.',
    quoteExcerpt: '« Que les mauvais rêves s’en aillent, que les étoiles brillent, et que le cœur de l’enfant retrouve la paix. »',
    chapters: [
      {
        number: 1,
        title: 'Chapitre 1 — La ronde de minuit',
        duration: '4 min',
        text: [
          'Dans une petite chambre aux murs couleur de ciel, vivait un adorable nounours appelé Milo. Milo était doux, tout rond et très câlin. Il avait une petite écharpe bleue autour du cou et deux yeux noirs qui brillaient lorsqu’ils attrapaient la lumière de la lune.',
          'Chaque soir, une petite fille appelée Emma le serrait très fort contre elle avant de dormir. « Bonne nuit, Milo. Reste près de moi. » — « Toujours », semblait répondre le petit nounours avec son sourire.',
          'Mais Emma ignorait un secret… Lorsque les enfants s’endormaient, les nounours pouvaient se réveiller.',
          'Une nuit, lorsque l’horloge indiqua minuit, Milo ouvrit doucement les yeux. Il regarda Emma qui dormait paisiblement. « Il est temps de commencer ma ronde », murmura-t-il.'
        ]
      },
      {
        number: 2,
        title: 'Chapitre 2 — La formule magique',
        duration: '4 min',
        text: [
          'Soudain, une petite fumée grise apparut au bout du couloir. Milo fronça les sourcils : « Oh non… un mauvais rêve ! » Emma commença à s’agiter dans son sommeil.',
          'Milo courut jusqu’à son oreiller, posa ses petites pattes dessus et prononça la formule secrète : « Que les mauvais rêves s’en aillent, que les étoiles brillent, et que le cœur de l’enfant retrouve la paix. »',
          'Le nuage gris disparut. Milo ouvrit sa boîte magique cachée sous le lit : une poignée de poussière d’étoiles, trois pétales de fleurs de lune et un morceau d’arc-en-ciel pour lui offrir un magnifique jardin enchanté.'
        ]
      }
    ]
  },
  {
    id: 'leo-le-petit-lapin',
    title: 'Léo, le petit lapin qui avait peur de la nuit',
    universe: 'conte',
    universeLabel: 'Conte & Morale',
    tagline: 'Apprendre à écouter la forêt pour ne plus craindre l’obscurité',
    author: 'Dedieu Lemvo Damba',
    readingTime: '7 min',
    episodesCount: 3,
    badge: 'Conte Étoilé',
    accentColor: '#8a6b3e',
    teaser: 'Léo courait vite se cacher dans son terrier dès que la nuit tombait. Mais sa maman va lui révéler le secret de la chouette et les petites lanternes des lucioles.',
    quoteExcerpt: '« La nuit n’est pas seulement sombre. Elle cache aussi de très belles choses. »',
    chapters: [
      {
        number: 1,
        title: 'Chapitre 1 — Le chant de la chouette',
        duration: '3 min',
        text: [
          'Dans une petite forêt entourée de grands arbres, vivait un adorable petit lapin nommé Léo. Léo avait de grandes oreilles, un petit nez rose et une queue toute blanche et ronde. Il aimait courir dans les champs, jouer avec les papillons et manger les carottes que sa maman lui préparait.',
          'Mais Léo avait un secret… Il avait très peur de la nuit.',
          'Une nuit, il entendit : CRIC… CRAC… puis : Houuu… houuu… « Un monstre ! » chuchota-t-il en se cachant sous sa couverture.',
          'Sa maman entra doucement dans la chambre : « Ce n’est pas un monstre, mon petit Léo. C’est simplement la chouette qui chante pour saluer la lune. La nuit est le moment où la forêt se repose. »'
        ]
      },
      {
        number: 2,
        title: 'Chapitre 2 — Les lucioles et les étoiles',
        duration: '4 min',
        text: [
          'Le lendemain soir, Léo accepta de sortir quelques minutes devant le terrier avec sa maman.',
          'Une petite luciole passa devant lui : « Regarde maman ! Une petite lumière ! » — « Oui. Les lucioles sont les petites lanternes de la forêt. »',
          'Le vent murmurait dans les branches : Chhh… chhh… Ce n’était pas un bruit effrayant, c’était comme une chanson douce.',
          'Léo regarda la lune et les milliers d’étoiles : « Bonne nuit, lune. Bonne nuit, petites lumières. » Et pour la première fois, il s’endormit paisiblement avec un grand sourire.',
          'Morale : Il ne faut pas toujours avoir peur de ce que l’on ne connaît pas. Parfois, derrière nos peurs se cachent de magnifiques découvertes.'
        ]
      }
    ]
  }
];

export const QUOTES = [
  {
    text: "Certaines rencontres ne commencent pas quand deux êtres se voient, mais quand deux destins se reconnaissent.",
    source: "L’Amour au-delà du Hasard — Dedieu Lemvo Damba"
  },
  {
    text: "Tant qu’une peur existera, l’ombre cherchera un chemin.",
    source: "Les Enfants de l’Ombre — Dedieu Lemvo Damba"
  },
  {
    text: "Les cicatrices sont là où la lumière entre.",
    source: "Shadows & Scars — Dedieu Lemvo Damba"
  },
  {
    text: "La vérité est comme le soleil. On peut s’en passer un moment, mais sans elle, pas de vie.",
    source: "L’Ombre du Congo — Dedieu Lemvo Damba"
  },
  {
    text: "La nuit n’est pas seulement sombre. Elle cache aussi de très belles choses.",
    source: "Léo, le petit lapin qui avait peur de la nuit — Dedieu Lemvo Damba"
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
    description: "Romance, mystère, fantastique, contes... chaque univers garde son secret jusqu'à ce qu'on décide d'y entrer."
  },
  {
    number: "iii.",
    title: "Ne plus savoir l'heure",
    description: "Un chapitre, dix chapitres, ou un seul par semaine — l'histoire attend qu'on revienne, et elle sait toujours quand on repart trop tôt."
  }
];
