from deepeval.metrics import AnswerRelevancyMetric
from deepeval.test_case import LLMTestCase
from localllmConnection import LocalLLM
from deepeval import evaluate

localLLM = LocalLLM()

questions = [
    "Tell me about the history of Ukraine.",
    "What is machine learning?",
    "How does photosynthesis work?",
    "Explain what a REST API is.",
    "What causes earthquakes?"
]

test_cases = [
    LLMTestCase(
        input=q,
        actual_output=localLLM.generate(q),
        name=f"Relevancy - {q[:30]}"
    )
    for q in questions
]

relevancy_metric = AnswerRelevancyMetric(
    threshold=0.5,
    model=localLLM
    # strict_mode=True
)

results = evaluate(
    test_cases=test_cases,
    metrics=[relevancy_metric]
)

success_rate = sum(r.success for r in results.test_results) / len(results.test_results)
assert success_rate >= 0.8, f"Relevancy success rate too low: {success_rate}"