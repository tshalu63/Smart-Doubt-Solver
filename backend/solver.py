from transformers import pipeline

model = pipeline("question-answering",
                 model="distilbert-base-cased-distilled-squad")

def get_answer(question):
    context = """
    This is a general knowledge AI assistant designed to solve doubts.
    It can help with study queries, simple explanations, and concepts.
    """
    result = model(question=question, context=context)
    return result["answer"]
