from deepeval.metrics import GEval
from deepeval.test_case import LLMTestCase, LLMTestCaseParams
from localllmConnection import LocalLLM
from deepeval import assert_test
localLLM = LocalLLM()

question = "What is the chemical formula of water?"

test_case = LLMTestCase(
    input=question,
    actual_output=localLLM.generate(question),
    expected_output="H2O"
)

accuracy_metric = GEval(
    name="Water formula correctness",
    criteria="The response must correctly identify the chemical formula of water as H2O.",
    threshold=0.8,
    evaluation_params=[LLMTestCaseParams.ACTUAL_OUTPUT, LLMTestCaseParams.EXPECTED_OUTPUT],
    model=localLLM
)

assert_test(test_case=test_case, metrics=[accuracy_metric])