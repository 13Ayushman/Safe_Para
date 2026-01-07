 Safe_Para
Project Vision

Safe-Para is a specialized urban intelligence platform designed to address the unique infrastructure and safety challenges of West Bengal. By combining standardized geospatial data architecture with real-time Generative AI, the project transforms raw urban data into actionable safety insights for citizens and municipal planners.

Core Components

1. The Data Architecture (The Brain)

Developed by [Friend's Name], this component establishes a rigorous framework for neighborhood-level ("Para") auditing.

Composite Safety Index (CSI): A weighted scoring system that moves beyond subjective opinions to data-driven metrics.

Pillar Framework: Analysis is categorized into three critical pillars:

Infrastructure: Pavement quality, building resilience, and drainage stability.

Visibility: Street lighting density and "natural surveillance" from commercial activity.

Emergency Access: Evaluation of lane widths and rapid-response route viability.

2. The Geospatial Engine (The Eyes)

The interface acts as the diagnostic layer, turning architectural rules into a visual experience.

Real-Time Auditing: Utilizes Gemini 2.5 Flash to analyze specific ward-level data and generate hazard inventories on the fly.

Interactive Mapping: Powered by Leaflet.js, featuring a custom "Safety Heatmap" view to highlight high-risk urban zones.

Actionable Output: Provides localized civil recommendations (e.g., LED cluster installation, cable ducting) based on specific neighborhood topography.

## Architecture & Map Layer

Map and data architecture adapted from:
https://github.com/tanmay1333/safe-para-map-data-architecture

Used as a modular geospatial reference for Safe-Para.


How it Works

Search: A user enters a locality (e.g., "Gariahat, Kolkata").

Scan: The engine fetches geospatial coordinates and triggers the Gemini AI Auditor.

Analyze: The AI evaluates the location against the Safe-Para Data Architecture pillars.

Report: A "Para-Level" report is generated, offering a CSI score, a list of localized hazards, and remediation steps.

Technological Stack

Frontend: React (CDN), Tailwind CSS, Lucide-Icons.

Mapping: Leaflet.js & OpenStreetMap API.

Intelligence: Google Gemini 2.5 Flash (Generative AI).

Data Model: Custom JSON Schema for West Bengal Urban Resilience.

The "Para Guardian" Mission

Safe-Para is more than a map; it is a tool for civic empowerment. By standardizing how we measure "safety" across the diverse neighborhoods of West Bengal, we create a common language for urban improvement and emergency preparedness.
