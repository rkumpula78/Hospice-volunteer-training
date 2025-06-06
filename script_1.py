# Create a communication skills reference guide for hospice volunteers
communication_guide = {
    'Communication Technique': [
        'Active Listening',
        'Empathetic Responses',
        'Open-Ended Questions', 
        'Reflective Listening',
        'Comfortable Silence',
        'Non-Verbal Awareness',
        'Validation',
        'Therapeutic Presence'
    ],
    'Description': [
        'Give full attention, avoid interrupting, show you are listening',
        'Acknowledge emotions and respond with understanding',
        'Ask questions that encourage sharing (How, What, Tell me about...)',
        'Repeat back what you heard to confirm understanding',
        'Allow quiet moments for processing emotions',
        'Pay attention to body language, tone, and facial expressions',
        'Acknowledge that their feelings are normal and understandable',
        'Be fully present in the moment with genuine care'
    ],
    'Example Phrases': [
        '"I can see this is important to you..." "Tell me more about that..."',
        '"That sounds really difficult..." "I can hear the sadness in your voice..."',
        '"What has this experience been like for you?" "How are you feeling about...?"',
        '"What I\'m hearing is..." "It sounds like you\'re saying..."',
        '(Allow 5-10 seconds of silence after emotional statements)',
        'Notice: tense posture, teary eyes, withdrawn behavior',
        '"It\'s natural to feel that way..." "Many people feel confused at times like this..."',
        'Put away distractions, make eye contact, lean in slightly'
    ],
    'When to Use': [
        'During all interactions, especially when someone is sharing',
        'When patient/family expresses difficult emotions',
        'To encourage deeper sharing and understanding',
        'To ensure you understand correctly before responding',
        'After someone shares something emotional or profound',
        'Continuously - communication is more than words',
        'When someone doubts their feelings or reactions',
        'Always - this is the foundation of supportive care'
    ],
    'Avoid': [
        'Interrupting, looking at phone, thinking of what to say next',
        'Minimizing feelings or offering quick fixes',
        'Yes/no questions that shut down conversation',
        'Assuming you understand without checking',
        'Rushing to fill every quiet moment with words',
        'Focusing only on verbal communication',
        'Judging or criticizing emotional responses',
        'Being distracted or hurried'
    ]
}

communication_df = pd.DataFrame(communication_guide)
communication_df.to_csv('hospice_communication_skills_guide.csv', index=False)
print("Communication Skills Guide created and saved as CSV")
print()
print(communication_df.to_string(index=False))