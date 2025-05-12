interface Flight {
  origin: string;
  destination: string;
  airline: string;
  getDetails(): string;
}

interface Hotel {
  location: string;
  city: string;
  getDetails(): string;
}

interface Transfer {
  type: string;
  getDetails(): string;
}

class DomesticFlight implements Flight {
  constructor(
    public origin: string,
    public destination: string,
    public airline: string
  ) {}

  getDetails(): string {
    return `Voo doméstico de ${this.origin} para ${this.destination} com a ${this.airline}`;
  }
}

class InternationalFlight implements Flight {
  constructor(
    public origin: string,
    public destination: string,
    public airline: string
  ) {}
  getDetails(): string {
    return `Voo internacional de ${this.origin} para ${this.destination} com a ${this.airline}`;
  }
}

class DomesticHotel implements Hotel {
  constructor(public location: string, public city: string) {}
  getDetails(): string {
    return `Hotel doméstico em ${this.location}, ${this.city}`;
  }
}

class InternationalHotel implements Hotel {
  constructor(public location: string, public city: string) {}
  getDetails(): string {
    return `Hotel internacional em ${this.location}, ${this.city}`;
  }
}

class DomesticTransfer implements Transfer {
  constructor(public type: string) {}

  getDetails(): string {
    return `Transferencia domestica de ${this.type}`;
  }
}
class InternationalTransfer implements Transfer {
  constructor(public type: string) {}

  getDetails(): string {
    return `Transferencia internacional de ${this.type}`;
  }
}

interface TravelPackageFactory {
  createFlight(origin: string, destination: string, airline: string): Flight;
  createHotel(location: string, city: string): Hotel;
  createTransfer(type: string): Transfer;
}

class DomesticTravelPackageFactory implements TravelPackageFactory {
  createFlight(origin: string, destination: string, airline: string) {
    return new DomesticFlight(origin, destination, airline);
  }
  createHotel(location: string, city: string) {
    return new DomesticHotel(location, city);
  }
  createTransfer(type: string) {
    return new DomesticTransfer(type);
  }
}

class InternationalTravelPackageFactory implements TravelPackageFactory {
  createFlight(origin: string, destination: string, airline: string) {
    return new InternationalFlight(origin, destination, airline);
  }
  createHotel(location: string, city: string) {
    return new InternationalHotel(location, city);
  }
  createTransfer(type: string) {
    return new InternationalTransfer(type);
  }
}

class BookingSystem {
  private factory: TravelPackageFactory;

  constructor(factory: TravelPackageFactory) {
    this.factory = factory;
  }

  createTravelPackage(
    origin: string,
    destination: string,
    airline: string,
    hotelCity: string,
    hotelLocation: string,
    type: string
  ) {
    const flight = this.factory.createFlight(origin, destination, airline);
    const hotel = this.factory.createHotel(hotelLocation, hotelCity);
    const transfer = this.factory.createTransfer(type);

    console.log(flight.getDetails());
    console.log(hotel.getDetails());
    console.log(transfer.getDetails());
  }
}

const domesticFactory = new DomesticTravelPackageFactory();
const internationalFactory = new InternationalTravelPackageFactory();

const domesticBookingSystem = new BookingSystem(domesticFactory);
const internationalBookingSystem = new BookingSystem(internationalFactory);

domesticBookingSystem.createTravelPackage(
  "São Paulo",
  "Rio de Janeiro",
  "Rio de Janeiro",
  "Hotel Bairro X",
  "Gol",
  "Uber Brasil"
);

internationalBookingSystem.createTravelPackage(
  "São Paulo",
  "Madri",
  "Madri",
  "Hotel Madri X",
  "LATAM",
  "Uber"
);
