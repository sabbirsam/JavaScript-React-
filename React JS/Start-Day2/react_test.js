const domContainers = document.querySelector("#root");

// const myElement = React.createElement("div", null, [
//     React.createElement("p", null, "Hello Sasssm"),
//     React.createElement("p", null, "Hello Sam")
// ]);

const myElement = (
    
    <div>
        <h1 id="sa">Hello</h1>
        <div>
            <button id="button">Increment + </button>
        </div>
    </div>
);

ReactDOM.render(myElement, domContainers)
