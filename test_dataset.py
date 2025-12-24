from deepeval.test_case import LLMTestCase
from deepeval.metrics import AnswerRelevancyMetric
from deepeval.dataset import EvaluationDataset
from localllmConnection import LocalLLM
from deepeval import evaluate

localLLM = LocalLLM()

question_one = "Can you tell me more about Ukraine?"
question_second = "Can you tell me more about United States?"

test_case_one = LLMTestCase(input=question_one, actual_output=localLLM.generate(question_one))
test_case_second = LLMTestCase(input=question_second, actual_output=localLLM.generate(question_second))

# dataset = EvaluationDataset([test_case_one, test_case_second])
answer_relevancy = AnswerRelevancyMetric(threshold=0.6, model=localLLM)
# results = evaluate(dataset, metrics=[answer_relevancy])
results = evaluate(
    test_cases=[test_case_one, test_case_second],
    metrics=[answer_relevancy]
)

success_rate = sum(r.success for r in results.test_results) / len(results.test_results)

assert success_rate >= 0.8, f"Relevancy success rate too low: {success_rate}"

# for result in results.test_results:
#     print("Test case name ", result.name, "Test case result", result.success)