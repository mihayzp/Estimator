from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Optional
import math

app = FastAPI(title="DevEstimator API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EstimationRequest(BaseModel):
    project_name: str
    project_type: str  # web, mobile, desktop, other
    complexity: str  # low, medium, high, enterprise
    team_size: int
    duration_months: int
    features: str
    
    # Optional fields
    budget: Optional[float] = None
    current_state: Optional[str] = None  # idea, mvp, existing
    projected_load: Optional[str] = None  # low, medium, high

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
        "desktop": 100,
        "other": 140
    }.get(request.project_type, 100)
    
    # Complexity factors
    complexity_factor = {
        "low": 0.7,
        "medium": 1.0,
        "high": 1.5,
        "enterprise": 2.5
    }.get(request.complexity, 1.0)
    
    # Team size factor (diminishing returns with larger teams)
    team_factor = math.sqrt(request.team_size)
    
    # Project state factor
    state_factor = 1.0
    if request.current_state:
        state_factors = {
            "idea": 1.2,  # New ideas require more exploration
            "mvp": 1.0,   # MVP is the baseline
            "existing": 0.8  # Existing projects may have reusable code
        }
        state_factor = state_factors.get(request.current_state, 1.0)
    
    # User load factor
    load_factor = 1.0
    if request.projected_load:
        load_factors = {
            "low": 1.0,
            "medium": 1.3,
            "high": 1.7
        }
        load_factor = load_factors.get(request.projected_load, 1.0)
    
    # Feature impact
    feature_list = [f.strip() for f in request.features.split(",") if f.strip()]
    feature_count = len(feature_list)
    
    # Calculate additional hours based on specific features
    feature_impact = 0
    for feature in feature_list:
        feature_lower = feature.lower()
        if "auth" in feature_lower:
            feature_impact += 20
        elif "payment" in feature_lower:
            feature_impact += 40
        elif "admin" in feature_lower:
            feature_impact += 30
        elif "analytics" in feature_lower:
            feature_impact += 25
        elif "upload" in feature_lower:
            feature_impact += 15
        elif "notification" in feature_lower:
            feature_impact += 20
        elif "integration" in feature_lower:
            feature_impact += 35
        else:
            feature_impact += 10  # Default value for custom features
    
    # Calculate total hours with all factors
    total_hours = round(
        project_base * 
        complexity_factor * 
        state_factor * 
        load_factor * 
        team_factor * 
        request.duration_months + 
        feature_impact
    )
    
    return total_hours

if __name__ == "__main__":
    try:
        import uvicorn
        uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)
    except ImportError:
        print("Uvicorn not found. Please install it with: pip install uvicorn[standard]")
        print("To run the app manually: uvicorn main:app --reload --port 8080")