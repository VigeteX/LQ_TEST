import requests
from deepeval.models import DeepEvalBaseLLM

class LocalLLM(DeepEvalBaseLLM):

    def __init__(self, base_url="http://127.0.0.1:1234", model="llama-3.1-8b-instruct"):
        self.base_url = base_url
        self.model = model

    def get_model_name(self):
        return self.model
    
    def load_model(self) -> None:
        pass
    
    def generate(self, prompt: str):
        response = requests.post(f'{self.base_url}/v1/chat/completions',
                                json={
                                    "messages": [{"role": "user", "content": prompt}],
                                    "model": self.model
                                })
        
        if response.status_code == 200:
            data = response.json()
            return data["choices"][0]["message"]["content"]
        else:
            return "Error"
        
    async def a_generate(self, prompt: str) -> str:
        return self.generate(prompt)
