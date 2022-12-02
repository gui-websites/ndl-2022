class historyTree {
  // Path: scenario/historyTree.ts
  listOfScenes: Scene[];

  //created by reverse order
  createHistoryTree() {
    //scenes finales
    let sceneGoodEnd = new Scene("bonne fin", [], null, null, []);
    let sceneMST = new Scene("mst", [], null, null, []);
    let sceneEnceinte = new Scene("enceinte", [], null, null, []);

    // forcer
    let sceneForcer = new Scene("forcer", ["forcer"], null, null, []);

    //transition finales
    let transitionGoodEnding = new Choice(
      "Continuer",
      sceneGoodEnd,
      null,
      null
    );

    let transitionMST = new Choice("Continuer", sceneMST, null, null);

    let transitionEnceinte = new Choice("Continuer", sceneEnceinte, null, null);

    //scene "bon comportement"
    let sceneFinSoireeBien1 = new Scene("bon comportement", [], null, null, [
      transitionGoodEnding,
    ]);
    let sceneFinSoireeBien2 = new Scene("bon comportement", [], null, null, [
      transitionMST,
    ]);
    let sceneFinSoireeBien3 = new Scene("bon comportement", [], null, null, [
      transitionEnceinte,
    ]);

    // scene "se bourrer la gueule"
    let sceneFinSoireeBourre = new Scene(
      "se bourrer la gueule",
      [],
      null,
      null,
      []
    );

    let sceneRentrerMaison = new Scene(
      "rentrer à la maison",
      ["Rentre chez toi, garde le numéro, peut être une autre fois"],
      null,
      null,
      []
    );

    let sceneInsistePassePasBien = new Scene(
      "insiste",
      [
        "Insiste encore un peu mais c'est nul. Doivent arreter et part en mauvais termes",
      ],
      null,
      null,
      []
    );

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
      ["Elle le sent pas, arrete ou pas ?"],
      null,
      null,
      [choixArreter, choixInsister]
    );

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
      ["commenceBien"],
      null,
      null,
      [choixPortectionCapote, choixPillule, choixProfiterToutDeSuite]
    );

    // scene boit puis commence à s'amuser
    let sceneBoirePuisCommencer = new Scene(
      "boirePuisCommencer",
      ["boirePuisCommencer"],
      null,
      null,
      [choixProtectionCapoteMal, choixPilluleMal, choixProfiterToutDeSuiteMal]
    );

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

    let choixForcer = new Choice("Forcer", sceneForcer, null, null);

    // scene elle a pas envie
    let sceneElleAPasEnvie = new Scene("elle a pas envie", [], null, null, [
      choixArreter,
      choixForcer,
    ]);

    // scene boire beaucoup
    let sceneBoireBeaucoup = new Scene("boire beaucoup", [], null, null, [
      transitionMST,
    ]);

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
        "S'installe chez elle",
        "Se met confortable",
        "boit un verre comme convenu ou passe directement aux choses serieuses",
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
        "S'installe chez elle",
        "Elle est pas trop entousiaste",
        "boit un peu pour détendre l'atmosphère",
        "essayer de faire quand même ce qui était prévu",
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
