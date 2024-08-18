type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type PickedTop = Pick<AllType, 'name' | 'color'>;
type PickedBottom = Pick<AllType, 'position' | 'weight'>;

function compare<T extends  PickedTop, U extends PickedBottom> (top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

