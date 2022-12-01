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
        "Tu prend Sandra par l'épaule et presse le pas. ",
        "Tu la rassure immédiatement, tu lui dit qu'il ne va pas l'approché, et de ne pas faire attention à ce connard d'ivrogne.",
        "Une fois avoir mis une saine distance avec cet inconnu, Sandra se blotti doucement contre toi en souriant. Vous arrivez bientot chez elle.",
      ],
      null,
      null,
      [choixContinuerChezElle]
    );

    let SceneFilleInquiette = new Scene(
      "FilleInquiete",
      [
        "Tu ignore l'ivrogne et presse le pas. C'est pas comme si tu allais lui casser la figure de toute façon.",
        "Tu jette un oeil à Sandra. Elle semble même troublé par les provocations de l'autre imbécile, et surtout tu a l'impression qu'elle attendait quelque chose de toi.",
        "Quand elle sort ses clés en silence, tu comprend que vous êtes bientot arrivés.",
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
      "Ignorer l'ivrogne",
      SceneFilleInquiette,
      null,
      []
    );

    // Scene Maison
    let sceneDansLaRue = new Scene(
      "Dans la rue",
      [
        "Vous marchez depuis maintenant quelques minutes. Sur le trottoir d'en face, un homme visiblement très éméché se tourne vers vous.",
        "En voyant la fille avec qui tu es, il commence à la siffler. Vous ne comprenez pas vraiment ce qu'il dit tant il braille plus qu'il ne parle.",
        "Néhamoins, ses propos sont très clairement obscènes et assez explicite. Il titube doucement dans votre direction.",
        "Sandra est très perturbé par cet énergumène, surtout quand il commence à mimer ce que vous allez faire tout les deux en rigolant grassement.",
      ],
      null,
      null,
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
        "Tu fais demi-tour et entre dans la pharmacie. Elle t'attend à l'exterieur en observant les alentours d'un regard inquiet.",
        "Elle n'est pas très à l'aise, et toi non plus.",
        "Tu trouve rapidement les présevatifs, te dépèche de payer et de la cacher dans ta poche.",
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
        "Vous entrez tout les deux dans l'épicerie. Le sourir au lèvre, vous vous mettez d'accord pour une bouteille de Jeager avec un regard complice.",
        "A la caisse, Sandra éclate de rire à l'idée de cette achat irraisonnable, et en sortant, tu ne peux pas t'empecher de rire aussi. La soirée est décidement parfaite !",
      ],
      null,
      null,
      [allerChezElle]
    );
    this.listOfScenes.push(sceneEpicerie);

    // Aller à la Pharmacie
    let allerPharmacie = new Choice(
      "Aller acheter des préservatifs",
      scenePharmacie,
      null,
      null
    );

    // Aller acheter de l'alchool
    let allerEpicerie = new Choice(
      "Mon royaume pour une bouteille !!!",
      sceneEpicerie,
      null,
      null
    );

    // Scene sortie du bar
    let sortieBarScene = new Scene(
      "sortieBar",
      [
        "Vous sortez du bar tout les deux. Dehors, il fait un peu frais, et surtout très sombre. Les lampadaires éclairent la rue.",
        "Elle commence à vous emmener chez elle. Un peu plus loin dans cette direction, mais de l'autre coté de la rue,",
        "tu appercois une épicerie encore ouverte qui scintille de bouteille rempli de promesses.",
        "Dans l'autre direction, à coté du bar maintenant derière vous, tu repère aussi une pharmacie.",
      ],
      null,
      "Tu hésite un instant. Mais Sandra semble ne pas vouloir s'attarder dans la rue.",
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

    // Scene à l'interieur du bar
    let InitScene = new Scene(
      "InitScene",
      [
        "Cette soirée c'est jusqu'ici passé à merveille. Tu t'es bien amusé avec tes amis, et il n'est pas encore trop tard.",
        "Tu a rencontré une fille plutot sympa en début de soirée, Sandra, et elle s'avère encore plus irrésitible après quelques bières.",
        "Ca tombe bien, tu semble l'interrésser aussi...",
        "Alors que tu t'appretais à recommander pour vous deux, elle te propose de plutot prendre ce dernier verre chez elle.",
      ],
      null,
      "",
      [sortirDuBar]
    );
    this.listOfScenes.push(InitScene);
  }
}
