from deepeval.metrics import AnswerRelevancyMetric
from deepeval.test_case import LLMTestCase
from localllmConnection import LocalLLM

localLLM = LocalLLM()

answer_relevancy_metric = AnswerRelevancyMetric(
    threshold=0.5,
    model=localLLM, 
    include_reason=True  
)

test_case = LLMTestCase(
    input="What is the capital of France?",
    actual_output="The capital of France is Paris. It's a beautiful city known for the Eiffel Tower.",
    expected_output="Paris"
)

answer_relevancy_metric.measure(test_case)

print(f"Score: {answer_relevancy_metric.score}")  
print(f"Success: {answer_relevancy_metric.success}") 
print(f"Reason: {answer_relevancy_metric.reason}") 