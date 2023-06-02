import { useQuery } from "react-query";
import getUsers from "../../api/getUsers";
import { ResponsiveBar } from "@nivo/bar";
import { Container } from "./styled";

function App() {
  const { data } = useQuery(["getUsers"], () => getUsers(), {
    refetchOnWindowFocus: false,
  });

  const chartData = () => {
    if (!data) return [];

    return data.results.map(({ name, dob }) => {
      return {
        name: name.first,
        age: dob.age,
      };
    });
  };

  return (
    <Container>
      <ResponsiveBar
        data={chartData()}
        keys={["age"]}
        indexBy="name"
        layout="horizontal"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "name",
          legendPosition: "middle",
          legendOffset: 32,
        }}
      />
    </Container>
  );
}

export default App;
