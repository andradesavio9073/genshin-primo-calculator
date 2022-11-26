import { createContext } from "react";

const langs = {
  en: {
    lang: "en",
    langFull: "English",
    siteTitle: "Genshin Primo Planner",
    title: "Welcome to Delta and Flamin's Genshin Primo Planner",
    explainationButton: "First time here? Click me!",
    explaination: {
      title: "Welcome to Genshin Primo Planner",
      para1line1:
        "Primogems... Shiny stars every genshin player wishes they had more of",
      para2line1:
        "This website aims to provide players with an exact amount of primogems obtainable in the current patch (or an estimated amount in future patches), so that players can clear as much in-game content to fulfil their wishing desires.",
      // "This website aims to provide players with an exact amount of primogems obtainable in the current patch or an estimated amount in future patches. Providing a tool for players to clear as much in-game content to fulfil their wishing desires.",
      para2line1highlight:
        "This tool however does not account for primogems from Redeemable Codes, Achievements and Chests.",
      para3line1:
        "For Desktop Users, The site has an Input Column and an Output Column.",
      para3line2:
        "For Mobile Users, the Output is situated at the bottom of the page.",
      para3line3:
        "The Output column contains information such as how many primos collected, total fates collected, total number of wishes, and probabilites of geting featured 5 star.",
      para4line1:
        "The Input column is split into categories such as Input Parameters, Events, Exploration, Serenitea Teapot, List of Gift Sets, and Quests.",
      para4line2:
        "The Output panel automatically updates when you update the Input Column.",
      para4line3:
        "When inputting data into Input Parameters most of the parameters can be found either in the wishing menu or in the shop. For the End Date param, it assumes you've done your dailies for the day and starts counting from the next day on.",
      para4line4:
        "As for the rest of the Input column, you can select events, quests and gift sets you're going to do. And for text fields and sliders you should be inputting how many you are going to do. Most of the sliders allow you to set a minimum value (What you've done) and a maximum value (What you're going to do).",
      para5line1:
        "And thats about it. If you got any questions or suggestions feel free to hit me up on Discord at ",
      para5line1highlight: "FlaminDemigod#2754",
      specialThanks: "",
    },
    scrollDown: "Scroll down to get started",
    inputParams: "Input Parameters",
    primogems: "Primogems",
    genesisCrystals: "Genesis Crystals",
    intertwinedFates: "Interwined Fates",
    masterlessStarglitter: "Masterless Starglitter",
    currentPity: "Current Pity",
    noTestRuns: "No. of Test Runs",
    noShopReset: "No. of Shop Resets",
    noFuturePatch: "No. of Future Patches",
    endDate: "End date",
    welkin: "Welkin Moon",
    gnosticHymn: "Gnostic Hymn",
    bpTooltip: "Paid Tier of Battle Pass",
    spiralAbyssPrimos: "Spiral Abyss Primos",
    floor1to8: "Floor 1 to 8",
    floor9to12: "Floor 9 to 12",
    noSpiralAbyssResets: "No. of Spiral Abyss Resets",
    saTooltip:
      "If you have completed the current abyss rotation reduce this value by 1",
    events: "Events",
    exploration: "Exploration",
    unlockables: "Unlockables",
    teleports: "Teleports",
    sos: "Statues of the Seven",
    domain: "Domains",
    domaintooltip1: "Including Resin and One-time Domains",
    domaintooltip2: "Only One-time Domains",
    completion: "Completion",
    sosProgression: "Statue of the Seven Progression",
    level: "Level",
    mond: "Mondstadt",
    liyue: "Liyue",
    inazuma: "Inazuma",
    sumeru: "Sumeru",
    ops: "Offering Progression Systems",
    fbt: "Frostbearing Tree's Gratitude",
    lma: "Enhance The Lumestone Adjuvant",
    ssf: "Sacred Sakura's Favor",
    vrf: "Vanarana's Favor",
    teapot: "Serenitea Teapot",
    trustRank: "Trust Rank",
    listOfGiftSets: "List of Gift Sets",
    indoor: "Indoor",
    outdoor: "Outdoor",
    quests: "Quests",
    archonQuests: "Archon Quests",
    storyQuests: "Story Quests",
    hangouts: "Hangouts",
    worldQuests: "World Quests",
    worldQuestsSeries: "World Quests (Series)",
    output: {
      line1: "Total Number of Primos",
      line2: "Total Number of Fates",
      line3: "Total Number of Wishes",
      line4: "Probabilty of Getting 5 Star if Guaranteed",
      line5: "Probabilty of Getting 5 Star if not Guaranteed",
      includingPity: "including pity",
      excludingPity: "excluding pity",
    },
  },
  de: {
    lang: "de",
    langFull: "Deutsch",
    siteTitle: "Genshin Primo Planner",
    title: "Willkommen bei Delta und Flamin's Genshin Primo Planner",
    explainationButton: "First time here? Click me!",
    explaination: {
      title: "Welcome to Genshin Primo Planner",
      para1line1:
        "Primogems... Shiny stars every genshin player wishes they had more of",
      para2line1:
        "This website aims to provide players with an exact amount of primogems obtainable in the current patch (or an estimated amount in future patches), so that players can clear as much in-game content to fulfil their wishing desires.",
      para2line1highlight:
        "This tool however does not account for primogems from Redeemable Codes, Achievements, Web Events and Chests.",
      para3line1:
        "For Desktop Users, The site has an Input Column and an Output Column.",
      para3line2:
        "For Mobile Users, the Output is situated at the bottom of the page.",
      para3line3:
        "The Output column contains information such as how many primos collected, total fates collected, total number of wishes, and probabilites of geting featured 5 star.",
      para4line1:
        "The Input column is split into categories such as Input Parameters, Events, Exploration, Serenitea Teapot, List of Gift Sets, and Quests.",
      para4line2:
        "The Output panel automatically updates when you update the Input Column.",
      para4line3:
        "When inputting data into Input Parameters most of the parameters can be found either in the wishing menu or in the shop. For the End Date param, it assumes you've done your dailies for the day and starts counting from the next day on.",
      para4line4:
        "As for the rest of the Input column, you can select events, quests and gift sets you're going to do. And for text fields and sliders you should be inputting how many you are going to do. Most of the sliders allow you to set a minimum value (What you've done) and a maximum value (What you're going to do).",
      para5line1:
        "And thats about it. If you got any questions or suggestions feel free to hit me up on Discord at ",
      para5line1highlight: "FlaminDemigod#2754",
      specialThanks: "Merci à Nèa pour la traduction",
    },
    scrollDown: "Scroll down to get started",
    inputParams: "Input Parameters",
    primogems: "Primogems",
    genesisCrystals: "Genesis Crystals",
    intertwinedFates: "Interwined Fates",
    masterlessStarglitter: "Masterless Starglitter",
    currentPity: "Current Pity",
    noTestRuns: "No. of Test Runs",
    noShopReset: "No. of Shop Resets",
    noFuturePatch: "No. of Future Patches",
    endDate: "End date",
    welkin: "Welkin Moon",
    gnosticHymn: "Gnostic Hymn",
    bpTooltip: "Paid Tier of Battle Pass",
    spiralAbyssPrimos: "Spiral Abyss Primos",
    floor1to8: "Floor 1 to 8",
    floor9to12: "Floor 9 to 12",
    noSpiralAbyssResets: "No. of Spiral Abyss Resets",
    saTooltip:
      "If you have completed the current abyss rotation reduce this value by 1",
    events: "Events",
    exploration: "Exploration",
    unlockables: "Unlockables",
    teleports: "Teleports",
    sos: "Statues of the Seven",
    domain: "Domains",
    domaintooltip1: "Including Resin and One-time Domains",
    domaintooltip2: "Only One-time Domains",
    completion: "Completion",
    sosProgression: "Statue of the Seven Progression",
    level: "Level",
    mond: "Mondstat",
    liyue: "Liyue",
    inazuma: "Inazuma",
    sumeru: "Sumeru",
    ops: "Offering Progression Systems",
    fbt: "Frostbearing Tree's Gratitude",
    lma: "Enhance The Lumestone Adjuvant",
    ssf: "Sacred Sakura's Favor",
    vrf: "Vanarana's Favor",
    teapot: "Serenitea Teapot",
    trustRank: "Trust Rank",
    listOfGiftSets: "List of Gift Sets",
    indoor: "Indoor",
    outdoor: "Outdoor",
    quests: "Quests",
    archonQuests: "Archon Quests",
    storyQuests: "Story Quests",
    hangouts: "Hangouts",
    worldQuests: "World Quests",
    worldQuestsSeries: "World Quests (Series)",
    output: {
      line1: "Total Number of Primos",
      line2: "Total Number of Fates",
      line3: "Total Number of Wishes",
      line4: "Probabilty of Getting 5 Star if Guaranteed",
      line5: "Probabilty of Getting 5 Star if not Guaranteed",
      includingPity: "including pity",
      excludingPity: "excluding pity",
    },
  },
  fr: {
    lang: "fr",
    langFull: "Français",
    siteTitle: "Planificateur de Primo-Gemmes pour Genshin",
    title: "Bienvenue au Planificateur de Primo-gemmes de Delta et Flamin",
    explainationButton: "Première fois ici? Cliquez ici!",
    explaination: {
      title: "Bienvenue au Planificateur de Primo-Gemmes pour Genshin",
      para1line1:
        "Primo-gemmes... Ces pierres scintillantes que chaque joueur souhaite d'en avoir toujours plus...",
      para2line1:
        "Ce site vise à permettre aux joueurs de calculer le nombre exact de Primo-gemmes pouvant être obtenues pendant l'expension (ou une estimation pour la prochaine expension), pour que les joueurs puissent compléter le plus de contenu du jeu possible pour remplir leurs poches de Primo-gemmes..",
      // "This website aims to provide players with an exact amount of primogems obtainable in the current patch or an estimated amount in future patches. Providing a tool for players to clear as much in-game content to fulfil their wishing desires.",
      para2line1highlight:
        "Ce site ne compte pas les codes, les trésors ainsi que la progression des succès.",
      para3line1:
        "Pour les utilisateurs d'ordinateur, le site a une colonne d'entrée des données et une colonne de résultats.",
      para3line2:
        "Pour les utilisateurs de mobile, la colonne d'entrée des données est au bas de la page.",
      para3line3:
        "La colonne des résultats contient les informations sur combien de primo-gemmes et le nombre de pierres de la fatalité pouvant être amassées ainsi que le nombre de souhaits et la possibilité d'obtenir un personnage 5 étoiles.",
      para4line1:
        "La colonne d'entrée des données est divisée en plusieurs catégories, dont une pour les paramètres, les évènements, l'exploration, la Sérénithéière, la liste des cadeaux des ensembles de la Sérénithéière ainsi que les quests.",
      para4line2:
        "La colonne des résultats se mets à jour automatiquement lorsque la colonne des données est modifiée.",
      para4line3:
        "Les paramètres peuvent être trouvés dans le menu des souhaits ou la boutique. Pour le paramètre de la dernière journée, il est assumé que toutes les missions du jours ont été faites et commence à compter dès le lendemain.",
      para4line4:
        "Pour le reste de la colonne des données, sélectionnez les événements, quêtes et les ensembles de la Sérénithéière que vous voulez compléter. Ensuite, entrez dans les glissières ce que vous avez de fait et ce que vous planifiez de faire. La valeur minimum est ce qui est déjà fait et la valeur maximum ce qui est prévu de faire.",
      para5line1:
        "Et c'est à peu près tout. Si vous avez des questions ou des suggestions, contactez moi sur discord",
      para5line1highlight: "FlaminDemigod#2754",
      specialThanks: "Merci à Néa(L'Empereure du Café) pour la traduction",
    },
    scrollDown: "Descendez pour commencer",
    inputParams: "Entrée des données",
    primogems: "Primo-gemmes",
    genesisCrystals: "Cristal primaire",
    intertwinedFates: "Pierres de la fatalité",
    masterlessStarglitter: "Astérie libre",
    currentPity: "Pity Actuelle",
    noTestRuns: "Nbr. d'essais",
    noShopReset: "Nbr. d'actualisations de la boutique",
    noFuturePatch: "Nbr. d'expension",
    endDate: "Jour visé",
    welkin: "Faveur de l'astre de la nuit",
    gnosticHymn: "Pass de bataille Gnostique",
    bpTooltip: "Pass de bataille payé",
    spiralAbyssPrimos: "Primo-gemmes de l'abysse",
    floor1to8: "Étage 1 à 8",
    floor9to12: "Étage 9 à 12",
    noSpiralAbyssResets: "Nbr. de réinitialisations de l'abysse",
    saTooltip:
      "Si vous avez complétez l'abysse actuelle, réduisez la valeur de 1.",
    events: "Évènements",
    exploration: "Exploration",
    unlockables: "Déverrouillables",
    teleports: "Téléporteurs",
    sos: "Statues des Septs",
    domain: "Donjons",
    domaintooltip1: "Inclure la résine originelle et les donjons uniques",
    domaintooltip2: "Donjons faisable une seule fois",
    completion: "Complétion",
    sosProgression: "Progression des Statues des Septs",
    level: "Niveau",
    mond: "Mondstadt",
    liyue: "Liyue",
    inazuma: "Inazuma",
    sumeru: "Sumeru",
    ops: "Progression des systèmes d'offres",
    fbt: "Gratitude de l'Arbre Permagelé",
    lma: "Renforcer l'Adjuvant de pierre de lumen",
    ssf: "Faveur du Cerisier sacré",
    vrf: "Faveur du Vanarana",
    teapot: "Sérénitéière",
    trustRank: "Niveau de confiance",
    listOfGiftSets: "Liste des Sets cadeau",
    indoor: "Intérieur",
    outdoor: "Extérieur",
    quests: "Quêtes",
    archonQuests: "Quêtes d'Archon",
    storyQuests: "Quêtes d'Histoires",
    hangouts: "Escapades",
    worldQuests: "Quêtes du Monde",
    worldQuestsSeries: "Quêtes du Monde (série)",
    output: {
      line1: "Nombre total de Primo-gemmes",
      line2: "Nombre total de Pierres de la fatalité",
      line3: "Nombre total de souhaits",
      line4: "Possibilité d'obtenir un 5 étoiles si garanti",
      line5: "Possibilité d'obtenir un 5 étoiles si non-garanti",
      includingPity: "incluant la pity",
      excludingPity: "excluant la pity",
    },
  },
};
const LangContext = createContext(langs.en);

const LangContextProvider = ({ lang, children }) => {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
};

export { LangContextProvider, LangContext, langs };
