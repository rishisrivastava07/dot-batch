import "./App.css";
import Item from "./components/Item.js";
import ItemDate from "./components/ItemDate.js";
import Cards from "./components/Cards.js";

function App() {
  // type 02 - to pass the props (good way)
  // const porpTwoName = "Surf-Excel";

  // type 03 - best way
  const response = [
    {
      itemName: "Nirma",
      itemDate: "02nd",
      itemMonth: "April",
      itemYear: "2024",
    },
    {
      itemName: "SurfExcel",
      itemDate: "03rd",
      itemMonth: "August",
      itemYear: "2023",
    },
    {
      itemName: "Tide",
      itemDate: "04th",
      itemMonth: "June",
      itemYear: "2022",
    },
  ];
  return (
    <div>
      <Cards>
        {/* type 01 - to pass the props (bad way) */}
        {/* <Item name="Nirma"/>
        <ItemDate day="02nd" month="April" year="2024"/>

        <Item name={porpTwoName}/>
        <ItemDate day="03rd" month="August" year="2021"/>

        <Item name="Tide"/>
        <ItemDate day="04th" month="June" year="2023"/> */}

        {/* Type - 03 */}
        <Item name={response[0].itemName}>Mein first Item ka content hu</Item>
        <ItemDate
          day={response[0].itemDate}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        />

        <Item name={response[1].itemName} />
        <ItemDate
          day={response[1].itemDate}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        />

        <Item name={response[2].itemName} />
        <ItemDate
          day={response[2].itemDate}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        />

        <div className="App">Hello Jee</div>
      </Cards>
    </div>
  );
}

export default App;
