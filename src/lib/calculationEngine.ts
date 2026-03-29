// REB Calculator
function calculateREB(current_age, retirement_years) {
    return Math.max(40, Math.min(80, 100 + retirement_years - current_age));
}

// Scoring Engine
function calculateEmergencyFundScore(emergency_fund, current_expenses) {
    // Logic for scoring based on emergency fund
    return Math.min(10, emergency_fund / (current_expenses * 3)); // Example logic
}

function calculateIncomeStabilityScore(income_sources) {
    // Logic for scoring based on income stability
    return Math.min(10, income_sources.length); // Example logic
}

function calculateSavingsStrengthScore(current_savings) {
    // Logic for scoring savings strength
    return Math.min(10, current_savings / 10000); // Example logic
}

function calculateGoalPressureScore(goals) {
    // Logic for scoring goal pressure
    return Math.min(10, goals.reduce((acc, goal) => acc + goal.importance, 0)); // Example logic
}

function calculateLiquidityUrgencyScore(liquidity_needs) {
    // Logic for calculating liquidity urgency
    return Math.min(10, liquidity_needs); // Example logic
}

function calculateFinancialBaseRobustnessScore(debts, assets) {
    return Math.min(10, (assets - debts) / 100000); // Example logic
}

function calculateInvestorRiskScore(age, risk_tolerance) {
    // Example logic for determining risk score
    return Math.max(0, Math.min(100, 100 - age + risk_tolerance * 10));
}

function calculateDrawdownToleranceScore(investment_experience) {
    // Logic for score based on experience
    return Math.min(10, investment_experience); // Example logic
}

function calculateBehavioralRiskMaturityScore(decision_making_experience) {
    // Logic scoring maturity of behavioral risks
    return Math.min(10, decision_making_experience); // Example logic
}

function calculateTimeHorizonStrengthScore(time_horizon) {
    return Math.min(10, time_horizon / 20); // Example logic
}

function calculateKnowledgeConfidenceScore(knowledge_level) {
    return Math.min(10, knowledge_level); // Example logic
}

// MVCP Allocation Logic
function mvcpAllocation(reb, user_profile) {
    // Logic to determine allocation based on REB and profile
    let allocation = {
        Monetary_System: reb * 0.25,
        Equities_Growth: reb * 0.25,
        Liquidity_Defense: reb * 0.25,
        Real_Assets_Scarcity: reb * 0.25,
    };
    return allocation;
}

// Gold Reflection Rule
function goldReflection(crypto_allocation) {
    return crypto_allocation / 5; // Example logic for reflection
}

// Explanation Generator
function generateExplanation(allocation, user_inputs) {
    let explanation = `Based on your profile, we suggest the following allocation: `;
    for (const [key, value] of Object.entries(allocation)) {
        explanation += `${key}: ${value.toFixed(2)}% `;
    }
    return explanation;
}

// Example usage
const reb = calculateREB(30, 35);
const allocation = mvcpAllocation(reb, user_profile);
const explanation = generateExplanation(allocation, user_inputs);