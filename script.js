// Define an array of elements with their data-ns-test values
const elements = [
    { tag: "button", nsTest: "block-inline-button" },
    { tag: "div", nsTest: "block-inline-div" },
    { tag: "span", nsTest: "block-inline-span" },
    { tag: "p", nsTest: "block-inline-p" },
    { tag: "input", nsTest: "block-inline-input" },
    { tag: "cite", nsTest: "block-inline-cite" },
    { tag: "code", nsTest: "block-inline-code" },
    { tag: "h1", nsTest: "block-inline-h1" },
    { tag: "sup", nsTest: "block-inline-sup" },
    { tag: "sub", nsTest: "block-inline-sub" }
];

// Function to determine whether an element is displayed as block or inline
function determineDisplayType(element) {
    const div = document.createElement("div");
    div.innerHTML = `<${element.tag} data-ns-test="${element.nsTest}">Test1</${element.tag}>`;
    document.getElementById("output").appendChild(div);

    const computedStyle = getComputedStyle(div.querySelector(element.tag));
    const displayValue = computedStyle.display;

    div.remove(); // Remove the temporarily added element

    return displayValue;
}

// Display the results
elements.forEach(element => {
    const displayType = determineDisplayType(element);
    console.log(`${element.tag} (data-ns-test="${element.nsTest}") is displayed as: ${displayType}`);
});
