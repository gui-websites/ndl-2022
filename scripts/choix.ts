class Choice {
  // text of the choice
  text: string;
  // destination of the choice
  destination: string;
  icon: ImageBitmap;

  // constructor of the class
  constructor(text: string, destination: string, icon: ImageBitmap) {
    this.text = text;
    this.destination = destination;
    this.icon = icon;
  }
}
