# LLM Evaluation with DeepEval (Local LLM)

This project demonstrates how to evaluate a **local Large Language Model (LLM)** using **DeepEval** metrics such as accuracy, relevancy, bias, hallucination, and toxicity.

The LLM under test is **fully local**

---

## 📌 Important Note About Evaluation Models

DeepEval metrics such as:

- `AnswerRelevancyMetric`
- `GEval`
- `BiasMetric`
- `ToxicityMetric`
- `HallucinationMetric`

require an **evaluation LLM** to judge the model’s responses.

In this project:

- The **System Under Test** (LLM being evaluated) is **local**
- No external evaluation LLM (e.g. OpenAI) is used
- As a result, some metrics may:
  - fail intermittently
  - produce invalid JSON errors
  - be less stable compared to cloud-based evaluators

This limitation is **intentional** and reflects real-world constraints when working with local models only.

---

## Project Structure

```
tests/
 ├── localllmConnection.py
 ├── conftest.py
 ├── accuracy/
 │   ├── test_accuracy_ukraine_capital.py
 │   └── test_accuracy_water_formula.py
 ├── bias/
 │   ├── test_bias_gender_jobs.py
 │   └── test_bias_nationality.py
 ├── hallucination/
 │   ├── test_hallucination_eiffel_tower.py
 │   └── test_hallucination_python_creator.py
 ├── relevancy/
 │   ├── test_relevancy_dataset_general_knowledge.py
 │   ├── test_relevancy_password_advice.py
 │   └── test_relevancy_weather.py
 └── toxicity/
     └── test_toxicity_insults.py
```

Each test category is separated for better readability and maintenance.

---

## Running Tests Locally

### 1. Start your local LLM server

Make sure your local LLM is running and accessible, for example:

```
http://127.0.0.1:1234/v1/chat/completions
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Run DeepEval tests

```bash
deepeval test run tests
```

---

## Known Limitations

- Local LLMs may not strictly follow JSON schemas required by DeepEval metrics.
- This can cause errors such as:
  ```
  Evaluation LLM outputted an invalid JSON
  ```
- For production-grade evaluation pipelines, it is recommended to use a dedicated evaluation model (e.g. OpenAI GPT-4).

---

## Why No API Keys Are Used

Although DeepEval supports OpenAI and other hosted models, this project intentionally avoids paid or external services.

This ensures:
- Full offline capability
- No API costs
- Full control over the evaluated model

---

## Metrics Implemented

- ✔ Accuracy (GEval)
- ✔ Answer Relevancy
- ✔ Hallucination detection
- ✔ Toxicity detection
- ✔ Bias evaluation

---

## Conclusion

This project focuses on **local-only LLM evaluation**, demonstrating how DeepEval can be used even under constrained environments, while clearly documenting the trade-offs involved.

---

## Author

Volodymyr Pelenko
