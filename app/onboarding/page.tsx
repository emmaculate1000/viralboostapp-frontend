import OnboadingSteps from "@/components/onboarding-steps";

export default function Onboading() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-cent p-6 md:p-2">
      <div className="w-full max-w-sm md:max-w-4xl">
        <OnboadingSteps/>
      </div>
    </div>
  )
}
