export {};

declare global {
  type ItemType = "capote" | "pq" | "pillule";

  type Item = {
    type: ItemType;
    count: number;
  };

  type PersonType = "guy" | "girl" | "doctor";
  type SceneType =
    | "pharmacy"
    | "bar"
    | "home"
    | "night-club"
    | "street"
    | "grocery-store"
    | "living-room"
    | "doctor";

  type TScene = {
    people: {
      left: PersonType;
      right: PersonType;
    };

    backdrop: string;
  };
}
