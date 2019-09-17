
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
}

export { Shape }
