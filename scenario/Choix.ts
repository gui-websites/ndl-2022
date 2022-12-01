class Choice {
  // text of the choice
  textOfTheChoice: string;
  // destination of the choice
  destination: Scene;
  icon: ImageBitmap;
  requiredCardNames: string[];

  // constructor of the class
  constructor(
    textOfTheChoice: string,
    destination: Scene,
    icon: ImageBitmap,
    requiredCardNames: string[]
  ) {
    this.textOfTheChoice = textOfTheChoice;
    this.destination = destination;
    this.icon = icon;
    this.requiredCardNames = requiredCardNames;
  }

  // check if the choice is available
  isAvailable(ownedCards: string[]): boolean {
    for (let cardName of this.requiredCardNames) {
      if (!ownedCards.includes(cardName)) {
        return false;
      }
    }
    return true;
  }

  choose(ownedCards: string[]): Scene {
    if (this.isAvailable(ownedCards)) {
      return this.destination;
    } else {
      return null;
    }
  }
}
