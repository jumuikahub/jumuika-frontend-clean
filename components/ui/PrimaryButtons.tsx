// components/ui/PrimaryButtons.tsx
import { Button } from "@/components/ui/button"

export default function PrimaryButtons() {
  return (
    <div className="flex gap-2">
      <Button>Button 1</Button>
      <Button variant="secondary">Button 2</Button>
    </div>
  )
}
