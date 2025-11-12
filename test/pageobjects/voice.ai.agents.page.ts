import BasePage from './base.page';

class VoiceAiAgentsPage extends BasePage {
    get gptIcon() { return $('a[href*="openai.com"], a[href*="gpt"]'); }
    get claudeIcon() { return $('a[href*="anthropic.com"], a[href*="claude"]'); }
    get perplexityIcon() {  return $('a[href*="perplexity.ai"], a[href*="perplexity"]'); }
}

export default new VoiceAiAgentsPage();