import pandas as pd

# Create a comprehensive training modules overview table
modules_data = [
    {
        'Module': 'Introduction to Hospice Care',
        'Duration': '30 min',
        'Key Focus': 'Philosophy, Medicare CoPs, Team Role',
        'Learning Type': 'Foundational Knowledge',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'Patient Confidentiality & HIPAA',
        'Duration': '45 min', 
        'Key Focus': 'PHI Protection, Legal Compliance',
        'Learning Type': 'Regulatory Compliance',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'Volunteer Roles & Responsibilities',
        'Duration': '25 min',
        'Key Focus': 'Scope of Practice, Boundaries',
        'Learning Type': 'Role Definition',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'Communication Skills',
        'Duration': '40 min',
        'Key Focus': 'Active Listening, Empathy',
        'Learning Type': 'Skill Development',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'Infection Control & Safety',
        'Duration': '35 min',
        'Key Focus': 'Standard Precautions, PPE',
        'Learning Type': 'Safety Protocols',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'Cultural Sensitivity',
        'Duration': '30 min',
        'Key Focus': 'Diversity, Respect, Inclusion',
        'Learning Type': 'Cultural Competence',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'End-of-Life Care & Bereavement',
        'Duration': '45 min',
        'Key Focus': 'Grief Stages, Family Support',
        'Learning Type': 'Specialized Skills',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'Ethical & Legal Responsibilities',
        'Duration': '35 min',
        'Key Focus': 'Patient Rights, Advance Directives',
        'Learning Type': 'Legal Framework',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'Documentation & Reporting',
        'Duration': '25 min',
        'Key Focus': 'Record Keeping, Compliance',
        'Learning Type': 'Administrative Skills',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'Emergency Procedures',
        'Duration': '40 min',
        'Key Focus': 'Crisis Response, Protocols',
        'Learning Type': 'Emergency Preparedness',
        'CMS Requirement': 'Yes'
    },
    {
        'Module': 'Ongoing Education & Evaluation',
        'Duration': '20 min',
        'Key Focus': 'Continuous Learning, Assessment',
        'Learning Type': 'Professional Development',
        'CMS Requirement': 'Yes'
    }
]

modules_df = pd.DataFrame(modules_data)

# Calculate total training time
total_minutes = sum([int(duration.split()[0]) for duration in modules_df['Duration']])
total_hours = total_minutes / 60

print(f"Total Training Time: {total_minutes} minutes ({total_hours:.1f} hours)")
print(f"Recommended Format: {int(total_hours/8)} days of 8-hour sessions or {int(total_hours/4)} days of 4-hour sessions")
print()

# Save as CSV
modules_df.to_csv('hospice_volunteer_training_modules.csv', index=False)
print("Training modules overview saved as CSV")
print()
print(modules_df.to_string(index=False))