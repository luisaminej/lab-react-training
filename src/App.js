import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

function App() {

  const persons = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"

    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]

  const creditcard = [
    {
      type: "Visa",
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor: "#11aa99",
      color: "white"

    },
    {

      type: "Master Card",
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor: "#eeeeee",
      color: "#222222",

    },
    {
      type: "Visa",
      number: "0123456789016984",
      expirationMonth: 12,
      expirationYear: 2019,
      bank: "Name of the Bank",
      owner: "Firstname Lastname",
      bgColor: "#ddbb55",
      color: "white"
    }
  ]

  const drivercard = [
      {
      name: "Travis Kalanick",
      rating: 4.2,
      img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
      car: {
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
      }
    },
      {

      name: "Dara Khosrowshahi",
      rating: 4.9,
      img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
      car: {
        model: "Audi A3",
        licensePlate: "BE33ER"
      }
      }
  ]





  return (
    <section>
      <div>
        <h1>Cards</h1>
        {
          persons.map((card, index_card) => (
            <IdCard
              key={index_card}
              lastname={card.lastName}
              firstname={card.firstName}
              gender={card.gender}
              height={card.height}
              birth={card.birth.toString().slice(0, 15)}
              picture={card.picture}

            />
          ))

        }

      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Juanito</Greetings>
      </div>
      <div>
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h1>Credit Card</h1>
        {
          creditcard.map((creditcard, index_idCard) => (
            <CreditCard
              key={index_idCard}
              type={creditcard.type}
              number={creditcard.number}
              expirationMonth={creditcard.expirationMonth}
              expirationYear={creditcard.expirationYear}
              bank={creditcard.bank}
              owner={creditcard.owner}
              bgColor={creditcard.bgColor}
              color={creditcard.color}
            />
          ))}


      </div>
      <div>
        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <div>
        <h1>Driver Card</h1>
        {
          drivercard.map((drivercard, index_card) => (
            <DriverCard
              key={index_card}
              name={drivercard.name}
              rating={drivercard.rating}
              img={drivercard.img}
              car={drivercard.car}
             
            />
          ))}
      </div>

    </section>

  );
}

export default App;
