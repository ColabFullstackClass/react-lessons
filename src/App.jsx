import Button from "./components/ui/Button";
function App() {
    const programmers = [
        { name: "OT", isProgrammer: true },
        { name: "Ade", isProgrammer: false },
        { name: "Bisi", isProgrammer: false },
        { name: "John", isProgrammer: false },
        { name: "Isreal", isProgrammer: true },
    ];

    return (
        <>
            <h1 onClick={CallMe} style={{ backgroundColor: "red" }}>
                Hi Welcome to my react App{1 + 1}
            </h1>
            <IntroCard />
            {programmers.map((programmer) => (
                <InfoCard
                    name={programmer.name}
                    isProgrammer={programmer.isProgrammer}
                />
            ))}
            <Button colour="yellow" bg="gray">
                <span>Click Me</span>
            </Button>
            <Footer year={2025} />
        </>
    );
}

function CallMe() {
    alert("Heklo");
}

function IntroCard() {
    return (
        <div>
            <p>My Name is OT</p>
            <ul>
                <li>Javascript</li>
                <li>css</li>
                <li>html</li>
                <li>Java</li>
            </ul>
        </div>
    );
}

function InfoCard(props) {
    return (
        <div>
            <p>Name : {props.name}</p>
            <ul>
                <li>
                    Programmer: {props.isProgrammer === true ? "Yes" : "No"}
                </li>
                <li>Email: </li>
                <li>Phone Number: </li>
                <li>Address: </li>
            </ul>
        </div>
    );
}

function Footer({ year }) {
    return (
        <div style={{ backgroundColor: "black", color: "white" }}>
            <p>Copyright {year}</p>
            <p>All rights reserved</p>
        </div>
    );
}

export default App;
