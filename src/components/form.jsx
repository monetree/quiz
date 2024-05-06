import { useState } from "react";
import Tutorial from "./tutorial";

const Form = () => {
  const [questions, setQuestions] = useState([
    {
      question: "",
      choices: { option1: "", option2: "", option3: "", option4: "" },
      answer: "",
      active: false,
      open: true,
    },
  ]);
  const onCheck = (choiceIndex, questionIndex) => {
    const updatedQuestions = [...questions];
    const choiceKey = Object.keys(updatedQuestions[questionIndex].choices)[
      choiceIndex
    ];
    updatedQuestions[questionIndex].answer = choiceKey;
    updatedQuestions[questionIndex].open = false;

    updatedQuestions.push({
      question: "",
      choices: { option1: "", option2: "", option3: "", option4: "" },
      answer: "",
      active: false,
      open: true,
    });
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (index, choiceIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].choices[`option${choiceIndex + 1}`] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (event, index) => {
    event.preventDefault();
    const updatedQuestions = [...questions];
    updatedQuestions[index].active = true;
    setQuestions(updatedQuestions);
  };

  const toggleAccordion = (index) => {
    const updatedQuestions = [...questions];
    // Check if active is false or answer is empty before toggling
    if (!updatedQuestions[index].active || !updatedQuestions[index].answer) {
      return; // Do nothing if active is false or answer is empty
    }
    updatedQuestions[index].open = !updatedQuestions[index].open;
    setQuestions(updatedQuestions);
  };

  console.log(questions);

  return (
    <div className="flex space-x-4">
      <div className="flex-1">
        <div id="accordion-open" data-accordion="open">
          {questions.map((item, index) => (
            <div key={index}>
              {!item.open ? (
                <h2 id="accordion-open-heading-1">
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border ${
                      index === 0 ? "border-b-1" : ""
                    } border-gray-200 
                  ${index === 0 ? "rounded-t-xl " : ""}
                  gap-3`}
                    data-accordion-target="#accordion-open-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-open-body-1"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 me-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Question: {item.question}, Answer: {item.answer}
                    </span>

                    <span onClick={() => toggleAccordion(index)}>
                      <svg
                        data-accordion-icon
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
              ) : (
                <>
                  <h2 id="accordion-open-heading-1">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 ${
                        index === 0 ? "rounded-t-xl " : ""
                      }  gap-3`}
                      data-accordion-target="#accordion-open-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-open-body-1"
                    >
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 me-2 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>{" "}
                        Question {index + 1}
                      </span>

                      <span onClick={() => toggleAccordion(index)}>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>

                  <div
                    id="accordion-open-body-1"
                    className={item.open ? "" : "hidden"}
                    aria-labelledby="accordion-open-heading-1"
                  >
                    <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                      {item.active ? (
                        <div>
                          <p>Question: {item.question}</p>

                          <ul className="mt-2 space-y-1 list-disc list-inside">
                            {Object.values(item.choices).map(
                              (choice, choiceIndex) => (
                                <li key={choiceIndex} className="list-none">
                                  <div class="flex items-center">
                                    <input
                                      id="link-checkbox"
                                      type="checkbox"
                                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                      onChange={() =>
                                        onCheck(choiceIndex, index)
                                      }
                                      checked={
                                        `option${choiceIndex + 1}` ===
                                        item.answer
                                      }
                                    />
                                    <label
                                      for="link-checkbox"
                                      class="ms-2 text-sm font-medium "
                                    >
                                      {choice}
                                    </label>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ) : (
                        <form
                          className="max-w-lg"
                          onSubmit={(e) => handleSubmit(e, index)}
                        >
                          <div className="mb-5">
                            <label
                              htmlFor={`question-${index}`}
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Question
                            </label>
                            <textarea
                              id={`question-${index}`}
                              rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Write your question here..."
                              value={item.question}
                              onChange={(e) =>
                                handleQuestionChange(index, e.target.value)
                              }
                            ></textarea>
                          </div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Choices
                          </label>
                          {Object.entries(item.choices).map(
                            ([key, value], choiceIndex) => (
                              <div className="" key={choiceIndex}>
                                <div className="mb-5">
                                  <input
                                    type="text"
                                    id={`option-${index}-${choiceIndex}`}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder={`Option ${choiceIndex + 1}`}
                                    value={value}
                                    onChange={(event) =>
                                      handleOptionChange(
                                        index,
                                        choiceIndex,
                                        event.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            )
                          )}
                          <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Save
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <Tutorial />

        <p className="mt-8 font-medium text-xl">
          You can check this tutorial to understand the flow
        </p>
      </div>
    </div>
  );
};

export default Form;
