// Path: scripts/scene.ts

class Scene {
  // list of choices
  choices: Choice[];
  // title of the scene
  titre: string;
  // narrative text explaining the scene
  narrativeText: string[];
  // background image of the scene
  background: ImageBitmap;
  // explication text explaining the choices
  explicationText: string;

  // constructor of the class
  constructor(
    titre: string,
    narrativeText: string[],
    background: ImageBitmap,
    explicationText: string,
    choices: Choice[]
  ) {
    this.titre = titre;
    this.narrativeText = narrativeText;
    this.background = background;
    this.explicationText = explicationText;
    this.choices = choices;
  }

  getChoices(): Choice[] {
    return this.choices;
  }
}
