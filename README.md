## CI/CD

This project uses GitHub Actions to automatically run LLM evaluation tests on every push and pull request.

The workflow:
- installs dependencies
- runs DeepEval test suites
- generates JSON test reports
- uploads reports as build artifacts

API keys are securely stored using GitHub Secrets.
