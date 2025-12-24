from deepeval.metrics import AnswerRelevancyMetric
from deepeval.test_case import LLMTestCase
from localllmConnection import LocalLLM
from deepeval import assert_test

localLLM = LocalLLM()

answer_relevancy_metric = AnswerRelevancyMetric(
    threshold=0.7,
    model=localLLM, 
)

question = "What's a python?"

test_case = LLMTestCase(
    input=question,
    actual_output=localLLM.generate(question),
)

assert_test(test_case=test_case, metrics=[answer_relevancy_metric])