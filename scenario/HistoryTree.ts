export default class historyTree {
  // Path: scenario/historyTree.ts
  listOfScenes: Scene[];

  //created by reverse order
  createHistoryTree() {
    //scenes finales
    let sceneGoodEnd = new Scene(
      "bonne fin",
      [
        "Deux semaines plus tard, tu recroises Sandra dans un parc près de chez toi. Elle te salue et te sourit.",
        "Tu t’approches et vous commencez à discuter. Elle semble heureuse de te revoir et te remercie pour la magnifique soirée que vous avez passé ensembles.",
        "Elle serait ravie de te revoir chez elle une prochaine fois.",
      ],
      null,
      null,
      []
    );
    this.listOfScenes.push(sceneGoodEnd);

    let sceneMST = new Scene(
      "mst",
      [
        "Suite à plusieurs symptômes étranges, tu décides d’aller chez le médecin.",
        "En arrivant, ce dernier te fait passer des tests avant de t’annoncer la mauvaise nouvelle : Tu as attrapé le SIDA.",
        "La prochaine fois, pense à te protéger, notamment en emmenant avec toi une préservatif !",
      ],
      null,
      null,
      []
    );
    this.listOfScenes.push(sceneMST);

    let sceneEnceinte = new Scene(
      "enceinte",
      [
        "Trois semaines plus tard, Sandra t'appelle pour t’annoncer la grande nouvelle : tu vas être Papa ! Quoi ? Tu ne voulais pas être Papa à ton âge ?",
        "Eh bien la prochaine pense à utiliser des moyens de contraceptions comme le préservatif ou la pilule contraceptive.",
      ],
      null,
      null,
      []
    );
    this.listOfScenes.push(sceneEnceinte);

    // forcer
    let sceneForcer = new Scene(
      "forcer",
      [
        "Suite à une dispute, Sandra te vire de son appartement. La raison de cette dispute, tu as essayé de la forcer à coucher avec toi.",
        "Ceci est considéré comme du harcèlement sexuel. Nous te rappelons que ce comportement est prohibé et inacceptable.",
      ],
      null,
      null,
      []
    );
    this.listOfScenes.push(sceneForcer);

    //transition finales
    let transitionGoodEnding = new Choice(
      "Continuer",
      sceneGoodEnd,
      null,
      null
    );

    let choixForcer = new Choice("Forcer", sceneForcer, null, null);

    let transitionMST = new Choice("Continuer", sceneMST, null, null);

    let transitionEnceinte = new Choice("Continuer", sceneEnceinte, null, null);

    //scene "bon comportement"
    let sceneFinSoireeBien1 = new Scene(
      "bon comportement",
      [
        "Tu as fait le bon choix, le préservatif est le meilleur moyen de se protéger des IST !!!! Vous pouvez avoir un rapport l’esprit tranquille.",
        "Vous passez une fin de soirée enflammée avant de vous endormir l’un contre l’autre. Le lendemain, tu rentres chez toi, ravi de ta soirée.",
      ],
      null,
      null,
      [transitionGoodEnding]
    );
    this.listOfScenes.push(sceneFinSoireeBien1);

    let sceneFinSoireeBien2 = new Scene(
      "bon comportement",
      [
        "Avant de vous précipiter, tu lui demandes si elle prend la pilule, ce à quoi elle te répond positivement.",
        "Ta question lui rappelle qu’il est l’heure de la prendre et elle la prend devant toi.",
        "Vous passez une fin de soirée enflammée avant de vous endormir l’un contre l’autre. Le lendemain, tu rentres chez toi, ravi de ta soirée.",
      ],
      null,
      null,
      [transitionMST]
    );
    this.listOfScenes.push(sceneFinSoireeBien2);

    let sceneFinSoireeBien3 = new Scene(
      "bon comportement",
      [
        "Dans le feu de l’action, vous décidez d’entreprendre la suite sans prendre aucune précaution.",
        "Vous passez une fin de soirée enflammée avant de vous endormir l’un contre l’autre. Le lendemain, tu rentres chez toi, ravi de ta soirée.",
      ],
      null,
      null,
      [transitionEnceinte]
    );
    this.listOfScenes.push(sceneFinSoireeBien3);

    // scene "se bourrer la gueule"
    let sceneFinSoireeBourre = new Scene(
      "se bourrer la gueule",
      [
        "“Étant trop alcoolisé, la seule chose que tu arrives à faire c’est finir fortement alcooliser et ne plus te souviens que de la fin de la soirée.",
        "Se souvenant d’avoir eu un rapport, tu décides d’aller te faire dépister par précaution. Tu as bien fait ! C’est exactement le comportement qu’il faut avoir après avoir eu un comportement à risque.",
        "Malheureusement se n’est pas assez pour empêcher le fait d’avoir une IST, le médecin t’apprends que tu as le SIDA. La meilleure protection contre le VIH est le préservatif.",
        "Heureusement, il y a des traitements qui peuvent t’aider à aller mieux.",
      ],
      null,
      null,
      []
    );
    this.listOfScenes.push(sceneFinSoireeBourre);

    let sceneRentrerMaison = new Scene(
      "rentrer à la maison",
      [
        "L’ambiance n’est pas au top avec Sandra… À cause d'une ou plusieurs mauvaises actions, elle est très froide avec toi.",
        "Tu décides alors de rentrer chez toi. C’était le meilleur choix à faire.",
      ],
      null,
      null,
      []
    );
    this.listOfScenes.push(sceneRentrerMaison);

    let sceneInsistePassePasBien = new Scene(
      "insiste",
      [
        "Tu insistes fortement pour que la soirée se poursuive dans la chambre à coucher. Peut-être même un peu trop au gout de Sandra …",
      ],
      null,
      null,
      [choixForcer]
    );
    this.listOfScenes.push(sceneInsistePassePasBien);

    //choix continuer
    let choixInsister = new Choice(
      "Essayer de continuer quand même",
      sceneInsistePassePasBien,
      null,
      null
    );

    //choix arreter
    let choixArreter = new Choice("Arrêter", sceneRentrerMaison, null, null);

    //scene "mauvais comportement"
    let scenePassePasBien = new Scene(
      "Passe pas bien",
      [
        "Tu as trop bu, ça risque de dégénérer et tu n’es plus trop maitre de tes moyens. Malgré cela, tout se passe bien avec Sandra, elle est prête à passer aux choses sérieuses.",
        "Est-ce une bonne idée d’aller plus loin ?",
      ],
      null,
      null,
      [choixArreter, choixInsister]
    );
    this.listOfScenes.push(scenePassePasBien);

    let choixPortectionCapote = new Choice(
      "Met préservatif",
      sceneFinSoireeBien1,
      null,
      null
    );

    let choixPillule = new Choice(
      "Elle prend la pillule",
      sceneFinSoireeBien2,
      null,
      null
    );

    let choixProfiterToutDeSuite = new Choice(
      "Profiter tout de suite",
      sceneFinSoireeBien3,
      null,
      null
    );

    let choixProtectionCapoteMal = new Choice(
      "Met préservatif",
      scenePassePasBien,
      null,
      null
    );

    let choixPilluleMal = new Choice(
      "Elle prend la pillule",
      scenePassePasBien,
      null,
      null
    );

    let choixProfiterToutDeSuiteMal = new Choice(
      "Profiter tout de suite",
      scenePassePasBien,
      null,
      null
    );

    // scene boit pas commence à s'amuser
    let sceneCommenceBien = new Scene(
      "commenceBien",
      [
        "Après ce bon début de soirée avec Sandra, tu décides de ne pas boire en arrivant chez elle.",
        "Vous passez directement aux choses sérieuses !!",
      ],
      null,
      null,
      [choixPortectionCapote, choixPillule, choixProfiterToutDeSuite]
    );
    this.listOfScenes.push(sceneCommenceBien);

    // scene boit puis commence à s'amuser
    let sceneBoirePuisCommencer = new Scene(
      "boirePuisCommencer",
      [
        "Vous décidez alors de profiter encore un peu de cet instant et vous vous re-servez un nouveau verre que vous buvez rapidement.",
        "Vous décidez ensuite de passer aux choses séreuses.",
      ],
      null,
      null,
      [choixProtectionCapoteMal, choixPilluleMal, choixProfiterToutDeSuiteMal]
    );
    this.listOfScenes.push(sceneBoirePuisCommencer);

    // choix Boire un verre d'abord
    let choixBoireUnVerre = new Choice(
      "Boire un verre",
      sceneBoirePuisCommencer,
      null,
      null
    );

    // choix Passer directement aux choses serieuses
    let choixPasserAuxChosesSerieuses = new Choice(
      "Passer directement aux choses serieuses",
      sceneCommenceBien,
      null,
      null
    );

    // scene trop alcolisé, ça se passe pas bien
    let sceneElleAPasEnvie = new Scene(
      "elle a pas envie",
      [
        "Tu insistes fortement pour que la soirée se poursuive dans la chambre à coucher.",
        "Peut-être même un peu trop au gout de Sandra …",
      ],
      null,
      null,
      [choixArreter, choixForcer]
    );
    this.listOfScenes.push(sceneElleAPasEnvie);

    let transitionBourré = new Choice(
      "Continuer",
      sceneFinSoireeBourre,
      null,
      null
    );
    // scene boire beaucoup
    let sceneBoireBeaucoup = new Scene(
      "boire beaucoup",
      [
        "Au vu de l’ambiance, tu décides de boire de l’alcool pour te détendre.",
        "Sandra ne bois pas avec toi, l’ambiance reste froide",
      ],
      null,
      null,
      [transitionBourré]
    );
    this.listOfScenes.push(sceneBoireBeaucoup);

    //se bourrer la geule parce que c'est pas génial
    let choixBoireQuelquesVerres = new Choice(
      "Boire quelques verres",
      sceneBoireBeaucoup,
      null,
      null
    );

    //ça se passe pas super bien mais essayer quand même
    let choixPasBoire = new Choice(
      "Ne pas boire",
      sceneElleAPasEnvie,
      null,
      null
    );

    // Enfin chez elle
    let aSonAppartBien = new Scene(
      "Enfin chez elle",
      [
        "Tu as gagné de bons points auprès de Sandra ! Après l’avoir défendu dans la rue, elle se sent rassurer avec toi !",
        "Cela promet une bonne soirée. J’espère que tu n’as pas oublié le préservatif !",
      ],
      null,
      null,
      [choixBoireUnVerre, choixPasserAuxChosesSerieuses]
    );
    this.listOfScenes.push(aSonAppartBien);

    // Enfin chez elle
    let aSonAppartMal = new Scene(
      "Enfin chez elle",
      [
        "Arriver chez Sandra, cette dernière te paraît froide. La raison est simple, lors de l’altercation dans la rue, elle s’est senti en danger et tu n’as pas réagi.",
        "Elle ne veut plus du tout poursuivre la soirée qui était prévue.",
      ],
      null,
      null,
      [choixBoireQuelquesVerres, choixPasBoire]
    );
    this.listOfScenes.push(aSonAppartMal);

    //arrive chez elle, c'est bien partit
    let choixContinuerChezElleBien = new Choice(
      "Continuer",
      aSonAppartBien,
      null,
      []
    );

    //arrive chez elle mais c'est mal partit
    let choixContinuerChezElleMal = new Choice(
      "Continuer",
      aSonAppartMal,
      null,
      []
    );
    let SceneFilleRassurer = new Scene(
      "Rassurer",
      [
        "Tu prends Sandra par l'épaule et presse le pas. ",
        "Tu la rassure immédiatement, tu lui explique qu'elle est en sécurité avec toi et qu'elle ne craint rien",
        "Sandra se blottit doucement contre toi en souriant. Vous arrivez bientôt chez elle.",
      ],
      null,
      null,
      [choixContinuerChezElleBien]
    );
    this.listOfScenes.push(SceneFilleRassurer);

    let SceneFilleInquiette = new Scene(
      "FilleInquiete",
      [
        "Tu attrapes Sandra par le bras et l'éloigne de lui. Tu n'as pas envie de perdre ton temps à te battre, une meilleure soirée t'attends ",
        "Quand elle sort ses clés en silence, tu te réjouis que vous soyez bientôt arrivés.",
      ],
      null,
      null,
      [choixContinuerChezElleMal]
    );
    this.listOfScenes.push(SceneFilleInquiette);

    //choix la rassurer
    let rassurer = new Choice("La rassurer", SceneFilleRassurer, null, []);

    // choix ignorer
    let choixIgnorer = new Choice(
      "Tu l'ignore et commence à t'éloigner, Sandra te suis, tu ne fais aucune remarque ",
      SceneFilleInquiette,
      null,
      []
    );

    // Scene Maison
    let sceneDansLaRue = new Scene(
      "Dans la rue",
      [
        "Vous marchez depuis maintenant quelques minutes. Sur le trottoir d'en face, un homme qui n'a pas les idées claires se tourne vers vous.",
        "Il te demande si la jeune demoiselle qui t'accompagne est ta copine. Tu réponds naturellement que non, ce qui lui laisse croire qu'il peut grossièrement la draguer.",
        "Il ne se prive pas.",
      ],
      null,
      "Comment réagis-tu ?",
      [rassurer, choixIgnorer]
    );
    this.listOfScenes.push(sceneDansLaRue);

    // Aller directement chez elle
    let allerChezElle = new Choice(
      "Dépechons nous de rentrer",
      sceneDansLaRue,
      null,
      null
    );

    // Scene Pharmacie

    let scenePharmacie = new Scene(
      "Pharmacie",
      [
        "Vous rentrez dans la pharmacie. Vous vous sentez mal à l'aise mais tu ressens qu'elle aprécie que tu sois prévoyant.",
        "Néamoins, tu te dépèches de payer et de cacher tes achats dans tes poches.",
      ],
      null,
      null,
      [allerChezElle]
    );
    this.listOfScenes.push(scenePharmacie);

    // Scene Epicerie
    let sceneEpicerie = new Scene(
      "Epicerie",
      [
        "Vous entrez tout les deux dans l'épicerie. Le sourir au lèvre, vous vous mettez d'accord pour une bouteille de vin avec un regard complice.",
        "A la caisse, Sandra éclate de rire à l'idée de cet achat irraisonnable, et en sortant, tu ne peux pas t'empecher de rire aussi. La soirée est décidement parfaite !",
      ],
      null,
      null,
      [allerChezElle]
    );
    this.listOfScenes.push(sceneEpicerie);

    // Aller à la Pharmacie
    let allerPharmacie = new Choice(
      "Tu t'arrêtes à la pharmacie acheter des préservatifs",
      scenePharmacie,
      null,
      null
    );

    // Aller acheter de l'alchool
    let allerEpicerie = new Choice(
      "Tu ne réflechis même pas une seconde, tu la prends par la main et l'emmène dans l'épicerie",
      sceneEpicerie,
      null,
      null
    );

    // Scene sortie du bar
    let sortieBarScene = new Scene(
      "sortieBar",
      [
        "Vous sortez du bar tous les deux. Dehors, il fait un peu frais, et surtout très sombre. Seuls de faibles lampadaires éclairent la rue.",
        "Un peu plus loin, en direction de son appartement",
        "tu appercois une épicerie de nuit qui scintille de bouteilles remplies de promesses.",
        "De l'autre coté de la rue, tu repères aussi une pharmacie, et tu n'as pas de moyen de contraception sur toi...",
      ],
      null,
      "Tu hésites un instant. Mais Sandra semble ne pas vouloir s'attarder dans la rue.",
      [allerPharmacie, allerEpicerie, allerChezElle]
    );
    this.listOfScenes.push(sortieBarScene);

    // choix sortie du bar
    let sortirDuBar = new Choice(
      "La suivre dehors",
      sortieBarScene,
      null,
      null
    );

    let sortirDuBar2 = new Choice(
      "Ne sois pas bête, bien sûr que tu la suis !",
      sortieBarScene,
      null,
      null
    );

    // Scene à l'interieur du bar

    let InitScene = new Scene(
      "InitScene",
      [
        "Cette soirée s'est jusqu'ici passée à merveille. Tu t'es bien amusé avec tes amis, et il n'est pas encore trop tard.",
        "Tu a rencontré une fille irresistible et très sympa en début de soirée, Sandra, avec laquelle tu as partagé quelques verres.",
        "Ca tombe bien, tu semble l'interrésser aussi...",
        "Alors que tu t'appretais à recommander pour vous deux, elle te propose de plutot prendre ce dernier verre chez elle.",
      ],
      null,
      "",
      [sortirDuBar, sortirDuBar2]
    );
    this.listOfScenes.push(InitScene);
  }
}
