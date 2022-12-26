const QuizReducer = (state, action) => {
    switch(action.type){
        case "START": {
            return {
                currentQuiz: action.payload,
            }
        }

        default:
            return state;
    }
}

export default QuizReducer;