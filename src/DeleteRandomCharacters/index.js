import { useState, useEffect } from "react";
import PuzzleTemplate from "../PuzzleTemplate";

const paragraphs = [
    "Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity.",
    "Often, the body paragraph demonstrates and develops your topic sentence through an ordered, logical progression of ideas. There are a number of useful techniques for expanding on topic sentences and developing your ideas in a paragraph. Illustration in a paragraph supports a general statement by means of examples, details, or relevant quotations.",
    "The definition paragraph does exactly what you would expect: it defines a term, often by drawing distinctions between the term and other related ones. The definition that you provide will often be specific to your subject area. Try to avoid perfunctory dictionary definitions that do not inform your analysis in a meaningful way.",
    "A comparison or a contrast paragraph zeroes in on a key similarity or difference between, for instance, two sources, positions, or ideas. Decide whether to deal only with similarities or only with differences, or to cover both. Also, keep in mind that a single comparison can be spread out over two separate paragraphs.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non lectus blandit, venenatis dui ut, dapibus tellus. Phasellus ullamcorper pulvinar velit ac pretium. Etiam a nunc ut sapien fermentum mollis sodales in nisi. Cras congue pharetra ultricies. Curabitur vestibulum commodo eleifend. Morbi rhoncus scelerisque eros."
];

const DeleteRandomCharacter = () => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const [solved, setSolved] = useState(false);
    const [selectedPara, setSelectedPara] = useState(Math.floor(Math.random() * 5));

    const handleTextAreaChange = (event) => {
        const targetText = event.target.value;
        setCount(count + 1);
        setText(targetText);
        if (targetText === selectedPara) {
            setSolved(true);
            return;
        }
        if (count % 40 == 0) {
            deleteCharacters();
        }
    };

    const deleteCharacters = () => {
        let modifiedText = text;
        let randomIndex;
        for (let i = 0; i < 3; i++) {
            randomIndex = Math.floor(Math.random() * text.length);
            modifiedText = text.substring(0, randomIndex) + text.substring(randomIndex + 1);
        };
        setText(modifiedText);
    };

    const handlePaste = (e) => {
        e.preventDefault();
    };

    return (
        <PuzzleTemplate title="Lets see how fast you can type" isSolved={solved} puzzle={
            <div className="deleteRandom">
                <div>
                    <p>
                        { paragraphs[selectedPara] }
                    </p>
                </div>
                <textarea
                    value = { text }
                    onChange = { handleTextAreaChange }
                    onPaste = { handlePaste }
                    rows = "4"
                    cols = "70"
                />
            </div>
        } />
    )
};

export default DeleteRandomCharacter;
