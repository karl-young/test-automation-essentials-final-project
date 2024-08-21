// making classes for cars
class Car {
  make: string
  model: string
  year: number
  color: string
  kmDriven: number

  constructor(
    make: string,
    model: string,
    year: number,
    color: string,
    kmDriven: number
  ) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.kmDriven = kmDriven
  }
  getCarInfo(): void {
    console.log(
      `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, KM Driven: ${this.kmDriven}`
    )
  }

  getServiceTypeSwitch(): string {
    switch (true) {
      case this.kmDriven < 5000:
        return 'Oil Change'
      case this.kmDriven >= 5000 && this.kmDriven < 10000:
        return 'Tire Rotation'
      case this.kmDriven >= 10000 && this.kmDriven < 20000:
        return 'Brake Inspection'
      case this.kmDriven >= 20000:
        return 'Full Service'
      default:
        return 'Ask the customer to choose a service'
    }
  }

  getServiceType(): void {
    if (this.kmDriven < 5000) {
      console.log('Oil Change')
    } else if (this.kmDriven >= 5000 && this.kmDriven < 10000) {
      console.log('Tire Rotation')
    } else if (this.kmDriven >= 10000 && this.kmDriven < 20000) {
      console.log('Brake Inspection')
    } else {
      console.log('Full Service')
    }
  }
}

const car1 = new Car('Toyota', 'Camry', 2022, 'Red', 10000)
car1.getCarInfo()
car1.getServiceTypeSwitch()

const car2 = new Car('Honda', 'Civic', 2021, 'Blue', 20000)
car2.getCarInfo()
car2.getServiceTypeSwitch()

const car3 = new Car('Nissan', 'Altima', 2020, 'Black', 7000)
car3.getCarInfo()
car3.getServiceType()

const myCar = new Car('Mazda', 'Atenza', 2010, 'Metallic Blue', 65000)
myCar.getCarInfo()
myCar.getServiceType()
