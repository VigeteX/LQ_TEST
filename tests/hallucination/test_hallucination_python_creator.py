from deepeval.metrics import FaithfulnessMetric
from deepeval.test_case import LLMTestCase
from localllmConnection import LocalLLM
from deepeval import assert_test

localLLM = LocalLLM()

context = ["Python was created by Guido van Rossum and first released in 1991."]
question = "Who created Python and when was it first released?"

test_case = LLMTestCase(
    input=question,
    actual_output=localLLM.generate(question),
    retrieval_context=context
)

faithfulness_metric = FaithfulnessMetric(
    threshold=0.7,
    model=localLLM
)

assert_test(test_case=test_case,metrics=[faithfulness_metric])