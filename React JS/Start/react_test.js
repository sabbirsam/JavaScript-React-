'use strict';
const e = React.createElement;

class testButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    render() {
        if (this.state.liked) {
            return 'You liked comment number ' + this.props.commentID;
        }

        return e(
            'button', { onClick: () => this.setState({ liked: true }) },
            'Likes'
        );
    }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(testButton, { commentID: commentID }),
            domContainer
        );
    });



/**
 * Sumit explanation
 */
const domContainerss = document.querySelector("#root-2");

ReactDOM.render('Any thing like my name sam', domContainerss)

/**
 * create div and add text
 */

const domContainersss = document.querySelector("#root-3");

const myElements = React.createElement("div", null, "Hello sam");

ReactDOM.render(myElements, domContainersss)

/**
 * add div then p with text
 */

const domContainers = document.querySelector("#root");

const myElement = React.createElement("div", null, [
    React.createElement("p", null, "Hello Sasssm"),
    React.createElement("p", null, "Hello Sam")
]);

ReactDOM.render(myElement, domContainers)

/**
 * add div then multiple p with text
 */