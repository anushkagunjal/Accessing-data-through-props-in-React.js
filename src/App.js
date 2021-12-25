import './App.css';
import Card from './Card';
import Data from './Data';

function App() {

  return (
    <>
      <h1>Trending Movies : 2021</h1>

      <Card
        imgsrc={Data[0].imgsrc}
        title={Data[0].title}
        subtitle={Data[0].subtitle}
        subtitle1={Data[0].subtitle1}
        sname={Data[0].sname}
        link={Data[0].link}
        link2={Data[0].link}
      /> 

     <Card
        imgsrc={Data[1].imgsrc}
        title={Data[1].title}
        subtitle={Data[1].subtitle}
        subtitle1={Data[1].subtitle1}
        sname={Data[1].sname}
        link={Data[1].link}
        link2={Data[1].link}
      />

     <Card
        imgsrc={Data[2].imgsrc}
        title={Data[2].title}
        subtitle={Data[2].subtitle}
        subtitle1={Data[2].subtitle1}
        sname={Data[2].sname}
        link={Data[2].link}
        link2={Data[2].link2}
      />

      <Card
        imgsrc={Data[3].imgsrc}
        title={Data[3].title}
        subtitle={Data[3].subtitle}
        subtitle1={Data[3].subtitle1}
        sname={Data[3].sname}
        link={Data[3].link}
        link2={Data[3].link2}
      />

     <Card
        imgsrc={Data[4].imgsrc}
        title={Data[4].title}
        subtitle={Data[4].subtitle}
        subtitle1={Data[4].subtitle1}
        sname={Data[4].sname}
        link={Data[4].link}
        link2={Data[4].link2}
      />

     <Card
        imgsrc={Data[5].imgsrc}
        title={Data[5].title}
        subtitle={Data[5].subtitle}
        subtitle1={Data[5].subtitle1}
        sname={Data[5].sname}
        link={Data[5].link}
        link2={Data[5].link2}
      />

     <Card
        imgsrc={Data[6].imgsrc}
        title={Data[6].title}
        subtitle={Data[6].subtitle}
        subtitle1={Data[6].subtitle1}
        sname={Data[6].sname}
        link={Data[6].link}
        link2={Data[6].link2}
      />

     

    </>
  );
}

export default App;
