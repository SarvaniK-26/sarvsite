# AI (sorry I had to bring it up) pls stop trusting it so much

August 24, 2025

Recently, I applied to a range of research projects focused on AI safety and policy. While working on applications, I found myself going down rabbit holes about governance and the societal impacts of AI. Most of us see the news and notice how AI seems to affect us in some new way on a daily basis. Here, though, I wanted to talk more about the benchmarking and technical aspects of this work.

If you had asked me about faithfulness and plausibility before AI became so popular, I would have imagined those words showing up in an ethics or religion class. But today, they’re hot topics in regards to AI.

#### Faithfulness VS Plausibility

Faithfulness is the metric that measures how accurately an LLM’s response reflects its reasoning process. In other words, it shows how much an LLM starts to hallucinate or add inaccurate information. 

How do researchers test this? By running thousands of experiments where they simulate counterfactuals or add mistakes to prompts. The results reveal how the model reacts and whether it can catch the errors.

Plausibility, on the other hand, measures how convincing and logical a response sounds to humans. This is far more subjective, since what seems “reasonable” can vary from person to person.

#### Okay... so how does this help us? 

These metrics are crucial when exploring the impacts LLMs have on society and learning. Depending on the use case, one metric may matter more than the other.

- In a clinical study, faithfulness must outweigh plausibility. There’s no room for a model to sound convincing but be wrong—that could lead to people receiving the wrong treatment.

- In contrast, a student using an LLM for interactive learning might care more about plausibility. Similarly, a writer brainstorming ideas would likely value logical flow over technical precision.

A faithful but implausible response would be technically correct but harder to understand. A plausible but unfaithful response would be convincing but factually incorrect.

#### Great, so how do researchers put these metrics to the test?

If you’re curious, these papers gave me great insight into faithfulness testing:

- [Faithfulness Tests for Natural Language Explanations](https://arxiv.org/abs/2305.18029)
- [Measuring Faithfulness in Chain-of-Thought Reasoning](https://arxiv.org/abs/2307.13702)

##### Intervene on Input Examples (lie from the start)

Intervening on input examples measures whether the explanations actually reflect dependencies on inputs. For example, in one experiment, researchers found that in about half of the cases, the counterfactual input editor could insert changes that caused the model’s explanations to become unfaithful. This shows whether the explanation is responsive to input changes or whether it’s generic. Detecting this helps prevent false confidence in explanations that sound plausible but aren’t grounded in the model’s reasoning.

##### Intervene on model generated CoT

Quick refresher on Chain of Thought (CoT) prompting:
- It forces LLMs to explain their reasoning step by step. Think of it like that second-grade math teacher who made you show your work when subtracting 100 – 31 (jkjk, I’m grateful for that now because I made a lot of silly mistakes).

Intervening on model-generated CoTs measures how much the final answer depends on the stated reasoning rather than being predetermined. Intervening includes introducing mistakes, early answering, and paraphrasing the CoT. 

- If the final answer stays the same despite these interventions, it suggests the reasoning is post hoc and not actually used by the model.
- If the answers change significantly, it shows the model is genuinely relying on its reasoning steps.

This helps researchers see whether a model is actually reasoning or not.

##### Long story short

- Input interventions test whether responses are grounded in reality.
- CoT interventions test whether the model’s reasoning is authentic.
- Plausibility is subjective and varies from person to person.

Together, these methods are key to AI safety: one protects against misleading explanations, the other against reasoning that’s never actually used.

#### Conclusion

I found it fascinating to learn how LLMs are being tested, and I hope this breakdown helped you understand it better too. Faithfulness and plausibility show that “sounding smart” and “being correct” aren’t the same. The more AI integrates into our lives, the more opportunities it creates. However, we also need to think about how much trust we place in it. With tools like faithfulness and plausibility testing, we have a chance to use AI responsibly.