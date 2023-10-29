import { useState } from "react";
import PuzzleTemplate from "../PuzzleTemplate";

const questions = [
    {
        question: 'John is hosting a party at his house. He invites 35 people, including 12 of his coworkers, 8 of his childhood friends, 7 neighbors, 4 distant relatives, and 4 people he met at a recent event. He prepares a variety of snacks, including 50 chicken wings, 60 mini sandwiches, 40 spring rolls, and 30 mini quiches. The party starts at 3:00 PM and ends at 7:00 PM. At 4:30 PM, he plays some background music that includes 20 different songs in a playlist. If each song is approximately 3 minutes long, how many songs will be played before the party ends?',
        answer: '50'
    },
    {
        question: "Emily decides to bake cookies. She wears her favorite blue apron, which she bought last summer at the local market. The recipe calls for 2 cups of flour, 1 cup of sugar, 1/2 cup of butter, 1 egg, and 1 teaspoon of vanilla extract. She uses her grandmother's antique mixing bowl, which has been passed down through generations. While the cookies bake in the oven at 350°F, she sips on a cup of herbal tea. After 10 minutes, she checks the cookies and realizes she's made too many and decides to share 50-50 with her friend Sarah with her friend Sarah, who arrives for a surprise visit. If she shares 6 cookies with her, how many cookies does Emily have left?",
        answer: '6'
    },
    {
        question: "Lucy is a gardener, and she's planting a variety of flowers in her garden. She decides to plant 9 sunflowers, 5 roses, 12 tulips, 7 daffodils, and 3 lilies. Each flower needs 1 square foot of space, and Lucy has an ample garden area of 50 square feet to work with. Lucy also keeps a small notebook where she records the growth of her plants, including details like bloom size, color, and daily watering schedule. How many square feet of garden space does Lucy have left after planting all the flowers?",
        answer: '14'
    },
    {
        question: "Amy is baking a cake for her friend's birthday. She follows a recipe that requires 2 cups of flour, 1 cup of sugar, 1/2 cup of butter, 3 eggs, and a pinch of salt. The cake is for a surprise party being held at her friend's house, and she's driving there in her red car, which she just had washed yesterday. If she bakes the cake at 350°F for 30 minutes and then lets it cool for an additional 15 minutes, how many minutes did she spend on the cake?",
        answer: '45'
    },
    {
        question: "Jessica is planning a picnic at a nearby park. She's invited her friends, Sarah, Emily, and Michael. Jessica loves picnics, and she's excited about packing a variety of delicious foods. She prepares 6 sandwiches with ham and cheese, 4 sandwiches with turkey and lettuce, 8 mini quiches, and 10 pieces of fruit. She also brings along her colorful picnic blanket, which she received as a gift last summer. During the picnic, they play a game of frisbee and enjoy the sunny weather. Afterward, they decide to have a friendly competition to see who can spot the most birds in the park. How many sandwiches did Jessica make for the picnic?",
        answer: '10'
    }
];

const ConvolutedMaths = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(questions[Math.floor(Math.random() * 5)]);
    const [text, setText] = useState('');
    const [solved, setSolved] = useState(false);
    const [retries, setRetries] = useState(2);

    const getRandomQuestion = (oldQuestion) => {
        let newQuestion = questions[Math.floor(Math.random() * 5)];
        while (newQuestion === oldQuestion) {
            newQuestion = questions[Math.floor(Math.random() * 5)];
        }
        return newQuestion;
    }

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (text === selectedQuestion.answer) {
            setSolved(true);
        }
        else if (retries > 0) {
            const oldQuestion = selectedQuestion;
            setSelectedQuestion(getRandomQuestion(oldQuestion));
            setText('');
            setRetries(retries - 1);
        }
        else {
            // Send to Main Page
        }
    };

    return (
        <PuzzleTemplate title="Can you solve maths?" isSolved={ solved } puzzle={
            <div className="mathQuestion">
                <div>
                    {selectedQuestion.question}
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={text}
                        onChange={handleInputChange}
                        placeholder="Type something here"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        } />
    )
}

export default ConvolutedMaths;