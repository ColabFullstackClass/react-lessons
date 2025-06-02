import { useState, useEffect, useRef } from "react";
import Button from "./components/ui/Button";
function App() {
    // const [welcomeCount, setWelcomeCount] = useState(10);
    const welcomeCount = useRef(0);
    const [isEven, setIsEven] = useState(true);
    const [user, setUser] = useState("");
    const [programmers, setProgrammers] = useState([
        { name: "OT", isProgrammer: true },
    ]);

    const [programmerName, setProgrammerName] = useState("");
    const [isProgrammer, setIsProgrammer] = useState(false);

    // let welcomeCount = 0;

    // const increaseWelcomeCount = () => {
    //     console.log("Before increment , value is ======>>>>>>", welcomeCount);
    //     welcomeCount += 1;
    //     console.log("After increment , value is ======>>>>>>", welcomeCount);
    // };

    // const increaseWelcomeCount = () => {
    //     const _newValue = welcomeCount + 1;
    //     setWelcomeCount(_newValue);
    //     setIsEven(_newValue % 2 === 0);
    // };
    const handleUpdateProgrammers = () => {
        // setProgrammers([{ name: "OT", isProgrammer: true }]); // rewrites entire array
        setProgrammers([
            ...programmers,
            { name: programmerName, isProgrammer: isProgrammer },
        ]);

        //RVERT TO DEFAULT STATE
        setProgrammerName("");
        setIsProgrammer(false);
        // const _temp = programmers;
        // _temp.push({ name: "OTA", isProgrammer: true });
        // setProgrammers(_temp);
    };

    // const populateProgrammerList = () => {
    //     setProgrammers([
    //         ...programmers,
    //         { name: "Ade", isProgrammer: false },
    //         { name: "Bisi", isProgrammer: false },
    //         { name: "John", isProgrammer: false },
    //         { name: "Isreal", isProgrammer: true },
    //     ]);
    // };

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "I am active";
    };

    useEffect(() => {
        // const isAsync  = async(){
        //     await bhdhdjdj
        // }
        // await isAsync()
        welcomeCount.current = welcomeCount.current + 1;
        console.log("I am useEffect");
        // populateProgrammerList();
    }, [user]);

    return (
        <>
            <h1 style={{ backgroundColor: "red" }}>
                Hi Welcome {user} , You have clicked the button{" "}
                {welcomeCount.current} times
                {isEven ? "Number is even" : "Number is Odd"}
            </h1>
            {/* <button onClick={increaseWelcomeCount}>
                {" "}
                Click to increase welcome count{" "}
            </button> */}
            <input type="text" onChange={(e) => setUser(e.target.value)} />

            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>

            {/* <input
                type="text"
                onChange={(e) => setProgrammerName(e.target.value)}
                placeholder="new programmer name"
                value={programmerName}
            />
            <input
                type="checkbox"
                onChange={(e) => setIsProgrammer(e.target.checked)}
                checked={isProgrammer}
            />{" "}
            Check if is programmer
            <button onClick={handleUpdateProgrammers}>
                Update Programmers
            </button>
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
            <Footer year={2025} /> */}
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
