from deepeval.metrics import AnswerRelevancyMetric
from deepeval.test_case import LLMTestCase
from localllmConnection import LocalLLM
from deepeval import assert_test

localLLM = LocalLLM()

question = "Can you describe what the weather is usually like in summer?"

test_case = LLMTestCase(
    input=question,
    actual_output=localLLM.generate(question)
)

relevancy_metric = AnswerRelevancyMetric(
    threshold=0.7,
    model=localLLM
)

assert_test(test_case=test_case, metrics=[relevancy_metric])