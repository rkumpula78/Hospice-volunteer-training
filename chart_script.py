import pandas as pd
import plotly.graph_objects as go

# Load the data
df = pd.read_csv('hospice_volunteer_training_modules.csv')

# Display the data structure to understand it
print("Data preview:")
print(df.head())
print("\nColumns:", df.columns.tolist())
print("\nData types:")
print(df.dtypes)

# Clean and convert duration to numeric
# Assuming the duration column might have text like "minutes" or other non-numeric characters
duration_col = df.columns[1]  # Second column should be duration
module_col = df.columns[0]    # First column should be module names

# Extract numeric values from duration column and handle various formats
if df[duration_col].dtype == 'object':
    # Try to extract numbers from text
    df['duration_numeric'] = pd.to_numeric(df[duration_col].astype(str).str.extract('(\d+)')[0], errors='coerce')
else:
    # Already numeric
    df['duration_numeric'] = pd.to_numeric(df[duration_col], errors='coerce')

# Remove any rows with NaN duration values
df = df.dropna(subset=['duration_numeric'])

print(f"\nDuration values after conversion:")
print(df['duration_numeric'].tolist())

# Calculate total training time
total_minutes = df['duration_numeric'].sum()
total_hours = total_minutes / 60

# Truncate module names to 15 characters limit per instructions
df['module_short'] = df[module_col].astype(str).str[:15]

# Create horizontal bar chart
fig = go.Figure()

# Add bars with brand colors
colors = ['#1FB8CD', '#ECEBD5', '#5D878F', '#FFC185', '#D2BA4C', '#B4413C', '#964325', '#944454', '#13343B', '#DB4545']
bar_colors = [colors[i % len(colors)] for i in range(len(df))]

fig.add_trace(go.Bar(
    x=df['duration_numeric'],
    y=df['module_short'],
    orientation='h',
    marker_color=bar_colors,
    cliponaxis=False,  # This goes on the trace, not the axes
    hovertemplate='%{y}: %{x} min<extra></extra>'
))

# Update layout with title (keeping under 40 characters)
fig.update_layout(
    title="Hospice Training Duration",
    xaxis_title="Duration (min)",
    yaxis_title="Module",
    showlegend=False
)

# Save the chart
fig.write_image("hospice_training_modules.png")

print(f"\nChart saved successfully!")
print(f"Total training time: {total_minutes} minutes ({total_hours:.1f} hours)")