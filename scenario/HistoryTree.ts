class historyTree {
  // Path: scenario/historyTree.ts
  listOfScenes: Scene[];

  //created by reverse order
  createHistoryTree() {
    // Boire un verre

    // Passer directement aux choses serieuses

    // Enfin chez elle
    let aSonAppart = new Scene(
      "Enfin chez elle",
      [
        "Vous arrivez enfin chez elle. Tu enlève ta veste, elle la sienne. Vous vous posez sur le canapé.",
      ],
      null,
      null,
      []
    );

    //choix continuer
    let choixContinuerChezElle = new Choice("Continuer", aSonAppart, null, []);

    let SceneFilleRassurer = new Scene(
      "Rassurer",
      [
        "Tu prends Sandra par l'épaule et presse le pas. ",
        "Tu la rassure immédiatement, tu lui explique qu'elle est en sécurité avec toi et qu'elle ne craint rien",
        "Sandra se blottit doucement contre toi en souriant. Vous arrivez bientôt chez elle.",
      ],
      null,
      null,
      [choixContinuerChezElle]
    );

    let SceneFilleInquiette = new Scene(
      "FilleInquiete",
      [
        "Tu attrapes Sandra par le bras et l'éloigne de lui. Tu n'as pas envie de perdre ton temps à te battre, une meilleure soirée t'attends ",
        "Quand elle sort ses clés en silence, tu te réjouis que vous soyez bientôt arrivés.",
      ],
      null,
      null,
      [choixContinuerChezElle]
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
