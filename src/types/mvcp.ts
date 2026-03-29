// UserProfile interface
interface UserProfile {
    id: string;
    name: string;
    email: string;
    // Add other fields as required
}

// MVCPAllocation interface
interface MVCPAllocation {
    id: string;
    allocatedAmount: number;
    userId: string;
    // Add other fields as required
}

// REBCalculation interface
interface REBCalculation {
    rebId: string;
    amount: number;
    calculationDate: Date;
    // Add other fields as required
}

// OnboardingContextType interface
interface OnboardingContextType {
    isOnboardingComplete: boolean;
    userProfile: UserProfile;
    mvcpAllocations: MVCPAllocation[];
    rebCalculations: REBCalculation[];
    // Add other fields as required
}