# AI (sorry I had to bring it up) pls stop trusting it so much

August 24, 2025

Recently I applied to a range of research projects which focus on AI safety and policy. While applying to projects I found myself going down rabbit holes about governance and the societal impacts of AI. Now I know most of us see the news and see how it's effecting us in some new way on a daily basis. I wanted to talk more about the benchmarking and techincal aspects of the work. 

If you had asked me about faithfulness and plausibility before AI became so popular, I would have imagined those words showing up in an ethics or religion class on a college campus. But today, they’re central topics in the world of AI.

#### Faithfullness VS Plausability

Faithfulness is the metric which tells how accurate an LLM’s response is in reflecting the reasoning process. This is a metric that shows how much an LLM begins to hallucinate or add inaccurate information. How do researchers test this? They do thousands of experiments in which they simulate counterfacts or add mistakes to the prompts. This shows how it reacts and if the model is able to catch the mistakes. 

Plausibility, on the other hand, measures how convincing and logical a response sounds to humans. This is much more subjective since what seems “reasonable” can vary from person to person.

#### Okay... so how does this help us? 

These metrics are pretty important when exploring the impacts LLM’s have on society and learning. In different cases one metric may be more important than the other. 
- In a clinical study, faithfulness must outweigh plausibility. There’s no room for a model to sound convincing but be wrong in any way. That could lead to people getting the wrong treatment.
- In contrast, a student using an LLM for interactive learning might care more about plausibility. Similarly, a writer brainstorming ideas would likely value logical flow over technical precision.

A faithful but inplausible response would be technically correct but harder to understand for a user. Whereas, a plausible but unfaithful response would be convincing but factually incorrect. 

#### Great, so how do researchers put these metrics to the test? 

If you’re curious, these papers gave me great insight into faithfulness testing: 
- [Faithfulness Tests for Natural Language Explanations](https://arxiv.org/abs/2305.18029)
- [Measuring Faithfulness in Chain-of-Thought Reasoning](https://arxiv.org/abs/2307.13702)

##### Intervene on Input Examples (lie from the start)

Intervening on input examples measures whether the explanations actually reflect dependencies on inputs. In the experiment from the paper above, it was found that for half of the instances, the counterfactual input editor was able to find an insertion for which the counterfactual NLE is unfaithful. This shows whether or not the intervening actually changes the response of the LLM and the reasoning. This shows whether the explanation is sensitive and responsive to changes in the input, rather than being generic and misleading. This allows researchers to detect hallucinations and prevents false confidence in explanations that appear plausible but aren’t tied to actual model reasoning.

##### Intervene on model generated CoT

Quick refresher on Chain of thought (CoT) prompting: 
- It forces LLMs to explain their reasoning step by step. Essentially we are acting like the annoying math teacher in seocnd grade who would take off points for calculating 100-31 in your head (jkjk I am grateful for that because I made a lot of silly mistakes). 

Intervening on model-generated CoTs measures how much the final answer depends on the stated reasoning rather than being predetermined. Intervening includes introducing mistakes, early answering, and paraphrasing the CoT. If the final answer stays the same despite these interventions, it suggests the reasoning is post hoc and not actually used by the model. If answers change substantially then it means that the model is actually relying on its reasoning steps, not just generating them post hoc. Researchers are now able to see if a model is truly reasoning or not. 

##### Long story short

- Input interventions test whether responses are grounded in reality. 
- CoT interventions test whether the model’s reasoning is authentic. 
- Plausibility is highly subjective and varies from person to person.

Together, these methods are key to AI safety: one protects against misleading explanations, the other against reasoning that’s never actually used.

#### Conclusion

I found it fascinating to learn how LLMs are being tested, and I hope this breakdown helped you understand it better too. Faithfullness and plausability show that "sounding smart" and "being correct" aren't the same. The more AI integrates into our lives, the more opportunities it creates, but also the more we need to think critically about how much trust we place in it. With tools like faithfulness and plausibility 
testing, we have a chance to use AI responsibly. I hope the lesson here is simple, treat AI as a tool to interrogate, not a source to trust blindly.