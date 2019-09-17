import { AreaShape } from './type'

// class
class Shape {
  name: string
  color: string
  area: number

  constructor(shape: AreaShape) {
    this.name = shape.name
    this.color = shape.color || 'black'
    this.area = shape.width * shape.height
  }

  speakOut = () =>
    `I'm ${this.color}, name is ${this.name}, with an area of ${this.area} cm squared !`

  shoutout(){
    return `I'm ${this.color} ${this.name} with an area of ${this.area} cm squared---shotout`
  }
}

// 继承extends
class Shape3D extends Shape {
  volume: number
  public count: number
  private id: string
  constructor(shape: AreaShape) {
    super(shape)
    this.id = shape.id
    this.count = shape.count
    this.volume = shape.count * this.area
  }

  speakOut = () =>
    `I'm ${this.color}, name is ${this.name}, with a volume of ${this.volume} cm cube shape3D !`

  superSpeakOut = () => super.shoutout()
}

export { Shape, Shape3D }
