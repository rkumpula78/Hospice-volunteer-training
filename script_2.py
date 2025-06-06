# Create a training implementation checklist and compliance tracker
training_checklist = {
    'Training Phase': [
        'Pre-Training',
        'Pre-Training',
        'Pre-Training',
        'Initial Training',
        'Initial Training', 
        'Initial Training',
        'Initial Training',
        'Initial Training',
        'Post-Training',
        'Post-Training',
        'Post-Training',
        'Ongoing',
        'Ongoing',
        'Ongoing',
        'Annual Review'
    ],
    'Requirement': [
        'Background Check Completed',
        'Application & References Verified',
        'Health Screening Completed',
        'Complete All 11 Core Modules',
        'Pass Module Quizzes (80% minimum)',
        'Complete HIPAA Training & Assessment',
        'Attend Hands-On Skills Session',
        'Pass Final Comprehensive Assessment',
        'Shadow Experienced Volunteer (8 hours)',
        'Complete Initial Performance Evaluation',
        'Sign Volunteer Agreement & Policies',
        'Quarterly Continuing Education (4 hours)',
        'Annual Competency Assessment',
        'Supervisor Evaluation & Feedback',
        'Review & Update Training as Needed'
    ],
    'CMS Compliance': [
        'Required',
        'Required',
        'Required',
        'Required',
        'Required',
        'Required',
        'Recommended',
        'Required',
        'Required',
        'Required',
        'Required',
        'Required',
        'Required',
        'Required',
        'Required'
    ],
    'Documentation Needed': [
        'Background check results',
        'Completed application & reference forms',
        'Health clearance form',
        'Training attendance records',
        'Quiz scores & assessment results',
        'HIPAA training certificate',
        'Skills checklist completion',
        'Final assessment score',
        'Shadowing hours log',
        'Performance evaluation form',
        'Signed agreements',
        'Continuing education certificates',
        'Annual assessment results',
        'Supervisor evaluation forms',
        'Updated training records'
    ],
    'Timeline': [
        'Before training starts',
        'Before training starts',
        'Before training starts',
        'Training Day 1-2',
        'Training Day 1-2',
        'Training Day 1',
        'Training Day 2',
        'Training Day 2',
        'Week 1 after training',
        'Within 30 days',
        'Before first assignment',
        'Every 3 months',
        'Annually',
        'Annually',
        'As needed/regulatory changes'
    ]
}

checklist_df = pd.DataFrame(training_checklist)
checklist_df.to_csv('hospice_volunteer_training_checklist.csv', index=False)

print("Training Implementation Checklist created and saved as CSV")
print()

# Create summary statistics
print("TRAINING PROGRAM SUMMARY:")
print("=" * 50)
print(f"Total Core Training Modules: 11")
print(f"Total Training Time: 6.2 hours")
print(f"Recommended Training Format: 2-day intensive or 3 half-day sessions")
print(f"Pre-training Requirements: 3")
print(f"Post-training Requirements: 3") 
print(f"Ongoing Requirements: 3")
print()

print("CMS COMPLIANCE OVERVIEW:")
print("=" * 30)
compliance_counts = checklist_df['CMS Compliance'].value_counts()
print(f"Required Elements: {compliance_counts.get('Required', 0)}")
print(f"Recommended Elements: {compliance_counts.get('Recommended', 0)}")
print()

print("PHASE BREAKDOWN:")
print("=" * 20)
phase_counts = checklist_df['Training Phase'].value_counts()
for phase, count in phase_counts.items():
    print(f"{phase}: {count} requirements")

print()
print(checklist_df.to_string(index=False))