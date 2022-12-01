class historyTree {
  // Path: scenario/historyTree.ts
  listOfScenes: Scene[];

  //created by reverse order
  createHistoryTree() {
    //Aller à la Pharmacie
    let allerPharmacie = new Choice(
      "Aller acheter des préservatifs",
      null,
      null,
      null
    );

    //Aller acheter de l'alchool
    let allerEpicerie = new Choice(
      "Mon royaume pout une bouteille !!!",
      null,
      null,
      null
    );

    //Aller directement chez elle
    let allerChezElle = new Choice(
      "Dépéchons nous de rentrer",
      null,
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
      "Tu hésite un instant. Mais elle semble ne pas vouloir s'attarder dans la rue.",
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
        "Tu a rencontré une fille plutot sympa en début de soirée, et elle s'avère encore plus irrésitible après quelques bières.",
        "Ca tombe bien, tu semble l'intérréssé aussi...",
        "Alors que tu t'appretais à recommander pour vous deux, elle te propose de plutot prendre ce dernier verre chez elle.",
      ],
      null,
      "",
      [sortirDuBar]
    );
    this.listOfScenes.push(InitScene);
  }
}
