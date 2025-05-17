# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Optional
import math

app = FastAPI(title="DevEstimator API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://your-app-name.vercel.app"],  # Replace with your Vercel domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EstimationRequest(BaseModel):
    project_name: str
    project_type: str  # web, mobile, desktop
    complexity: str  # low, medium, high, enterprise
    team_size: int
    duration_months: int
    features: str

class EstimationResponse(BaseModel):
    hours: int
    cost: float
    timeframe: str
    breakdown: Dict[str, int]

@app.get("/")
def read_root():
    return {"message": "Welcome to DevEstimator API"}

@app.post("/estimate", response_model=EstimationResponse)
def create_estimate(request: EstimationRequest):
    # Validate input
    if request.team_size < 1 or request.duration_months < 1:
        raise HTTPException(status_code=400, detail="Team size and duration must be positive")
    
    # Base hours calculation logic
    base_hours = calculate_base_hours(request)
    
    # Calculate cost (using a $75/hour rate)
    hourly_rate = 75
    cost = base_hours * hourly_rate
    
    # Create breakdown
    breakdown = {
        "design": round(base_hours * 0.2),
        "development": round(base_hours * 0.6),
        "testing": round(base_hours * 0.15),
        "deployment": round(base_hours * 0.05)
    }
    
    return EstimationResponse(
        hours=base_hours,
        cost=cost,
        timeframe=f"{request.duration_months} months",
        breakdown=breakdown
    )

def calculate_base_hours(request: EstimationRequest) -> int:
    # Base hours by project type
    project_base = {
        "web": 80,
        "mobile": 120,
        "desktop": 100
    }.get(request.project_type, 80)
    
    # Complexity factors
    complexity_factor = {
        "low": 0.7,
        "medium": 1.0,
        "high": 1.5,
        "enterprise": 2.5
    }.get(request.complexity, 1.0)
    
    # Team size factor (diminishing returns with larger teams)
    team_factor = math.sqrt(request.team_size)
    
    # Feature impact
    feature_list = [f.strip() for f in request.features.split(",") if f.strip()]
    feature_count = len(feature_list)
    feature_impact = feature_count * 10
    
    # Calculate total hours
    total_hours = round(
        project_base * 
        complexity_factor * 
        team_factor * 
        request.duration_months + 
        feature_impact
    )
    
    return total_hours

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)